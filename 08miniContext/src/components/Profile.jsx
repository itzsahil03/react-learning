import react , {useContext} from "react";
import UserContext from "../contexts/UserContext";

function Profile() {

    const {user} = useContext(UserContext);

    if (!user) {
        return <div>Please log in to view your profile.</div>;
    }
    return ( 
        <div> Welcome User : {user.username} </div>
     );
}


export default Profile;