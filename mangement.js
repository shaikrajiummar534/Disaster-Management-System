const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT // 8000;
const MONGO_URI = process.env.MONGO_URI  
app.use(cors());