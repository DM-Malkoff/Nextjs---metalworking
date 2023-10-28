import Image from 'next/image'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-md-3">
            <div className="footer-item">
              {/*<img src="/public/images/logo-light.png" alt="logo bottom" className="logo-bottom" />*/}
              <Image
                src="/images/logo-light.png"
                alt="logo bottom"
                className="logo-bottom"
                width={170}
                height={52}
              ></Image>
                <p>За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке,
                  некоторые - намеренно (например, юмористические варианты).</p>
            </div>
          </div>

          <div className="col-sm-3 col-md-3">
            <div className="footer-item">
              <div className="footer-title">
                Услуги
              </div>
              <ul className="list">
                <li>
                  <a href="/services/tokarnaya-obrabotka-detalej/">Токарное изготовление деталей</a>
                </li>
                <li>
                  <a href="/services/frezernaya-obrabotka-detalej/">Токарно-фрезерные работы</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3 col-md-3">
            <div className="footer-item">
              <div className="footer-title">Компания</div>
              <ul className="list">
                <li>
                  <a href="/" title="Главная">Главная</a>
                </li>
                <li>
                  <a href="/company/" title="О компании">О компании</a>
                </li>
                <li>
                  <a href="/services/" title="Услуги">Услуги</a>
                </li>
                <li>
                  <a href="/works/" title="Наши работы">Наши работы</a>
                </li>
                <li>
                  <a href="/contacts/" title="Контакты">Контакты</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3 col-md-3">
            <div className="footer-item">
              <div className="footer-title">Конаткты</div>
              <ul className="list">
                <li><strong>Офис:</strong> г. Москва, ул. Житомирская 23, офис 5</li>
                <li><strong>Производство:</strong> г. Ижевск, ул. Чапаева, 43</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="fcopy">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <p className="ftex">©2020 - 2023 «металлообработка» – Изготовление изделий по чертежам заказчика и
                токарные работы любой сложности на заказ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;