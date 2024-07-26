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
                    className="bg-[#2F71FF] text-white border-none hover:bg-[#2f71ffbf] py-2 md:py-3 px-4 md:px-6 rounded-lg "
                    onClick={() =>document.getElementById('my_modal_2').showModal()
                    }
                  >
                    FeedBack
                  </button>
                  <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Message from admin</h3>
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