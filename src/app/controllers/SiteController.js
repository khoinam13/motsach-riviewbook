const RiviewBook = require('../module/rivewBook');
const {mutipMongooseToObject} = require('../../util/mongoose')

class siteController{
    index(req,res,next){
        RiviewBook.find({})
        .then(books=>res.render('home',
         {
            books: mutipMongooseToObject(books),
            messageAVT: req.flash('messageAVT'),
            messageNone: req.flash('messageNone'),
            messageOut: req.flash('messageOut')
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
                books: mutipMongooseToObject(booksNew)
            })
        })
        .catch(next)
    }
}
module.exports = new siteController;
