<script lang="ts">
    import data from '$lib/mock-data.json'
    import { type ITimer } from '$lib/DataTypes';
	import Search from "$lib/Search.svelte";
	import Timer from "$lib/Timer.svelte";

    const timers : ITimer[] = data.timers
    const categories = [
      'Automaton Affair',
      'Bionic Bout',
      'Machine Matchup',
      'Synthetic Skirmish',
    ]
    let selectedCategory = categories[0]
    let searchText = ''

    $: filteredTimers = timers.filter(timer => timer.name.toLowerCase().includes(searchText) && timer.category === selectedCategory)
  
    function handleCategory(event: any) {
     selectedCategory = event.target.innerText
    }
</script>
  
  <div>
      <Search bind:searchText={searchText} title="Timers" />
      {#each categories as category}
          <button class:selected={category === selectedCategory} on:click={handleCategory}>{category}</button>
      {/each}
      <h2>Timers</h2>
      <div class='grid-container'>
          {#each filteredTimers as timer}
            <Timer {timer} />
          {/each}
      </div>
  </div>
  
  <style>
.selected {
  background-color: #cac2c2;
}

.grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    padding: 10px;
  }

button {
  background-color: #f2f2f2; /* Light grey background */
  border: none; /* No border */
  color: #333; /* Dark grey text */
  padding: 10px 20px; /* Top and bottom padding 10px, left and right padding 20px */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px; /* Adjust the size as needed */
  margin: 4px 2px;
  cursor: pointer;
  transition: all 0.3s; /* Smooth transition for hover effects */
}


button:hover {
  background-color: #c1baba; /* Light grey background */
}
  </style>
  
  