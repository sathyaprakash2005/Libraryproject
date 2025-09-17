const express = require('express');
const router = express.Router();
const Issue = require('../Model/Issue');

router.post('/issue',async(req,res) =>{
    const { membername,bookname,issuedate,returndate} = req.body;
    try{
        if( !membername || !bookname || !issuedate || !returndate){
            return res.status(400).json({error:'details are required'});
        }
        const newIssue = new Issue({membername,bookname,issuedate,returndate});
        await newIssue.save();
        res.json({message:"user registeres successfully",Issue : newIssue})
    }catch(err){
        res.status(500),json({error:err.message});
    }
})
module.exports = router;
