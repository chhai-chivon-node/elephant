module.exports.routes = {

  // HTML Views
  'get /login': { view: 'user/login' },
  'get /signup': { view: 'user/signup' },
  '/welcome': { view: 'user/welcome' },

  '/': {
    view: 'index'
  },

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

  '/dashboard/category':{view:'dashboard/category/index'},
  '/dashboard/category/new':{view:'dashboard/category/new'},
  '/dashboard/category/edit':{view:'dashboard/category/edit'},

  '/dashboard/product':{view:'dashboard/product/index'},
  '/dashboard/product/new':{view:'dashboard/product/new'},
  '/dashboard/product/edit':{view:'dashboard/product/edit'},

  '/dashboard/user':{view:'dashboard/user/index'},
  '/dashboard/user/new':{view:'dashboard/user/new'},
  '/dashboard/user/edit':{view:'dashboard/user/edit'},

  '/dashboard/partner':{view:'dashboard/partner/index'},
  '/dashboard/partner/new':{view:'dashboard/partner/new'},
  '/dashboard/partner/edit':{view:'dashboard/partner/edit'},

  '/dashboard/slide':{view:'dashboard/slide/index'},
  '/dashboard/slide/new':{view:'dashboard/slide/new'},
  '/dashboard/slide/edit':{view:'dashboard/slide/edit'},

  // Endpoints
  'post /login': 'UserController.login',
  'post /signup': 'UserController.signup',
  '/logout': 'UserController.logout',



  'post /categories/create':'CategoryController.create'
};
