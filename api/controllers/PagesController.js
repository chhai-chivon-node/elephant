/**
 * PageController.index => pages/index.ejs : res.view();
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {

	index: function(req, res) {
	    console.clear();

        Slide.find({}).exec(function (err, sliders) {
            console.log("sliders : ", sliders);
            Partner.find({}).exec(function (err, partners) {
                console.log("partners : ", partners);
	            Product.find({}).exec(function (err, products) {
	                console.log("products : ", products);
	                Category.find({}).exec(function (err, categories) {
	                    console.log("categories : ", categories);
                        res.view({
                            sliders: sliders,
                            partners: partners,
                            products: products,
                            categories: categories
                        });
                    });
                });
            });
        });
	}
	
};

