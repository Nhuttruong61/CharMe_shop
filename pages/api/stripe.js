import Stripe from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

// handler function request and response
export default async function handler(req, res) {
  // handle the post request
  if (req.method === "POST") {
    try {
      // .
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        phone_number_collection: {
          "enabled": true
        },
        billing_address_collection: "required",
        shipping_options: [
          { shipping_rate: "shr_1M6uQEBvA6pm59KfiepLR3n8" },
          { shipping_rate: "shr_1M6uWRBvA6pm59Kfsmv3KFFR" },
        ],
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img
            .replace(
              "image-",
              "https://cdn.sanity.io/images/ut8npozh/production/"
            )
            .replace("-webp", ".webp");
          return {
            price_data: {
              currency: "VND",
              product_data: {
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/?canceled`,
      };
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}