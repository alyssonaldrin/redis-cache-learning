const { createClient } = require("redis");

const client = createClient();

async function connect() {
  client.on("error", (err) => console.log("Redis Client Error", err));
  await client.connect();
}

async function setPessoa(pessoa) {
  await client.set(`${pessoa.id}`, JSON.stringify(pessoa), { EX: 3600 });
}

async function getPessoa(id) {
  const saida = await client.get(id);
  return JSON.parse(saida);
}

module.exports = { connect, setPessoa, getPessoa };
