var emailExistence = require('email-existence');
emailExistence.check('burstvn@gmail.com',function(err,reponse){
    console.log(reponse)
});