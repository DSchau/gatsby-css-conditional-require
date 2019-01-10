if (process.env.SMALL) {
  require('./small.css')
} else if (process.env.LARGE) {
  require('./large.css')
}

require('./index.css')
