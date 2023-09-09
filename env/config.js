module.exports = {
  development: {
    database: '',
    port: 5000,
    portal: 'http://localhost:8080',
    server: 'http://localhost:5000', 
  },
  production: {
    database: '',
    port: 5000,
    portal: 'https://tailgate-predictor.azurewebsites.net/',
    server: 'https://tailgate-predictor.azurewebsites.net/',
  }
};