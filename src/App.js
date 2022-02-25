import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddGrade from './components/AddGrade';
import Grade from './components/Grade';
import GradeList from './components/GradeList';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/grade" className="navbar-brand">
            Aplicativo
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={'/grade'} className="nav-link">
                Grades
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/add'} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route index path='/' element={<GradeList />} />
            <Route path="/add" element={<AddGrade />} />
            <Route path="/grade/:id" element={<Grade />} />
            <Route path="/grade" element={<GradeList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
