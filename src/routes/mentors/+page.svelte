<script lang="ts">
    import data from '$lib/mock-data.json'
    import { type IMentor } from '$lib/DataTypes';
    import Search from "$lib/Search.svelte";
	import Mentor from "$lib/Mentor.svelte";

    const mentors : IMentor[] = data.mentors
    let searchText = ''

    $: filteredMentors = mentors.filter(mentor => mentor.name.toLowerCase().includes(searchText.toLowerCase()))
  </script>
  
  <div >
    <Search bind:searchText={searchText} title="Mentors" />
      <div class='grid-container'>
        {#each filteredMentors as mentor}
          <Mentor {mentor} />
        {/each}
      </div>
  </div>
  
  <style>
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    padding: 10px;
  }
  </style>
  
  