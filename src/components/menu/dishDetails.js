import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Loading } from "../Loading/LoadingComponent";

const cardBody = {
  borderRadius: "10px",
  border: "1px solid gray",
  backgroundColor: "#D9AFD9",
  backgroundImage: "linear-gradient(130deg, #D9AFD9 0%, #97D9E1 84%)",
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
const CommentFormStyle = {
  margin: "10px",
  pading: "2px",
  textAlign: "center",
};
const price = {
  color: "rgb(5, 133, 238)",
  fontWeight: "bold",
  fontSize: "medium",
  borderRadius: "10px",
  display: "inline",
};
const category = {
  fontWeight: "bold",
  color: "darksalmon",
};
const img = {
  padding: "5px",
};
const description = {
  textAlign: "justify",
  textJustify: "inter-word",
};
const span = <span style={{ margin: "0px 120px" }}> </span>;
function RenderComments({ comments, addComment, dishId }) {
  if (comments != null) {
    const val = comments.map((comment) => {
      return (
        <CardBody style={cardBody} key={comment.id}>
          <CardText>
            {comment.comment}
            <br />
            --{comment.author} ,{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}
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
        <div style={CommentFormStyle}>
          <CommentForm dishId={dishId} addComment={addComment} />
        </div>
      </div>
    );
  } else return <div></div>;
}
function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} style={img} />
          <CardBody>
            <CardTitle style={title}>{dish.name}</CardTitle>
            <CardText style={category}>
              {" "}
              Category : {dish.category.toUpperCase()}
            </CardText>
            <CardText style={description}>{dish.description}</CardText>
            <CardText style={price}>
              {dish.label}
              {span}
              {dish.price} $
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else return <div></div>;
}
const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null) {
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
          <RenderComments
            comments={props.comments}
            addComment={props.addComment}
            dishId={props.dish.id}
          />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length < len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModelOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.hadnleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModelOpen: !this.state.isModelOpen,
    });
  }

  hadnleSubmit(values) {
    this.props.addComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
  }

  render() {
    const edit = <FontAwesomeIcon icon={faEdit} />;
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          {edit} Submit Comment
        </Button>

        <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.hadnleSubmit(values)}>
              <Row className="form-group">
                <Label for="rating" md={12}>
                  rating
                </Label>
                <Col md={12}>
                  <Control.select
                    model=".rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author" md={12}>
                  Your Name
                </Label>
                <Col md={12}>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    placeholder="Author"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Should have more than 3 Characters!",
                      maxLength: "Should have 15 or less Characters!",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="feedback" md={12}>
                  Your feedback
                </Label>
                <Col sm={12}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    resize="none"
                    rows="12"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".newComment"
                    show="touched"
                    messages={{
                      required: "Please write your massege!",
                    }}
                  />
                </Col>
              </Row>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default DishDetail;
