let subject1={
    topic: "JavaScript",
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7
};

let subject2={
    topic: "JavaScript",
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7
};

let subject3={
    topic: "JavaScript",
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7
};

let subject4={
    topic: "JavaScript",
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7
};
let subject5={
    topic: "JavaScript",
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7
};

let subject6={
    topic: "JavaScript",
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7
};

let subject7={
    topic: "JavaScript",
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7
};

let subject8={
    topic: "JavaScript",
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7
};

let subject9={
    topic: "JavaScript",
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7
};

let subject10={
    topic: "JavaScript",
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 10,
    tasksFinished: 7
};

let arr=[subject1,subject2,subject3,subject4,subject5,subject6,subject7,subject8,subject9,subject10];


// DOM manipulation
document.write("<span>");
for(let prop in arr[0]){
    document.write(prop+" , ");
}
document.write("</span><br>")
    
for(let sub of arr){
    document.write("<span>");
    for(let prop in sub){
        document.write(sub[prop]+" , ");
    }
    document.write("</span><br>");
}