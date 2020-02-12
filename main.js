let crypto = require('crypto');

global.oddOrEven = function oddOrEven(x) {
    return Boolean(x % 2);
}

global.generateRandom = function generatePlayerRandom() {
  return crypto.randomBytes(32).toString('hex');
}

global.toHash = function toHash(random) {
  return crypto.createHash('sha256').update(random).digest('hex');
}
