const SiteRoute = require('./SiteRoute');
const DetailsRoute = require('./details');
const authMiddleware = require('../middleware/auth-middleware');
const Register = require('./register');
const Login = require('./login')
const MeDetails = require('./me')

function route(app){
    app.use('/me'  ,MeDetails)
    app.use('/login',Login)
    app.use('/register',Register)
    app.use('/', authMiddleware.user,SiteRoute)
    app.use('/details',DetailsRoute)
}
module.exports = route;