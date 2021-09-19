/**
 * There will be two fuctions one for email 
 * validation and another for password validatoin
 */


const emailValidator = (email) => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ ;
    return re.test(email) ; 
}

const passwordValidator = (password) =>{
    const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    return re.test(password) ; 
}

module.exports = {
    emailValidator, 
    passwordValidator
}