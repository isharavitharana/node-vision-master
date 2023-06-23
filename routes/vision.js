var express = require('express');
var router = express.Router();

router.post('/classify', function(req, res, next) {
  // DON'T return the hardcoded response after implementing the backend
  let response = ["shoe", "red", "nike"];

  // Your code starts here //

  // Your code ends here //

  res.json({
    "labels": response
  });
});

module.exports = router;
