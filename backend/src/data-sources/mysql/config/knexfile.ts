const defaults = {
  client: 'mysql',
  connection: {
    host: process.env.MYSQL_DB_HOST,
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_DATABASE
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    path: "../migrations",
    tableName: 'migrations'
  }
};

interface KnexConfig {
  [key: string]: object;
}

const knexConfig: KnexConfig = {
  local: {
    ...defaults
  },

  development: {
    ...defaults,
    debug: true,
    useNullAsDefault: true
  },

  production: {
    ...defaults
  }
};

export default knexConfig;
