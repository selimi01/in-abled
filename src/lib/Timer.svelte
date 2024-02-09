<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { type ITimer } from './DataTypes';

  export let timer :ITimer= { name: '', category: '', duration: 0 };

  let remainingTime = timer.duration;
  let intervalId  = 0;

  function startTimer() {
    intervalId = setInterval(() => {
      remainingTime--;
      if (remainingTime === 0) {
        clearInterval(intervalId);
        playBeep();
        resetTimer();
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalId);
    intervalId  = 0;
  }

  function resetTimer() {
    clearInterval(intervalId);
    intervalId  = 0;

    remainingTime = timer.duration;
  }

  function playBeep() {

  }

  onMount(() => {
    remainingTime = timer.duration;
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<div class="timer-container">
  <h3>{timer.name}</h3>
  <div class="timer">{remainingTime} seconds</div>
  {#if intervalId}
  <button on:click={stopTimer}>Stop</button>

    {:else}
    <button on:click={startTimer}>Start</button>

    {/if}
  <button on:click={resetTimer}>Reset</button>
</div>

<style>
  .timer-container {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    height: 150px;
    width: 150px;
  }

  

  .timer {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
</style>
