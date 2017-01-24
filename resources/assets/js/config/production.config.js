var config = {
  env: 'production',
  api: {
    base_url: 'https://api.waterassassins.com/api',
    defaultRequest: {
      headers: {
        'X-Requested-With': 'rest.js',
        'Content-Type': 'application/json'
      }
    }
  },
  social: {
    facebook: '',
    twitter: '',
    github: ''
  },
  debug: false
}

module.exports = config
