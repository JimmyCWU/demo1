import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
   const [enteredTitle, setEnteredTitle] = useState('');
   const [enteredAmount, setEnteredAmount] = useState('');
   const [enteredData, setEnteredDate] = useState('');
//    const [userInput, setUserInput] = useSate({
//        enteredTitle: '',
//        enteredAmount: '',
//        enteredDate: ''
//    })

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
            
        // })
    };
    const amountChange = (event) =>{
        setEnteredAmount(event.target.value);
    //     setUserInput({
    //        ...userInput,
    //        enteredAmount: event.target.value,
    //    })
    };

    const dataChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            entereDate: event.target.value,
        })
    };

    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredData)
        };
        console.log(expenseDate);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2022-01-01" max="2022-12-31" onChange={}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
      
    );
};

export default ExpenseForm;