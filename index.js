const crypto = require('crypto');
const NodeRSA = require('node-rsa');

function kare_encryption(){}

kare_encryption.prototype.hashMessage = function (message) {
    const hash = crypto.createHash('sha256');
    hash.update(message);
    return hash.digest('hex');
    
};

kare_encryption.prototype.generateRSAKeyPair = function (keyLength) {    
    keyLength = keyLength || 2048;
    const key = new NodeRSA({b: keyLength});
    const publicKey = key.exportKey('pkcs8-public-pem');
    const privateKey = key.exportKey('pkcs8-private-pem');
    return {publicKey: publicKey, privateKey: privateKey};

};

kare_encryption.prototype.privateKeyEncrypt = function (message, privateKey) {
    const key = new NodeRSA(privateKey);
    enc = key.encrypt(message, 'base64');
    return enc;

}

module.exports = kare_encryption;
