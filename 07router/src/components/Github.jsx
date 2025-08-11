import React, { useEffect , useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const userData = useLoaderData();
    // const [userData, setUserData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/itzsahil03')
    //         .then( res => res.json())
    //         .then( data => {
    //             console.log(data);
    //             setUserData(data)
    //         })
    // }
    // , []);

    return ( 
        <div>Github Section and the data is : {userData.id}
        <img src={userData.avatar_url} alt="Git Picture" width={300} />
        </div>
     );
}

export default Github;

export async function userLoader() {
    const res = await fetch('https://api.github.com/users/itzsahil03');
    if (!res.ok) {
        throw new Error('Failed to fetch user data');
    }   
    return res.json();
}