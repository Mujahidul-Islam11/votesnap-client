import { useContext } from "react";
import { AuthConext } from "../../../AuthProvider/AuthProvider";
import AxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const CreateSurvey = () => {
  const { user } = useContext(AuthConext);
  const axiosSecure = AxiosSecure();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const deadline = form.category.deadline;
    const likeCount = 0;
    const dislikeCount = 0;
    const yesVoted = 0;
    const noVoted = 0;
    const status = 'Pending';
    const email = user.email;
    const surveyId = Math.floor(Math.random() * 100000) + 1;
    console.log(
      title,
      description,
      category,
      email,
      likeCount,
      dislikeCount,
      deadline
    );
    const surveyData = {
      title,
      description,
      category,
      email,
      likeCount,
      dislikeCount,
      yesVoted,
      noVoted,
      status,
      surveyId,
      deadline
    };
    axiosSecure.post("/surveys", surveyData).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        swal(
          "Great Job!",
          "Yoo your survey has been created successfully",
          "success"
        );
        navigate('/dashboard/manageSurveys')
      }
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-[#E4CDFB] rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create Survey</h2>
      <form onSubmit={handleSubmit} className="text-black ">
        <div className="mb-4">
          <label className="block  text-sm font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Title of the survey"
            className="w-full px-4 py-2 bg-white border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-medium mb-2">
            Deadline
          </label>
          <input
            type="date"
            name="deadline"
            placeholder="Add survey deadline"
            className="w-full px-4 py-2 border bg-white rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-medium mb-2">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Description of the survey"
            className="w-full px-4 py-2 bg-white border rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-medium mb-2">
            Category
          </label>
          <select
            name="category"
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
          Create Survey
        </button>
      </form>
    </div>
  );
};

export default CreateSurvey;
