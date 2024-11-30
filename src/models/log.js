const mongoose = require('mongoose');

const httpLogSchema = new mongoose.Schema({
    method: { type: String, required: true },
    url: { type: String, required: true },
    status: { type: Number, required: true },
    responseTime: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
    ip: { type: String, required: true }
});

const dbOperationLogSchema = new mongoose.Schema({
    operation: { type: String, required: true }, 
    tableName: { type: String}, 
    includeTables: { type: Array(String)}, 
    rowId: { type: Number}, // ID записи
    query: { type: String, required: true }, // SQL-запрос
    timestamp: { type: Date, default: Date.now },

});

const HttpLog = mongoose.model('httpLog', httpLogSchema);
const DbOperationLog = mongoose.model('dbOperationLog', dbOperationLogSchema);

module.exports = { HttpLog, DbOperationLog };