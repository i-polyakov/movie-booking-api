const showtimeService = require('./showtime');
const Hall = require('../repository/hall');
const Showtime = require('../repository/showtime');
const Movie = require('../repository/movie');

jest.mock('../repository/hall'); // Мокируем репозиторий Hall
jest.mock('../repository/showtime'); // Мокируем репозиторий Showtime
jest.mock('../repository/movie'); // Мокируем репозиторий Movie

describe('ShowtimeService - create', () => {
 
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Ошибка, если зал не сущесвует', async () => {
        const showtime = { hall_id: 1, movie_id: 1, show_date: Date.now() };
        Hall.findOne.mockResolvedValue(null); // Зал не найден

        await expect(showtimeService.create(showtime)).rejects.toThrow("Зал не сущесвует");
    });

    it('Ошибка, если фильм не сущесвует', async () => {
        const showtime = { hall_id: 1, movie_id: 1, show_date: Date.now() };
        Hall.findOne.mockResolvedValue({}); // Зал найден
        Movie.findById.mockResolvedValue(null); // Фильм не найден

        await expect(showtimeService.create(showtime)).rejects.toThrow("Фильм не сущесвует");
    });

    it('Ошибка, если сеанс на это время уже сущесвует', async () => {
        const showtime = { hall_id: 1, movie_id: 1, show_date: Date.now() };
        Hall.findOne.mockResolvedValue({}); // Зал найден
        Movie.findById.mockResolvedValue({}); // Фильм найден
        Showtime.findBy.mockResolvedValue([{}]); // Сеанс уже существует

        await expect(showtimeService.create(showtime)).rejects.toThrow("Сеанс на это время уже есть");
    });

    it('Успешное создание сеанса', async () => {
        const showtime = { hall_id: 1, movie_id: 1, show_date: Date.now() };
        Hall.findOne.mockResolvedValue({}); // Зал найден
        Movie.findById.mockResolvedValue({}); // Фильм найден
        Showtime.findBy.mockResolvedValue([]); // Сеанс не существует
        Showtime.create.mockResolvedValue({...showtime, id: 3}); // Успешное создание

        const result = await showtimeService.create(showtime);
        expect(result).toEqual(expect.objectContaining({  // Проверяем, что результат соответствует ожидаемому
            id: 3,
            hall_id: showtime.hall_id,
            movie_id: showtime.movie_id,
            show_date: showtime.show_date,
        }));
        expect(Showtime.create).toHaveBeenCalledWith(showtime); // Проверка, что метод create был вызван с правильными аргументами
    });
});
