import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';
import Register from '../Register/Register';

const Login = () => {
    //error message
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const { googleSignIn, loading, login } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    //google Provider
    const provider = new GoogleAuthProvider();

    //userLogIn
    const handleUserLogIn = (data) => {
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                const err = setError(error.message);
            })
    }

    //googleLogIn
    const handleGoogleLogIn = () => {
        googleSignIn(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6 font-semibold">TalkDiary helps you connect and share with the people in your life.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleUserLogIn)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email")} type="email" placeholder="your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password")} type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {
                                error &&
                                <p className='text-red-600'>{error}</p>
                            }

                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white ">Log in</button>
                            </div>
                            <p className='text-center font-semibold'>or,</p>

                            <div className="form-control ">
                                <button onClick={handleGoogleLogIn} className="btn btn-primary text-white ">Login with google</button>
                            </div>
                            <hr className='mt-5 bg-black' />

                            <small className='text-center'>New in TalkDiary? <Link className='underline text-blue-900' to='/register'>Sign up</Link></small>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;