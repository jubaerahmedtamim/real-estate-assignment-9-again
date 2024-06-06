
import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Spinner from '../../components/Spinner/Spinner';

const UpdateProfile = () => {
    const { updateUserInfo, user,loading } = useContext(AuthContext);

    const {register,handleSubmit,} = useForm()

    const onSubmit = (data) => {
        const {name, image_url } = data;
        updateUserInfo(name, image_url)
            .then(() => {
                toast.success('Profile updated successfully');
            })
            .catch(error => {
                toast.error('Error updating profile');
            })
    }

    if(loading) {
        return <Spinner></Spinner>;
    }
    return (
        <div className='my-6 max-w-lg mx-auto'>
            <h3 className='text-4xl font-semibold text-center'>Update Your Profile</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name")} type="text" defaultValue={user?.displayName || ''} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email")} type="email" defaultValue={user?.email}  className="input input-bordered" disabled/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input {...register("image_url")} type="text" defaultValue={user?.photoURL || ''} className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;