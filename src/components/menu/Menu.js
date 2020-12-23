import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function active(label) {
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
  textAlign:"center"
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
function RenderMenuItem({ dish, onClick }) {
  return (
    <Card style={card}>
      <Link to={`/menu/${dish.id}`}>
        <CardImg style={image} src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle style={title}>{dish.name}</CardTitle>
          <CardText style={active(dish.label)} className="label">
            {dish.label}
          </CardText>
          <CardText style={price}>{dish.price} $</CardText>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} />
      </div>
    );
  });
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
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
};
export default Menu;
