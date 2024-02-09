<script lang='ts'>
    import { type ISchedule } from "./DataTypes";
    export let schedule : ISchedule = { name: '', endDate: '', tasks: [] };
</script>

<div class='schedule'>
    <h2>{schedule.name}</h2>
    {#each schedule.tasks as task}
        <div class='task'>
            <h3>{task.name}</h3>
            <p>{task.duration}</p>
            <button ></button>       
        </div>
    {/each}
    <div>
        <span>End Date:</span>
        <h2 style='margin-top: 2px;'>{schedule.endDate}</h2>
    </div>

</div>

<style>
    .schedule {
    border: 1px solid #ccc;
    padding: 10px;
    width: 200px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .task {
    width: 100%;
    display: flex;
    align-self: self-start;
    align-items: center;
    justify-content: space-between;  
    }

button {
    width: 30px;
    height: 20px;
    padding: 0;
    background-color: #12c329; /* Light grey background */
  border: none; /* No border */
  color: #333; /* Dark grey text */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px; /* Adjust the size as needed */
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.3s; /* Smooth transition for hover effects */
}
button:hover {
  background-color: #0cea1e; /* Light grey background */
}
</style>
<!-- {
    "name": "Tip 1",
    "endDate": "9/12/2024",
    "tasks": [
        {
            "name": "Task 1",
            "duration": "2 weeks",
            "order": 0
        },
        {
            "name": "Task 2",
            "duration": "3 days",
            "order": 1
        },
        {
            "name": "Task 3",
            "duration": "1 day",
            "order": 2
        }
    ]
}, -->