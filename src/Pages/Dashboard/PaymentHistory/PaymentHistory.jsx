
import { useQuery } from "@tanstack/react-query";

import AxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";

const PaymentHistory = () => {

  const axiosSecure = AxiosSecure();
  const { data: paymentsHistory = [] } = useQuery({
    queryKey: ["paymentsHistory"],
    queryFn: async () => {
      const res = await axiosSecure.get("/paymentsHistory");
      return res.data;
    },
  });
  return (
    <div className="mt-10">
      <h2 className="text-center text-2xl font-bold mb-6"> Payment History </h2>

      <div className="overflow-x-auto mx-10 ">
        <table className="table">
          {/* head */}
          <thead className="bg-blue-400">
            <tr>
              <th></th>
              <th>Email</th>
              <th>price</th>
              <th>TranjectoinId</th>
              <th>Payment date</th>

            </tr>
          </thead>
          <tbody>
            {paymentsHistory.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <th>{payment.eamil} </th>
                <td>{payment.price}</td>
                <td>{payment.tranjectoin}</td>
                <td>{payment.date}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;