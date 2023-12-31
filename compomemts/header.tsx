'use client';
import { useContext, useState } from 'react';
import OrderPopup from './order-popup';
import { OrderPopupContext } from '../context/store';
import { email, phone } from "../constants/contacts";

const Header = () => {
  const [showOrderPopup, setShowOrderPopup] = useContext(OrderPopupContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function orderButtonClick(e: any, caption:string) {
    // @ts-ignore
    setShowOrderPopup({
      show: true,
      caption: caption
    })
    e.preventDefault()
  }
  return (
    <div>
      <OrderPopup></OrderPopup>
      <div className="header">
        <div className="topbar hidden-xs">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 col-md-6">
                <div className="topbar-left">
                  <div className="welcome-text">
                    Качественная металлобработка по низким ценам
                  </div>
                </div>
              </div>
              <div className="col-sm-7 col-md-6">
                <div className="topbar-right">
                  <ul className="topbar-menu">
                    <li><a href="#contacts">Контактная информация</a></li>
                  </ul>>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="topbar-logo">
          <div className="container">
            <div className="contact-info">
              <div className="box-icon-1">
                <div className="icon">
                  <div className="fa fa-envelope-o"></div>
                </div>
                <div className="body-content">
                  <div className="heading">Электронная почта</div>
                  <a href={'mailto:' + email}>{email}</a>
                </div>
              </div>
              <div className="box-icon-1">
                <div className="icon">
                  <div className="fa fa-phone"></div>
                </div>
                <div className="body-content">
                  <div className="heading">Телефон</div>
                  <a href={'tel:'+ phone}>{ phone }</a>
                </div>
              </div>
              <a href="#" onClick={(e) => orderButtonClick(e, 'Обратный звонок')} className="btn btn-cta">Обратный звонок</a>
            </div>
          </div>
        </div>

        <div className="navbar navbar-main">
          <div className="container container-nav">
            <div className="rowe">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>

              <a className="navbar-brand" href="/">
                <img src="images/logo.png" alt="" />
              </a>

              <nav className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-left">
                  <li className="active">
                    <a href="/">Главная</a>
                  </li>
                  <li>
                    <a href="#about">О компании</a>
                  </li>
                  <li className={`dropdown ${dropdownOpen ? 'open': ''}`} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                    <a href="/services/" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Услуги<span
                      className="caret"></span></a>
                  </li>
                  <li>
                    <a href="#works">Наши работы</a>
                  </li>
                  <li>
                    <a href="#contacts">Контакты</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;