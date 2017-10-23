/**
 * RoleController
 *
 * @description :: Server-side logic for managing roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index:function(req, res){
        Role.find({}).exec(function(err, roles){
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
            res.redirect('/dashboard/role');
        });
        
    },

    delete: function(req, res){
        var rId = req.params.id;
        Role.destroy({id:rId}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/dashboard/role');
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
            res.redirect('/dashboard/role');
        });

        return false;
    }
};

