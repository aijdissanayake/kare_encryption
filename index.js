const crypto = require('crypto');

module.exports = function hashMessage(string) {
    const hash = crypto.createHash('sha256');
    hash.update(string);
    return hash.digest('hex');
};
