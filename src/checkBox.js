import React from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import './App.css'
const CheckBoxOne = (props) => {
  return (
    <div>
      <ListGroup className="listGrp">
        {props.data.map((check, index) => {
          if(check.show)
          return <ListGroup.Item><Form.Check
            key={index}
            id={check.name+"-"}
            name={check.name}
            label={check.name}
            onChange={props.onChange}
            checked={props.selectedValue.includes(check.name)}
          /></ListGroup.Item>
        })}
      </ListGroup>
    </div>)
}

export const CheckBoxTwo = (props) => {
  return (
    <div>
      <ListGroup className="listGrp">
        {props.data.map((check, index) => {
          if(!check.show)
          return <ListGroup.Item> <Form.Check
            key={index}
            id={check.name}
            name={check.name}
            value={check.name}
            label={check.name}
            onChange={props.onChange}
            checked={props.selectedValue.includes(check.name)}
          /></ListGroup.Item>
        })}
      </ListGroup>
    </div>)
}

export default CheckBoxOne;