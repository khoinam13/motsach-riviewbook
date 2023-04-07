const RegisterBook = require('../module/Register');
const {mutipMongooseToObject} = require('../../util/mongoose')

class LoginController{
    index(req,res,next){
        res.render('login',{
            messageName: req.flash('messageName'), errName: req.flash('errName'),
            messagePassword: req.flash('messagePassword'), errPassword: req.flash('errPassword'), 
        });
    }
    store(req,res,next){
        const fromData = req.body
        RegisterBook.find({})
        .then(accounts=>{
            const accountsName = accounts.map(account => account.registerName);
            const accountsPassWord = accounts.map(account => account.registerPassword)
            if(accountsName.includes(fromData.loginName) === false){
                    req.flash('messageName', 'Tên tài khoản không đúng')
                    req.flash('errName','alert alert-danger')
                    res.redirect('/login')
            }
            else if(accountsPassWord.includes(fromData.loginPassword) === false){
                req.flash('messagePassword', 'Mật khẩu không đúng')
                req.flash('errPassword','alert alert-danger')
                res.redirect('/login')
            }else{
                res.redirect('/')
                console.log(fromData)
            }  
        })
        // res.send(fromData.registerName)
        // if(fromData.loginName === RegisterBook.registerName){
        //     res.send('dang nhap thanh cong')
        // }
        // else{
        //     res.send('dang nhap that bai')
        // }
        
    }
}
module.exports = new LoginController;