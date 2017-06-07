import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import {Navbar, FormControl, Badge, Icon, Con} from 'tinper-bee';
import {Link} from 'react-router';

import './index.css';

const Menu = Navbar.Menu;
const SubMenu = Menu.SubMenu;

const NavItem = Navbar.NavItem;
const Nav = Navbar.Nav;

@inject('homepageStore') @observer
class Header extends Component {

  render() {
    const {changeExpand, expanded} = this.props.homepageStore;
    return (
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
                <Link to="/homepage">
                  主页
                </Link>
              </NavItem>
              <NavItem key="2" href="#">
                <Link to="/list">
                  组件库
                </Link>
              </NavItem>
              <NavItem key="3" href="#">
                <Link to="/standard">
                  规范
                </Link>
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem key="4" href="#">
                <Link to="/register">
                  注册
                </Link>
              </NavItem>
              <NavItem key="5" href="#">
                <Link to="/login">
                  登陆
                </Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </div>
    )
  }
}


export default Header;
