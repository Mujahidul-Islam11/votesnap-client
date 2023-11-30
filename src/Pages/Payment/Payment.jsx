import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51OFH7fD2LhPTCJgKTDvZ8d02GMbTzL91ULza3JHipHSzhqSbzanbxtFysLTay22thkg1TM7FK8lpUcebgSkIjali004mGtoWAK"
  );
  return (
    <div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
