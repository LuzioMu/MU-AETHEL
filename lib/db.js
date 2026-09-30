import sql from 'mssql';

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // Fundamental en false para VPS de Mu Online sin certificados SSL
    trustServerCertificate: true
  }
};

let poolPromise;

export async function connectToDatabase() {
  if (!poolPromise) {
    poolPromise = sql.connect(sqlConfig)
      .then(pool => {
        console.log('Conectado a SQL Server (Mu Aethel)');
        return pool;
      })
      .catch(err => {
        console.error('Error al conectar a SQL Server: ', err);
        poolPromise = null;
        throw err;
      });
  }
  return poolPromise;
}
