import swal from "sweetalert";
import AllUsers from "../../../Hooks/AllUsers/AllUsers";
import AxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import { Helmet } from "react-helmet";
import "../../../index.css"

const UserManagment = () => {
  const [users, refetch] = AllUsers();
  const axiosSecure = AxiosSecure()
  const handleAdmin = (user) =>{
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res => {
        if(res.data.modifiedCount> 0){
            refetch()
            swal('Succeded', `${user.name}'s role has been updated`, 'success')
        }
    })
}
  const handleSurveyor = (user) =>{
    axiosSecure.patch(`/users/surveyor/${user._id}`)
    .then(res => {
        if(res.data.modifiedCount> 0){
            refetch()
            swal('Succeded',  `${user.name}'s role has been updated`, 'success')
        }
    })
}
  return (
    <div className="overflow-x-auto mx-10 mt-6 h-screen survey-response">
      <Helmet>
        <title>Dashboard || Manage Users</title>
      </Helmet>
      <table className="table">
        {/* head */}
        <thead className="bg-gradient-to-r from-[#2f71ff77] to-[#2f71ffcb] text-black">
          <tr>
            <th>#</th>
            <th>User Names</th>
            <th>Emails</th>
            <th>Roles</th>
            <th>Registration Dates</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {/* row 1 */}
          {users?.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="">{user.name}</div>
                  </div>
                </div>
              </td>
              <td>
                {user?.email}
                <br />
              </td>
              <td>
                <div className="dropdown dropdown-right">
                  <label tabIndex={0} className="btn m-1">
                    {user.role}
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-26"
                  >
                    <li>
                      <button onClick={()=> handleAdmin(user)}>Admin</button>
                    </li>
                    <li>
                      <button onClick={()=> handleSurveyor(user)}>Surveyor</button>
                    </li>
                  </ul>
                </div>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">{user.date}</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagment;
