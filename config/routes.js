module.exports.routes = {

  // HTML Views
  'get /login': { view: 'user/login' },
  'get /signup': { view: 'user/signup' },
  '/welcome': { view: 'user/welcome' },

  // '/': {
  //   view: 'index'
  // },
  
  '/': 'PagesController.index',
  '/category/:id/:page':'PagesController.category',

  // '/login':{
  //   view:'pages/login'
  // },
  // '/register':{
  //   view:'pages/register'
  // },

  '/checkout':{
    view:'pages/checkout'
  },
  '/shopping':{
    view:'pages/shopping'
  },
  '/category':{
    view:'pages/category'
  },
  '/about':{
    view:'pages/about'
  },
  '/account':{
    view:'pages/account'
  },
  '/delivery':{
    view:'pages/delivery'
  },
  '/forget-password':{
    view:'pages/forget-password'
  },
  '/verify':{
    view:'pages/verify'
  },
  '/account-info':{
    view:'pages/account-info'
  },
  '/change-password':{
    view:'pages/change-password'
  },
  '/order-history':{
    view:'pages/order-history'
  },
  '/payment-history':{
    view:'pages/payment-history'
  },
  '/order-info':{
    view:'pages/order-info'
  },


  '/dashboard/index':{view:'dashboard/index'},

  //Category
  'get /dashboard/category/list/:page': 'dashboard/CategoryController.index',
  'get /dashboard/category/new': 'dashboard/CategoryController.new',
  'get /dashboard/category/edit/:id': 'dashboard/CategoryController.edit',
  'post /dashboard/category': 'dashboard/CategoryController.create',
  'post /dashboard/category/update/:id': 'dashboard/CategoryController.update',
  'post /dashboard/category/delete/:id': 'dashboard/CategoryController.delete',
  //Product
  'get /dashboard/product/list/:page': 'dashboard/ProductController.index',
  'get /dashboard/product/new': 'dashboard/ProductController.new',
  'get /dashboard/product/edit/:id': 'dashboard/ProductController.edit',
  'post /dashboard/product': 'dashboard/ProductController.create',
  'post /dashboard/product/update/:id': 'dashboard/ProductController.update',
  'post /dashboard/product/delete/:id': 'dashboard/ProductController.delete',
  //Partner
  'get /dashboard/partner/list/:page': 'dashboard/PartnerController.index',
  'get /dashboard/partner/new': 'dashboard/PartnerController.new',
  'get /dashboard/partner/edit/:id': 'dashboard/PartnerController.edit',
  'post /dashboard/partner': 'dashboard/PartnerController.create',
  'post /dashboard/partner/update/:id': 'dashboard/PartnerController.update',
  'post /dashboard/partner/delete/:id': 'dashboard/PartnerController.delete',
   //Slide
   'get /dashboard/slide/list/:page': 'dashboard/SlideController.index',
   'get /dashboard/slide/new': 'dashboard/SlideController.new',
   'get /dashboard/slide/edit/:id': 'dashboard/SlideController.edit',
   'post /dashboard/slide': 'dashboard/SlideController.create',
   'post /dashboard/slide/update/:id': 'dashboard/SlideController.update',
   'post /dashboard/slide/delete/:id': 'dashboard/SlideController.delete',
   //Role
   'get /dashboard/role/list/:page': 'dashboard/RoleController.index',
   'get /dashboard/role/new': 'dashboard/RoleController.new',
   'get /dashboard/role/edit/:id': 'dashboard/RoleController.edit',
   'post /dashboard/role': 'dashboard/RoleController.create',
   'post /dashboard/role/update/:id': 'dashboard/RoleController.update',
   'post /dashboard/role/delete/:id': 'dashboard/RoleController.delete',   

   //User
   'get /dashboard/user/list/:page': 'dashboard/UserController.index',
   'get /dashboard/user/new': 'dashboard/UserController.new',
   'get /dashboard/user/edit/:id': 'dashboard/UserController.edit',
   'post /dashboard/user': 'dashboard/UserController.create',
   'post /dashboard/user/update/:id': 'dashboard/UserController.update',
   'post /dashboard/user/delete/:id': 'dashboard/UserController.delete',   

  '/dashboard/user':{view:'dashboard/user/index'},
  '/dashboard/user/new':{view:'dashboard/user/new'},
  '/dashboard/user/edit':{view:'dashboard/user/edit'},

  // Endpoints
  'post /login': 'UserController.login',
  'post /signup': 'UserController.signup',
  '/logout': 'UserController.logout',
};
