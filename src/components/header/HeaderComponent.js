import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    const home = <FontAwesomeIcon icon={faHome} />;
    const info = <FontAwesomeIcon icon={faInfo} />;
    const list = <FontAwesomeIcon icon={faList} />;
    const address = <FontAwesomeIcon icon={faAddressCard} />;
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="https://kyuheejogd.files.wordpress.com/2013/07/fusion_final2.png"
                height="30"
                width="41"
                alt="Ristorante Con Fusion"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    {home} Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    {info} About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    {list} Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    {address} Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>

        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-12 header">
                <div className="col-12 col-sm-3 headerImg">
                  <img
                    src="https://images.happycow.net/venues/1024/12/28/hcmp122874_523189.jpeg"
                    height="300"
                    width="200"
                    alt="Ristorante Con Fusion"
                  />
                </div>
                <div className="col-12 col-sm-6 headerText">
                  <h1>Ristorante Con Fusion</h1>
                  <p>
                    We take inspiration from the World's best cuisines, and
                    create a unique fusion experience. Our lipsmacking creations
                    will tickle your culinary senses!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Header;
