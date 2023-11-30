import { useContext } from "react";
import { AuthConext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import AxiosSecure from "../Hooks/AxiosSecure/AxiosSecure";

const GoogleSignIn = () => {
  const {GoogleSignIn} = useContext(AuthConext);
  const navigate = useNavigate();
  const axiosSecure = AxiosSecure()
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; 
  const year = currentDate.getFullYear();
  const date = month + "-" + day +"-" +year;

  const handleGoogleSubmit = () => {
    GoogleSignIn()
      .then((result) => {
        console.log(result.user);
        const userInfo ={
          email: result.user.email,
          name: result.user.displayName,
          date: date,
          role: 'user'
        }
        axiosSecure.post('/users', userInfo)
        .then(res => {
          if(res.data.insertedId){
          navigate(result.user && '/')
          swal("Good job!", "Successfully signed In With Google", "success");
          }
          else{
            navigate(result.user && '/')
            swal("Good job!", "Successfully signed In With Google", "success");
          }
        })
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="mt-4 text-center">
      <button onClick={handleGoogleSubmit} className="bg-red-600 text-white p-3 btn rounded-md hover:bg-red-700 focus:outline-none">
        Sign Up with Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
