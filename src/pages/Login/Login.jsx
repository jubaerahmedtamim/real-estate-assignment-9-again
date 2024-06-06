import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    const { signInUser, googleLogin, githubLogin, } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, } = useForm()
    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const { email, password, } = data;
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("You have successfully logged in.")
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error.message);
                if (error) {
                    toast.error("Email or password didn't matched with registered account.")
                }
            })
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                toast.success("Logged in successfully using google.")
                navigate(location?.state ? location.state : '/');
            })
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                console.log(result.user);
                toast.success("Logged in successfully using github.")
                navigate(location?.state ? location.state : '/');
            })
    }
    return (
        <div className='my-6 max-w-lg mx-auto'>
            <h3 className='text-4xl font-semibold text-center'>Please Login</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                    {errors.email && <span className='text-red-600 text-sm'>This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
                    {errors.password && <span className='text-red-600 text-sm'>This field is required</span>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className='text-center'>Don't have an account? <Link to='/register' className='text-blue-600 font-bold'>Register</Link></p>
            <div className="divider">OR</div>
            {/* social login part */}
            <div >
                <p className='text-center'>Login using social account.</p>
                <div className='flex gap-4 justify-center mt-4'>
                    <button onClick={handleGoogleLogin} className='btn  btn-outline text-xl flex gap-2 items-center'>
                        <FaGoogle></FaGoogle> Google
                    </button>
                    <button onClick={handleGithubLogin} className='btn  btn-outline text-xl flex gap-2 items-center'>
                        <FaGithub></FaGithub> Github
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;