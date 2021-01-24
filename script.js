function taskGeneration(sub){
    let total=Math.floor(Math.random()*15)+1;
    let done=Math.floor(Math.random()*total)+1;
    sub.tasksFinished=done;
    sub.tasksGiven=total;
    sub.tasksPercentage=Math.round((sub.tasksFinished/sub.tasksGiven)*100)+"%";

}

function timeGenerator(sub){
    let start=new Date((Math.floor(Math.random()*12)+1)+"/"+(Math.floor(Math.random()*30)+1)+"/"+(Math.floor(Math.random()*2)+2020));
    start.setHours(Math.floor(Math.random()*23));
    start.setMinutes(Math.floor(Math.random()*11)*5);
    let finish=new Date(start);
    finish.setHours(Math.floor(Math.random()*23));
    finish.setMinutes(Math.floor(Math.random()*11)*5);
    if(finish.getTime()<=start.getTime())
         finish.setDate(start.getDate()+1);
    sub.startedAt=start;
    sub.finishedAt=finish;
}

function timeCalc(sub){
    let str="";
    let hrs=sub.finishedAt.getHours()-sub.startedAt.getHours();
    let mins=sub.finishedAt.getMinutes()-sub.startedAt.getMinutes();
    if(mins<0)
        mins+=60;
    if(mins!==0)
        mins="."+mins;
    else 
        mins="";
    if(sub.finishedAt.getDate()!==sub.startedAt.getDate()){
        hrs+=24;
    }
    str=hrs+""+mins;
    sub.totalTimeSpent=str;
    
}

let subject1={
    topic: "JavaScript"
};
let subject2={
    topic: "HTML"
};

let subject3={
    topic: "CSS"
};

let subject4={
    topic: "GITHUB"
};
let subject5={
    topic: "FCC"
};

let subject6={
    topic: "Functions"
};

let subject7={
    topic: "Objects"
};

let subject8={
    topic: "DOM Manipulation"
};

let subject9={
    topic: "HTML & CSS"
};

let subject10={
    topic: "Arrays"
};
let arr=[subject1,subject2,subject3,subject4,subject5,subject6,subject7,subject8,subject9,subject10];

for(let sub of arr){
    taskGeneration(sub);
    timeGenerator(sub);
    timeCalc(sub);
}

// DOM manipulation
const h1=document.createElement("h1");
h1.setAttribute("class","heading");
h1.innerText="My Subjects Table With DOM Manipulation";
document.body.append(h1);

const table=document.createElement("table");
table.id="table";
document.body.append(table);
    const tr=document.createElement("tr");
    table.append(tr);
    for(let prop in arr[0]){
        let temp="";
        temp=prop;
        let str="";
        for(let i=0;i<temp.length;i++){
            str+=temp.charAt(i);
            if(temp.charAt(i+1)===temp.charAt(i+1).toUpperCase())
                str+=" ";
        }
    const td=document.createElement("td");
    tr.append(td);
    td.setAttribute("class","title");
    td.innerHTML=str;
    }
    

for(let sub of arr){
    let cls="";
    const tr=document.createElement("tr");
    table.append(tr);
    for(let prop in sub){
        const td=document.createElement("td");
        tr.append(td);
        cls="";
        if(prop==="totalTimeSpent"){
            let hrs=parseInt(sub["totalTimeSpent"]);
            if(hrs<=8)
                cls="clg1";
            if(hrs>8&&hrs<=16)
                cls="clg2";
            if(hrs>16)
                cls="clg3";
        }
        if(prop==="tasksPercentage"){
            let per=parseInt(sub[prop].replace("%",""));
            if(per<=50)
                cls="clp1";
            if(per>50&&per<=75)
                cls="clp2";
            if(per>75)
                cls="clp3";
        }
        if(prop==="startedAt"||prop==="finishedAt")
        {
            let date=String(sub[prop].getHours())+':'+String(sub[prop].getMinutes());
            if(sub[prop].getHours()>=0&&sub[prop].getHours()<=9)
                date="0"+date;
            if(sub[prop].getMinutes()>=0&&sub[prop].getMinutes()<=9)
                date=date.replace(":",":0");
            td.setAttribute("class",prop);
            td.innerHTML=date+"<br>";
        }
        else{
            td.setAttribute("class",prop+" "+cls);
            td.innerHTML=sub[prop]+"<br>";
        }
}
}