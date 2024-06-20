import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from './components/ProtectedRoute';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ ProtectedRoute>
          } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
