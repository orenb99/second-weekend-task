function taskGeneration(sub){
    total=Math.floor(Math.random()*15)+1;
    done=Math.floor(Math.random()*total)+1;
    sub.tasksFinished=done;
    sub.tasksGiven=total;
    sub.tasksPercentage=Math.round((sub.tasksFinished/sub.tasksGiven)*100)+"%";

}

let subject1={
    topic: "JavaScript",
    startedAt: new Date("2021-01-11:13:00"),
    finishedAt: new Date("2021-01-11:19:00"),
};
let subject2={
    topic: "HTML",
    startedAt: new Date("2021-01-12:15:00"),
    finishedAt: new Date("2021-01-12:19:30"),
};

let subject3={
    topic: "CSS",
    startedAt: new Date("2021-01-13:14:00"),
    finishedAt: new Date("2021-01-13:15:30"),
};

let subject4={
    topic: "GITHUB",
    startedAt: new Date("2021-01-14:07:45"),
    finishedAt: new Date("2021-01-14:19:00"),
};
let subject5={
    topic: "FCC",
    startedAt: new Date("2021-01-15:13:00"),
    finishedAt: new Date("2021-01-15:15:00"),
};

let subject6={
    topic: "Functions",
    startedAt: new Date("2021-01-16:16:00"),
    finishedAt: new Date("2021-01-16:19:00"),
};

let subject7={
    topic: "Objects",
    startedAt: new Date("2021-01-17:07:00"),
    finishedAt: new Date("2021-01-17:09:45"),
};

let subject8={
    topic: "DOM Manipulation",
    startedAt: new Date("2021-01-18:12:00"),
    finishedAt: new Date("2021-01-18:19:00"),
};

let subject9={
    topic: "HTML & CSS",
    startedAt: new Date("2021-01-18:14:30"),
    finishedAt: new Date("2021-01-19:20:30"),
};

let subject10={
    topic: "Arrays",
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:14:00"),
};

let arr=[subject1,subject2,subject3,subject4,subject5,subject6,subject7,subject8,subject9,subject10];

for(let sub of arr){
            let d=new Date(sub.finishedAt.getTime()-sub.startedAt.getTime());
            let str=d.getHours()-2;
            if(d.getMinutes()!==0)
                str+="."+d.getMinutes()*100/60;

            sub.totalTimeSpent=str;
            
}
for(let sub of arr){
    taskGeneration(sub);
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
        // if(prop==="totalTimeSpent")
        //     temp="tasksGiven";
        // else if(prop==="tasksGiven")
        //     temp="totalTimeSpent";
        // else
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
            if(hrs<=2)
                cls="clg1";
            if(hrs>2&&hrs<=5)
                cls="clg2";
            if(hrs>5)
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
        // else if(prop==="tasksGiven"){
        //     td.setAttribute("class","totalTimeSpent "+cls);
        //     td.innerHTML=sub["totalTimeSpent"]+"<br>";
        // }
        // else if(prop==="totalTimeSpent"){
        //     td.setAttribute("class","tasksGiven "+cls);
        //     td.innerHTML=sub["tasksGiven"]+"<br>";
        // }
        else{
            td.setAttribute("class",prop+" "+cls);
            td.innerHTML=sub[prop]+"<br>";
        }
}
}