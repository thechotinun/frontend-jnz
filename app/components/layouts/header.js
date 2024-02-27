"use client";
import { Layout, Col, Input } from "antd";
import Image from "next/image";
import "./css/layoutMain.css";

const { Header } = Layout;
const { Search } = Input;

const HeaderMain = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          lineHeight: "unset",
          height: "unset",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Col className="box-logo" sm={4}>
          <Image
            fill
            src={`/img/no-image-available.png`}
            alt={"no-image-available"}
            style={{ padding: "5px" }}
          />
        </Col>
        <Col md={4} style={{ textAlign: "center" }}>
          <h1>Website Name</h1>
        </Col>
        <Col offset={8} sm={12} md={8} lg={8}>
          <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
          />
        </Col>
      </Header>
    </>
  );
};

export default HeaderMain;
