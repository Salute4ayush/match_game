const bat=document.getElementById("bat");
const ball=document.getElementById("ball");
const wicket=document.getElementById("wicket");
const user=document.getElementById("user");
const system=document.getElementById("system");
const Result=document.getElementById("result");
const reset=document.getElementById("reset");



const arr=["bat","ball","wicket"];


if(localStorage.userScore===undefined)
localStorage.userScore=0;
if(localStorage.systemScore===undefined)
localStorage.systemScore=0;


bat.addEventListener('click', function(){
    let num=Math.floor(Math.random()*3);
    userSelect="bat";
    systemSelect=arr[num];

    if(systemSelect=="bat")
    {
        Result.innerHTML="Match Tie.!!";
    }
    else if(systemSelect=="ball")
    {
        if (localStorage.userScore) {
            localStorage.userScore = Number(localStorage.userScore)+1;
          } else {
            localStorage.userScore = 0;
          }
        Result.innerHTML="User Win.!!";
    }
    else if(systemSelect=="wicket")
    {
        if (localStorage.systemScore) {
            localStorage.systemScore = Number(localStorage.systemScore)+1;
          } else {
            localStorage.systemScore = 0;
          }
        Result.innerHTML="System Win.!!";
    }
    user.innerHTML=localStorage.userScore;
    system.innerHTML=localStorage.systemScore;
});


ball.addEventListener('click',function(){
    let num=Math.floor(Math.random()*3);
    userSelect="ball";
    systemSelect=arr[num];

    if(systemSelect=="ball")
    {
        Result.innerHTML="Match Tie.!!";
    }
    else if(systemSelect=="bat")
    {
        if (localStorage.systemScore) {
            localStorage.systemScore = Number(localStorage.systemScore)+1;
          } else {
            localStorage.systemScore = 0;
          }
        Result.innerHTML="System Win.!!";
    }
    else if(systemSelect=="wicket")
    {
        if (localStorage.userScore) {
            localStorage.userScore = Number(localStorage.userScore)+1;
          } else {
            localStorage.userScore = 0;
          }
        Result.innerHTML="User Win.!!";
    }


    user.innerHTML=localStorage.userScore;
    system.innerHTML=localStorage.systemScore;
});


wicket.addEventListener('click',function(){
    let num=Math.floor(Math.random()*3);
    userSelect="wicket";
    systemSelect=arr[num];

    if(systemSelect=="wicket")
    {
        Result.innerHTML="Match Tie.!!";
    }
    else if(systemSelect=="bat")
    {
        if (localStorage.systemScore) {
            localStorage.systemScore = Number(localStorage.systemScore)+1;
          } else {
            localStorage.systemScore = 1;
          }
        Result.innerHTML="System Win.!!";
    }
    else if(systemSelect=="ball")
    {
        if (localStorage.userScore) {
            localStorage.userScore = Number(localStorage.userScore)+1;
          } else {
            localStorage.userScore = 1;
          }
        Result.innerHTML="User Win.!!";
    }

    user.innerHTML=localStorage.userScore;
    system.innerHTML=localStorage.systemScore;
});


reset.addEventListener('click',function(){
    localStorage.userScore=0;
    localStorage.systemScore=0;
    Result.innerHTML="Storage Reset.!!";
    user.innerHTML=localStorage.userScore;
    system.innerHTML=localStorage.systemScore;
})