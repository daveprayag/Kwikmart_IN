import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Other%2Flucian-alexe-afDu-GuxjjM-unsplash-2.jpg?alt=media&token=6f24ed3f-f13f-48b1-af14-cb5ad13b87f9"
        />

        <div>
          <h3>Hello, {user?.email}</h3>{" "}
          {/*We used ? in order to avoid errors */}
          <h2 className="checkout_title">What's in your bag?</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
