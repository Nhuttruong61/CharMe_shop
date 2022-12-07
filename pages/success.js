import React, { useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0), setTotalQuantities(0);
    runFireworks();
  }, []);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Cảm Ơn Bạn Đã Đặt Hàng!</h2>
        <p className="email-msg">Kiểm tra hộp thư đến email của bạn để nhận biên lai.</p>
        <p className="description">
          Nếu có câu hỏi, xin liên hệ email
          <a className="email" href="mailto:order@example.com">
            order@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className="btn">
            tiếp tục mua hàng
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;