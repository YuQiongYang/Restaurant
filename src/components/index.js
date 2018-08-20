import React, { Component } from 'react'

import LeftNav from './commons/leftNav'
import Bread from './commons/breadcrumb'

import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


class Admin extends React.Component {
  
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
       <LeftNav />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Bread />
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
  
}

export default Admin

