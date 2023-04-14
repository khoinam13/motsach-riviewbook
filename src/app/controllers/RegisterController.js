const RegisterBook = require('../module/Register');
const {mutipMongooseToObject} = require('../../util/mongoose')
let alert = require('alert'); 
class RegisterController{
    index(req,res,next){
        res.render('register/show', {
            messageName: req.flash('messageName'), errName: req.flash('errName'),
            messageEmail: req.flash('messageEmail'), errEmail: req.flash('errEmail'),
            messagePassword: req.flash('messagePassword'), errPassword: req.flash('errPassword'),
            valueName: req.flash('valueName'),
            valueEmail: req.flash('valueEmail'),
            valuePassword: req.flash('valuePassword'),
            valuePasswordBack: req.flash('valuePasswordBack')
        })
    }
    store(req,res,next){
        const fromData = req.body
        RegisterBook.find({})
        .then(books=>{
            const registerName = books.map(book=>book.registerName)
            const registerEmail = books.map(book=>book.registerEmail)
            if(registerName.includes(fromData.registerName)){
                req.flash('messageName','Tên tài khoản đã tồn tại')
                req.flash('errName','alert alert-danger')
                req.flash('valueName',fromData.registerName)
                req.flash('valueEmail',fromData.registerEmail)
                req.flash('valuePassword',fromData.registerPassword)
                req.flash('valuePasswordBack',fromData.registerPasswordBack)
                res.redirect('/register')
            }
            else if(registerEmail.includes(fromData.registerEmail)){
                req.flash('messageEmail','Email đã tồn tại')
                req.flash('errEmail','alert alert-danger')
                req.flash('valueName',fromData.registerName)
                req.flash('valueEmail',fromData.registerEmail)
                req.flash('valuePassword',fromData.registerPassword)
                req.flash('valuePasswordBack',fromData.registerPasswordBack)
                res.redirect('/register')
            }
            else if(fromData.registerPassword != fromData.registerPasswordBack){
                req.flash('messagePassword','Mật khẩu nhập không khớp')
                req.flash('errPassword','alert alert-danger')
                req.flash('valueName',fromData.registerName)
                req.flash('valueEmail',fromData.registerEmail)
                req.flash('valuePassword',fromData.registerPassword)
                req.flash('valuePasswordBack',fromData.registerPasswordBack)
                res.redirect('/register')
            }
            else{
                const save =  new RegisterBook(fromData)
                save.save();
                res.redirect('/login')
                
            }
        })
        .catch(next) 
    }
}
module.exports = new RegisterController;