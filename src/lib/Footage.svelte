<script lang='ts'>
  import { type IFootage } from './DataTypes'
  export let footage : IFootage = { title: '', videoUrl: '' }
</script>

<div class='video-container'>
  <video controls>
    <source src={footage.videoUrl} type="video/mp4">
    <track kind="captions">
    Your browser does not support the video tag.
  </video>
  <h3>{footage.title}</h3>
</div>

<style>
  .video-container {
    display: flex;
    margin: 10px;
    border: 1px solid #ccc;
    padding: 10px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  video {
    width: 350px;
  }
</style>
