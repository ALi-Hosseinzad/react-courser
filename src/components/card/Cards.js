import React, { Component, Fragment } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
    };
    console.log(this.props);
  }

  onSelect(val) {
    this.setState({ selected: val });
  }
  renderItem(value) {
    if (value != null)
      return (
        <Card className="class-one">
          <CardImg top src={value.image} alt={value.name} />
          <CardBody>
            <CardTitle>{value.name}</CardTitle>
            <CardText>{value.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  render() {
    return (
      <>
        <div className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onSelect(this.props.data)}>
            <CardImg width="100%" src={this.props.data.image} alt={this.props.data.name} />
            <CardImgOverlay>
              <CardTitle>{this.props.data.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderItem(this.state.selected)}
          </div>
        </div>
      </>
    );
  }
}
export default Cards;
