const RiviewBook = require('../module/rivewBook');
const {mutipMongooseToObject} = require('../../util/mongoose');

class MeDetailsController{
    index(req,res,next){
        RiviewBook.find({})
        .then(books =>res.render('me/details', {
            books: mutipMongooseToObject(books),
            messageNone: req.flash('messageNone'),
            messageInline: req.flash('messageInline')
        } ))
        .catch(next)
    }
}
module.exports = new MeDetailsController;
