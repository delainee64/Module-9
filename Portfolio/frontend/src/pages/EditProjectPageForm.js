import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditProjectPageForm = ({ projectToEdit }) => {
 
    const [project, setProject]       = useState(projectToEdit.project);
    const [date, setDate]         = useState(projectToEdit.date.slice(0,10));
    const [cost, setCost] = useState(projectToEdit.cost);
    
    const redirect = useNavigate();

    const editProject = async () => {
        const response = await fetch(`/projects/${projectToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                project: project, 
                date: date, 
                cost: cost
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Your project was updated successfully!`);
        } else {
            const errMessage = await response.json();
            alert(`helpful editing message ${response.status}. ${errMessage.Error}`);
        }
        redirect("/ProjectsPage");
    }

    return (
        <>
        <article>
            <h2>Edit a project</h2>
            <p>Update an existing field within the project.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Update:</legend>
                    <label htmlFor="project">Project</label>
                    <input
                        type="text"
                        value={project}
                        onChange={e => setProject(e.target.value)} 
                        id="project" />
                    
                    <label htmlFor="date">Date released</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label htmlFor="cost">Cost</label>
                    <input
                        type="number"
                        value={cost}
                        onChange={e => setCost(e.target.value)} 
                        id="cost" />

                    <label htmlFor="submit">
                    <button
                        onClick={editProject}
                        id="submit"
                    >Save</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditProjectPageForm;