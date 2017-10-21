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
        var image = req.file('image');
	    image.upload({ dirname: '../../assets/images/product'},function onUploadComplete (err, files) {				
            if (err) return res.serverError(err);								
                console.log(files);
                // save original file name
                var filename = image._files[0].stream.filename;
                var name = req.body.name;
                var description = req.body.description;
                var categoryId = req.body.categoryId;
                var product = {
                    name: name,
                    categoryId:categoryId,
                    description:description,
                    image:filename
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
        var description = req.body.description;
        var categoryId = req.body.categoryId;

        Product.update({id: req.params.id},{name:name,description:description,categoryId:categoryId}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/dashboard/product');
        });

        return false;
    }
};

