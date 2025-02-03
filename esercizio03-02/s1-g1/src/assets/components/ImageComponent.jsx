import { Component } from "react";

class ImageComponent extends Component {
  render() {
    console.log("THIS", this);

    return <img src={this.props.src} alt={this.props.alt} />;
  }
}

export default ImageComponent;
