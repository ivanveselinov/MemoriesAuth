import jwt, { decode } from 'jsonwebtoken';
    //request //response //do something and move to next thing
const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500; // if token is greater then 500 then we are going with Google Auth else Login Sign up

        let decodedData;
                    //Working with our login and else is with Google Auth
        if(token && isCustomAuth){  //token and secret -> must be same secret 
            decodedData = jtw.verify(token, 'test'); 

            req.userId = decodedData?.id;
        }else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;  //sum is google name for some specific id!
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;
// Next and middleWare what is for ????
// if some User wants for like some posts,
// then when he click the button is going to auth middleware and checking if
// he has permission to like or do what ever with someprogram 
// That is why we should have next(); at the end. 
