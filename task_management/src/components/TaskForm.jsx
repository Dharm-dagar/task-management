import { useState } from "react";
import { Button, TextField } from "@mui/material";
import React from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({ task, completed: false });
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <TextField
        label="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <Button variant="contained" type="submit">Add</Button>
    </form>
  );
};

export default TaskForm;
