import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => setTasks((prev) => [...prev, task]);
  const removeTask = (id) => setTasks((prev) => prev.filter((task) => task.id !== id));
  const updateTask = (id, updatedTask) =>
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
