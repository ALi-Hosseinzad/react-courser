import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import "./../../css/CardCSS.css";
class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    const cardBody = {
      borderRadius: "10px",
      border: "1px solid gray",
      backgroundColor: "rgb(250, 209, 216)",
    };
    const comments = {
      maxHeight: "360px",
      overflowY: "scroll",
    };
    if (dish != null) {
      const val = dish.comments.map((comment) => {
        return (
          <CardBody style={cardBody} key={comment.id}>
            <CardText>
              {comment.comment}
              <br />
              --{comment.author}
              {comment.date}
            </CardText>
          </CardBody>
        );
      });
      return (
        <>
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <div style={comments}>
              <h5>Comments</h5>
              {val}
            </div>
          </div>
        </>
      );
    } else return <div></div>;
  }

  active(label) {
    const labelCSS = {
      top: "70%",
      left: "44%",
      backgroundColor: "red",
      padding: "3px",
      color: "white",
      textAlign: "center",
      borderRadius: "10px",
      position: "absolute",
      width: "50px",
    };
    if (label) {
      return labelCSS;
    } else {
      return null;
    }
  }

  render() {
    const card = {
      padding: "5px",
      border: "1px solid gray",
      cursor: "pointer",
    };
    const image = {
      width: "100%",
      height: "350px",
    };
    const title = {
      color: "white",
      fontSize: "large",
      fontWeight: "bold",
    };
    const price = {
      top: "80%",
      left: "44%",
      color: "rgb(5, 133, 238)",
      position: "absolute",
      fontWeight: "bold",
      fontSize: "medium",
      backgroundColor: "white",
      width: "50px",
      borderRadius: "10px",
    };
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1" key={dish.name}>
          <Card
            style={card}
            key={dish.id}
            onClick={() => this.onDishSelect(dish)}
          >
            <CardImg style={image} src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle style={title}>{dish.name}</CardTitle>
              <CardText style={this.active(dish.label)} className="label">
                {dish.label}
              </CardText>
              <CardText style={price}>{dish.price} $</CardText>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">{this.renderDish(this.state.selectedDish)}</div>
      </div>
    );
  }
}
export default Menu;
