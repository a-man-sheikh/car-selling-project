const dotenv = require("dotenv");
const path = require("path");
const hello = require("../")
// const configFile = `../.env.${process.env.NODE_ENV}`;
dotenv.config({
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`),
});
var PLATFORM = process.env.PLATFORM || "Ashjar Ease";
var mongoUri =
  process.env.MONGOURI || "mongodb://127.0.0.1:27017/ashjar_ease_dev";
var THEME_COLOR = process.env.THEME_COLOR || "#ABDBFF";

let defaults = {
  PLATFORM: PLATFORM, 
  THEME_COLOR: THEME_COLOR,
  root: path.normalize(__dirname + "../app"),
  mongoUri: mongoUri,
  serverUrl: process.env.SERVER_URL || "",
  environment: process.env.NODE_ENV || "production",
  show: function () {
    console.log("environment : " + this.environment);
  },
  NODE_MAILER: {
    NODEMAILER_HOST: process.env.HOST || `smtp.gmail.com`,
    NODEMAILER_CODE: process.env.NODEMAILER_CODE || `Gmail`,
    NODEMAILER_USER: process.env.NODEMAILER_USER || ``,
    NODEMAILER_PASSWORD: process.env.NODEMAILER_PASSWORD || `cya}N4kJ71dC`,
  },
  FCM: {
    SERVER_KEY: "",
  },
  ENV_PRODUCTION: "production",
  ENV_STAGING: "staging",
  ENV_DEVELOPMENT: "development",
  environment: process.env.NODE_ENV || "environment",

  mongoDB: {
    PROTOCOL: process.env.DB_PROTOCOl || "mongodb",
    HOST: process.env.DB_HOST || "127.0.0.1",
    PORT: process.env.DB_PORT || 27017,
    NAME: "ashjar_ease_dev",
    USER: "",
    PASSWORD: "",
    get URL() {
      return (
        process.env.dbUrl ||
        `${this.PROTOCOL}://${this.HOST}:${this.PORT}/${this.NAME}`
      );
    },
  },
  server: {
    PROTOCOL: process.env.SERVER_PROTOCOL || "http",
    HOST: process.env.SERVER_HOST || "0.0.0.0",
    PORT: process.env.SERVER_PORT || "3000",
    NODE_ENV: process.env.NODE_ENV || "development",
    get URL() {
      return `${this.PROTOCOL}://${this.HOST}:${this.PORT}`;
    },
  },
  redis: {
    PROTOCOL: process.env.SERVER_PROTOCOL || "http",
    HOST: process.env.REDIS_HOST || "127.0.0.1",
    PORT: process.env.REDIS_PORT || "6379",
    get URL() {
      return `${this.PROTOCOL}://${this.HOST}:${this.PORT}`;
    },
  },
  ACCOUNT_DELETE_SECRET: "confirm delete all",
  swagger: require("./swagger"),
  services: {},
  gateway: {
    TAP: {
      SECRET_KEY: process.env.TAP_SECRET_KEY,
      PUBLIC_KEY: process.env.TAP_PUBLIC_KEY,
    },
  },
};

module.exports = defaults;
