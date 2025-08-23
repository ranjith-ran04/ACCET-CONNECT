const express=require('express');
const alumnireg = require('./controllers/alumniform/alumnireg');
const router = express.Router();

router.post('/alumniform',alumnireg);
module.exports=router;