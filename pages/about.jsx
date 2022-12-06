import React from "react";
import { FaCarSide } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";

function about() {
  return (
    <div className="contacts-container">
      <h2>VỀ CHÚNG TÔI</h2>
      <div className="contacts-desc">
        <h3 style={{ padding: "12px 0" }}>
          CharMe Store - Nơi Trải Nghiệm Xu Hướng Thời Trang Toàn Cầu
        </h3>
        <p>
          Fashion for men and women là điểm đến trải nghiệm thời trang nam giới.
          Chúng tôi muốn mang lại sự mới mẻ cho thị trường thời trang nam nữ.
        </p>
        <p>
          Kết hợp những thiết kế tiên tiến với mức giá phải chăng, chúng tôi
          vượt qua các giới hạn để mang đến cho bạn những phong cách mới nhất mà
          không phải căng thẳng cho hầu bao của bạn.
        </p>
        <p>
          Chỉ cần bạn muốn cập nhật xu hướng hay phong cách thời trang trước bạn
          bè, đồng nghiệp hay người yêu của bạn, chúng tôi đều có thể giúp bạn.
          Chúng tôi biết bạn khá bận rộn, vì vậy chúng tôi làm việc liên tục
          24/7 để bạn có được điều đó
        </p>
      </div>
      <div className="contact-address">
        <h3>Địa chỉ của hàng CharMe Store</h3>
        <p>Cái Khế Ninh Kiều Cần Thơ</p>
        
      </div>

      <div className="contact-footer">
        <div className="contact-footer-left contact-ds">
          <FaCarSide className="w-100" />
          <p className="contact-footer-text">FREESHIP ĐƠN TỪ 500K</p>
        </div>
        <div className="contact-footer-mid contact-ds">
          <BsArrowRepeat className="w-100" />
          <p className="contact-footer-text">ĐỔI TRẢ TRONG VÒNG 7 NGÀY</p>
        </div>
        <div className="contact-footer-right contact-ds">
          <AiOutlineCheckCircle className="w-100" />
          <p className="contact-footer-text">THANH TOÁN KHI NHẬN HÀNG</p>
        </div>
      </div>
    </div>
  );
}

export default about;
