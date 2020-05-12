export const home = process.env === 'production'
    ? return "https://dapi.herokuapp.com"
    : return "http://localhost:8000"