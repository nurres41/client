import React from "react";
import { Badge, Input } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  ShopOutlined,
  LogoutOutlined,
  BarChartOutlined,
  UserOutlined,
  CopyOutlined,
} from "@ant-design/icons";

const Header = () => {
  return (
    <div className="border-b mb-6 ">
      <header className="py-4 px-6 flex items-center justify-between gap-10">
        <div className="logo">
          <a href="/">
            <h2 className="text-2xl md:text-4xl font-bold">LOGO</h2>
          </a>
        </div>
        <div className="header-search flex-1 flex justify-center">
          <Input
            size="large"
            placeholder="Search Products"
            prefix={<SearchOutlined />}
            className="rounded-full "
          />
        </div>
        <div className="menu-links flex justify-between items-center gap-7 md:static fixed z-50 bottom-0 md:w-auto w-screen bg-white md:bg-transparent left-0 md:border-t-0 border-t md:px-0 px-4 py-1">
          <a
            href="/"
            className="menu-link transition-all hover:text-[#40a9ff] flex flex-col items-center"
          >
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Home</span>
          </a>
          <Badge count={5} offset={[0, 3]} className="md:flex hidden">
            <a
              href="/"
              className="menu-link transition-all hover:text-[#40a9ff] flex flex-col items-center"
            >
              <ShopOutlined className="md:text-2xl text-xl" />
              <span className="md:text-xs text-[10px]">Basket</span>
            </a>
          </Badge>
          <a
            href="/"
            className="menu-link transition-all hover:text-[#40a9ff] flex flex-col items-center"
          >
            <CopyOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Taxes</span>
          </a>
          <a
            href="/"
            className="menu-link transition-all hover:text-[#40a9ff] flex flex-col items-center"
          >
            <UserOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Users</span>
          </a>
          <a
            href="/"
            className="menu-link transition-all hover:text-[#40a9ff] flex flex-col items-center"
          >
            <BarChartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Statics</span>
          </a>
          <a
            href="/"
            className="menu-link transition-all hover:text-[#40a9ff] flex flex-col items-center"
          >
            <LogoutOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Exit</span>
          </a>
        </div>
        <Badge count={5} offset={[0, 3]} className="md:hidden flex">
        <a
          href="/"
          className="menu-link transition-all hover:text-[#40a9ff] flex flex-col items-center"
        >
          <ShopOutlined className="md:text-2xl" />
          <span className="md:text-xs text-[10px]">Basket</span>
        </a>
      </Badge>
      </header>
    </div>
  );
};

export default Header;
