import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import { Helmet } from "react-helmet";

const UserFeedBack = () => {
  const axiosSecure = AxiosSecure();
  
  const { data: reports = [] } = useQuery({
    queryKey: ["Reports"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/surveys`);
      return res.data;
    },
  });
  const reported = reports?.filter(item => item.report)
  console.log(reported)

    return (
      <div>
        <Helmet>
        <title>Dashboard || User Feedback</title>
      </Helmet>
        <h3 className="text-center mt-6 font-bold text-xl">User's Feedback</h3>
        <div className="overflow-x-auto mx-10 mt-6">
          <table className="table">
            {/* head */}
            <thead className="bg-gradient-to-r from-[#2f71ff77] to-[#2f71ffcb] text-black">
              <tr>
                <th>#</th>
                <th>Category</th>
                <th>Survey Title</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {reported?.map((survey, index) => (
                <tr key={survey._id}>
                  <th>{index + 1}</th>
                  <td>{survey.category}</td>
                  <td>{survey.title.slice(0, 25)}</td>
                  <td>{survey.status}</td>
                  <td>
                    <button
                      className="btn btn-primary bg-[#8BE8E5] hover:text-white"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                    >
                      FeedBack
                    </button>
                    <dialog id="my_modal_2" className="modal ">
                      <div className="modal-box bg-white">
                        <p className="py-4">
                          {survey.report}
                        </p>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default UserFeedBack;