import React from "react";
import TaskListContextProvider from "../contexts/TaskListContext";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import Header from "./Header";

const Home = (props) => {
  return (
    <TaskListContextProvider>
         <h4>Welcome:{props.location.state}</h4>
      <div className="container1">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default Home;

