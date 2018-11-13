const crypto = require('crypto');

function kare_encryption(){}

kare_encryption.prototype.hashMessage = function (message) {
    const hash = crypto.createHash('sha256');
    hash.update(message);
    return hash.digest('hex');
};

module.exports = kare_encryption;
