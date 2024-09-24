export const environment = {
  production: process.env["NODE_ENV"] === 'production',
  apiUrl: process.env["NODE_ENV"] === 'development'
    ? `http://localhost:3000`
    : `https://raw.githubusercontent.com/miskson/angular-stud-cabinet/gh-pages/static/db`,
};
console.log('IS PRODUCTION:', process.env["NODE_ENV"], environment.production, environment.apiUrl)