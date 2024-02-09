<script lang="ts">
  import data from '$lib/mock-data.json'
  import { type IFootage } from '$lib/DataTypes';
  import Search from "$lib/Search.svelte";
	import Footage from "$lib/Footage.svelte";

  const footages : IFootage[] = data.footages
  let searchText = ''

  $: filteredFootages = footages.filter(footage => footage.title.toLowerCase().includes(searchText.toLowerCase()))
  </script>
  
  <div>
      <Search bind:searchText={searchText} title="Footage" />
      <h2>Footage</h2>
      <div class='grid-container'>
        {#each filteredFootages as footage}
          <Footage {footage} />
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
  
  