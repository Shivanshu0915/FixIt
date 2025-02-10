const { UserSignupValidate, AdminSignupValidate } = require("../utils/AuthZods");

const login = () => {

}

const signup = (req, res) => {
    const signupData = req.body;
    // console.log(signupData);
    // let parseData = UserSignupValidate.safeParse(signupData);
    // console.log(signupData.isAdmin);

    let parseData;
    console.log(signupData)
    if(signupData.isAdmin === true){
        parseData = AdminSignupValidate.safeParse(signupData);
    }
    else{
        parseData = UserSignupValidate.safeParse(signupData);
    }

    if(!parseData.success){
        res.status(411).json({
            msg : "Validation failed!",
            errors: parseData.error.format()
        })
        return;
    }

    // put it in mongoDB
    res.json({
        msg : "User registered successfully!"
    })
}

module.exports = {
    login,
    signup
}