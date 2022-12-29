import React from 'react';
import { Link } from 'react-router-dom';
import Register from '../Register/Register';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6 font-semibold">TalkDiary helps you connect and share with the people in your life.</p>
                    </div>
                    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white ">Log in</button>
                            </div>
                            <p className='text-center font-semibold'>or,</p>

                            <div className="form-control ">
                                <button className="btn btn-primary text-white ">Login with google</button>
                            </div>
                            <hr className='mt-5 bg-black' />

                            <small className='text-center'>New in TalkDiary? <Link className='underline text-blue-900' to='/register'>Sign up</Link></small>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;