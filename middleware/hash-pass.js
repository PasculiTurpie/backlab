const bcrypt = require("bcryptjs");

async function hashPassword() {
  const password = 'mysecretpassword';
  const hash = await bcrypt.hash(password, 10);
  console.log(hash);
}

hashPassword();