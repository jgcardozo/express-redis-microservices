const { v4: uuidv4 } = require('uuid');

const TABLA = 'user';

module.exports = (injectedStore) => {

    if (!injectedStore) injectedStore = require('../../../store/dbContext');

    return {
        list: () => injectedStore.list(TABLA),
        get: id => injectedStore.get(TABLA, id),
        //insert: (body) =>
    }

}