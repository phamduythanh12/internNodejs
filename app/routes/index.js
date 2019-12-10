const notes = require('./notes');
module.exports = function (app,db) {
    notes(app,db);
}