import './App.css';
import React from 'react';
import './newcss.css';
import second from './swiper-bundle.min.css'
import Home from './components/Home.jsx';
import Education from './components/Education.jsx'
import Project from './components/Project.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import XYZ from './components/XYZ.jsx';
import Bio from './components/Bio.jsx';
import Contact from './components/Contact.jsx';


function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <Home />
  //     ),
  //   },
  //   {
  //     path
  //   },
  //   {
  //     path: "Experience",
  //     element: <XYZ />,
  //   },
  //   {
  //     path: "Education",
  //     element: <Education />
  //   },
  //   {
  //     path: "projects",
  //     element: <Project />
  //   },
  //   {
  //     path: "skills",
  //     element: <Skills />
  //   }
  // ]);
  return (
    <div className="App">
      <header className="header" id="header">
      </header>
      <main className='main'>
        <Home />
        <Bio />
        <Skills></Skills>
        <Education></Education>
        <Project></Project>
        <Contact></Contact>
        </main>
    </div>
  );
}

export default App;
