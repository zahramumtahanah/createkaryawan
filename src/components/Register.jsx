import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'name') {
            setName(value);
        } else if (id === 'username') {
            setUsername(value);
        } else if (id === 'email') {
            setEmail(value);
        } else if (id === 'password') {
            setPassword(value);
        } else if (id === 'confirmPassword') {
            setConfirmPassword(value);
        }
    };

    const validation = () => {
        const newError = {};
        if (!name) {
            newError.name = 'Name is required!';
        } else if (!/^[A-Za-z\s]+$/.test(name)) { 
            newError.name = 'Name cannot contain numbers';
        }

        if (!username) {
            newError.username = 'Username is  required!';
        } else if (username.length < 3) {
            newError.username = 'Username must be at least 3 characters long.';
        } else if (!/^[A-Za-z0-9_]+$/.test(username)) {
            newError.username = 'Username cannot contain space';
        }

        if (!email) {
            newError.email = 'Email is required!';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newError.email = 'Invalid Email!';
        }

        if (!password) {
            newError.password = 'Password is required!';
        } else if (password.length < 6) {
            newError.password = 'Password must be at least 6 characters long.';
        }

        if (password !== confirmPassword) {
            newError.confirmPassword = 'Passwords do not match.';
        }

        setError(newError);
        return Object.keys(newError).length === 0;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (validation()) {
            localStorage.setItem('user', JSON.stringify({ username, password }));
            console.log({ name, username, email, password, confirmPassword });
            console.log('Register successful!');
            navigate('/login');
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <form onSubmit={handleSubmit} className='bg-purple-300 p-6 rounded-lg border shadow-md w-full max-w-sm gap-5'>
                <h1 className='text-3xl text-center font-bold'>Signup Form</h1>
                <div className='mt-2'>
                    <h1 className='text-start font-semibold'>Nama Lengkap</h1>
                    <input
                        id='name'
                        type='text'
                        value={name}
                        placeholder='Nama Lengkap'
                        onChange={handleChange}
                        className='w-full px-2 py-1 mb-4 border border-gray-400 rounded'
                    />
                    {error.name && <p className='text-red-500 text-sm'>{error.name}</p>}
                </div>
                <div className='mt-2'>
                    <h1 className='text-start font-semibold'>Username</h1>
                    <input
                        id='username'
                        type='text'
                        value={username}
                        placeholder='Username'
                        onChange={handleChange}
                        className='w-full px-2 py-1 mb-4 border border-gray-400 rounded'
                    />
                    {error.username && <p className='text-red-500 text-sm'>{error.username}</p>}
                </div>
                <div className='mt-2'>
                    <h1 className='text-start font-semibold'>Email</h1>
                    <input
                        id='email'
                        type='text'
                        value={email}
                        placeholder='Email'
                        onChange={handleChange}
                        className='w-full px-2 py-1 mb-4 border border-gray-400 rounded'
                    />
                    {error.email && <p className='text-red-500 text-sm'>{error.email}</p>}
                </div>
                <div className='mt-2'>
                    <h1 className='text-start font-semibold'>Password</h1>
                    <input
                        id='password'
                        type='password'
                        value={password}
                        placeholder='Password'
                        onChange={handleChange}
                        className='w-full px-2 py-1 mb-4 border border-gray-400 rounded'
                    />
                    {error.password && <p className='text-red-500 text-sm'>{error.password}</p>}
                </div>
                <div className='mt-2'>
                    <h1 className='text-start font-semibold'>Confirm Password</h1>
                    <input
                        id='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        placeholder='Password'
                        onChange={handleChange}
                        className='w-full px-2 py-1 mb-4 border border-gray-400 rounded'
                    />
                    {error.confirmPassword && <p className='text-red-500 text-sm'>{error.confirmPassword}</p>}
                </div>
                <div>
                    <button type='submit' className='w-full bg-blue-700 text-white font-semibold text-center border shadow-md rounded'>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register