import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddProjectPageForm = () => {

    const [project, setProject]       = useState('');
    const [date, setDate]         = useState('');
    const [cost, setCost] = useState('');
    
    const redirect = useNavigate();

    const addProject = async () => {
        const newProject = { project, date, cost };
        const response = await fetch('/projects', {
            method: 'post',
            body: JSON.stringify(newProject),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Your project has been added to the collection!`);
            redirect("/ProjectsPage");
        } else {
            alert(`An error occured , please ensure all fields are completed. = ${response.status}`);
            redirect("/ProjectsPage");
        }
    };


    return (
        <>
        <article>
            <h2>Add a new project</h2>
            <p>Please complete the entire form before submitting.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>New:</legend>
                    <label htmlFor="project">Project Name</label>
                    <input
                        type="text"
                        placeholder="Name of the project"
                        value={project}
                        onChange={e => setProject(e.target.value)} 
                        id="project" />
                    
                    <label htmlFor="date">Date added to project list</label>
                    <input
                        type="date"
                        value={date}
                        placeholder="Date added to project list"
                        onChange={e => setDate(e.target.value.slice(0, 10))} 
                        id="date" />

                    <label htmlFor="cost">Cost</label>
                    <input
                        type="number"
                        placeholder="Estimated cost of the project"
                        value={cost}
                        onChange={e => setCost(e.target.value)} 
                        id="cost" />

                    <label htmlFor="submit">
                    <button
                        type="submit"
                        onClick={addProject}
                        id="submit"
                    >Submit Project</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddProjectPageForm;