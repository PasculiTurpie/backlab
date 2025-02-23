const bcrypt = require("bcryptjs");

async function varifyHashPassword() {
  const password = 'mysecretpassword';
  const hash = '$2a$10$yjYv3Qozk1S9MNYNKKnoJ.2dh7Hbnamc.61tAXZXN67uz1gnJW1t6'
  const isMatch = await bcrypt.compare(password,hash);
  console.log(isMatch);
}

varifyHashPassword();