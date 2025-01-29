const store = require('../../../store/dbContext');

const TABLA = 'user';

const list = () => {
    return store.list(TABLA);
}

module.exports = {
    list,
}