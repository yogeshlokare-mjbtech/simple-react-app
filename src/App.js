import "./App.css";
import "./styles.css";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// Setup Stripe.js and the Elements provider
const stripePromise = loadStripe(
  "pk_test_51HrbZ3LQJUMKZBGdC76dOgWPTZnV5sGLLMHOoWE5KPbP3KfZGo19lxrGcaeSSvMyVFTQB0M1449GUa3kfTBdVtMZ00xWpqL8Wj"
);

function App() {
  return (
    <div className="App">
      <div className="product">
        <img
          src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
          alt="laptop"
          style={{ width: "100%", height: "auto" }}
        />
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
}

export default App;
