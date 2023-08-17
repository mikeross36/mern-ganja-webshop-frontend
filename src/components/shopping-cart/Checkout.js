import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { createOrderActon } from "../../actions/orderActions";

const pubKey = process.env.REACT_APP_STRIPE_PUBKEY;

const Checkout = ({ cartTotal }) => {
  const dispatch = useDispatch();

  const tokenHandler = (token) => {
    dispatch(createOrderActon(token, cartTotal));
    // console.log(token);
  };

  return (
    <>
      <StripeCheckout
        ComponentClass="me-2"
        stripeKey={pubKey}
        amount={cartTotal * 100}
        shippingAddress
        billingAddress
        token={tokenHandler}
        currency="GBP"
      />
    </>
  );
};

export default Checkout;
