import jwt from 'jsonwebtoken'

const singleToken =(user)=>{
    return jwt.sign(user,process.env.JWT_SECRET,{
        expiresIn: '30',
    });
};
export { singleToken };