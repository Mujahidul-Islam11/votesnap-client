import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import AxiosSecure from "../../Hooks/AxiosSecure/AxiosSecure";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState();
  const axiosSecure = AxiosSecure();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price: 100 }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
  };
  return (
    <form className="mx-20" onSubmit={handleSubmit}>
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
      ></CardElement>
      <button disabled={!stripe || !clientSecret} type="submit" className="btn bg-[#E4CDFB]  ">
        Pay
      </button>
      <p className="text-red-600">{error}</p>
    </form>
  );
};

export default CheckOutForm;
