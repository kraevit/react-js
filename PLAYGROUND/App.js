import React from "react";
import ChildComponent from "./ChildComponent";
import childsData from "./childsData";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      childs: childsData
    };
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseOver(id) {
    console.log( "HOVERED!" );
  }

  render() {
    const ChildComponents = this.state.childs.map(child => <ChildComponent key={child.id} child={child} onMouseOver={this.onMouseOver} />);
    return (
      <div>
        {ChildComponents}
      </div>
    );
  }
}