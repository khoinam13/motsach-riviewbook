const RiviewBook = require('../module/rivewBook');
const {mutipMongooseToObject} = require('../../util/mongoose')

class siteController{
    index(req,res,next){
        RiviewBook.find({})
        .then(books=>res.render('home',
         {
            books: mutipMongooseToObject(books),
            messageNone: req.flash('messageNone'),
            messageInline: req.flash('messageInline')
         }
        ))
               
        .catch(next);
    }
    seach(req,res,next){
        const fromData  = req.query
        const seach = fromData.searchBook.charAt(0).toUpperCase()
        RiviewBook.find({})
        .then(books=>{
            var booksNew = books.filter(book => book.name.includes(seach))
            res.render('home',{
                books: mutipMongooseToObject(booksNew),
                messageNone: req.flash('messageNone'),
                messageInline: req.flash('messageInline')
            })
        })
        .catch(next)
    }
}
module.exports = new siteController;
