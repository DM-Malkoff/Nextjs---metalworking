'use client'

import Footer from "../../compomemts/footer";
import Header from "../../compomemts/header";
import {OrderPopupContext} from "../../context/store"
import { ReactNode, useState } from "react";

interface Props {
  children?: ReactNode
}

const ProviderLayout = ({children}: Props) => {

  const [showOrderPopup, setShowOrderPopup] = useState([])
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