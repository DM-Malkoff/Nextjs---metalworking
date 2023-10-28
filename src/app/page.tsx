'use client'
import ServiceBlock from "../../compomemts/service-block";
import OurWorksBlock from "../../compomemts/our-works-block";
import { useContext } from "react";
import { OrderPopupContext } from "../../context/store";
import OrderForm from "../../compomemts/order-form";

export default function Home() {
  const [showOrderPopup, setShowOrderPopup] = useContext(OrderPopupContext)
  /**
   * Метод клика кнопке заказа услуги
   */
  function clickOrderService(caption) {
    setShowOrderPopup(
      {
        show: true,
        caption: caption,
      });
    return;
  }

  return (
    <div>
      <div id="slides" className="section banner slides-banner">
        <div className="header-slider">
          <div className="container">
            <div className="shadow">
              <h1>Токарные работы по металлу на станках ЧПУ</h1>
            </div>
          </div>
        </div>
        {/*<Image*/}
        {/*  src="/images/item_171.jpg"*/}
        {/*  width={500}*/}
        {/*  height={500}*/}
        {/*  alt="Изготовление узлов и деталей оборудования"*/}
        {/*/>*/}
      </div>
      <div className="section services overlap">
        <div className="container">
          <div className="row no-gutter">
            <div className="row">
              <ServiceBlock imageSrc="images/small_item_156.png" serviceName="Токарная обработка металла" linkHref="#"/>
              <ServiceBlock imageSrc="images/small_item_156.png" serviceName="Токарная обработка алюминия" linkHref="#"/>
              <ServiceBlock imageSrc="images/small_item_156.png" serviceName="Токарная обработка меди" linkHref="#"/>
              <ServiceBlock imageSrc="images/small_item_156.png" serviceName="Токарная обработка латуни" linkHref="#"/>
              <ServiceBlock imageSrc="images/small_item_172.png" serviceName="Токарная обработка титана" linkHref="#"/>
              <ServiceBlock imageSrc="images/small_item_173.png" serviceName="Токарная обработка нержавейки" linkHref="#"/>
              <ServiceBlock imageSrc="images/small_item_175.jpg" serviceName="Токарная обработка чугуна" linkHref="#"/>
              <ServiceBlock imageSrc="images/small_item_176.jpg" serviceName="Токарная обработка капролона" linkHref="#"/>
              <ServiceBlock imageSrc="images/small_item_176.jpg" serviceName="Токарная обработка полиамида" linkHref="#"/>
              <ServiceBlock imageSrc="images/small_item_176.jpg" serviceName="Токарная обработка пластика" linkHref="#"/>
              <ServiceBlock imageSrc="images/small_item_176.jpg" serviceName="Токарная обработка текстолита" linkHref="#"/>
              <ServiceBlock imageSrc="images/small_item_176.jpg" serviceName="Токарная обработка эбонита" linkHref="#"/>
              <ServiceBlock imageSrc="images/small_item_176.jpg" serviceName="Токарная обработка молибдена" linkHref="#"/>
              <ServiceBlock imageSrc="images/small_item_176.jpg" serviceName="Токарная обработка оргстекла" linkHref="#"/>
              <ServiceBlock imageSrc="images/small_item_176.jpg" serviceName="Токарная обработка полиуретана" linkHref="#"/>
              <ServiceBlock imageSrc="images/small_item_176.jpg" serviceName="Токарная обработка полиуретана" linkHref="#"/>
            </div>
            <div className="order">
              <a href="#"
                 title=""
                 className="btn btn-cta"
                 onClick={(e) => {
                   e.preventDefault();
                   clickOrderService('Заказать услуги токаря');
                 }}
              >Заказать услуги токаря</a>
            </div>
          </div>
        </div>
      <div className="section project">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2 className="section-heading white">
                Токарно-фрезерная обработка
              </h2>
            </div>
            <div className="text">

            </div>
          </div>
        </div>
      </div>
      <div className="section feature overlap">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2 className="section-heading">О компании</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-5 col-md-5">
            </div>
            <div className="col-sm-7 col-md-7">

            </div>
          </div>
        </div>
      </div>
      <div className="section project">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2 className="section-heading white">
                Сроки выполнения токарных работ
              </h2>
            </div>
            <div className="text">

            </div>
          </div>
        </div>
      </div>
      <div className="section feature overlap">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2 className="section-heading">О компании</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-5 col-md-5">
            </div>
            <div className="col-sm-7 col-md-7">

            </div>
          </div>
        </div>
      </div>
      <div className="section project">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2 className="section-heading white">Наши работы</h2>
            </div>
          </div>
          <div className="row grid-services">
            <OurWorksBlock imageSrc="images/small_group_9.jpg" serviceName="Металлообработка"></OurWorksBlock>
            <OurWorksBlock imageSrc="images/small_group_10.jpg" serviceName="Резка металла"></OurWorksBlock>
            <OurWorksBlock imageSrc="images/small_group_11.jpg" serviceName="Слесарные работы"></OurWorksBlock>
          </div>
        </div>
      </div>
      <div className="section bglight">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className="row">
                <div className="col-sm-12 col-md-12">

                </div>
              </div>
            </div>
          </div>
        </div>
        <OrderForm></OrderForm>
      </div>
        <div className="section blog">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <h2 className="section-heading">Высококачественные токарные работы по металлу</h2>
              </div>
              <div>
                Точение на токарном ЧПУ станке – это процесс обработки поверхности детали с помощью режущего
                инструмента, который перемещается по заданным координатам. Этот метод широко используется в
                промышленности для изготовления различных деталей, таких как валы, шестерни, фланцы и другие.

                Основная цель точения на токарном ЧПУ станке – это получение точной геометрии и размеров детали с
                высокой повторяемостью. Точность обработки достигается благодаря использованию ЧПУ системы, которая
                позволяет задавать точные координаты перемещения инструмента по поверхности детали.

                Одним из основных преимуществ точения на токарном ЧПУ станке является возможность обработки сложных форм
                и поверхностей. Также этот метод позволяет увеличить производительность и снизить затраты на
                производство благодаря автоматическому управлению процессом.

                Важным аспектом точения на токарном ЧПУ станке является выбор правильного инструмента. Для каждой детали
                необходимо подобрать оптимальный инструмент с учетом материала, размеров и требуемой точности обработки.
                Также необходимо учитывать скорость резания, подачу и глубину резания для достижения наилучшего
                результата.

                Кроме того, точение на токарном ЧПУ станке позволяет обеспечить повышенную точность и качество деталей,
                что особенно важно для производства высокоточных изделий. Например, в авиационной и космической
                промышленности точность обработки играет решающую роль в безопасности полетов.

                Точение на токарном ЧПУ станке – это сложный и технологичный процесс, который требует высокой
                квалификации оператора и правильной настройки оборудования. Однако, благодаря использованию современных
                технологий и оборудования, этот метод является надежным и эффективным способом производства деталей с
                высокой точностью и качеством.
              </div>
              <div>
                Наша компания занимается металлообработкой и выполняет различные токарные работы. Мы обрабатываем
                широкий спектр материалов:
                алюминий,
                медь,
                латунь,
                титан,
                нержавеющую сталь,
                чугун,
                капролон,
                полиамид,
                пластик,
                текстолит,
                эбонит,
                молибден,
                оргстекло
                полиуретан.

                Мы имеем большой опыт в обработке алюминия и его сплавов, что позволяет нам производить высокоточные
                детали для авиационной и автомобильной промышленности. Кроме того, мы обрабатываем медь и латунь для
                изготовления электротехнических деталей и компонентов.

                Титан – это очень трудный материал для обработки, но наша компания имеет необходимое оборудование и опыт
                для выполнения точных токарных работ с этим материалом. Нержавеющая сталь – это еще один материал,
                который мы обрабатываем с высокой точностью и качеством.

                Чугун – это материал, который мы используем для изготовления деталей для механических устройств и
                оборудования. Капролон и полиамид – это пластмассы, которые мы обрабатываем для изготовления деталей для
                электротехнических и медицинских устройств.

                Пластик, текстолит, эбонит и оргстекло – это материалы, которые мы обрабатываем для изготовления деталей
                для различных отраслей промышленности, включая электронику, автомобильную и медицинскую промышленность.

                Молибден – это материал, который мы используем для изготовления деталей для высокотемпературных
                приложений, таких как горелки и печи. Полиуретан – это материал, который мы обрабатываем для
                изготовления деталей для обувной и мебельной промышленности.

                В нашей компании мы гарантируем высокое качество обработки материалов и точность выполнения токарных
                работ. Мы используем современное оборудование и имеем опытных специалистов, которые готовы выполнить
                любой заказ с высокой точностью и качеством.
              </div>
              <div>
                Наша компания предоставляет широкий спектр токарных работ и металлообработки, включая изготовление
                различных деталей. Мы специализируемся на производстве валов, осей, втулок, муфт, фланцев, дисков,
                болтов и штифтов.

                Валы и оси являются неотъемлемой частью многих механизмов и оборудования. Наша компания имеет
                необходимое оборудование и опыт для изготовления высокоточных валов и осей, которые соответствуют
                требованиям наших клиентов.

                Втулки - это детали, которые используются для соединения двух элементов механизма. Мы производим втулки
                различных размеров и форм, которые отвечают требованиям наших клиентов.

                Муфты - это детали, которые используются для передачи крутящего момента между двумя валами. Мы
                производим муфты различных типов и размеров, включая дисковые, ламельные и эластомерные муфты.

                Фланцы - это детали, которые используются для соединения двух элементов механизма. Мы производим фланцы
                различных типов и размеров, включая плоские, шарнирные и сварные фланцы.

                Диски - это детали, которые используются для передачи крутящего момента между двумя валами. Мы
                производим диски различных типов и размеров, включая приводные диски, тормозные диски и роторы.

                Болты и штифты - это детали, которые используются для соединения двух элементов механизма. Мы производим
                болты и штифты различных типов и размеров, включая гайки, шпильки, болты с головкой и без головки.

                В нашей компании мы гарантируем высокое качество обработки материалов и точность выполнения токарных
                работ. Мы используем современное оборудование и имеем опытных специалистов, которые готовы выполнить
                любой заказ с высокой точностью и качеством. Наша компания готова предоставить нашим клиентам
                высококачественные детали для различных отраслей промышленности.
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
