import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'name') {
      setName(value);
    } else if (id === 'address') {
      setAddress(value);
    } else if (id === 'phone') {
      setPhone(value);
    } else if (id === 'date') {
      setDate(value);
    } else if (id === 'gender') {
      setGender(value);
    } else if (id === 'email') {
      setEmail(value);
    } else if (id === 'jabatan') {
      setJabatan(value);
    }
  }
  const validation = () => {
    const newError = {};
    if (!name) {
        newError.name = 'Name is required!';
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
        newError.name = 'Name cannot contain numbers';
    }
    if (!address) {
        newError.address = 'Address is  required!';
    } 
    if (!phone) {
        newError.phone = 'Email is required!';
    } else if (!/^\d*$/.test(phone)) {
        newError.phone = 'Invalid Phone';
    } else if (phone.length < 11) {
      newError.phone = 'Phone must be at least 11 characters long'
    }
     if (!date) {
        newError.date = 'Date is required!';
     } 
    if (!gender) {
        newError.gender = 'Gender is required!';
    } else if (!['Laki-laki', 'Perempuan', 'Non-biner', 'Lainnya'].includes(gender)) {
      newError.gender = 'Invalid Gender';
    }
    if (!email) {
      newError.email = 'Email is required!';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newError.email = 'Invalid Email!';
    }
    if (!jabatan) {
      newError.jabatan = 'Jabatan is required!'
    } else if (!/^[A-Za-z\s]+$/.test(jabatan)) {
      newError.jabatan = 'Jabatan cannot contain numbers'
    }
    setError(newError);
    return Object.keys(newError).length === 0;
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      alert('Successfull!')
      console.log({name, address, phone, date, gender, email, jabatan});
      console.log('Success!!');
      navigate('/finish');
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <form onSubmit={handleSubmit} className='p-6 rounded-lg border shadow-md w-full max-w-xl gap-5'>
            <h1 className='text-3xl text-center font-serif font-bold'>Add Karyawan</h1>
            {error.form && <p className='text-red-500 text-center mb-4'>{error.form}</p>}
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
                <h1 className='text-start font-semibold'>Address</h1>
                <input 
                id='address' 
                type='text' 
                value={address}
                placeholder='Address' 
                onChange={handleChange}
                className='w-full px-2 py-1 mb-4 border border-gray-400 rounded'
                /> 
                {error.address && <p className='text-red-500 text-sm'>{error.address}</p>}
                <h1 className='text-start font-semibold'>Phone</h1>
                <input 
                id='phone' 
                type='tel' 
                value={phone}
                placeholder='Phone' 
                onChange={handleChange}
                className='w-full px-2 py-1 mb-4 border border-gray-400 rounded'
                /> 
                {error.phone && <p className='text-red-500 text-sm'>{error.phone}</p>}
                <h1 className='text-start font-semibold'>Date of Birth</h1>
                <input 
                id='date' 
                type='date' 
                value={date}
                placeholder='Date of Birth' 
                onChange={handleChange}
                className='w-full px-2 py-1 mb-4 border border-gray-400 rounded'
                /> 
                {error.date && <p className='text-red-500 text-sm'>{error.date}</p>}
                <h1 className='text-start font-semibold'>Gender</h1>
                <input 
                id='gender' 
                type='text' 
                value={gender}
                placeholder='Gender' 
                onChange={handleChange}
                className='w-full px-2 py-1 mb-4 border border-gray-400 rounded'
                /> 
                {error.gender && <p className='text-red-500 text-sm'>{error.gender}</p>}
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
                 <h1 className='text-start font-semibold'>Jabatan</h1>
                <input 
                id='jabatan' 
                type='text' 
                value={jabatan}
                placeholder='Jabatan' 
                onChange={handleChange}
                className='w-full px-2 py-1 mb-4 border border-gray-400 rounded'
                /> 
                {error.jabatan && <p className='text-red-500 text-sm'>{error.jabatan}</p>}
            </div>
            <div>
                <button type='submit' className='w-full px-2 py-1 bg-blue-700 text-white font-semibold text-center border shadow-md rounded'>Simpan</button>
            </div>
        </form>
    </div>
  )
}

export default Create