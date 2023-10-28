import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Колёса-шины-диски.ру - тысячи товаров известных Магазинов в одном месте.</title>
        <meta name="description"
              content="Наш сервис предоставляет возможность купить недорого шины в популярных Интернет-магазинах. Распродажа зимних и летних автошин со склада в на выгодных условиях: скидки от 10%, рассрочка 0%, кредит."/>
        <meta name="verify-advertiseru" content="d64bb6aeb3"/>
        <meta name="verify-admitad" content="8adf54dd2a"/>
        <meta name="yandex-verification" content="7f8011489a539e5f"/>

        <meta property="og:title"
              content="Колёса-шины-диски.ру - тысячи товаров известных Магазинов в одном месте."/>
        <meta property="og:image" content="/images/logo.jpg"/>
        <meta property="og:url" content={siteUrl}/>
        <meta property="og:site_name" content={siteName}/>
        <meta property="og:type" content="website"/>
      </Head>
    </>
  )
}

export default Home;
