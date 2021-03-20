const bcrypt = require('bcrypt');

module.exports = class AuthService {
    static saltRounds = 10;

    static generateHash(password) {
        return bcrypt.hash(password, AuthService.saltRounds);
    }

    static comparePasswords(password, hash) {
        return bcrypt.compare(password, hash);
    }
}
