import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL } = user;
    return (
        <div className="flex flex-col items-center border border-gray-300 p-4 rounded-lg  mx-auto">
            <div className="mr-4">
                <img
                    src={photoURL}
                    alt={`${user.displayName}'s profile`}
                    className="rounded-full w-20 h-20"
                />
            </div>
            <div>
                <h2 className="text-xl font-semibold">Name: {displayName ? displayName : "not available"}</h2>
                <p className="text-gray-600">Email: {email}</p>
            </div>
        </div>
    );
};

export default UserProfile;