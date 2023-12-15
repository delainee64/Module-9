// Controllers for the Home Projects Collection

import 'dotenv/config';
import express from 'express';
import * as projects from './homeProjects-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/projects', (req,res) => { 
    projects.createProject(
        req.body.project, 
        req.body.date, 
        req.body.cost
        )
        .then(job => {
            console.log(`"${job.project}" was added to the collection.`);
            res.status(201).json(job);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: '400: There was an error adding your project to the collection.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/projects', (req, res) => {
    projects.retrieveProjects()
        .then(projects => { 
            if (projects !== null) {
                console.log(`All projects were retrieved from the collection.`);
                res.json(projects);
            } else {
                res.status(404).json({ Error: '404: We could not locate the project.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: '400: There was an error retrieving your request.' });
        });
});


// RETRIEVE by ID controller
app.get('/projects/:_id', (req, res) => {
    projects.retrieveProjectByID(req.params._id)
    .then(project => { 
        if (project !== null) {
            console.log(`"${project.project}" was retrieved, based on its ID.`);
            res.json(project);
        } else {
            res.status(404).json({ Error: '404: There are no projects with that ID.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: '400: There was an error retrieving your project.' });
    });

});


// UPDATE controller ************************************
app.put('/projects/:_id', (req, res) => {
    projects.updateProject(
        req.params._id, 
        req.body.project, 
        req.body.date, 
        req.body.cost
    )
    .then(project => {
        console.log(`"${project.project}" was updated.`);
        res.json(project);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: '404: There was an error while updating your project.' });
    });
});


// DELETE Controller ******************************
app.delete('/projects/:_id', (req, res) => {
    projects.deleteProjectById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} project was deleted.`);
                res.status(200).send({ Success: '200: Success! Your project was deleted.' });
            } else {
                res.status(404).json({ Error: '404: There was an error while trying to delete your project.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'There was an error with the ID.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});