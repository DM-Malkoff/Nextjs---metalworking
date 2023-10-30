'use client'
import {useContext, useEffect, useState} from "react";
import {OrderPopupContext} from "../context/store";

const OrderPopup = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [showOrderPopup] = useContext(OrderPopupContext)

  useEffect(() => {
    // @ts-ignore
    setShowPopup(showOrderPopup.show)
  }, [showOrderPopup])

  function closePopup() {
    setShowPopup(false);
  }

  return (
    <div className={`order__popup__wrapper${showPopup ? ' active' : ''}`}>
      <div id="order_block" className="order__popup__wrap" onClick={(e) => e.stopPropagation()}>
        <span className="order__popup__close" onClick={closePopup}>&nbsp;</span>
        <nav className="site__order__wr">
          <div className="order__title">{showOrderPopup['caption']}</div>
          <p className="ajax-result-form2">Укажите Ваш номер телефона и имя</p>
          <form name="form2" id="form2" method="post" className="order__form">
            <input name="action_c" id="action_c" value="1" type="hidden" />
            <table className="form_table">
              <tbody>
              <tr>
                <td>
                  <div className="form_label">
                    <label>Телефон</label>
                  </div>
                  <input name="phone_c" id="phone_c" className="form-control" type="text" placeholder="Введите номер телефона" />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form_label">
                    <label>Ваше имя</label>
                  </div>
                  <input name="name_c" id="name_c" className="form-control" type="text"  placeholder="Введите ФИО" />
                </td>
              </tr>
              <tr>
                {/*<td style="padding: 0px; padding-top: 15px; text-align: center;">*/}
                <td>
                  <div className="field_accept_callback">
                    Нажимая кнопку "Отправить", я даю своё согласие на обработку персональных данных в соответствии с
                    законом ФЗ-152 О персональных данных.
                  </div>
                  <a href="#" className="btn btn-cta " id="button_form2">Отправить</a>
                </td>
              </tr>
              </tbody>
            </table>
          </form>
        </nav>
      </div>
    </div>
  );
};

export default OrderPopup;
