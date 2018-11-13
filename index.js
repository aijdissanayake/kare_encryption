const crypto = require('crypto');

module.exports = function hash(string) {
    const hash = crypto.createHash('sha256');
    hash.update('some data to hash');
    return hash.digest('hex');
};
