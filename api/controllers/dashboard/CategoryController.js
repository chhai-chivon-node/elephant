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
        var page = req.params.page;
        var limit = 10;
        var offset = (page - 1) *  limit;
        Category.find({}).paginate({page: page, limit: offset}).exec(function(err, categories){
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
        var uploadFile = req.file('fileUpload');
        uploadFile.upload({ dirname: '../../assets/images/category' }, function onUploadComplete(err, files) {
            // Earlier it was ./assets/images .. Changed to ../../assets/images
            //	Files will be uploaded to ./assets/images
            // Access it via localhost:1337/images/file-name
            if (err) return res.serverError(err);
            //	IF ERROR Return and send 500 error
            var imageFile  = files[0].fd;
            var lastPart = imageFile.split("/").pop();
            var name = req.body.name;
            var description = req.body.description;
            var parentId = req.body.parentId;
            var category = {
                name: name,
                parentId:parentId,
                description:description,
                image:lastPart
            }
            Category.create(category).exec(function(err){
                if(err){
                    res.send(500, {error: 'Database Error'});
                }
                res.redirect('/dashboard/category/list/1');
            });
        });
    },

    delete: function(req, res){
        var cId = req.params.id;
        Category.destroy({id:cId}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/dashboard/category/list/1');
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
            res.redirect('/dashboard/category/list/1');
        });

        return false;
    }
};

