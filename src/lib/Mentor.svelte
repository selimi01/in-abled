<script lang="ts">
  import { type IMentor } from './DataTypes';
  export let mentor : IMentor = { name: '', about: '', avatar: '' };
</script>
  
  <div class="mentor-container">
    <h3>{mentor.name}</h3>
    <img class="mentor-avatar" src='https://fakeimg.pl/300/' alt={mentor.name} />
    <p>{mentor.about}</p>
  </div>
  
  <style>
    .mentor-container {
      border: 1px solid #ccc;
      padding: 10px;
      margin: 10px;
      display: flex;
      flex-direction: column;
        align-items: center;
    }
  
    .mentor-avatar {
      height: 100px;
    }
  </style>
  