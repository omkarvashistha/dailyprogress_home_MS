const helper = require('../Utilities/helper')
const axios = require('axios');
require('dotenv').config();


exports.getUserGoalsData = async(req,res) => {
    try {
        let total = 0;
        let completeGoals = 0;
        let incompleteGoals = 0;

        const username = req.params.username;

        await axios.get(`${process.env.GOALS_URI}/${username}/getUserGoalsData`).then((res)=> {
                completeGoals = res.data.completeGoals;
                incompleteGoals = res.data.incompleteGoals;
        }).catch((error)=>{
            // res.json(400).status({
            //     message : error.message
            // })
            console.log(error.message);
        })

        total = completeGoals + incompleteGoals;

        res.status(200).json({
            total  : total,
            completeGoals : completeGoals,
            incompleteGoals : incompleteGoals
        })

    } catch (error) {
        res.json(400).status({
            message : error.message
        })
    }
}

exports.getUserJournalData = async(req,res) => {
    try {
        const username = req.params.username;
        let total = 0;
        let firstEntry = "";
        let lastEntry = "";
        await axios.get(`${process.env.JOURNAL_URI}/${username}/getUserJournalInfo`).then((res)=> {
            console.log(res.data);
            total = res.data.total;
            firstEntry = res.data.firstEntry;
            lastEntry = res.data.lastEntry;
        }).catch((error)=>{
            // res.json(400).status({
            //     message : error.message
            // })
            console.log(error.message);
        })

        res.status(200).json({
            total : total,
            firstEntry : firstEntry,
            lastEntry : lastEntry
        })

    } catch (error) {
        res.json(400).status({
            message : error.message
        })
    }
}

exports.invalid = async(req,res,next)=>{
    const err = new Error();
    err.message = 'Invalid Route';
    err.status = 404;
    next(err);
}