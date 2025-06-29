import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

const TaskList = ({ user }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        const taskList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setTasks(taskList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tasks: ", error);
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    try {
      const docRef = await addDoc(collection(db, "tasks"), task);
      setTasks([...tasks, { id: docRef.id, ...task }]);
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      await updateDoc(doc(db, "tasks", id), updatedTask);
      setTasks(tasks.map((task) => 
        task.id === id ? { ...updatedTask, id } : task
      ));
    } catch (error) {
      console.error("Error updating task: ", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await deleteDoc(doc(db, "tasks", id));
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
  };

  return (
    <div className="p-4">
      <TaskForm addTask={addTask} />
      <div className="mt-4">
        {loading ? (
          <p className="text-center">Loading tasks...</p>
        ) : tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem 
              key={task.id} 
              task={task} 
              updateTask={updateTask} 
              deleteTask={deleteTask} 
            />
          ))
        ) : (
          <p className="text-center">No tasks yet. Add one!</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
