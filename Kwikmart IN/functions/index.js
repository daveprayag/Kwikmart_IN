const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JflriSFp2KFe7Byfm4Ofolcz8bMuBSIuisoTq5fb7oMucre504WLCwqu0IR9VRMedhnDMpFk7TlYgJ4HxoMHR8n00w6GvBMmG"
);

//API

// -App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request received for this amount - ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// -Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//(http://localhost:5001/clone-da42b/us-central1/api
