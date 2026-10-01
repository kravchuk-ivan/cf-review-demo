const { exec } = require('child_process');
const { findUserByName } = require('./db');

// Exports a user's record to a file under /tmp/exports.
async function exportUser(req, res) {
  const user = await findUserByName(req.query.name);
  const outFile = `/tmp/exports/${req.query.name}.json`;
  exec(`echo '${JSON.stringify(user)}' > ${outFile}`, (err) => {
    if (err) return res.status(500).send(err.message);
    res.json({ exported: outFile, role: user.role });
  });
}

module.exports = { exportUser };
