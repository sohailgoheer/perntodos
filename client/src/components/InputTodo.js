import React, { Fragment, useState } from 'react';

const InputTodo = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();  // Prevents the default form submission behavior
        try {
            const body = { description };  // The description is being sent in the request body
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)  // Converts the JavaScript object to a JSON string
            });

            console.log(response);  // Logs the response of the request
            window.location = "/";
        } catch (err) {
            console.error(err.message);  // Catches and logs any errors during the fetch request
        }
    };
    return (
        <Fragment>
            <h1 className="text-center mt-5"> Sohail's Todo List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
}

export default InputTodo;