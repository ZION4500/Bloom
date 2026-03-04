import axios from "axios";
import { useState } from "react";
import { Suspense } from "react";
import { useEffect } from "react";

export default function Incomes() {
    const BASE_URL = import.meta.env.REACT_APP_API_BASE_URL
    const [incomes, setIncomes] = useState([]);
    // Rest of the component code...

    useEffect(() => {
        axios({
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('authtoken')
            },
            url: `${BASE_URL}income/all`,
        }).then(function (response) {
            console.log(response.data['Incomes'])
            setIncomes(response.data['Incomes'])
        })
    }, [BASE_URL])
    return (
        <>
            <h1 className="text-center text-4xl font-semibold">Incomes</h1>
            <Suspense fallback={<div>Loading...</div>}>
                {incomes.length === 0 && <p>No incomes found.</p>}
            </Suspense>
            <div>
                {incomes.map((income) => (
                    <div key={income._id} className="">
                        <h2>{income.title}</h2>
                        <p>Amount: {income.amount}</p>
                        <p>Type: {income.type}</p>
                        <p>Category: {income.category}</p>
                        <p>Description: {income.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}


// {
//     "_id": "66d193937022a606479ce493",
//     "userId": "66cc7a4977de83aafbe7f3c6",
//     "title": "Pension",
//     "amount": 500,
//     "type": "income",
//     "date": "2024-08-30T00:00:00.000Z",
//     "category": "Wages",
//     "description": "MY pension",
//     "createdAt": "2024-08-30T09:40:35.685Z",
//     "updatedAt": "2024-08-30T09:40:35.685Z",
//     "__v": 0
// }