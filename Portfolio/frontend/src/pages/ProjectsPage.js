import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ProjectList from '../components/ProjectList';

function ProjectsPage({ setProject }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [projects, setProjects] = useState([]);

    // RETRIEVE the entire list of projects
    const loadProjects = async () => {
        const response = await fetch('/projects');
        const projects = await response.json();
        setProjects(projects);
    } 
    

    // UPDATE a single project
    const onEditProject = async projects => {
        setProject(projects);
        redirect("/update");
    }


    // DELETE a single project  
    const onDeleteProject = async _id => {
        const response = await fetch(`/projects/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/projects');
            const projects = await getResponse.json();
            setProjects(projects);
        } else {
            console.error(`There was an error deleting the project. Please check your connection to the database. = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the projects
    useEffect(() => {
        loadProjects();
    }, []);

    // DISPLAY the projects
    return (
        <>
            <h2 className="future">Future Home Projects</h2>
            <p className="futureTwo">Here you will find all of the projects my house desperately needs!</p>
            <ProjectList 
                projects={projects} 
                onEdit={onEditProject} 
                onDelete={onDeleteProject} 
            />
        </>
    );
}

export default ProjectsPage;