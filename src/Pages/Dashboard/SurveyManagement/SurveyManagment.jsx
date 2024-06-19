import swal from "sweetalert";
import UseSurveyAdmin from "../../../Hooks/AdminSurveyManagement/UseSurveyAdmin";
import AxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import { Helmet } from "react-helmet";
import "../../../index.css"

const SurveyManagment = () => {
  const [surveys, refetch] = UseSurveyAdmin();
  const axiosSecure = AxiosSecure();

  const handlePublish = (publish) => {
    axiosSecure.patch(`/surveys/publish/${publish._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        swal("Great", "Survey published successfully", "success");
      }
    });
  };
  const handleUnPublish = (unPublish) => {
    axiosSecure.patch(`/surveys/unPublish/${unPublish._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        swal("Give your feedback", {
          content: "input",
        }).then((value) => {
          axiosSecure
            .put(`/sur/feedback/${unPublish._id}`, {
              feedback: value
            })
            .then((res) => {
              if (res.data.modifiedCount> 0) {
                swal(`Your feedback has been sended`);
              }
            });
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto mx-10 mt-6 h-screen survey-response">
      <Helmet>
        <title>Dashboard || Survey Management</title>
      </Helmet>
      <div className="">
        <table className="table">
          {/* head */}
          <thead className="bg-blue-300 text-black">
            <tr>
              <th>#</th>
              <th>Surveyor Email</th>
              <th>Category</th>
              <th>Survey Title</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {surveys?.map((survey, index) => (
              <tr key={survey._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-semibold">{survey.email}</div>
                    </div>
                  </div>
                </td>
                <td>{survey.category}</td>
                <td>{survey.title.slice(0, 25)}</td>
                <td>{survey.status}</td>
                <th className="flex">
                  <button
                    onClick={() => handlePublish(survey)}
                    className="btn btn-ghost bg-[#2F71FF] text-white mr-3"
                  >
                    Publish
                  </button>
                  <button
                    onClick={() => handleUnPublish(survey)}
                    className="btn btn-ghost bg-red-300"
                  >
                    UnPublish
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SurveyManagment;
