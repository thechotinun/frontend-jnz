"use client";
import { Layout, Col, Input } from "antd";
const { Footer } = Layout;

const FooterMain = () => {
    return (
      <>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          @l2T ©{new Date().getFullYear()} Created by @l2T
        </Footer>
      </>
    )
  };
  
  export default FooterMain;