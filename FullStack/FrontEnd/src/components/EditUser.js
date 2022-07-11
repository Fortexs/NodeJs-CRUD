import React,{useState, useEffect} from 'react';
import axios from 'axios';
// useParams = mengambil id dari parameter
import {useNavigate, useParams} from "react-router-dom"

const EditUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Female");
    const navigate = useNavigate();
    // params
    const {id} = useParams();

    
    // panggil function didalam useeffect
    useEffect(() => {
        getUserById();
    }, []);

    const updateUser = async (e) =>{
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:8080/users/${id}`,{
                name,
                email,
                gender
            });
            navigate("/");
        } catch (error) {
            console.log(error);

        }
    };

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:8080/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setGender(response.data.gender);
    }


  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half"></div>
        <form onSubmit={updateUser}>
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
                <button type='submit' className='button is-succes'>Update</button>
            </div>
        </form>
    </div>
  )
}

export default EditUser