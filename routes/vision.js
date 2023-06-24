var express = require('express');
var router = express.Router();
var fs = require('fs');
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

const client = new AWS.Rekognition();

router.post('/classify', function (req, res, next) {
  // DON'T return the hardcoded response after implementing the backend

  let labels = [];

  const params = {
    Image: {
      Bytes: new Buffer.from(req.files.file.data, 'base64'),
    },
    MaxLabels: 10,
  };

  // Your code starts here //

  try {
    client.detectLabels(params, function (err, response) {
      response.Labels.forEach((label) => {
        labels.push(label.Name);
      });
      res.json({
        labels: labels,
      });
    });
  } catch (err) {
    console.log('error', err);
  }

  // Your code ends here //
});

module.exports = router;
