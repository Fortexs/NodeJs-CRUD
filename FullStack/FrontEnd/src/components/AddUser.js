import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Female");
    // Navigate digunakan untuk tombol Tag <Link to=''></Link>
    const navigate = useNavigate();

    const saveUser = async (e) =>{
        // prevent default berfungsi sebagai tidak membaca Href
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/users',{
                name,
                email,
                gender
            });
            // fungsi dari Redirect
            navigate("/");
        } catch (error) {
            console.log(error);

        }
    }


  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half"></div>
        <form onSubmit={saveUser}>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="input" placeholder='Name' />
                </div>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className="input" placeholder='Email'/>
                </div>
            </div>
            <div className="field">
                <label className="label">Gender</label>
                <div className="control">
                    <div className="select is-fullwidth">
                   <select name="" id="" value={gender} onChange={(e)=> setGender(e.target.value)}>
                       <option value="Male">Male</option>
                       <option value="Female">Female</option>
                   </select>
                </div>
                </div>
            </div>
            <div className="field">
                <button type='submit' className='button is-succes'>Save</button>
            </div>
        </form>
    </div>
  )
}

export default AddUser