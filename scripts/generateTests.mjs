import { execa } from 'execa';
import { platform } from 'os';
import { get } from 'http';

function checkLocalhost(callback) {
  const options = {
    host: 'localhost',
    port: 6006,
    timeout: 2000,
  };

  const request = get(options, (res) => {
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

async function closeStorybook() {
  const operatingSystem = platform();
  const isWindows = operatingSystem.includes('win');
  const command = isWindows ? 'taskkill /IM node.exe /F' : 'pkill -f start-storybook';

  await execa(command, {
    shell: true,
    stdio: 'inherit',
    windowsVerbatimArguments: isWindows,
  })
    .then(() => {
      console.log('Storybook closed successfully!');
    })
    .catch((error) => {
      console.error(`Error closing Storybook: ${error}`);
      process.exit();
    });
}

async function main() {
  try {
    console.log('Running npm run storybook...');
    const storybookProcess = execa('npm run storybook');
    storybookProcess.stdout.pipe(process.stdout);
    storybookProcess.stderr.pipe(process.stderr);

    console.log('Waiting for localhost:6006...');
    await new Promise((resolve) => {
      const interval = setInterval(() => {
        checkLocalhost((isAccessible) => {
          if (isAccessible) {
            clearInterval(interval);
            resolve();
          }
        });
      }, 1000);
    });

    console.log('localhost:6006 is accessible.');

    console.log('Running npm run cypress:test...');
    const cypressProcess = execa('npm run cypress:test', { stdio: 'inherit' });

    cypressProcess
      .then(() => {
        console.log('Tests completed. Terminating script...');
        storybookProcess.kill();
        closeStorybook();
      })
      .catch((err) => {
        console.error('Tests failed', err);
        storybookProcess.kill();
        closeStorybook();
      });
  } catch (error) {
    console.error('An error occurred:', error);

    closeStorybook();
  }

  setTimeout(closeStorybook, 100000);
}

main();
