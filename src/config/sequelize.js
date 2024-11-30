const logMSSQLOperation = require("../database/logOperation");

module.exports = {
  logging: (query, options) => {
    logMSSQLOperation(options.type, options.model?.tableName, options.tableNames, options.where?.id, query)
  },
  dialect: "mssql",
  host: "localhost",
  port: 1433,
  define: { timestamps: false },
  username: "m_user",
  password: "1234",
  database: "m_test",
  dialectOptions: { 
    options: {
      encrypt: false
    }
  }
 
};
