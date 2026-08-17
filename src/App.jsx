import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import MyTask from "./pages/MyTask";
import Dashboard from "./pages/Dashboard";
import TaskSetting from "./pages/TaskSetting";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-task" element={<MyTask />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/task-setting" element={<TaskSetting />} />
      </Routes>
    </BrowserRouter>
  );
}
