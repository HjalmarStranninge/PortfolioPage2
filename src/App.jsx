import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import SkillsPage from './components/SkillsPage'
import ProjectsPage from './components/ProjectsPage'
import ExperiencePage from './components/ExperiencePage'

import './script.js'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App
