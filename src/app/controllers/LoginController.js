const RegisterBook = require('../module/Register');
const {mutipMongooseToObject} = require('../../util/mongoose')
const Admin = {
    name: 'namdang1303',
    password: 'boy13032003'
}
class LoginController{
    index(req,res,next){
        res.render('login',{
            messageName: req.flash('messageName'), errName: req.flash('errName'),
            messagePassword: req.flash('messagePassword'), errPassword: req.flash('errPassword'),
            valueName: req.flash('valueName'),
            valuePassword: req.flash('valuePassword')
        });
    }
    admin(req,res,next){
        res.render('loginAdmin',{
            messageName: req.flash('messageName'), errName: req.flash('errName'),
            messagePassword: req.flash('messagePassword'), errPassword: req.flash('errPassword'),
            valueName: req.flash('valueName'),
            valuePassword: req.flash('valuePassword')
        });
    }
    storeAdmin(req,res,next){
        const fromData = req.body
        if(fromData.loginName != Admin.name){
            req.flash('messageName', 'Tên tài khoản không đúng')
            req.flash('errName','alert alert-danger')
            req.flash('valueName',fromData.loginName)
            req.flash('valuePassword',fromData.loginPassword)
            res.redirect('/login/admin')
        }
        else if(fromData.loginPassword !=  Admin.password){
            req.flash('messagePassword', 'Mật khẩu không đúng')
            req.flash('errPassword','alert alert-danger')
            req.flash('valueName',fromData.loginName)
            req.flash('valuePassword',fromData.loginPassword)
            res.redirect('/login/admin')
        }
        else{
            res.redirect('/me/details')
        }
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
                req.flash('messageAVT',`${fromData.loginName}`)
                req.flash('messageNone','none')
                req.flash('messageOut','Đăng xuất')
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