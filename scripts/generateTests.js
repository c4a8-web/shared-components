const { exec } = require('child_process');
const http = require('http');

function checkLocalhost(callback) {
  const options = {
    host: 'localhost',
    port: 6006,
    timeout: 2000, // Adjust the timeout value as needed
  };

  const request = http.get(options, (res) => {
    // Check the status code to determine if localhost:6006 is accessible
    if (res.statusCode === 200) {
      callback(true);
    } else {
      callback(false);
    }
  });

  request.on('error', () => {
    callback(false);
  });

  request.end();
}

function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

async function main() {
  try {
    // Run npm run storybook
    console.log('Running npm run storybook...');
    exec('npm run storybook');

    // Wait until localhost:6006 is accessible
    console.log('Waiting for localhost:6006...');
    await new Promise((resolve) => {
      const interval = setInterval(() => {
        checkLocalhost((isAccessible) => {
          if (isAccessible) {
            clearInterval(interval);
            resolve();
          }
        });
      }, 1000); // Adjust the interval value as needed
    });

    console.log('localhost:6006 is accessible.');

    // Run npm run cypress:test
    console.log('Running npm run cypress:test...');
    await runCommand('npm run cypress:test');

    console.log('Script execution completed.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
