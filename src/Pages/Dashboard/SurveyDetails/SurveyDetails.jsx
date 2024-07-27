/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom";
import AxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import {
  FaComment,
  FaFlag,
  FaQuestionCircle,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { useContext } from "react";
import { AuthConext } from "../../../AuthProvider/AuthProvider";
import swal from "sweetalert";
import AxiosOpen from "../../../Hooks/AxiosSecure/AxiosOpen";
import Swal from "sweetalert2";
import UseAdmin from "../UseAdmin/UseAdmin";
import moment from "moment/moment";
import UserPieChart from "../../UserPieChart/UserPieChart";
import { Helmet } from "react-helmet";

const SurveyDetails = () => {
  const { user } = useContext(AuthConext);
  const [userRole] = UseAdmin();
  const { id } = useParams();
  const newDate = moment().format("YYYY-MM-DD");
  console.log(newDate);

  const axiosPublic = AxiosOpen();
  const { data, refetch } = useQuery({
    queryKey: ["details"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/details/${id}`);
      return res.data;
    },
  });

  const handleLike = (like) => {
    const updateLike = like.likeCount;
    const likeCount = Number(updateLike);

    axiosPublic.patch(`/details/${like._id}`, { likeCount }).then((res) => {
      refetch();
      if (res.data.modifiedCount > 0) {
        console.log(res.data);
      }
    });
  };

  const handleDisLike = (dislike) => {
    const updateLike = dislike.dislikeCount;
    const dislikeCount = Number(updateLike);
    axiosPublic
      .patch(`/dislike/${dislike._id}`, { dislikeCount })
      .then((res) => {
        refetch();
        if (res.data.modifiedCount > 0) {
          console.log(res.data);
        }
      });
  };

  // comment handler

  const { data: commentsData = [], refetch: commentRefetch } = useQuery({
    queryKey: ["commentData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/comments`);
      return res.data;
    },
  });
  const commentsId = commentsData.filter(
    (item) => item?.surveyId === data?.surveyId
  );
  const handleDoneComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const comments = form.comments.value;
    const email = user?.email;
    const photo = user?.photoURL;
    const name = user?.displayName;

    const commentData = {
      comments,
      email,
      photo,
      name,
      surveyId: data.surveyId,
    };
    axiosPublic.post(`/comments`, commentData).then((res) => {
      commentRefetch();
      if (res.data.insertedId) {
        console.log("Your comment has been posted");
      }
    });
  };

  //  yes voted handler

  const handleYesVote = async (vote) => {
    try {
      const updateVote = vote.yesVoted;
      const yesVoted = Number(updateVote);
      console.log(yesVoted);
      const response = await axiosPublic.patch(
        `/yes/${user?.email}/${vote._id}`,
        {
          yesVoted: yesVoted,
          userName: user?.displayName,
          vote: "Yes",
          title: vote.title,
          category: vote.category,
          report: "",
        }
      );
      refetch();

      if (response.status >= 200 && response.status <= 299) {
        const modifiedCount = response.data.modifiedCount;
        console.log("Response data:", response.data);

        if (modifiedCount > 0) {
          console.log("Yes vote updated successfully");
        }
      } else {
        console.error(
          "Error updating yes vote:",
          response.status,
          response.data
        );
      }
    } catch (error) {
      console.error("Error handling yes vote:", error);
    }
  };
  const handleNoVote = async (vote) => {
    try {
      const updateVote = vote.noVoted;
      const noVoted = Number(updateVote);

      const response = await axiosPublic.patch(
        `/no/${user?.email}/${vote._id}`,
        {
          noVoted: noVoted,
          userName: user?.displayName,
          title: vote.title,
          vote: "No",
          category: vote.category,
          report: "",
        }
      );
      refetch();

      if (response.status >= 200 && response.status <= 299) {
        const modifiedCount = response.data.modifiedCount;
        console.log("Response data:", response.data);

        if (modifiedCount > 0) {
          console.log("no vote updated successfully");
        }
      } else {
        console.error(
          "Error updating no vote:",
          response.status,
          response.data
        );
      }
    } catch (error) {
      console.error("Error handling no vote:", error);
    }
  };

  const handleReport = (report) => {
    Swal.fire({
      title: "Give your feedback",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Submit",
      cancelButtonText: "Close",
      showLoaderOnConfirm: true,
      preConfirm: (inputValue) => {
        axiosPublic
          .put(`/report/${report}`, { report: inputValue })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              swal("Reported Successfully");
            }
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
      footer: `
        <button id="close-btn">Close</button>
      `,
    });

    document.getElementById("close-btn").addEventListener("click", () => {
      Swal.close();
    });
  };
  return (
    <div className="md:flex my-10">
      <Helmet>
        <title>{data?.title}</title>
      </Helmet>
      <div className="card card-compact bg-white text-black md:p-6 md:mx-20  shadow-xl">
        <div className="card-body">
          <p className="text-[#2F71FF]">
            Published Date : {data?.publishedDate}
          </p>
          <p className="font-bold">Category : {data?.category}</p>
          <p className="font-bold">Deadline : {data?.deadline}</p>
          <div className="mt-6">
            <h2 className="text-2xl md:text-3xl font-semibold">
              {data?.title}
            </h2>
            <p className="text-[16px] text-gray-500">{data?.description}</p>
          </div>
          <div>
            {/* report and voting section */}
            <h3 className="flex items-center text-xl font-semibold gap-2">
              Vote before the deadline is finished.
            </h3>
            <div className="flex gap-6 my-4 items-center">
              <button
                disabled={
                  newDate >= data?.deadline ||
                  userRole === "Admin" ||
                  userRole === "Surveyor"
                }
                onClick={() => handleYesVote(data)}
                className="btn bg-white text-black"
              >
                Yes {data?.yesVoted}
              </button>
              <button
                disabled={
                  newDate > data?.deadline ||
                  userRole === "Admin" ||
                  userRole === "Surveyor"
                }
                onClick={() => handleNoVote(data)}
                className="btn bg-white text-black"
              >
                No {data?.noVoted}
              </button>

              <div>
                <button
                  onClick={() => handleReport(data?._id)}
                  className="rounded-full flex items-center cursor-pointer text-red-600"
                >
                  Report : <FaFlag></FaFlag>
                </button>
              </div>
            </div>
            {/* like dislike section */}

            <div className="mb-2">
              <div className="flex">
                <div className="flex gap-4">
                  <div>
                    <button
                      onClick={() => handleLike(data)}
                      className="btn bg-white text-black"
                    >
                      <FaThumbsUp />
                      <p>{data?.likeCount}</p>
                    </button>
                  </div>

                  <div>
                    <button
                      onClick={() => handleDisLike(data)}
                      className="btn bg-white text-black"
                    >
                      <FaThumbsDown />
                      <p>{data?.dislikeCount}</p>
                    </button>
                  </div>
                </div>

                {/* comment section  */}

                <div className="tooltip" data-tip="Comment">
                  <button
                    className="btn ml-4 bg-white text-black"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    <FaComment></FaComment>
                  </button>

                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box bg-white">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold border-2 py-2 mx-16 text-lg mb-10">
                        Comments
                      </h3>
                      <div className="my-10">
                        {commentsId?.map((comment) => (
                          <div key={comment._id}>
                            <div className="flex my-4 mx-4">
                              <img
                                src={comment.photo}
                                className="w-[40px] rounded-full"
                                alt=""
                              />
                              <div>
                                <div className="flex gap-5">
                                  <h3 className="font-bold flex ml-3 justify-start">
                                    {comment.name}
                                  </h3>
                                  <p>{comment.timestamp}</p>
                                </div>
                                <p className="ml-3 flex justify-start">
                                  {comment.comments}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mb-4">
                        {userRole === "Pro User" ? (
                          <form onSubmit={handleDoneComment} className="flex">
                            <input
                              type="text"
                              name="comments"
                              placeholder="type your comment here"
                              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                            <button className="btn rounded-full ml-4">
                              <MdSend></MdSend>
                            </button>
                          </form>
                        ) : (
                          <div>
                            <p className="text-gray-600 mb-2">Buy premium membership for commenting feature.</p>
                            <NavLink to={"/pricing"}>
                            <button className="bg-[#2F71FF] text-white border-none hover:bg-[#2f71ffbf] py-1 md:py-2 px-4 rounded-md ">
                              Payment
                            </button>
                            </NavLink>
                          </div>
                        )}
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
          </div>
          <NavLink to={"/surveys"}>
            <div className="card-actions justify-end">
              <button className="bg-[#2F71FF] text-white border-none hover:bg-[#2f71ffbf] py-1 md:py-2 px-4 rounded-md shadow-md">
                Go back
              </button>
            </div>
          </NavLink>
        </div>
      </div>
      <div>
        <UserPieChart
          yesVote={data?.yesVoted}
          noVote={data?.noVoted}
          likeVote={data?.likeCount}
          dislikeVote={data?.dislikeCount}
        ></UserPieChart>
      </div>
    </div>
  );
};

export default SurveyDetails;
