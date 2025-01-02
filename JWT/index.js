const jwt= require('jsonwebtoken');
const jwtPassword="secret";
const zod= require("zod");

const emailSchema= zod.string().email();
const passwordSchema= soz.string().min(6);

function signJwt(username, password) {
    const usernameResponse= emailSchema.safeParse(username);
    const passwordResponse= passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success) {
       return null; 
    }

    const signature= jwt.sign({
        username
    }, jwtPassword)
    return signature;
}

function decodeJwt(token) {
    //token can be decided without the password -"secret"
    //returns a value or Null
    const decoded= jwt.decode(token);
    if(decoded) return true;
    else return false;
}

function verifyJwt(token) {
    //token can be verified only with the password -"secret"
    //this function throws an exception
    let ans= true;
    try {
        jwt.verify(token, jwtPassword);
    } catch (e) {
        ans= false;
    }
    return ans;
}