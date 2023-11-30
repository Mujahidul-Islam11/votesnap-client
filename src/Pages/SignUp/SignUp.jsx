import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthConext } from "../../AuthProvider/AuthProvider";
import GoogleSignIn from "../../GoogleSignIn/GoogleSignIn";
import AxiosSecure from "../../Hooks/AxiosSecure/AxiosSecure";
import swal from "sweetalert";

const SignUp = () => {
  const { createUser, updateUser, LogOut } = useContext(AuthConext);
  const navigate = useNavigate();
  const axiosSecure = AxiosSecure()
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();
    const date = month + "-" + day +"-" +year;

    createUser(email, password).then((result) => {
      console.log(result.user);
      updateUser(name, photo)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          const userInfo ={
            email: email,
            name: name,
            date: date,
            role: 'User'
          }
          axiosSecure.post('/users', userInfo)
          .then(res => {
            if(res.data.insertedId){
            navigate(result.user && '/login')
            swal("Good job!", "Successfully Created User", "success");
            }
          })
        })
        .catch((error) => {
          console.error(error);
        });
      LogOut()
        .then()
        .then((error) => {
          console.error(error);
        });
    });
  };

  return (
    <div
      className="containe mt-8 max-w-md mx-auto p-6 rounded-md shadow-md"
      style={{ background: "#E4CDFB" }}
    >
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-white w-32 rounded-r-lg">
          Register
        </h2>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Photo Url
          </label>
          <input
            type="url"
            name="photo"
            placeholder="photo url"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Register
        </button>
      </form>
      <GoogleSignIn></GoogleSignIn>
      <h3 className="text-xl text-center">
        Have an account? please{" "}
        <NavLink
          to={"/Login"}
          className="font-bold text-blue-500 hover:underline"
        >
          Login
        </NavLink>
      </h3>
    </div>
  );
};

export default SignUp;
