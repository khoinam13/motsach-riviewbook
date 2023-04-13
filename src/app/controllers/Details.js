const RiviewBook = require('../module/rivewBook');
const {mongooseToObject} = require('../../util/mongoose')
class DetailsController{
    show(req,res,next){
        RiviewBook.findOne({slug: req.params.slug})
        .then(detail=>
            res.render('details/show',{detail: mongooseToObject(detail),
                messageAVT: req.flash('messageAVT'),
                messageNone: req.flash('messageNone'),
                messageOut: req.flash('messageOut')
            }))
        .catch(next)
    }
    create(req,res,next){
        res.render('details/create',{
            messageName: req.flash('messageName'), errName: req.flash('errName'),
            messageImage: req.flash('messageImage'), errImage: req.flash('errImage'),
        })
    }
    // POST
    store(req,res,next){
        const fromData = req.body
        RiviewBook.find({})
        .then(books=>{
            const nameBook = books.map(book => book.name)
            const imageBook = books.map(book=> book.image)
            if(nameBook.includes(fromData.name)){
                req.flash('messageName','Tên sách đã tồn tại')
                req.flash('errName','alert alert-danger')
                res.redirect('/details/create')
                
            }
            else if(imageBook.includes(fromData.image)){
                req.flash('messageImage','Hình ảnh đã tồn tại')
                req.flash('errImage','alert alert-danger')
                res.redirect('/details/create')
            }
            else{
                const save =  new RiviewBook(fromData)
                save.save();
                res.redirect('/me/details')
            }
        })
    }
    edit(req, res, next){   
        RiviewBook.findById(req.params.id)
        .then(books=>{
            res.render('details/edit',{
                books: mongooseToObject(books)
                // messageName: req.flash('messageName'), errName: req.flash('errName'),
                // messageImage: req.flash('messageImage'), errImage: req.flash('errImage'),
            })
        })
    }
    //[PUT] /DETAILR/:ID
    update(req,res,next){
        RiviewBook.updateOne({_id: req.params.id},req.body)
        .then(()=> res.redirect('/me/details'))
        .catch(next)
    }
    delete(req,res,next){
        RiviewBook.deleteOne({_id: req.params.id})
        .then(()=>res.redirect('back'))
        .catch(next)
    }
    
}
module.exports = new DetailsController;