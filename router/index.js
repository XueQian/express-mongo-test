/**
 * Created by qxue on 3/5/15.
 */
module.exports = function(app) {
    app.use('/api/users', require('./routes/user'));
};
