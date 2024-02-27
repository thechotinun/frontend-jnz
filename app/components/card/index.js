"use client";
import { Card, Row, Col } from "antd";
import Image from "next/image";

const CardList = ({data}) => {
  const { results } = data;
  
  return (
    <>
        {results?.length && results.map((e, i)=>{
          return <Row key={i} style={{marginBottom: '7px'}}>
            <Col xs={2} sm={0} md={2} lg={2}/>
            <Col xs={24} sm={24} md={24} lg={4} style={{height:'110px'}}>
              <Image
                fill
                src={`/img/no-image-available.png`}
                alt={"no-image-available"}
                style={{ padding: "5px" }}
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={16}>
              <Card
                type="inner"
                title={e.name}
                extra={<a href="#">More</a>}
              >
                {e.formatted_address}
              </Card>
            </Col>
          </Row>
        })}
    </>
  );
};

export default CardList;
