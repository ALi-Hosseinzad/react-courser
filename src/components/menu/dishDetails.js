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

  render() {
    const cardBody = {
      borderRadius: "10px",
      border: "1px solid gray",
      backgroundColor: "rgb(250, 209, 216)",
      margin: "5px",
    };
    const comments = {
      maxHeight: "360px",
      overflowY: "scroll",
    };
    const title = {
      fontSize: "large",
      fontWeight: "bold",
    };
    if (this.props.dish != null) {
      const val = this.props.dish.comments.map((comment) => {
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
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg
                top
                src={this.props.dish.image}
                alt={this.props.dish.name}
              />
              <CardBody>
                <CardTitle style={title}>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <div style={comments}>
              <h5>Comments</h5>
              {val}
            </div>
          </div>
        </div>
      );
    } else return <div></div>;
  }
}
export default DishDetails;
