/**
 * RoleController
 *
 * @description :: Server-side logic for managing roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index:function(req, res){
        var page = req.params.page;
        var limit = 10;
        var offset = (page - 1) *  limit;
        Role.find({}).paginate({page: page, limit: offset}).exec(function(err, roles){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view({roles:roles});
        });
    },

    'new': function(req, res){
            res.view();
    },

    create:function(req, res){
        var role = {
            name: req.body.name,
            description:req.body.description
        }
        Role.create(role).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/dashboard/role/list/1');
        });
        
    },

    delete: function(req, res){
        var rId = req.params.id;
        Role.destroy({id:rId}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/dashboard/role/list/1');
        });
        return false;
    },

    edit: function(req, res) {
        var rId = req.params.id;
        Role.findOne(rId).exec(function(err, role) {
            if (err) {
                res.send(500, { error: 'Database Error' });
            }
            res.view({role,role});
        });
    },
    update: function(req, res){
        var name = req.body.name;
        var description = req.body.description;

        Role.update({id: req.params.id},{name:name,description:description}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/dashboard/role/list/1');
        });

        return false;
    }
};

