class requireAuth{
    userAdmin(req,res,next){
        if(!req.cookies.userAdmin){
            res.redirect('/login/admin')
            return;
        }
        else{
            req.flash('messageNone','none')
            req.flash('messageInline', 'inline')
        }
    next()
    }
    user(req,res,next){
        if(req.cookies.user){
            req.flash('messageNone','none')
            req.flash('messageInline', 'inline')
        }
        next()
    }
}
module.exports = new requireAuth;
