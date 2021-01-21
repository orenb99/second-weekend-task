let subject1={
    topic: "JavaScript",
    startedAt: new Date("2021-01-11:13:00"),
    finishedAt: new Date("2021-01-11:19:00"),
    tasksGiven: 6,
    tasksFinished: 5
};

let subject2={
    topic: "HTML",
    startedAt: new Date("2021-01-12:15:00"),
    finishedAt: new Date("2021-01-12:19:30"),
    tasksGiven: 8,
    tasksFinished: 8
};

let subject3={
    topic: "CSS",
    startedAt: new Date("2021-01-13:14:00"),
    finishedAt: new Date("2021-01-13:20:30"),
    tasksGiven: 9,
    tasksFinished: 5
};

let subject4={
    topic: "GITHUB",
    startedAt: new Date("2021-01-14:07:45"),
    finishedAt: new Date("2021-01-14:19:00"),
    tasksGiven: 9,
    tasksFinished: 8
};
let subject5={
    topic: "FCC",
    startedAt: new Date("2021-01-15:13:00"),
    finishedAt: new Date("2021-01-15:15:00"),
    tasksGiven: 5,
    tasksFinished: 4
};

let subject6={
    topic: "Functions",
    startedAt: new Date("2021-01-16:16:00"),
    finishedAt: new Date("2021-01-16:23:00"),
    tasksGiven: 5,
    tasksFinished: 2
};

let subject7={
    topic: "Objects",
    startedAt: new Date("2021-01-17:07:00"),
    finishedAt: new Date("2021-01-17:09:00"),
    tasksGiven: 6,
    tasksFinished: 4
};

let subject8={
    topic: "DOM Manipulation",
    startedAt: new Date("2021-01-18:12:00"),
    finishedAt: new Date("2021-01-18:19:00"),
    tasksGiven: 6,
    tasksFinished: 1
};

let subject9={
    topic: "HTML & CSS",
    startedAt: new Date("2021-01-19:14:30"),
    finishedAt: new Date("2021-01-19:20:30"),
    tasksGiven: 9,
    tasksFinished: 8
};

let subject10={
    topic: "Arrays",
    startedAt: new Date("2021-01-20:13:00"),
    finishedAt: new Date("2021-01-20:14:00"),
    tasksGiven: 7,
    tasksFinished: 2
};

let arr=[subject1,subject2,subject3,subject4,subject5,subject6,subject7,subject8,subject9,subject10];


// DOM manipulation
document.write('<table id="table">');
document.write('<tr>');
for(let prop in arr[0]){
    document.write('<td>'+prop+'<td>');
}
document.write('</tr>')
    
for(let sub of arr){
    document.write('<tr>');
    for(let prop in sub){
        document.write('<td>'+sub[prop]+' </td> ');
    }
    document.write('</tr>');
}

document.write('</table>');