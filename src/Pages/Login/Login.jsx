/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthConext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";
import GoogleSignIn from "../../GoogleSignIn/GoogleSignIn";

const Login = () => {
  const {SignIn} = useContext(AuthConext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    SignIn(email, password)
    .then(res => {
      console.log(res.user)
      navigate('/')
      swal('Good Job!', 'Successfully logged in', 'success')
    })
    .catch(error =>{
      console.error(error)
      swal({title: 'Something went wrong',text: "Check your password",icon: "warning"})
    })
  };

  return (
    <div
      className="md:container my-8 md:max-w-md mx-4 md:mx-auto p-6 rounded-md shadow-md border"
    >
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4 text-center">Please Login!</h2>
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
          LogIn
        </button>
      </form>
      <GoogleSignIn></GoogleSignIn>
      
      <h3 className="text-xl text-center">Don't have an account? please <NavLink to={'/SignUp'} className="font-bold text-blue-500 hover:underline">SignUp</NavLink></h3>
    </div>
  );
};

export default Login;
