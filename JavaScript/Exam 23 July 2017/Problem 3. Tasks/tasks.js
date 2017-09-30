// class Task {
//     constructor(title, deadline) {
//         this.title = title;
//         this.deadline = deadline;
//         this.status = 'Open';
//         if(this.isOverdue)
//         this.status = 'Overdue';
//     }

//     static get taskImportances()
//     {
//         return { 'Overdue': 0, 'In Progress': 1, 'Open': 2, 'Complete': 3 };
//     }

//     get isOverdue() {
//         if(this.status == 'Complete') return false;
//         return Date.now() >= this.deadline ? true : false;
//     }

//     get title() {
//         return this._title;
//     }

//     set title(value) {
//         this._title = value;
//     }

//     get deadline() {
//         return this._deadline;
//     }

//     set deadline(value) {
//         if (Date.now() > value) {
//             throw new Error();
//         }
//         this._deadline = value;
//     }

//     get status() {
//         return this._status;
//     }

//     set status(value) {
//         if(this.isOverdue) value = 'Overdue';
//         this._status = value;
//     }

//     static comparator(a, b) {
//         return Task.taskImportances[a.status] - Task.taskImportances[b.status];
//     }

//     getStatusIcon() {
//         switch (this.status) {
//             case 'Open':
//                 return '\u2731';
//             case 'In Progress':
//                 return '\u219D';
//             case 'Complete':
//                 return '\u2714';
//             case 'Overdue':
//                 return '\u26A0';
//         }
//     }
//     toString() {
//         return `[${this.getStatusIcon()}] ${this.title} (${(this.isOverdue ? 'overdue' : this.deadline)})`;
//     }
// }

class Task {
    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        this.status = 'Open';
    }

    get deadline() {
        return this._deadline;
    }

    set deadline(value) {
        if (Date.now() > value) {
            throw new Error();
        }
        this._deadline = value;
    }

    get status() {
        if (this.Overdue)
            this.status = 'Overdue';
        return this._status;
    }

    set status(value) {
        this._status = value;
        if (this.isOverdue)
            this._status = 'Overdue';
    }

    get isOverdue() {
            if(this._status == 'Complete')
            return false;

            return Date.now() > this.deadline;
    }

    static comparator(a, b) {
        return Task.taskImportances[a.status] - Task.taskImportances[b.status];
    }

    static get taskImportances() {
        return { 'Overdue': 0, 'In Progress': 1, 'Open': 2, 'Complete': 3 };
    }

    getStatusIcon() {
        switch (this.status) {
            case 'Open':
                return '\u2731';
            case 'In Progress':
                return '\u219D';
            case 'Complete':
                return '\u2714';
            case 'Overdue':
                return '\u26A0';
        }
    }

    toString() {
        return `[${this.getStatusIcon()}] ${this.title} (deadline: ${this.Overdue ? 'overdue' : this.deadline})`;
    }
}

let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
console.log();
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000);