import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';

const Register = () => {
    const { createAccount, googleSignIn, loading, userUpdate } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');

    const navigate = useNavigate();

    if (loading) {
        return <p>loading...</p>
    }

    //create user account
    const handleCreateUserAccount = (data) => {
        createAccount(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUserUpdateProfile(data.name, data.photo);
                newUserInfo(data.name, data.email, data.university, data.address);
                alert('successfully signup');
                navigate('/');
            })
            .catch(error => {
                const err = setError(error.message);
            })
    }

    //new user info
    const newUserInfo = (name, email, university, address) => {
        const newUser = {
            name,
            email,
            university,
            address
        }
        fetch('https://y-mu-umber.vercel.app/newUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
            .catch(error => {
                console.log(error);
            })
    }

    //updateUser
    const handleUserUpdateProfile = (name, photo) => {
        const info = {
            displayName: name,
            photoURL: photo,
        }
        userUpdate(info)
            .then(() => {

            })
            .catch(error => {

            })
    }

    //google Provider
    const provider = new GoogleAuthProvider();

    //google log in
    const handleGoogleLogIn = () => {
        googleSignIn(provider)
            .then(result => {
                const user = result.user;
                if (user) {
                    alert('Successfully Login!!');
                    navigate('/');
                }
            })
            .catch(error => console.log(error));
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse w-full">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleCreateUserAccount)} className="card-body">
                            <h1 className='text-center text-4xl font-bold'>Sign up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name")} type="text" placeholder="your  name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input {...register("photo")} type="text" placeholder="your photo" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">University</span>
                                </label>
                                <input {...register("university")} type="text" placeholder="your current institute" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input {...register("address")} type="text" placeholder="your current address" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email")} type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password")} type="password" placeholder="password" className="input input-bordered" />

                            </div>
                            {
                                error &&
                                <p className='text-red-600'>{error}</p>
                            }
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white ">Sign up</button>
                            </div>
                            <p className='text-center font-semibold'>or,</p>

                            <div className="form-control ">
                                <button onClick={handleGoogleLogIn} className="btn btn-primary text-white ">Login with google</button>
                            </div>
                            <hr className='mt-5 bg-black' />

                            <small className='text-center'>Already have an account? <Link className='underline text-blue-900' to='/login'>Log in</Link></small>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;