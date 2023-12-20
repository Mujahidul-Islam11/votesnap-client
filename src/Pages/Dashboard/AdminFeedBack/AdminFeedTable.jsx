/* eslint-disable react/prop-types */




const AdminFeedTable = ({survey,index}) => {
    return (
        <tr className="" key={survey._id}>
                <th>{index + 1}</th>
                <td>{survey.category}</td>
                <td>{survey.title.slice(0, 25)}</td>
                <td>{survey.status}</td>
                <td>
                  <button
                    className="btn bg-[#8BE8E5] hover:text-white"
                    onClick={() =>document.getElementById('my_modal_2').showModal()
                    }
                  >
                    FeedBack
                  </button>
                  <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Hello There!</h3>
                      <p className="py-4">
                        {survey?.feedback && survey.feedback}
                      </p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </td>
              </tr>
    );
};

export default AdminFeedTable;