import React from 'react';
import {  Breadcrumb, Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  CarryOutTwoTone,
  AudioOutlined,
  GlobalOutlined 
} from '@ant-design/icons';
import GetData from './GetData';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class MenuSider extends React.Component{
  state = {
    collapsed: false,
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render(){
    const { collapsed } = this.state;
    return(
     <div>
           <Layout  style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} width={220}>
          <div className="logo" />
          <Menu theme="dark"  defaultSelectedKeys={['1']} mode="inline">
            <SubMenu className="SubMenu" key="sub1" style={{marginTop:70}} icon={<AppstoreOutlined />} title="DIgital Sales">
              <Menu.Item key="3">Digital Sales Dhasbord</Menu.Item>
              <Menu.Item key="4">Total Daya Dashbord</Menu.Item>
              <Menu.Item key="5">Total Days(Details)</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, background:'rgb(165 165 165)' }} />
          <Content style={{ margin: '0 35px'}}>
            <Breadcrumb style={{ margin: '16px 0' }}>
    <GetData/>
            </Breadcrumb>
          </Content>
          <Footer    style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </div>
    )
  }
}
export default MenuSider;