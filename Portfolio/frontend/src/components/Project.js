import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";



function Project({ project, onEdit, onDelete }) {
    return (
        <tr>
            <td><RiDeleteBin6Fill onClick={() => onDelete(project._id)} /></td>
            <td><BiSolidEdit onClick={() => onEdit(project)} /></td>
            <td>{project.project}</td>
            <td>{project.date.slice(0,10)}</td>
            <td class="currency">{project.cost.toLocaleString('en-US',{style: 'currency',currency: 'USD'})}</td>
        </tr>
    );
}

export default Project;