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
  function clickOrderService(caption: string) {
    // @ts-ignore
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
        <div className="section feature overlap">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <h2 className="section-heading">Наши работы</h2>
              </div>
            </div>
            <div className="row grid-services">
              <OurWorksBlock imageSrc="images/tokarniye_raboty_1.jpg" serviceName="Токарные работы из металла"></OurWorksBlock>
              <OurWorksBlock imageSrc="images/tokarniye_raboty_2.jpg" serviceName="Токарные работы - Валы"></OurWorksBlock>
              <OurWorksBlock imageSrc="images/tokarniye_raboty_3.jpg" serviceName=""></OurWorksBlock>
              <OurWorksBlock imageSrc="images/tokarniye_raboty_4.jpg" serviceName=""></OurWorksBlock>
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
              <h2 className="section-heading white">Какие материалы мы обрабатываем</h2>
            </div>
            <div className="text">
              <div className="col-sm-6 col-md-6">
                <p>Наша компания специализируется на токарных работах и обрабатывает различные материалы на заказ. Мы работаем с металлом, включая:</p>
                <ul>
                  <li>алюминий</li>
                  <li>нержавейку(нержавеющую сталь)</li>
                  <li>латунь</li>
                  <li>бронзу</li>
                  <li>медь</li>
                  <li>титан</li>
                  <li>чугун</li>
                  <li>сплавы</li>
                </ul>
              </div>
              <div className="col-sm-5 col-md-5">
                <p>Кроме того, мы также обрабатываем ряд пластиков, включая:</p>
                <ul>
                  <li>капролон</li>
                  <li>полиамид</li>
                  <li>фторопласт</li>
                </ul>
                <p>А также: текстолит, эбонит, молибден, оргстекло, полиуретан</p>
                <p>Мы гордимся тем, что можем предложить широкий спектр материалов для наших клиентов, чтобы удовлетворить их потребности в различных проектах. Независимо от того, какой материал вам нужен, мы готовы предоставить высококачественные токарные работы.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section feature overlap">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2 className="section-heading">Преимущества в технологии выполнения заказа</h2>
            </div>
          </div>
          <div className="row">
            <p>Наша компания имеет ряд преимуществ в технологии выполнения заказа, которые позволяют нам гибко использовать различные материалы и обеспечивать высокое качество обработки.</p>
            <ol>
              <li>Возможность обработки различных материалов на одной установке. Это позволяет нам повысить производительность и снизить количество часов, необходимых для выполнения заказа. Максимальная скорость исполнения заказа является одной из наших основных целей.</li>
              <li>Универсальность и разнообразный инструментарий позволяют нам выполнять не только токарные работы, но и проводить фрезерные работы. Мы можем обрабатывать детали различных размеров и форм, обеспечивая стабильное качество и максимальную скорость исполнения заказа.</li>
              <li>Использование разных режущих пластин и качественных оправок дает нам возможность производить на токарном станке операции типа шлифовки или накатки. Это позволяет нам достичь высокого результата в финишной обработке изделий.</li>
              <li>Способность работать с нестандартными деталями и предоставление дополнительных инструментов для их производства. Это дает нам преимущество в выполнении заказов, которые требуют особых операций.</li>
              <li>Высокая скорость резания и меньшее количество проходов. Это позволяет нам сократить время и повысить эффективность процесса обработки, тем самым сохранив стабильное качество нашей технологии.</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="section project">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2 className="section-heading white">
                Какие виды деталей мы производим
              </h2>
            </div>
            <div className="text">
              <p>Наша компания производит широкий спектр деталей, выполняя различные виды металлообработки. Мы специализируемся на изготовлении разнообразных изделий, включая самые сложные.</p>
              <p>Мы предлагаем следующие виды деталей:</p>
              <ul>
                <li>Штифты: мы производим штифты различных размеров и форм, используя высококачественные материалы;</li>
                <li>Болты: всех типов и размеров для различных применений;</li>
                <li>Диски: мы производим диски для различных индустрий, включая автомобильную и промышленную отрасли;</li>
                <li>Втулки, штифты, шпильки, пальцы;</li>
                <li>фланцы, штуцеры, поршни;</li>
                <li>Оси и валы;</li>
                <li>Муфты;</li>
                <li>Фурнитура: мы производим различные виды фурнитуры, включая ручки, замки, петли и другие.</li>
              </ul>
              <p>Все наши детали производятся с использованием передовых технологий металлообработки, что гарантирует высокое качество и надежность каждого изделия. Мы готовы удовлетворить потребности клиентов в различных отраслях промышленности и предложить решения, соответствующие их требованиям.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section feature overlap">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2 className="section-heading">Виды токарных операций</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-5 col-md-5">
              <ul>
                <li>Одним из основных видов токарных операций является точение наружных и внутренних поверхностей. Точение наружных поверхностей позволяет создавать детали с высокой точностью и гладкостью поверхности. Внутреннее точение позволяет обрабатывать внутренние поверхности деталей;</li>
                <li>Создание деталей различных форм: конусные, цилиндрические, фасонные и т.д.;</li>
              </ul>
            </div>
            <div className="col-sm-7 col-md-7">
              <ul>
                <li>С разным типом резьбы:
                  <ul>
                    <li>метрические и дюймовые;</li>
                    <li>с переменным шагом и трапецеидальные;</li>
                  </ul>
                </li>
                <li>Вытачивание пазов, галтелей и канавок в изделиях;</li>
                <li>Зенкерование;</li>
                <li>Накатывание резьбы (нарезка резьбы);</li>
                <li>Сверление отверстий;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        <div className="section project">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <h2 className="section-heading white">Для чего требуется точение на токарном ЧПУ станке?</h2>
              </div>
              <div className="text">
                <p>Точение на токарном ЧПУ станке является одним из наиболее универсальных методов обработки материалов. Этот вид токарной работы требуется в самых разных ситуациях, когда возникает необходимость в создании или модернизации деталей.</p>
                <p>Например, если сломалась деталь, и нет возможности купить новую, либо она больше не производится или стоит дорого, то на токарном станке можно изготовить новую деталь. Если есть заготовка, то ее можно расточить или подточить под нужные размеры и форму.</p>
                <p>Также точение на токарном ЧПУ станке может быть необходимо при модернизации техники. Если для этой модернизации требуется новая деталь, которой нет в производстве, то можно создать образец по эскизу или чертежу и затем начать серийное производство этой детали. На токарном станке можно изготовить несколько таких деталей, начиная даже от одной штуки.</p>
                <p>В нашей компании вы можете заказать выполнение точения на токарном ЧПУ станке в самых разных ситуациях. Мы предлагаем услуги по изготовлению деталей по эскизам и чертежам, а также по расточке и подточке существующих заготовок. Наша команда специалистов обеспечит высокое качество и точность каждого изделия, соответствующие вашим требованиям.</p>
              </div>
            </div>
          </div>
        </div>
      <div className="section feature overlap">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2 className="section-heading">Преимущества нашей компании</h2>
            </div>
          </div>
          <div className="row">
            <p>Наша компания предоставляет высококачественные токарные услуги. Мы являемся профессиональными специалистами, обладающими большим опытом и знаниями в области токарной обработки металлов.</p>
            <ul>
              <li>Один из наших главных преимуществ - это быстрый расчет стоимости заказа. Мы понимаем, что время - драгоценный ресурс, поэтому стремимся оперативно предоставить клиентам информацию о стоимости изготовления деталей.</li>
              <li>У нас вы найдете большой выбор услуг по токарной обработке. Мы готовы выполнять заказы любой сложности и в любое время. Работаем мы в режиме гибкого графика, чтобы удовлетворить потребности клиентов.</li>
              <li>Наша компания предлагает возможность изготовления образцов без внесения аванса. Мы принимаем заказы любого объема и готовы выполнить их в кратчайшие сроки.</li>
              <li>Цена на наши услуги всегда ниже, чем у конкурентов. Мы предлагаем различные скидки и гибкие условия сотрудничества. Все это делает нас более привлекательными для клиентов.</li>
              <li>В работе мы используем современное оборудование и работаем только с опытными мастерами. Это позволяет нам гарантировать высокий уровень качества каждого изделия.</li>
              <li>Наше производство представляет собой цех с парком токарных станков, которое находится в г. Ижевск, поэтому мы можем позволить себе делать продукцию по ценам ниже чем в Москве.</li>
            </ul>
            <p>Если вам необходима токарная обработка, оставьте заявку на нашем сайте. Наш специалист свяжется с вами в кратчайшие сроки и ответит на все интересующие вас вопросы.</p>
          </div>
        </div>
      </div>
      <div className="section blog">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2 className="section-heading">Типы станков с ЧПУ</h2>
            </div>
            <div>
              <p>Станки с числовым программным управлением (ЧПУ) - это современное оборудование, которое применяется в различных областях работы с металлом. Они позволяют автоматизировать процесс обработки деталей и обеспечивают высокую точность и качество работы.</p>
              <p>Токарные станки с ЧПУ подразделяются на несколько типов: карусельные, винторезные, цилиндрические и конические.</p>
              <ol>
                <li>Карусельные станки применяются для обработки деталей большого диаметра.</li>
                <li>Винторезные: для заготовок цилиндрической и конической формы, а также для нарезания резьбы.</li>
                <li>Револьверные: предназначены для обработки заготовок с калиброванным прутком.</li>
                <li>Лоботокарные станки: применяются для обработки цилиндрических, конических и фасонных поверхностей.</li>
              </ol>
              <p>Вся обработка металла происходит под постоянным контролем процесса, а мастер всегда имеет под рукой необходимый измерительный инструмент, такой как штангенциркуль, микрометр, нутромер и др.</p>
              <p>Преимущества использования станков с ЧПУ включают высокую точность обработки деталей, большую производительность, возможность программировать различные операции обработки и максимальное использование материала. Кроме того, такие станки позволяют сократить время и затраты на производство, а также увеличить эффективность работы.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section bglight">
        <OrderForm></OrderForm>
      </div>
      </div>
    </div>
  )
}
