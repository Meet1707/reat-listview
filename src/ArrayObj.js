import React from 'react';

const arr = [{ x: 1, y: 5, weightage: 5 },
{ x: 2, y: 7, weightage: 4 },
{ x: 2, y: 6, weightage: 3 },
{ x: 5, y: 8, weightage: 5 }];
let arr2 = [];
let displayOP = [];

const findCost = (x, y) => {
  let cost = 0;
  if (y) {
    arr.forEach(item => {
      if (item.x <= x && item.y >= y)
        cost = cost + item.weightage;
    })
    console.log(x, y, ": ", cost);
    displayOP.push(`${x},${y}: ${cost}`);
  }
}

const fill_arr2 = () => {
  arr.forEach((item) => {
    if (!arr2.includes(item.x))
      arr2.push(item.x)
    if (!arr2.includes(item.y))
      arr2.push(item.y)
    arr2.sort();
  })
  arr2.forEach((item, index) => {
    findCost(item, arr2[index + 1])
  })
}

const ArrayObj = () => {
  fill_arr2();
  return (<>
  <ui>
    {
      displayOP.map(item =><li key={item}>{item}</li>)
    }
  </ui>
  </>);
}

export default ArrayObj;