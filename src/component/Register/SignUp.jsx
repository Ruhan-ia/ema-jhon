import React, { useState } from 'react';
import './SIgnUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [error, setError] = useState('')
    const handleSIgnUp = event =>{
        event.preventDefault();
        const form =event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)

        if(password !== confirm){
            setError('Please check the password')
            return
        }
        else if(password.length < 6){
            setError('please give more than 5 characters')
            return
        }
    }
    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign up</h2>
        <form onSubmit={handleSIgnUp}>
            <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required/>
            </div>
            <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" required/>
            </div>
            <div className='form-control'>
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" id="" required/>
            </div>

            <input className='btn-submit' type="submit" value="Sign Up" />
        </form>
        <p><small>Already have an account? Please<Link to='/login'> Login</Link></small></p>
        <p className='btn-error'>{error}</p>
    </div>
    );
};

export default SignUp;