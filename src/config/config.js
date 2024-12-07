const dotenv = require('dotenv');

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: envFile });

module.exports = {
    port: process.env.PORT,
    db: process.env.MONGO_URI,
};
