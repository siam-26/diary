import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse w-full">

                    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className='text-center text-4xl font-bold'>Sign up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="your  name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="your photo" className="input input-bordered" />
                            </div>

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

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white ">Sign up</button>
                            </div>
                            <p className='text-center font-semibold'>or,</p>

                            <div className="form-control ">
                                <button className="btn btn-primary text-white ">Login with google</button>
                            </div>
                            <hr className='mt-5 bg-black' />

                            <small className='text-center'>Already have an account? <Link className='underline text-blue-900' to='/login'>Log in</Link></small>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;