"use client";
import { Layout } from "antd";

const { Content } = Layout;

export default function ContentMain({ children }) {
  return (
    <>
      <Layout style={{ height: "100%" }}>
        <Content style={{ padding: "24px 48px" }}>
          <div
            style={{
              backgroundColor: "#FFF",
              minHeight: 280,
              padding: "48px",
              borderRadius: 8,
              height: "100%",
              overflow: 'auto',
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </>
  );
}
