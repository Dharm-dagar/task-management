import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleSave = () => {
    updateTask(task.id, { ...task, title: editedTitle });
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-2 border rounded mb-2">
      {isEditing ? (
        <>
          <TextField
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            size="small"
            style={{ marginRight: "10px" }}
          />
          <Button variant="contained" color="success" onClick={handleSave}>
            Save
          </Button>
          <Button variant="outlined" color="secondary" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </>
      ) : (
        <>
          <span>{task.title}</span>
          <div className="flex gap-2">
            <Button variant="outlined" color="primary" onClick={() => setIsEditing(true)}>
              Edit
            </Button>
            <Button variant="outlined" color="error" onClick={() => deleteTask(task.id)}>
              Delete
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
