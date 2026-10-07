import sql from 'mssql';

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER,
  port: 1433, // Forzamos el puerto por si acaso
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // Necesario para conexiones a Mu Online
    trustServerCertificate: true // Fundamental para evitar que el servidor rechaze la conexión
  }
};

let poolPromise;

export async function connectToDatabase() {
  if (!poolPromise) {
    poolPromise = sql.connect(sqlConfig)
      .then(pool => {
        console.log('✅ Conectado a SQL Server (MuAethel)');
        return pool;
      })
      .catch(err => {
        console.error('❌ Error conectando a SQL Server:', err);
        poolPromise = null;
        throw err;
      });
  }
  return poolPromise;
}