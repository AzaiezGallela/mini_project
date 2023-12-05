import React, { useState } from 'react';

function RegisterComponent(props) {
    const [data, setData] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmpass: '',
        birthdate: '',
        gender: '',
    });

    const handleSubmit = e => {
        e.preventDefault();
        alert('Submitted');
    }

    const handleChange = ({target}) => setData({...data, [target.name]: target.value});

    return (
        <div>
            <h1>Register</h1>
            <from onSubmit={handleSubmit}>
                <label htmlFor='fullname'>fullname: </label>
                <input type='text' name='fullname' value={data.fullname} onChange={handleChange}/>

                <label htmlFor='email'>fullname: </label>
                <input type='email' name='email' value={data.email} onChange={handleChange}/>
                
                <label htmlFor='password'>password: </label>
                <input type='password' name='password' value={data.password} onChange={handleChange}/>

                <label htmlFor='confirmpass'>confirm password: </label>
                <input type='password' name='confirmpass' value={data.confirmpass} onChange={handleChange}/>

                <label htmlFor='birthdate'>birthdate: </label>
                <input type='date' name='birthdate' value={data.birthdate} onChange={handleChange}/>

                <label htmlFor='gender'>gender: </label>
                {/* <input type='text' name='gender' value={Data.gender} onChange={handleChange}/> */}
                <select name="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>


            </from>
        </div>
    );
}

export default RegisterComponent;