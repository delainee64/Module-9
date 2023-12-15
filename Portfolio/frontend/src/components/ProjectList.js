import React from 'react';
import Project from './Project';
import { Link } from 'react-router-dom';
import { IoAddCircleSharp } from "react-icons/io5";

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function ProjectList({ projects, onDelete, onEdit }) {
    return (
        <table id="projects">
            <caption>Add and Edit Projects</caption>
            <thead>
                <tr>        
                    <th title="Click the trash can below to delete a project.">Delete</th>
                    <th title="Click the icon below to edit a project">Edit</th>
                    <th title="Name of the home project">Name of Project</th>
                    <th title="Date the project was added to the list.">Date</th>
                    <th title="Approximate cost of the project.">Cost</th>
                    <th><Link to="/create"><i><IoAddCircleSharp title="Click here to add a new project." /></i></Link></th>    
                </tr>
            </thead>
            <tbody>
                {projects.map((project, i) => 
                    <Project 
                        project={project} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default ProjectList;
