const SftpClient = require('ssh2-sftp-client');

const config = {
  host: '191.96.63.48',
  port: 65002,
  username: 'u413830822',
  password: 'Firefly@@2025'
};

const sftp = new SftpClient();

async function upload() {
  try {
    await sftp.connect(config);
    console.log('Connected to SFTP server');
    
    console.log('Starting upload of dist directory...');
    await sftp.uploadDir('dist', '/home/u413830822/public_html');
    
    console.log('Upload completed successfully');
  } catch (err) {
    console.error('Error during upload:', err);
  } finally {
    await sftp.end();
  }
}

upload();
