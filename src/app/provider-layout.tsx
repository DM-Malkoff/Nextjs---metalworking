'use client'

import Footer from "../../compomemts/footer";
import Header from "../../compomemts/header";
import {OrderPopupContext} from "../../context/store"
import {useState} from "react";

const ProviderLayout = ({children}) => {

  const [showOrderPopup, setShowOrderPopup] = useState(false)
  return (
    <>
      <OrderPopupContext.Provider value={[showOrderPopup, setShowOrderPopup]}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </OrderPopupContext.Provider>
    </>
  );
};

export default ProviderLayout;