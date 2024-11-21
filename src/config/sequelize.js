module.exports = {
  logging: false,
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
