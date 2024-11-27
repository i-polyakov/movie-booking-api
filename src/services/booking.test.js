const BookingService = require('./booking');
const Booking = require('../repository/booking');
const Showtime = require('../repository/showtime');
const Seat = require('../repository/seat');
const ApiError = require('../errors/APIError');

jest.mock('../repository/booking'); // Мокируем репозиторий Booking
jest.mock('../repository/showtime'); // Мокируем репозиторий Showtime
jest.mock('../repository/seat'); // Мокируем репозиторий Seat

describe('BookingService - create', () => {
    let bookingService;

    beforeEach(() => {
        bookingService = BookingService;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Ошибка, если время сеанса прошло', async () => {
        const booking = { user_id: 1, showtime_id: 1 , seat_id: 1 };
        const showtime = { show_date: Date.now() - 10000 }; // Прошлая дата
        Showtime.findById.mockResolvedValue(showtime);
        await expect(bookingService.create(booking)).rejects.toThrow("Сеанс прошёл");
    });

    it('Ошибка, если место не сущесвует', async () => {
        const booking = { showtime_id: 1, seat_id: 1 };
        const showtime = { show_date: Date.now() + 10000, hall_id: 1 };
        Showtime.findById.mockResolvedValue(showtime);
        Seat.findByHallId.mockResolvedValue([]); // Нет мест

        await expect(bookingService.create(booking)).rejects.toThrow("Место не сущесвует");
    });

    it('Ошибка, если место занято', async () => {
        const booking = { showtime_id: 1, seat_id: 1 };
        const showtime = { show_date: Date.now() + 10000, hall_id: 1 };
        Showtime.findById.mockResolvedValue(showtime);
        Seat.findByHallId.mockResolvedValue([{ id: 1 }]); // Место существует
        Booking.findBy.mockResolvedValue([{}]); // Место занято

        await expect(bookingService.create(booking)).rejects.toThrow("Место занято");
    });

    it('Бронирование прошло успешно', async () => {
        const booking = { user_id: 3, showtime_id: 1, seat_id: 1 };
        //const booked = { id:3, user_id: 4, showtime_id: 1, seat_id: 1 };
        const showtime = { show_date: Date.now() + 10000, hall_id: 1 };
        Showtime.findById.mockResolvedValue(showtime);
        Seat.findByHallId.mockResolvedValue([{ id: 1 }]); // Место существует
        Booking.findBy.mockResolvedValue([]); // Место свободно
        Booking.create.mockResolvedValue({ ...booking, id: 3 }); // Успешное создание

        const result = await bookingService.create(booking);
        expect(result).toEqual(expect.objectContaining({
            id: expect.any(Number), // Ожидаем, что id будет числом
            user_id: booking.user_id,
            showtime_id: booking.showtime_id,
            seat_id: booking.seat_id,
        }));
        expect(Booking.create).toHaveBeenCalledWith(booking);
    });
});