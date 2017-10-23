/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index:function(req, res){
        Product.find({}).exec(function(err, products){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view({products:products});
        });
    },

    'new': function(req, res){
        Category.find({}).exec(function(err, categories){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view({categories:categories});
       });
    },

    create:function(req, res){
        var fileUpload = req.file('fileUpload');
	    fileUpload.upload({ dirname: '../../assets/images/product'},function onUploadComplete (err, files) {				
            if (err) return res.serverError(err);								
                var imageFile  = files[0].fd;
                var lastPart = imageFile.split("/").pop();
                // save original file name
                var name = req.body.name;
                var description = req.body.description;
                var price = req.body.price;
                var type = req.body.type;
                var stock = req.body.stock;
                var categoryId = req.body.categoryId;
                var product = {
                    name:name,
                    categoryId:categoryId,
                    price:price,
                    type:type,
                    stock:stock,
                    description:description,
                    image:lastPart
                }
                Product.create(product).exec(function(err){
                    if(err){
                        res.send(500, {error: 'Database Error'});
                    }
                    res.redirect('/dashboard/product');
                });
        });
        
    },

    delete: function(req, res){
        var cId = req.params.id;
        Product.destroy({id:cId}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/dashboard/product');
        });
        return false;
    },

    edit: function(req, res) {
        var id = req.params.id;
        Product.findOne(id).exec(function(err, product) {
            if (err) {
                res.send(500, { error: 'Database Error' });
            }
            Category.find({}).exec(function(err, categories){
                if(err){
                    res.send(500, {error: 'Database Error'});
                }
                res.view({product,product,categories:categories});
           });
        });
    },
    update: function(req, res){
        var name = req.body.name;
        var price = req.body.price;
        var type = req.body.type;
        var stock = req.body.stock;
        var description = req.body.description;
        var categoryId = req.body.categoryId;
        var product = {
            name:name,
            categoryId:categoryId,
            price:price,
            type:type,
            stock:stock,
            description:description,
            image:lastPart
        }
        Product.update({id: req.params.id},product).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/dashboard/product');
        });

        return false;
    }
};

