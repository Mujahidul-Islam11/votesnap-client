/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { AuthConext } from "../../../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

const UserProfile = () => {
  const { user, updateUser } = useContext(AuthConext);
  const [isEditing, setIsEditing] = useState(false);
  
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    updateUser(name, photo)
    .then(res => {
        swal('Profile Updated', 'success')
    })
    .catch(err =>{
        swal('Something Went Wrong', 'warning')
    })
  };

  return (
    <div className="md:max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
      <Helmet>
        <title>Dashboard || {user.displayName}'s Profile</title>
      </Helmet>
      <div className="text-center mb-4">
        <img
          src={user.photoURL}
          alt="Profile"
          className="mx-auto w-20 h-20 rounded-full mb-2"
        />
        <h2 className="text-xl font-semibold">{user.displayName}</h2>
        <p className="">{user.email}</p>
      </div>

      <div className="text-center">
        {isEditing ? (
          <div>
            <form method="dialog" onSubmit={handleUpdateProfile}>
              <div className="mb-4">
                <label className="block ">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user.displayName}
                  className="w-full border border-gray-300 bg-white rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block "
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={user.photoURL}
                  className="w-full border bg-white border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>

              
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
              <button
                type="submit"
                onClick={() => setIsEditing(false)}
                className="bg-blue-500 ml-3 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                x
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setIsEditing(true)}
            >
              <FaUserEdit className="inline-block mr-2" />
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
