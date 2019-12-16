// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/car-dealer.db3',
    },
    migrations: {
      directory: './data/migrations', // will be created automatically
    },
    seeds: {
      directory: './data/seeds', // also created automatically
    },
  },
};
