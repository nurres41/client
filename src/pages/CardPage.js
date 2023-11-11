import React from "react";
import Header from "../components/Header/Header";
import { Button, Card, Table } from "antd";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const CardPage = () => {
  return (
    <div>
      <Header />
      <div>
        <Table columns={columns} dataSource={dataSource} bordered />
        <div className="card-total flex justify-end">
          <Card className="w-72">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>425$</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV Toplam</span>
              <span className="text-red-600">42$</span>
            </div>
            <div className="flex justify-between">
              <b>Toplam</b>
              <b>485$</b>
            </div>
            <Button className="mt-2 w-full" type="primary" size="large">Siparis Olustur</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
