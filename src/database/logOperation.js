const { DbOperationLog } = require("../models/log");

async function logMSSQLOperation(operation, tableName, includeTables, rowId, query) {
    
    const sqlLog = new DbOperationLog({
        operation,
        tableName,
        includeTables,
        rowId,
        query,
    });

    try {
        // await sqlLog.save();
        console.log('SQL лог сохранен:', mssqlLog);
    } catch (err) {
        console.error('Ошибка при сохранении SQL лога:', err);
    }
}
module.exports = logMSSQLOperation;