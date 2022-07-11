// patch data dari backend
import React, {useState, useEffect} from 'react';
// axios untuk ointeraksi dengan API
import axios from "axios";

import { Link } from 'react-router-dom';

// state baru
const UserList = () => {
    // fungsi untuk update state (empty array adalah inisial value)
    const[users, setUser] = useState([]); 

// function use effect home (diparameter kedua ada empty array dependensi artinya save nya berjalan disaat komponen monted ke dom)
    useEffect(() =>{
        getUsers();
    },[]);

    // method patch data menggunakan asinkronus fungsi
    const getUsers = async () => {
        const response = await axios.get('http://localhost:8080/users');
        setUser(response.data);
    }

    const deleteUser = async (id) =>{
        try{
            await axios.delete(`http://localhost:8080/users/${id}`);
            getUsers();
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <Link to={`add`} className="button is-succes">Add New</Link>
        {/* table>(thead>tr>th*5)+(tbody>tr>td*5) */}
        <table className='table is-stripedis fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                     <tr key={user.id}>
                     <td>{index + 1}</td>
                     <td>{user.name}</td>
                     <td>{user.email}</td>
                     <td>{user.gender}</td>
                     <td>
                         <Link to={`edit/${user.id}`} className='button is-small is-info'>EDIT</Link>
                         <button onClick={()=> deleteUser(user.id)} className='button is-small is-danger'>DELETE</button>
                     </td>
                 </tr>
                ))}
               
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default UserList