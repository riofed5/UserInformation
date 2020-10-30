import React, {useState, useEffect} from 'react'
import UserItem from '../UserList/UserItem/UserItem';
import Loading from '../Loading/Loading';

const UserList = () => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {

        // Define function to fetch all users
        const fetchData = async () => {

            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await res.json();

                setUsers(data);
                setLoading(false);
            } catch (err) {
                console.log(err)
            }

        }

        // Fetch data of users 
        await fetchData();

    }, []);

    return (
        <div className="user-list">
            {/* Loading */}
            {loading && <Loading />}

            {/* Fetch data successfully */}
            {users && !loading && users.map(user =>
                <UserItem userInfo={user} key={user.id}/>
            )}

        </div>
    )
}

export default UserList;
