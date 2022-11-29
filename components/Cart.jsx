import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
  AiOutlineDelete,
} from "react-icons/ai";
import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    handleRemove,
  } = useStateContext();
  // https://stripe.com/docs/js/checkout/redirect_to_checkout
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;
    const data = await response.json();

    toast.loading("Redirecting ...");

    stripe.redirectToCheckout({ sessionId: data.id });
    
  };
  return (
    <div>
      <div className="cart-wrapper" ref={cartRef}>
        <div className="cart-container">
          <button
            type="button"
            className="cart-heading"
            onClick={() => setShowCart(false)}
          >
            <AiOutlineLeft />
            <span className="heading">Giỏ Hàng</span>
            <span className="cart-num-items">({totalQuantities} Sản Phẩm)</span>
          </button>
          {cartItems.length < 1 && (
            <div className="empty-cart">
              <AiOutlineShopping size={150} />
              <h3>Giỏ Hàng Rổng</h3>
              <Link href="/">
                <button
                  type="button"
                  onClick={() => setShowCart(false)}
                  className="btn"
                >
                  Tiếp Tục Mua Hàng
                </button>
              </Link>
            </div>
          )}
          <div className="product-container">
            {cartItems.length >= 1 &&
              cartItems.map((item) => (
                <div className="product" key={item._id}>
                  <img
                    src={urlFor(item?.image[0])}
                    className="cart-product-image"
                  />
                  <div className="item-desc">
                    <div className="flex top">
                      <h5>{item.name}</h5>
                      <h4>{item.price} VND</h4>
                    </div>
                    <div className="flex bottom">
                      <div>
                        <p className="quantity-desc">
                          <span
                            className="minus"
                            onClick={() =>
                              toggleCartItemQuantity(item._id, "dec")
                            }
                          >
                            <AiOutlineMinus />
                          </span>
                          <span className="num">{item.quantity}</span>
                          <span
                            className="plus"
                            onClick={() =>
                              toggleCartItemQuantity(item._id, "inc")
                            }
                          >
                            <AiOutlinePlus />
                          </span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="remove-item"
                        onClick={() => handleRemove(item)}
                      >
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {cartItems.length >= 1 && (
            <div className="cart-bottom">
              <div className="total">
                <h3>Giá: </h3>
                <h3>{totalPrice} VND</h3>
              </div>
              <div className="btn-container">
                <button type="button" className="btn" onClick={handleCheckout}>
                  Thanh Toán
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;