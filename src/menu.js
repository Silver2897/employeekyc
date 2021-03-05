import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Stepsperformed from './steps'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import FormSizeDemo from './PR';

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <img src={require('./image.jpg')}/>
          <Menu.Item key="0" icon={<PieChartOutlined />}>
         
            </Menu.Item>
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Employee Information
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title=" General Information">
              <Menu.Item key="3">Other </Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
              <Menu.Item key="6">Alex</Menu.Item>
            </SubMenu>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              General Information
            </Menu.Item>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="">Team 1</Menu.Item>
              <Menu.Item key="">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
             <Stepsperformed></Stepsperformed>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}></Footer>
        </Layout>
      </Layout>
    );
  }
}


export default SiderDemo;