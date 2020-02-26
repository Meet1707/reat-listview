import React, { Component } from 'react';
import './App.css';
import CheckBoxOne, { CheckBoxTwo } from './checkBox';
import { Button } from 'react-bootstrap';

class App extends Component {
  state = {
    data: [{ name: "1: Ramsay Bolton", show: true },
    { name: "2: Sansa Stark", show: true },
    { name: "3: Arya Stark", show: true },
    { name: "4: Theon Greyjoy", show: true },
    { name: "5: John Snow", show: true }],
    list: [],
    listOne: [],
    listTwo: []
  }

  add = () => {
    const { listOne, data, list } = this.state;

    data.forEach(item => {
      if (listOne.includes(item.name) && !list.includes(item)) {
        list.push(item);
        item.show = false;
      }
    })

    this.setState({
      data,
      listOne: [],
      listTwo: [],
      list
    });
  }

  delete = () => {
    let { listTwo, data, list } = this.state;

    data.forEach(item => {
      if (listTwo.includes(item.name) && list.includes(item)) {
        list = list.filter(element => element !== item);
        item.show = true;
      }
    });

    this.setState({
      data,
      listOne: [],
      listTwo: [],
      list
    })
  }

  handleListOne = (event) => {
    const { listOne } = this.state;
    const { name, checked } = event.target;

    if (checked)
      listOne.push(name);
    else {
      let index = listOne.indexOf(name);
      listOne.splice(index, 1);
    }
    this.setState({ listOne });
  }

  handleListTwo = (event) => {
    const { listTwo } = this.state;

    if (event.target.checked)
      listTwo.push(event.target.name);
    else {
      let index = listTwo.indexOf(event.target.name);
      listTwo.splice(index, 1);
    }
    this.setState({ listTwo });
  }

  rotate = () => {
    const { listTwo, list } = this.state;
    let index = list.map(data => {
      return data.name;
    }).indexOf(listTwo[0]);

    if (!index) {
      let item = list.shift();
      list.push(item);
    }
    else {
      let item = list.splice(index, 1);
      list.splice(index - 1, 0, item[0]);
      list.join();
    }
    this.setState({ list });
  }

  render() {
    const { listOne, listTwo, data, list } = this.state;

    return (
      <div className="content">
        <div>
          <h3>List 1</h3>
          <CheckBoxOne
            data={data}
            selectedValue={listOne}
            onChange={this.handleListOne}
          />
        </div>
        <div className="buttons">
          <Button disabled={listTwo.length !== 1} variant="warning"
            onClick={this.rotate}>
            UP
          </Button>
          <Button variant="info" onClick={this.add} >
            Add
          </Button>
          <Button variant="info" onClick={this.delete}>
            Delete
          </Button>
        </div>
        <div>
          <h3>List 2</h3>
          <CheckBoxTwo
            data={list}
            selectedValue={listTwo}
            onChange={this.handleListTwo}
          />
        </div>
      </div>)
  }
}


export default App;