const users = [
  { id: 1, name: 'ada', role: 'admin' },
  { id: 2, name: 'linus', role: 'user' },
];

async function findUserByName(name) {
  return users.find((u) => u.name === name) || null;
}

module.exports = { findUserByName };
