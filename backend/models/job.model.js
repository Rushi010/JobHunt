import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: [{
        type: String
    }],
    salary: {
        type: Number,
        required: true
    },
    experienceLevel:{
        type:Number,
        required:true,
    },
    location: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    position: {
        type: Number,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application',
        }
    ]
},{timestamps:true});
export const Job = mongoose.model("Job", jobSchema);







// import mongoose from "mongoose";

// const jobSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     requirements: [{
//         type: String
//     }],
//     salary: {
//         type: Number,
//         required: true
//     },
//     experienceLevel: {
//         type: String,
//         required: true,
//         enum: ['fresher', 'mid', 'senior'], // use string values instead of number
//         lowercase: true,
//         trim: true
//     },
//     location: {
//         type: String,
//         required: true
//     },
//     jobType: {
//         type: String,
//         required: true
//     },
//     position: {
//         type: Number,
//         required: true
//     },
//     company: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Company',
//         required: true
//     },
//     created_by: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     applications: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'Application',
//         }
//     ]
// }, { timestamps: true });

// export const Job = mongoose.model("Job", jobSchema);
