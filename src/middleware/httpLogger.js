const { HttpLog } = require('../models/log');

const httpLogger = async (req, res, next) => {
    const start = Date.now(); 

    //Обработчик события finish для получения статуса и времени ответа
    res.on('finish', async () => {
        const responseTime = Date.now() - start;

        const newLog = HttpLog({
            method: req.method,
            url: req.originalUrl,
            status: res.statusCode,
            responseTime: responseTime,
            ip: req.ip,
        })
        console.log('newLog', newLog);
        // Сохранить лог в MongoDB
        try {
            await newLog.save();
        } catch (err) {
            console.error('Ошибка при сохранении лога:', err);
        }
    })

    next()
}
module.exports = httpLogger;