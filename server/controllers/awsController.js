
const aws = require('aws-sdk');
const fs = require('fs');
const dotenv = require('dotenv');
const process = require('process');
const { Buffer } = require('buffer');
const Jimp = require('jimp');

dotenv.config();

const getDataFromAws = (req) => new Promise((resolve, reject) => {
  aws.config.setPromisesDependency();
  aws.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.ACCESS_KEY_PRIVATE,
  });
  console.warn(req);

  const s3 = new aws.S3();
  const params = {
    Bucket: process.env.BUCKET,
    Body: req.file.buffer,
    Key: `avatar/${req.file.originalname}`,
    ContentEncoding: req.file.encoding,
    ContentType: req.file.mimetype,
    CacheControl: 'public'
  };

  s3.upload(params, (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});

module.exports =  getDataFromAws ;