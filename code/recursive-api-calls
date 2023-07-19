'use strict';

//const fs = require('fs');
const axios = require('axios')
/*
 * Complete the 'getTotalGoals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING team
 *  2. INTEGER year
 */

async function getTotalGoals(team, year) {
let totalgoal = await recursiveCalls(team, year)
console.log(totalgoal)

}

const recursiveCalls = async (team, year,totalGoal=0,part=1,page=1)=>{
    let url = [
        `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}&page=${page}}`,
        `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}&page=${page}}`
    ]

    let u = "" 
    if(part==1)
       u = url[0]
    else
    u = url[1]
    
   let result =  await axios.get(u)
   if(page<=result.data.total_pages)
        totalGoal += getGoaldsCount(result.data.data,part)

    if(part==2 && !page<result.data.total_pages)return totalGoal
   else if(part==1 && page<result.data.total_pages)
     return getAllResult(team, year,totalGoal,1,page+=1)
   else if(part==1 && !page<result.data.total_pages)
     return getAllResult(team, year,totalGoal,2,1)  
    else if(part==2 && page<result.data.total_pages)
    return getAllResult(team, year,totalGoal,2,page+=1) 
    else return totalGoal
}
const getGoaldsCount = (data,part)=>{
    return data.reduce((count,obj)=>{
        if(part==1)
            count+=parseInt(obj.team1goals)
        else if(part==2)
            count+=parseInt(obj.team2goals)    
    return count
},0)
}
getTotalGoals('Barcelona','2011')