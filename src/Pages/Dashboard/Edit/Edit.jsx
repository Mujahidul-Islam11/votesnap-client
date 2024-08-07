import { useContext } from "react";
import { AuthConext } from "../../../AuthProvider/AuthProvider";
import AxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import swal from "sweetalert";


const Edit = () => {
    const axiosSecure = AxiosSecure();
  // eslint-disable-next-line no-unused-vars
  const { user } = useContext(AuthConext);
  const {id} = useParams()
  const { data: edit } = useQuery({
    queryKey: ["edited"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/edit/${user?.email}/${id}`);
      return res.data;
    },
  });
  const handleSubmit = (e) =>{
    e.preventDefault()
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const deadline = form.deadline.value;
    const description = form.description.value;
    const surveyData = {
        title,
        description,
        category,
        deadline,
      };
      console.log(surveyData)
    axiosSecure.patch(`/editsurvey/${edit?._id}`, surveyData)
    .then(res =>{
        if(res.data.modifiedCount > 0){
            swal('','survey updated successfully', 'success')
        }
    })
  }
    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-[#2F71FF] bg-opacity-40 rounded-md shadow-md">
      <h2 className="text-xl md:text-2xl text-center font-semibold mb-6">Update your survey</h2>
      <form onSubmit={handleSubmit} className="text-black">
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            defaultValue={edit && edit?.title}
            placeholder="Title of the survey"
            required
            className="w-full px-4 bg-white py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Deadline
          </label>
          <input
            type="date"
            name="deadline"
            defaultValue={edit && edit?.deadline}
            placeholder="Add survey deadline"
            required
            className="w-full px-4 py-2 border bg-white rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={edit?.description}
            placeholder="Description of the survey"
            required
            className="w-full px-4 py-2 border bg-white rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Category
          </label>
          <select
            name="category"
            required
            className="select bg-white select-bordered w-full max-w-xs"
          >
            <option selected>Technology</option>
            <option>Entertainment</option>
            <option>Science</option>
            <option>Sports</option>
            <option>Education</option>
            <option>Travel</option>
            <option>Fashion</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Update Survey
        </button>
      </form>
    </div>
    );
};

export default Edit;