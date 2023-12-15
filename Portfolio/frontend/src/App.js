// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Nav from './components/Nav.js';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages
import Home from './pages/Home.js';
import Topics from './pages/Topics.js';
import GalleryPage from './pages/GalleryPage.js';


import ProjectsPage from './pages/ProjectsPage';


// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
import AddProjectPageForm from './pages/AddProjectPageForm.js';
import EditProjectPageForm from './pages/EditProjectPageForm.js';


// Define the function that renders the content in Routes, using State.
function App() {

  const [project, setProjectToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1><img src="android-chrome-192x192.png" />Delainee Lenss</h1>
            <p>My Web Development Portfolio</p>
          </header>

          <Nav />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    <Route path="/" element={<Home />} />
                    <Route path="/topics" element={<Topics />} />
                    <Route path="/GalleryPage" element={<GalleryPage />} />

                    <Route path="/ProjectsPage" element={<ProjectsPage setProject={setProjectToEdit}/>} />

                    {/* Or these if your schema requires SHORT data input: */}
                     <Route path="/create" element={<AddProjectPageForm />} />   
                     <Route path="/update" element={<EditProjectPageForm projectToEdit={project} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023 Delainee Lenss</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;