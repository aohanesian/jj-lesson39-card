import React from "react";
import Title from "./Title";
import Text from "./Text";
import Body from "./Body";

export default class Card extends Body {
    render() {
        return <div className="card card-block">{this.props.children}</div>;
    }
}