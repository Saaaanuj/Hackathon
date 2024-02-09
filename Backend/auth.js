const jwt = require('jsonwebtoken')
const secret = 'MESM@N@GMENT'


function GetToken(data)
{   
    token = jwt.sign({
        username:data.username,
        password:data.password
    },secret);
    return token
}

function VerifyUserMiddleWare(req,res,next)
{
    if(!req.body.token) res.redirect('/login');
    try {
        jwt.verify(req.body.token,secret, (err, decoded) => {
            if (err) {
                return res.status(403).json({ success: false, message: 'Failed to authenticate token.' });
            }
            next(); // Proceed to the next middleware
        });       
    } catch (error) {
        return null;
    }
}



module.exports = {
    GetToken,
    VerifyUserMiddleWare
}