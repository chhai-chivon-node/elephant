/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    params: function(req) {
        var params = _.extend(req.query || {}, req.params || {}, req.body || {});
        console.clear();
        console.log("Fetch Params: ", params);
        return params;
    },

    paramId: function(req) {
        var id = req.param('id')
        if (!id) {
            return res.send("No id specified.", 500);
        }
        console.clear();
        console.log("Fetch Id: ", id);
        return id;
    },
    
	index:function(req, res){
        Category.find({}).exec(function(err, categories){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view({categories:categories});
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
	    image.upload({ dirname: '../../assets/images/catagory'},function onUploadComplete (err, files) {				
            if (err) return res.serverError(err);								
                console.log(files);
                // save original file name
                var filename = image._files[0].stream.filename;
                var name = req.body.name;
                var description = req.body.description;
                var parentId = req.body.parentId;
                var category = {
                    name: name,
                    parentId:parentId,
                    description:description,
                    image:filename
                }
                Category.create(category).exec(function(err){
                    if(err){
                        res.send(500, {error: 'Database Error'});
                    }
                    res.redirect('/dashboard/category');
                });
        });
        
    },

    delete: function(req, res){
        var cId = req.params.id;
        Category.destroy({id:cId}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/dashboard/category');
        });
        return false;
    },

    edit: function(req, res) {
        var id = this.paramId(req);
        Category.findOne(id).exec(function(err, category) {
            if (err) {
                res.send(500, { error: 'Database Error' });
            }
            Category.find({}).exec(function(err, categories){
                if(err){
                    res.send(500, {error: 'Database Error'});
                }
                res.view({category,category,categories:categories});
           });
        });
    },
    update: function(req, res){
        var name = req.body.name;
        var description = req.body.description;
        var parentId = req.body.parentId;

        Category.update({id: req.params.id},{name:name,description:description,parentId:parentId}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/dashboard/category');
        });

        return false;
    }
};

