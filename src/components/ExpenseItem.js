import './ExpenseItem.css';
import ExpenseDate from './ExpenseData';
import React, {useState} from 'react';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  
  const clickHander = () =>{
    setTitle('updated');
    console.log(title);
  }
  return (
    <div className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHander}>Change Title</button>
    </div>
  );
}
export default ExpenseItem;
