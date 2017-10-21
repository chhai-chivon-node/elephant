/**
 * SlideController
 *
 * @description :: Server-side logic for managing slides
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index:function(req, res){
        Slide.find({}).exec(function(err, slides){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view({slides:slides});
        });
    },

    'new': function(req, res){
            res.view();
    },

    create:function(req, res){
        var image = req.file('image');
	    image.upload({ dirname: '../../assets/images/slide'},function onUploadComplete (err, files) {				
            if (err) return res.serverError(err);								
                console.log(files);
                // save original file name
                var filename = image._files[0].stream.filename;
                var name = req.body.name;
                var description = req.body.description;
                var slide = {
                    name: name,
                    description:description,
                    image:filename
                }
                Slide.create(slide).exec(function(err){
                    if(err){
                        res.send(500, {error: 'Database Error'});
                    }
                    res.redirect('/dashboard/slide');
                });
        });
        
    },

    delete: function(req, res){
        var cId = req.params.id;
        Slide.destroy({id:cId}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/dashboard/slide');
        });
        return false;
    },

    edit: function(req, res) {
        var id = req.params.id;
        Slide.findOne(id).exec(function(err, slide) {
            if (err) {
                res.send(500, { error: 'Database Error' });
            }
            res.view({slide,slide});
        });
    },
    update: function(req, res){
        var name = req.body.name;
        var description = req.body.description;

        Slide.update({id: req.params.id},{name:name,description:description}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/dashboard/slide');
        });

        return false;
    }
};
