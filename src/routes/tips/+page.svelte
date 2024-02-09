<script lang="ts">
  import data from '$lib/mock-data.json'
  import { type ITip } from '$lib/DataTypes';
	import Search from "$lib/Search.svelte";
	import Tip from "$lib/Tip.svelte";

  const tips : ITip[] = data.tips
  const categories = [
    'All',
    'Stress',
    'Robots',
    'Code',
    'Competitions',
  ]
  let selectedCategory = 'All'
  let searchText = ''
  
  $: filteredTips = tips.filter(tip => tip.title.toLowerCase().includes(searchText) && (tip.category === selectedCategory || selectedCategory === 'All'))

  function handleCategory(event: any) {
    selectedCategory = event.target.innerText
  }
</script>

<div>
    <Search bind:searchText={searchText} title="Tips" />
    {#each categories as category}
        <button class:selected={category === selectedCategory} on:click={handleCategory}>{category}</button>
    {/each}
    <h2>Tips to try...</h2>
    <div class='grid-container'>
        {#each filteredTips as tip}
        <Tip {tip} />
      {/each}
    </div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    padding: 10px;
  }
.selected {
  background-color: #cac2c2;
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

