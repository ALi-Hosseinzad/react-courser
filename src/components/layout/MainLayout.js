import React, { Component, Fragment } from "react";
import { DISHES } from "./../shared/dishes";
import Menu from "./../menu/Menu"

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <Fragment>
        {/* <NavBar /> */}
        <Menu dishes={this.state.dishes} />
      </Fragment>
    );
  }
}
export default MainLayout;
