/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	list:function(req, res){
        Category.find({}).exec(function(err, categories){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('/dashboard/category', {categories:categories});
        });
    },
    add: function(req, res){
        res.view('/dashboard/category/new');
    },
    create:function(req, res){
        var name = req.body.name;
        var description = req.body.description;

        Category.create({name:name, description:body}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/dashboard/category');
        });
    },
    delete: function(req, res){
        Category.destroy({id:req.params.id}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/dashboard/category');
        });
        return false;
    },
    edit: function(req, res){
        Category.findOne({id:req.params.id}).exec(function(err, category){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('/dashboard/category/edit', {category:category});
        });
    },
    update: function(req, res){
        var name = req.body.name;
        var description = req.body.description;

        Category.update({id: req.params.id},{name:name, description:description}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/dashboard/category');
        });
        return false;
    }
};

