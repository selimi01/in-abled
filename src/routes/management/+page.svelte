<script lang="ts">
  import data from '$lib/mock-data.json'
  import { type ISchedule } from '$lib/DataTypes';
  import Search from "$lib/Search.svelte";
  import Schedule from '$lib/Schedule.svelte';

  const schedules : ISchedule[] = data.schedules
  let searchText = ''
  $: filteredSchedules = schedules.filter(schedule => schedule.name.toLowerCase().includes(searchText.toLowerCase()))
  </script>
  
  <div>
    <Search bind:searchText={searchText} title="Management" />
      <div>
        <h2>Management</h2>
        <div  class='grid-container'>
            {#each filteredSchedules as schedule}
            <Schedule {schedule} />
          {/each}
        </div>

      </div>
  </div>
  
  <style>
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    padding: 10px;
  }
  </style>
  
  