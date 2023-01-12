import React from "react";
import Title from "./Title";
import Text from "./Text";
class Body extends React.Component {
    static Title=Title
    static Text=Text
    static Body=Body
    render() {
        return <div className="card-body">{this.props.children}</div>;
    }
}

export default Body;

