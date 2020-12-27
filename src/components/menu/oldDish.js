import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
class DishDetails extends Component {
  constructor(props) {
    super(props);
  }
  renderDish() {
    const title = {
      fontSize: "large",
      fontWeight: "bold",
    };
    if (this.props.dish != null) {
      return (
        <Card>
          <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
          <CardBody>
            <CardTitle style={title}>{this.props.dish.name}</CardTitle>
            <CardText>{this.props.dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else return <div></div>;
  }
  renderComments() {
    const cardBody = {
      borderRadius: "10px",
      border: "1px solid gray",
      backgroundColor: "rgb(250, 209, 216)",
      margin: "5px",
    };
    if (this.props.dish.comments != null) {
      this.props.dish.comments.map((comment) => {
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
    } else return <div></div>;
  }
  render() {
    const comments = {
      maxHeight: "360px",
      overflowY: "scroll",
    };
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">{this.renderDish}</div>

        <div className="col-12 col-md-5 m-1">
          <div style={comments}>
            <h5>Comments</h5>
            {this.renderComments}
          </div>
        </div>
      </div>
    );
  }
}
export default DishDetails;
