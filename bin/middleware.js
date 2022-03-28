module.exports = function (req, res, next) {
  if (req.method === 'POST') {
    req.method = "GET";
    res.send();
    res.end();
  } else {
    next();
  }
}
