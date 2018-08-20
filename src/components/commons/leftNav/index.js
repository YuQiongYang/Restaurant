
import React, { Component } from 'react'
import './index.scss'

import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

const SubMenu = Menu.SubMenu;

class LeftNav extends Component {
    constructor (props) {
        super(props)
        this.getNavLists = this.getNavLists.bind(this)
        this.renderNavLists = this.renderNavLists.bind(this)
    }
    state = {
        collapsed: false,
        navlists:[]
      };
    
    onCollapse = (collapsed) => {
    // console.log(collapsed);
    this.setState({ collapsed });
    }
    getNavLists(){
    this.http.post('navList').then(res=>{
        console.log(this.props)
        this.setState({navlists:res.data})
        })
    }
    renderNavLists(){
        let {navlists} = this.state
        return <Menu theme="dark"  mode="inline"> 
                    {navlists.map(nav => {
                            console.log(nav.item)
                        return <SubMenu 
                            key={nav._id}
                            title={<span><Icon type={nav.icon}
                            mode="inline" /><span>{nav.type}</span></span>}>
                                {
                                    nav.item.map(item => {
                                        return <Menu.Item key={item.path}>{item.title}</Menu.Item>
                                    })
                                }
                            </SubMenu>
                    })}
               </Menu>
    }
    componentDidMount(){
        this.getNavLists()
    }
    shouldComponentUpdate(props,state){
        console.log(state)
        return true
    }
    render () {
        return (
            <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            
            {this.renderNavLists()}

          </Sider>
        )
    }
  
}

export default LeftNav

{/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

<SubMenu
  key="sub1"
  title={<span><Icon type="user" /><span>User</span></span>}
>
  <Menu.Item key="3">Tom</Menu.Item>
  <Menu.Item key="4">Bill</Menu.Item>
  <Menu.Item key="5">Alex</Menu.Item>
</SubMenu>
<SubMenu
  key="sub2"
  title={<span><Icon type="team" /><span>Team</span></span>}
>
  <Menu.Item key="6">Team 1</Menu.Item>
  <Menu.Item key="8">Team 2</Menu.Item>
</SubMenu>
<Menu.Item key="9">
  <Icon type="file" />
  <span>File</span>
</Menu.Item>
</Menu> */}