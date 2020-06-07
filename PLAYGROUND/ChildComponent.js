import React from "React";

function ChildComponent(props) {
  return (
    <ul>
      <li onMouseOver={props.onMouseOver}>id: {props.child.id}</li>
      <li onMouseOver={props.onMouseOver}>name: {props.child.name}</li>
      <li onMouseOver={props.onMouseOver}>age: {props.child.age}</li>
    </ul>
  );
}