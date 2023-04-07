const path  = require('path');
const express = require('express');
const handlebars = require('express-handlebars')
const { extname } = require('path');
// const morgan = require('morgan');
// app.use(morgan('combined'))
const app = express()
const port = 3000
//methodOverride
const methodOverride = require('method-override')
// static
app.use(express.static(path.join(__dirname,'public')));
//---- Handlebar ----------
//middlewave
app.use(express.urlencoded())
app.use(express.json())
// methodOverride
app.use(methodOverride('_method'))
// flash
const flash = require('connect-flash');
const session = require('express-session');
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false

}))
app.use(flash());

app.engine('hbs',handlebars.engine({
    extname:'.hbs',
    helpers: {
        sum: (a,b)=> a + b
    }
}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'resources','views'));
// app.get('/',(req,res)=>{
//     res.render('home')
// })
app.listen(port,()=>console.log(`Chạy thành công trên cổng ${port}`))

// Connect Data
const data = require('../src/config/db')
data.connect()

// thực hiện  route
const route = require('./routes')
route(app);
