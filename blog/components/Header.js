import React from "react";
import Link from 'next/link';
import "../public/style/components/header.css";
import { Row, Col, Menu, Icon } from "antd";

function msg() { 
  alert('未开放')
}
const Header = () => {
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">WQ</span>
          <span className="header-text">一个开发尝试</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <Icon type="home"></Icon>
              首页
              <Link href='/'><a></a></Link>
            </Menu.Item>
            <Menu.Item key="youtube" onClick={msg}>
              <Icon type="youtube"></Icon>
              技术
              <Link href='/'><a></a></Link>
            </Menu.Item>
            <Menu.Item key="life" onClick={msg}>
              <Icon type="smile"></Icon>
              生活
              <Link href='/'><a></a></Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
