const mongoose = require('mongoose');

const httpLogSchema = new mongoose.Schema({
    method: { type: String, required: true },
    url: { type: String, required: true },
    status: { type: Number, required: true },
    responseTime: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
});

const dbOperationLogSchema = new mongoose.Schema({
    operation: { type: String, required: true }, // e.g., 'create', 'update', 'delete'
    table_name: { type: String, required: true }, // e.g., 'User', 'Post'
    documentId: { type: mongoose.Schema.Types.ObjectId, required: true },
    timestamp: { type: Date, default: Date.now },
});

const HttpLog = mongoose.model('HttpLog', httpLogSchema);
const DbOperationLog = mongoose.model('DbOperationLog', dbOperationLogSchema);

module.exports = { HttpLog, DbOperationLog };