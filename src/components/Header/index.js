import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Navbar,FormControl, Badge, Icon, Con } from 'tinper-bee';
import classnames from 'classnames';

import './index.css';

const Menu = Navbar.Menu;
const SubMenu = Menu.SubMenu;

const NavItem = Navbar.NavItem;
const Nav = Navbar.Nav;

@inject('homepageStore') @observer
class Header extends Component {

  render(){
    const { changeExpand, expanded } = this.props.homepageStore;
    return(
      <div>
        <Navbar
          expanded={expanded}
          inverse
          mode="horizontal"
          fluid={false}
          onToggle={changeExpand}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">组件中心</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem key="1" href="#">
                主页
              </NavItem>
              <NavItem key="2" href="#">
                组件库
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem key="1" href="#">
                注册
              </NavItem>
              <NavItem key="2" href="#">
                登陆
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </div>
    )
  }
}



export default Header;
