import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.less';
import {  Breadcrumb, Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  CarryOutTwoTone,
  AudioOutlined,
  GlobalOutlined 
} from '@ant-design/icons';
import GetData from './pages/GetData';
import Home from './pages/Home';
import TotalDay from './pages/TotalDay';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class App extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
render(){
    const { collapsed } = this.state;
    return (
  	<Router>
    <div className="App">
    		<Layout  style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} width={220}>
          <div className="logo" />
          <Menu theme="dark"  defaultSelectedKeys={['1']} mode="inline">
            <SubMenu className="SubMenu" key="sub1" style={{marginTop:70}} icon={<AppstoreOutlined />} title="DIgital Sales">
              <Menu.Item key="3"> <Link to="/GetData">Digital Sales Dhasbord</Link></Menu.Item>
              <Menu.Item key="4"> <Link to="/Home">Home</Link></Menu.Item>
              <Menu.Item key="5"> <Link to="/TotalDay">Total Days(Details)</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, background:'rgb(165 165 165)' }} />
          <Content style={{ margin: '0 35px'}}>
            <Breadcrumb style={{ margin: '16px 0' }}>
          <Switch>
          <Route path="/GetData">
            <GetData />
          </Route>
            <Route path="/Home">
            <Home />
          </Route>
          <Route path="/TotalDay">
            <TotalDay />
          </Route>
          </Switch>
            </Breadcrumb>
          </Content>
          <Footer    style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    
    </div>
    </Router>
  );
}
}
export default App;
