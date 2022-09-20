require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


exports.handler = async(event) => {
    console.log('see')
    try {
        //make a payment intent
        //I need to know currency and amount
        const { amount } = JSON.parse(event.body);
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "czk",
            payment_method_types: ["card"]
        });
        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent })
        }

    } catch (error) {
        console.log({ error });
        return {
            statusCode: 400,
            body: JSON.stringify({ error })
        }
    }

}