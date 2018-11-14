const crypto = require('crypto');

function kare_encryption(){}

kare_encryption.prototype.hashMessage = function (message) {
    const hash = crypto.createHash('sha256');
    hash.update(message);
    return hash.digest('hex');
};

kare_encryption.prototype.generateRSAKeyPair = function (passphrase) {
    var publicKey, privateKey;
    crypto.generateKeyPair('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {
          type: 'spki',
          format: 'pem'
        },
        privateKeyEncoding: {
          type: 'pkcs8',
          format: 'pem',
          cipher: 'aes-256-cbc',
          passphrase: passphrase
        }
      }, (err, publicKey, privateKey) => {
            this.privateKey = privateKey;
            this.publicKey = publicKey;
      });

    return {publicKey: publicKey, privateKey: privateKey};
};

module.exports = kare_encryption;
