
// Create an array that represents your daily to-do list with 5 tasks. Add a new task to the beginning of the list. Then, remove the last task from the list. Finally, log the updated to-do list to the console

let daily_to_do_list = ["Scrum", "Coding Section", "Break", "Assignment Solving", "EC Connect"];
console.log(`Old tasks : ${daily_to_do_list}`)

daily_to_do_list.unshift("Break");
daily_to_do_list.pop();
console.log(`New tasks : ${daily_to_do_list}`)