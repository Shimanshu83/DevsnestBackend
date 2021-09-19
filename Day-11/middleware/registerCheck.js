const {emailValidator , passwordValidator} = require('../util/validate');

const registerInitailCheck = (req , res , next ) => {
    const {email, password , confirmPassword} = req.body ; 
    if (
        typeof email === 'string' && 
        typeof password === 'string' && 
        typeof confirmPassword === 'string' && 
        password === confirmPassword &&
        emailValidator(email) && 
        passwordValidator(password) 
    )
    {
        next() ; 
    }
    else {
        res.status(401).send('Initial Cheks are failed') ; 
    }

}

module.exports = registerInitailCheck ; 