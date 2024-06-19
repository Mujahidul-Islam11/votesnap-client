// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useContext, useEffect, useState } from "react";
// import AxiosSecure from "../../Hooks/AxiosSecure/AxiosSecure";
// import { AuthConext } from "../../AuthProvider/AuthProvider";

// const CheckOutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState();
//   const axiosSecure = AxiosSecure();
//   const [clientSecret, setClientSecret] = useState("");
//   const {user} = useContext(AuthConext)

//   useEffect(() => {
//     axiosSecure.post("/create-payment-intent", { price: 100 }).then((res) => {
//       console.log(res.data.clientSecret);
//       setClientSecret(res.data.clientSecret);
//     });
//   }, [axiosSecure]);
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements) {
//       return;
//     }
//     const card = elements.getElement(CardElement);
//     if (card === null) {
//       return;
//     }
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });
//     if (error) {
//       console.log("[error]", error);
//       setError(error.message);
//     } else {
//       console.log("[PaymentMethod]", paymentMethod);
//       setError("");
//     }
//   };
//   return (
//     <form className="mx-20" onSubmit={handleSubmit}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: "16px",
//               color: "#424770",
//               "::placeholder": {
//                 color: "#aab7c4",
//               },
//             },
//             invalid: {
//               color: "#9e2146",
//             },
//           },
//         }}
//       ></CardElement>
//       <button disabled={!stripe || !clientSecret} type="submit" className="btn bg-[#E4CDFB]  ">
//         Pay
//       </button>
//       <p className="text-red-600">{error}</p>
//     </form>
//   );
// };

// export default CheckOutForm;
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";
import { AuthConext } from "../../AuthProvider/AuthProvider";
import AxiosSecure from "../../Hooks/AxiosSecure/AxiosSecure";


const CheckOutForm = () => {
  const { user } = useContext(AuthConext)

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [tranjectoin, setTranjectoinId] = useState("");
  const axiosSecure = AxiosSecure();

  const totalPrice = 33.5;

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
      .catch((error) => {
        console.error("Error fetching client secret:", error);
      });
  }, [axiosSecure, totalPrice]);

  const handelSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Payment error", error);
      setError(error.message);
    } else {
      console.log("Payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anounymus",
            name: user?.displayName || "anounymus",
          },
        },
      });

    if (confirmError) {
      console.log("confirmed error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("tranjectoin is", paymentIntent.id);
        setTranjectoinId(paymentIntent.id);

        const payment = {
          email: user.email,
          price: totalPrice,
          tranjectoin: paymentIntent.id,
          date: new Date(),
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res.data);
        if (res.data?.paymentResult?.inserteId) {
          Swal.fire({
            title: "payment!",
            text: "Your payment has been done.",
            icon: "success",
          });
        }
      }
    }
  };
  //  console.log("Your tranjectoin id",{tranjectoin.id});

  return (
    <div className="md:w-1/2 mx-auto card p-5 bg-inherit my-6 md:my-12">
      <h3 className="text-center font-bold my-10 text-xl">Payment here</h3>
      <form onSubmit={handelSubmit} className="px-6 py-10 border rounded-md shadow-md">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-primary bg-[#2F71FF] text-white text-base px-4 border-none mt-8"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-500 text-2xl"> {error} </p>

        <p className="text-red-600"> {error} </p>
        {tranjectoin && (
          <p className="text-green-600">Your tranjectoin id {tranjectoin} </p>
        )}
      </form>
    </div>
  );
};

export default CheckOutForm;