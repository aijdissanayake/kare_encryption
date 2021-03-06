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

kare_encryption.prototype.publicKeyEncrypt = function (message, publicKey) {
    const key = new NodeRSA(publicKey);
    enc = key.encrypt(message, 'base64');
    return enc;

}

kare_encryption.prototype.privateKeyDecrypt = function (encryptedMessage, privateKey) {
    const key = new NodeRSA(privateKey);
    dec = key.decrypt(encryptedMessage).toString('utf8');
    return dec;

}

kare_encryption.prototype.signMessage = function (message, privateKey) {
    const key = new NodeRSA(privateKey);
    const sign = key.sign(message, 'base64');
    return sign;
}

kare_encryption.prototype.verifyMessage = function (message, sign, publicKey) {
    const key = new NodeRSA(publicKey);
    const verification = key.verify(message, sign, 'utf8', 'base64');
    return verification;
}

module.exports = kare_encryption;
