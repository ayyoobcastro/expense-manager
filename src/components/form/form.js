import React, { useEffect, useState } from 'react'

const HomeForm = ({fetchData}) => {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    
    useEffect(() => {
        const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
        setDate(today);
    }, []);



    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        fetch("https://script.google.com/macros/s/AKfycbwJd-T1QCTo7BFHYxiqQVt_Mt_LXI1oPclym7PMkCvCsyby3cBdWpl9_bnHSsKAy6L1/exec", 
            {
                method: "POST",
                body: formData,
            }
        )
        .then((data)=>{
            console.log(data);
            setTitle("");
            setAmount("");
            fetchData();
        })
        .catch((error)=>{
            console.log(error)
        })

    }

    return (
        <>
            <h1>My Expense Manager</h1>
            <form className='form' onSubmit={handleSubmit}>
                <label className='hidden'>
                    <span>Date</span>
                    <input
                        placeholder='ex - Shawama'
                        name='Date'
                        type='date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>
                <label>
                    <span>Title</span>
                    <input
                        placeholder='ex - Shawama'
                        name='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <span>Amount</span>
                    <input
                        placeholder='ex - 300'
                        name='Amount'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <span>Category</span>
                    <select name='Category' defaultValue="Grocery">
                        <option>Online Purchase</option>
                        <option>Food</option>
                        <option>Grocery</option>
                        <option>water</option>
                        <option>Electricty</option>
                        <option>Travel</option>
                        <option>Medicine</option>
                    </select>
                </label>
                <label>
                    <span>Payment Mode</span>
                    <select name='Payment' defaultValue="UPI">
                        <option>UPI</option>
                        <option>Cash</option>
                        <option>Card</option>
                    </select>
                </label>
                <input type='submit' value="Add Expense" />
            </form>
        </>
    )
}

export default HomeForm