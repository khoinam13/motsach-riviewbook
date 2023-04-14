const RegisterBook = require('../module/Register');
const {mutipMongooseToObject} = require('../../util/mongoose')
var cookie = require('cookie');
const  jwt = require('jsonwebtoken')
// const Admin = {
//     name: 'namdang1303',
//     password: 'boy13032003'
// }
class LoginController{
    index(req,res,next){
        res.render('login',{
            messageName: req.flash('messageName'), errName: req.flash('errName'),
            messagePassword: req.flash('messagePassword'), errPassword: req.flash('errPassword'),
            valueName: req.flash('valueName'),
            valuePassword: req.flash('valuePassword')
        });
    }
    // admin(req,res,next){
    //     res.render('loginAdmin',{
    //         messageName: req.flash('messageName'), errName: req.flash('errName'),
    //         messagePassword: req.flash('messagePassword'), errPassword: req.flash('errPassword'),
    //         valueName: req.flash('valueName'),
    //         valuePassword: req.flash('valuePassword')
    //     });
    // }
    // storeAdmin(req,res,next){
    //     const fromData = req.body
    //     if(fromData.loginName != Admin.name){
    //         req.flash('messageName', 'Tên tài khoản không đúng')
    //         req.flash('errName','alert alert-danger')
    //         req.flash('valueName',fromData.loginName)
    //         req.flash('valuePassword',fromData.loginPassword)
    //         res.redirect('/login/admin')
    //     }
    //     else if(fromData.loginPassword !=  Admin.password){
    //         req.flash('messagePassword', 'Mật khẩu không đúng')
    //         req.flash('errPassword','alert alert-danger')
    //         req.flash('valueName',fromData.loginName)
    //         req.flash('valuePassword',fromData.loginPassword)
    //         res.redirect('/login/admin')
    //     }
    //     else{
    //         const key = process.env.JWT_SECRET
    //         const accessToken = jwt.sign(fromData,key)
    //         res.cookie('userAdmin',accessToken)
    //         res.redirect('/me/details')
    //     }
    // }
    
    store(req,res,next){
        const  fromData = req.body
        RegisterBook.find({})
        .then(accounts=>{
            const accountsName = accounts.map(account => account.registerName);
            const accountsPassWord = accounts.map(account => account.registerPassword)
            if(accountsName.includes(fromData.loginName) === false){
                    req.flash('messageName', 'Tên tài khoản không đúng')
                    req.flash('errName','alert alert-danger')
                    req.flash('valueName',fromData.loginName)
                    req.flash('valuePassword',fromData.loginPassword)
                    res.redirect('/login')
            }
            else if(accountsPassWord.includes(fromData.loginPassword) === false){
                req.flash('messagePassword', 'Mật khẩu không đúng')
                req.flash('errPassword','alert alert-danger')
                req.flash('valueName',fromData.loginName)
                req.flash('valuePassword',fromData.loginPassword)
                res.redirect('/login')
            }
            else{
                const key = process.env.JWT_SECRET
                const accessToken = jwt.sign(fromData,key)
                res.cookie('user',accessToken)
                res.cookie('name',fromData.loginName)
                res.redirect('/')
                // res.redirect('/')
                // console.log(fromData)
            }
        })
    }
    out(req,res,next){
        res.clearCookie('user')
        res.redirect('/')
    }
}
module.exports = new LoginController;