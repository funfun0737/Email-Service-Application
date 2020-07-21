module.exports={
//  googleBrowserClientID:'1038649057000-903sodc6070ag7rstb0r531tlsbjobp3.apps.googleusercontent.com',
//  googleBrowserClientSecret:'S4nrPTD10hM99unm7eCPOcUK',

  googleClientID:process.env.GOOGLE_CLIENT_ID,
  googleClientSecret:process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey:process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey:process.env.STRIPE_SECRET_KEY,
  sendGridKey:process.env.SEND_GRID_KEY,
  redirectDomain:process.env.REDIRECT_DOMAIN

  //mongodb+srv://myuser:3707I3l4@cluster0-lstuh.mongodb.net/test?retryWrites=true&w=majority
  //369038054459-j2abtv90ucmie180brc1079decb2bkd5.apps.googleusercontent.com
  //0SshN75jMjUOjybgGeZRqXRy
};
