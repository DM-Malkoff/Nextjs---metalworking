import { useContext } from "react";
import { OrderPopupContext } from "../context/store";

const OrderForm = () => {
  const [showOrderPopup, setShowOrderPopup] = useContext(OrderPopupContext)
  function sendOrder() {
    setShowOrderPopup({
      show: true,
      caption: 'Оставить заявку'
    })
  }
  return (
    <div className="section cta">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className="cta-info">
              <h3>Остались вопросы?</h3>
              <p>Задайте их позвонив по телефону 8 (495) 123-45-67</p>
              <a
                href="#"
                title=""
                className="btn btn-cta"
                onClick={(e) => {
                  e.preventDefault();
                  sendOrder();
                }}
              >Оставить заявку</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;