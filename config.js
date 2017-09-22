require('dotenv').config()

module.exports = {
  DATABASE_URI: process.env.DATABASE_URI || 'mongodb://localhost/columbus',
  PORT: process.env.PORT || 3000
}
