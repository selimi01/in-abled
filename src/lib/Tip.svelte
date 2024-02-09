<script lang='ts'>
  import {type ITip} from '$lib/DataTypes';

  export let tip : ITip = {title: '', content: '', category: ''};

  let isModalOpen = false;

  function openModal() {
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
  }
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="tip" on:click={openModal} >
    <h3 class="tip-element" >{tip.title}</h3>
    <p class="tip-element tip-content">{tip.content}</p>
    <p style="font-size: 12px" class="tip-element" >in: {tip.category}</p>
  </div>
  
{#if isModalOpen}
<button class="modal" on:click={closeModal} type="button">
    <div class="modal-content">
    <h3>{tip.title}</h3>
    <p>{tip.content}</p>
    <p>{tip.category}</p>
    </div>
</button>
{/if}
<style>
  .tip {
    border: 1px solid #ccc;
    padding: 10px;
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .tip-element {
    margin: 0
  }

  .tip-content {
    white-space: nowrap;
    overflow: hidden;
  text-overflow: ellipsis;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    width: 400px;
    height: 300px;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }
</style>

