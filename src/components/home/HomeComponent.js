import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Loading } from "../Loading/LoadingComponent";

function RenderCard({ item, isLoading, errMess }) {
  const description = {
    textAlign: "justify",
    textJustify: "inter-word",
  };
  const title = {
    fontSize: "large",
    fontWeight: "bold",
  };
  const img = {
    padding: "5px",
  };
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return (
      <Card>
        <CardImg src={item.image} alt={item.name} style={img} />
        <CardBody>
          <CardTitle style={title}>{item.name}</CardTitle>
          {item.designation ? (
            <CardSubtitle>{item.designation}</CardSubtitle>
          ) : null}
          <CardText style={description}>{item.description}</CardText>
        </CardBody>
      </Card>
    );
}

function Home(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard  item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}

export default Home;
