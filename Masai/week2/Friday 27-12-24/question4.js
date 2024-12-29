
// Remove the first task from the list.
// Add two new high-priority tasks to the beginning of the list.
// Replace the last task in the list with a new task.
// Log the updated task list after all operations.

let tasks = ["Cycling", "Attend masai coding class", "Solve Assignment Problems", "Google for tommorow concept", "Solve 1 Dsa question from hakerRank"];
let lastElement = 0;

for (let i = 0; i <= tasks.length - 1; i++) {
   if (i == 0) {
      tasks.unshift("Walking");
   } else if (i == 1) {
      tasks[i] = "Check todays shedule";
      lastElement = tasks.length - 1;
   } else if (i == lastElement) {
      tasks[i] = "Solve 3 Dsa question from hakerRank"
   }
}

console.log(tasks)