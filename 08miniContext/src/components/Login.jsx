import react , {useContext , useState} from "react";
import UserContext from "../contexts/UserContext";

// This component will use the UserContext to access user data


function Login() {
    const [username , setUsername] = useState("");
    const [pass , setPass] = useState("");

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the login logic, e.g., API call
        // For this example, we'll just set a dummy user
        setUser({username: username, password: pass});
    }

    return ( 
        <>
        <div className="align center">
            <h1>Login</h1>
            <input 
                type="text" 
                name="Username" 
                value = {username} 
                onChange = { (e) => setUsername(e.target.value) }
                placeholder="Enter Username"
            />
            <br />
            <br />
            <input 
                type="text"
                name= "password"
                value= {pass} 
                onChange={ (e) => setPass(e.target.value) }
                placeholder="Enter Password "
                />
                <br />
            <button
                className=" mt-1000"
                onClick ={ handleSubmit}> Submit

            </button>
        </div>
        </>
     );    
}

export default Login;