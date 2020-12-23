import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const cardBody = {
  borderRadius: "10px",
  border: "1px solid gray",
  backgroundColor: "rgb(250, 209, 216)",
  margin: "5px",
};
const CommentStyle = {
  maxHeight: "360px",
  overflowY: "scroll",
};
const title = {
  fontSize: "large",
  fontWeight: "bold",
};
function RenderComments({ comments }) {
  if (comments != null) {
    const val = comments.map((comment) => {
      return (
        <CardBody style={cardBody} key={comment.id}>
          <CardText>
            {comment.comment}
            <br />
            --{comment.author}
            {/* {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(commnts.date)))} */}
          </CardText>
        </CardBody>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <div style={CommentStyle}>
          <h5>Comments</h5>
          {val}
        </div>
      </div>
    );
  } else return <div></div>;
}
function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle style={title}>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else return <div></div>;
}
const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              {" "}
              <Link to="home">Home</Link>{" "}
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
