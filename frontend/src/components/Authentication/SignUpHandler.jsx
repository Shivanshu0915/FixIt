import axios from "axios";

// Using axios

export const UserSignUpHandler = async (props) => {
    console.log(props);
    try{
        const response = await axios.post("http://localhost:3000/auth/signup", props , {
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log("Response", response.data);
        alert("User signed up successfully!");
    } 
    catch (error) {
        if (error.response && error.response.data.errors) {
            const errors = error.response.data.errors;
    
            // Check for email validation error
            if(errors.phone){
                alert(errors.phone._errors[0]);
            }
            else if (errors.email) {
                alert(errors.email._errors[0]); // Show error to user
            } 
            else if (errors.password) {
                alert(errors.password._errors[0]); // Show password error
            }
            else {
                alert("Signup failed. Please check your inputs.");
            }
        } 
        else{
            console.error("Error signing up:", error);
            alert("Signup failed. Check your credentials.");
        }
        
    }
};


export const AdminSignUpHandler = async (props) => {
    // console.log(props);
    try{
        const response = await axios.post("http://localhost:3000/auth/signup", props , {
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log("Response", response.data);
        alert("User signed up successfully!");
    } 
    catch (error) {
        if (error.response && error.response.data.errors) {
            const errors = error.response.data.errors;
    
            // Check for email validation error
            if(errors.phone){
                alert(errors.phone._errors[0]);
            }
            else if (errors.email) {
                alert(errors.email._errors[0]); // Show error to user
            } 
            else if (errors.password) {
                alert(errors.password._errors[0]); // Show password error
            }
            else {
                alert("Signup failed. Please check your inputs.");
            }
        } 
        else{
            console.error("Error signing up:", error);
            alert("Signup failed. Check your credentials.");
        }
    }
};

