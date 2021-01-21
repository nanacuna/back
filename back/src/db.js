import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';

dotenv.config()

const {
    DB_USER,
    DB_PASS,
    DB_HOST
} = process.env


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/test`, {
    logging: false,
    native: false
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

  modelDefiners.forEach(model => model(sequelize));

  let entries = Object.entries(sequelize.models);
  let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
  sequelize.models = Object.fromEntries(capsEntries);

  const { Products } = sequelize.models;

export { Products, sequelize as conn }    // para importart la conexión { conn } = require('./db.js');