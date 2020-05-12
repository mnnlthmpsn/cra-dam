export const home = process.env === 'production'
    ? "https://dapi.herokuapp.com"
    : "http://localhost:8000"