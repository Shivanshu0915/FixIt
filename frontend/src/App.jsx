import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import Home from "./routes/Home.jsx";
import LoginPage from "./routes/Login.jsx"
import Signup from "./routes/Signup.jsx"
import { StudentMain } from "./routes/Students/StudentMain.jsx";
import OTPPage from "./routes/OTP.jsx";

const App= createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<StudentMain/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        </>
    )
)

export default App;