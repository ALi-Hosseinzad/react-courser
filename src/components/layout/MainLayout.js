import React, { Component } from "react";
import Menu from "./../menu/Menu";
import Home from "./../home/HomeComponent";
import Contact from "./../contact/ContactComponent";
import About from "./../ebout/AboutComponent";
import DishDetail from "./../menu/dishDetails";
import Header from "./../header/HeaderComponent";
import Footer from "./../footer/FooterComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders,
  postComment,
} from "../../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { actions } from "react-redux-form";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};
const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  fetchComments: () => dispatch(fetchComments()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  fetchPromos: () => dispatch(fetchPromos()),
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
});
class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          promotion={
            this.props.promotions.promotions.filter(
              (promo) => promo.featured
            )[0]
          }
          leader={
            this.props.leaders.leaders.filter((leader) => leader.featured)[0]
          }
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
          leaderLoading={this.props.leaders.isLoading}
          leaderErrMess={this.props.leaders.errMess}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishID, 10)
            )[0]
          }
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishID, 10)
          )}
          postComment={this.props.postComment}
          commentsErrMess={this.props.comments.errMess}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
        />
      );
    };

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={300}
          >
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route
                exact
                path="/menu"
                component={() => <Menu dishes={this.props.dishes} />}
              />
              <Route path="/menu/:dishID" component={DishWithId} />
              <Route
                exact
                path="/contactus"
                component={() => (
                  <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
                )}
              />
              <Route
                exact
                path="/aboutus"
                component={() => <About leaders={this.props.leaders} />}
              />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
