const morgan = require('morgan');
const { HttpLog } = require('../models/log');

const httpLogger = morgan('combined', {
    stream: {
        write: async (message) => {
            const logData = message.trim().split(' ');
            const [method, url, status, responseTime] = [
                logData[0],
                logData[1],
                logData[2],
                logData[3],
            ];

            // Сохранение HTTP лога в MongoDB
            await HttpLog.create({
                method,
                url,
                status: parseInt(status, 10),
                responseTime: parseInt(responseTime, 10),
            }).catch(err => console.error('Error saving HTTP log:', err));
        },
    },
});

module.exports = httpLogger;