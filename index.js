const express = require('express');
const app = express();
const cors = require("cors");
const pool = require("./db");  // Corrected: Import the 'pool' from db.js (not 'Pool')

app.use(cors());
app.use(express.json());



// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});


// Post a new todo (req.body is needed here)
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body; // Make sure a body is sent with the request
        const newTodo = await pool.query(
            "INSERT INTO TODO (description) VALUES($1) RETURNING *",
            [description]
        );
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Get all todos (no req.body needed)
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM TODO");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});


app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//update
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params; // Extract id from URL parameters
        const { description } = req.body; // Extract description from the request body

        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2",
            [description, id]
        );

        res.json("Todo was updated!"); // Respond with a success message
    } catch (err) {
        console.error(err.message); // Catch and log any errors
    }
});


app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params; // Extract id from URL parameters

        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1",
            [id]
        );

        res.json("Todo was deleted!"); // Respond with a success message
    } catch (err) {
        console.error(err.message); // Catch and log any errors
    }
});
