import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'username') {
            setUsername(value);
        }   else if (id === 'password') {
            setPassword(value);
        }
    }

    const validation = () => {
        const newError = {};
        if (!username) {
            newError.username = 'Username is  required!';
        } else if (username.length < 3) {
            newError.username = 'Username must be at least 3 characters long.';
        } else if (!/^[A-Za-z0-9_]+$/.test(username)) {
            newError.username = 'Username cannot contain space';
        }

         if (!password) {
            newError.password = 'Password is required!';
         } else if (password.length < 6) {
            newError.password = 'Password must be at least 6 characters long.';
        }

        setError(newError);
        return Object.keys(newError).length === 0;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (validation()) {
            const storedUser = JSON.parse(localStorage.getItem('user'))
            if (!storedUser || storedUser.username !== username || storedUser.password !== password) {
                setError({ ...error, form: 'Invalid username or password.'});
                return;
            }
            alert('Login successfull!')
            console.log('Login successful!')
            navigate('/create')   
        }       
    };

  return (
    <div className='flex items-center justify-center min-h-screen'>
        <form onSubmit={handleSubmit} className='bg-purple-300 p-6 rounded-lg border shadow-md w-full max-w-sm gap-5'>
            <h1 className='text-3xl text-center font-bold'>Login Form</h1>
            {error.form && <div className='text-red-500 text-center mb-4'>{error.form}</div>}
                <label>Username</label>
                <input
                id='username'
                type='text'
                value={username}
                placeholder='Username'
                onChange={handleChange}
                className='w-full px-2 py-1 mb-4 border border-gray-400 rounded'
                //required
                />
                {error.username && <div className='text-red-500 mb-4'>{error.username}</div>}
                <label>Password</label>
                <input
                id='password'
                type='password'
                value={password}
                placeholder='Password'
                onChange={handleChange}
                className='w-full px-2 py-1 mb-4 border border-gray-400 rounded'
                //required
                />
                {error.password && <div className='text-red-500 mb-4'>{error.password}</div>}
            <div>
                <button type='submit' className='w-full bg-blue-700 text-white font-semibold text-center border shadow-md rounded'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login