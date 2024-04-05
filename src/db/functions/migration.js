const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

async function startMigration() {
  console.log('creando migraciones');
  const { stdout, stderr } = await exec('npx sequelize-cli db:migrate');
  console.log('stdout:', stdout);
  if (stderr) console.error('stderr:', stderr);
}

module.exports = {
  startMigration,
};
