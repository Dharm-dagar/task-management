import React, { useState } from "react";


import { ThemeProvider } from "./Context/ThemeContext.jsx";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const [user, setUser] = useState(null);

  return (
    <ThemeProvider>
      <Header user={user} setUser={setUser} />
      {user ? (
        <TaskList user={user} />
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-lg mt-4">Please login to manage your tasks.</p>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
