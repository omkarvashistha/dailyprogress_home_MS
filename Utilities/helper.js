const axios = require('axios');

exports.checkUserGoals = async(username)=>{
    let userGoals; 

    // To get user Goals Data

    await axios.get(`http://localhost:5001/${username}/getUserGoals`).then((response) => {
        //console.log(response);
        userGoals = response.data.data;
    }).catch((err)=>{
        console.log('This is error in helper of home ',err.message);
        return false;
    }); 

    //console.log(userGoals);

    if(userGoals === "No goals yet") {
       // console.log("h1")
        return false;
    } 
    return true;

}