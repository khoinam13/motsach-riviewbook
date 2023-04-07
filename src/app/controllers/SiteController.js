const RiviewBook = require('../module/rivewBook');
const {mutipMongooseToObject} = require('../../util/mongoose')

class siteController{
    index(req,res,next){
        RiviewBook.find({})
        .then(books=>res.render('home',
         {
            books: mutipMongooseToObject(books)
         }
        ))
               
        .catch(next);
    }
    // seach(req,res,next){
    //     const fromData  = req.query
    //     const seach = fromData.searchBook
    //     RiviewBook.find({})
    //     .then(books=>{
    //         const nameBook = books.map(book => book.name).join()
    //         if(nameBook.includes(seach)=== true){
    //             res.render('home',{
    //                 books: mutipMongooseToObject(books)
    //             })
    //         }
    //         else{
    //             res.send('tim kiem that bai')
    //         }
    //     })
    // }
}
module.exports = new siteController;
