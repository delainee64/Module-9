// Models for the home improvement Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: '500: A connection to the database could not be completed.' });
    } else  {
        console.log('Success: You are now connected to the database!.');
    }
});

// SCHEMA: Define the collection's schema.
const projectSchema = mongoose.Schema({
	project:    { type: String, required: true },
	date:       { type: Date, required: true, default: Date.now }, // Date the project was added to list.
	cost:       { type: Number, required: true, default: 0 }
});

// Compile the model from the schema 
// by defining the collection name "projects".
const projects = mongoose.model('Projects', projectSchema);


// CREATE model *****************************************
const createProject = async (project, date, cost) => {
    const job = new projects({ 
        project: project, 
        date: date, 
        cost: cost 
    });
    return job.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveProjects = async () => {
    const query = projects.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveProjectByID = async (_id) => {
    const query = projects.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteProjectById = async (_id) => {
    const result = await projects.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateProject = async (_id, project, date, cost) => {
    const result = await projects.replaceOne({_id: _id }, {
        project: project,
        date: date,
        cost: cost
    });
    return { 
        _id: _id, 
        project: project,
        date: date,
        cost: cost 
    }
}

// EXPORT the variables for use in the controller file.
export { createProject, retrieveProjects, retrieveProjectByID, updateProject, deleteProjectById }