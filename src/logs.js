const fs = require('fs');
const path = require('path');

// Serves a support log file, e.g. GET /logs?file=today.log
function readLog(req, res) {
  const logPath = path.join(__dirname, '../logs', req.query.file);
  fs.readFile(logPath, 'utf8', (err, data) => {
    res.type('text/plain').send(data);
  });
}

module.exports = { readLog };
