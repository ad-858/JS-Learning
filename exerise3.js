//*****************************coding challenge 3**************** */
const team1="Dolphin";
const team2="Koalas";
const aveScoreOfTeam1=(96+108+89)/3;
const aveScoreOfTeam2=(96+108+89)/3;
if(aveScoreOfTeam1>aveScoreOfTeam2){
    console.log(`${team1} is winner`);
}
else if(aveScoreOfTeam1<aveScoreOfTeam2)
{
    console.log(`${team2} is winner`);
}
else if(aveScoreOfTeam1===aveScoreOfTeam2){
    console.log(`Both teams  are winner`);

}