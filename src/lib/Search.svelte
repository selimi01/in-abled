<script>
  export let title = '';
  export let searchText = '';
  export let selectedCategory = 'all';
  const svgSize = 20; 
  $: isHome = title === 'Home';
</script>

<div class:home-search={isHome} class:regular-search={!isHome}>
  {#if isHome}
    <div class="title">{title}</div>
    <input type="text" bind:value={searchText} class="search-bar" placeholder="Search..." />
    <div class="button-container">

      <div class='button-box'>
        <button class:selected={'all' === selectedCategory} on:click={() => selectedCategory='all'} class="button"><svg width={svgSize} height={svgSize}>
          <rect width={svgSize} height={svgSize} fill="red" />
        </svg></button>
        <p class='button-text'>All</p>
      </div>

      <div  class='button-box'>
        <button class:selected={'schedule' === selectedCategory} on:click={() => selectedCategory='schedule'} class="button">
          <svg width={svgSize} height={svgSize}>
            <polygon points="0,0 20,0 10,20" fill="blue" />
          </svg>
        </button>
        <p class='button-text'>Management</p>
      </div>

      <div  class='button-box'>
        <button class:selected={'tip' === selectedCategory} on:click={() => selectedCategory='tip'} class="button">
          <svg width={svgSize} height={svgSize}>
            <circle cx="10" cy="10" r="10" fill="green" />
          </svg>
        </button>
        <p class='button-text'>Tips</p>
      </div>
<div class='button-box'>
  <button class:selected={'timer' === selectedCategory} on:click={() => selectedCategory='timer'} class="button">
    <svg width={svgSize} height={svgSize}>
      <polygon points="8,0 20,0 16,4 16,8 20,20 8,20 4,8 4,4" fill="brown" />
    </svg>
  </button>
  <p class='button-text'>Timer</p>
</div>
      
      <div  class='button-box'>
        <button class:selected={'footage' === selectedCategory} on:click={() => selectedCategory='footage'} class="button">
          <svg width={svgSize} height={svgSize}>
            <ellipse cx="10" cy="10" rx="9" ry="6" fill="orange" />
          </svg>
        </button>
        <p class='button-text'>Live Footage</p>
      </div>
      <div  class='button-box'>
        <button class:selected={'mentor' === selectedCategory} on:click={() => selectedCategory='mentor'} class="button">
          <svg width={svgSize} height={svgSize}>
            <polygon points="10,0 12.7,6.18 19.6,7.1 15.08,11.82 16.36,19.36 10,15.46 3.64,19.36 4.92,11.82 0.4,7.1 7.3,6.18" fill="purple" />
          </svg>
        </button>  
        <p class='button-text'>Youth Mentors</p>
      </div>

    </div>
  {:else}
    <div class="title">{title}</div>
    <input type="text" bind:value={searchText} class="regular-search-bar" placeholder="Search..." />
  {/if}
</div>

<style>
  .home-search {
    background-color: #9ac6e8;
    color: white;
    font-size: 40px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .regular-search {
    background-color: #9ac6e8;
    color: white;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;    
    margin: 0 0 20px;
  }

  .title {
    font-size: 50px;
    margin-bottom: 10px;
  }

  .search-bar {
    width: 200px;
    height: 30px;
    border-radius: 5px;
    border: none;
    padding: 5px;
    margin-bottom: 20px;
  }

  .regular-search-bar {
    width: 200px;
    height: 30px;
    border-radius: 5px;
    border: none;
    padding: 5px;
    margin-left: 20px;
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    width: 15em;
  }

  .button-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .button {
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 5px;
    border: none;
  }

  .selected {
  background-color: #cac2c2;
}
  .button-text{
    color: white;
    font-size: 15px;
  }
</style>

