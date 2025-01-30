const controller = require('./user-controller');
const store = require('../../../store/dbContext');

module.exports = controller(store);
