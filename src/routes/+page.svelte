<script lang="ts">
    import data from '$lib/mock-data.json'
    import { type IFootage, type ISchedule, type IMentor, type ITimer, type ITip } from "$lib/DataTypes";
    import Search from "$lib/Search.svelte";
    import Footage from "$lib/Footage.svelte";
	import Schedule from "$lib/Schedule.svelte";
	import Mentor from "$lib/Mentor.svelte";
	import Timer from "$lib/Timer.svelte";
	import Tip from "$lib/Tip.svelte";

    const footages : IFootage[] = data.footages
    const schedules : ISchedule[] = data.schedules
    const mentors : IMentor[] = data.mentors
    const timers : ITimer[] = data.timers
    const tips : ITip[] = data.tips


    let searchText = ''
    let selectedCategory = 'all'
    $: filteredFootages = footages.filter(footage => footage.title.toLowerCase().includes(searchText.toLowerCase()))
    $: filteredSchedules = schedules.filter(schedule => schedule.name.toLowerCase().includes(searchText.toLowerCase())) 
    $: filteredMentors = mentors.filter(mentor => mentor.name.toLowerCase().includes(searchText.toLowerCase()))
    $: filteredTimers = timers.filter(timer => timer.name.toLowerCase().includes(searchText.toLowerCase()))
    $: filteredTips = tips.filter(tip => tip.title.toLowerCase().includes(searchText.toLowerCase()))
    $: contentTypes = [...filteredFootages.map((footage) => { return { data: footage, type: 'footage'} }), ...filteredSchedules.map((schedule) => { return { data: schedule, type: 'schedule'} }), ...filteredMentors.map((mentor) => {return { data: mentor, type: 'mentor'}}), ...filteredTimers.map((timer) => {return { data: timer, type: 'timer'}}), ...filteredTips.map((tip) => {return { data: tip, type: 'tip'}})]
    $: randomlySortedContentTypes = contentTypes.sort( () => .5 - Math.random() ).filter((content) => content.type === selectedCategory || selectedCategory === 'all')
    $: if (selectedCategory !== 'all') {
        searchText = searchText
        filteredFootages = footages.filter(footage => footage.title.toLowerCase().includes(searchText.toLowerCase()))
        filteredSchedules = schedules.filter(schedule => schedule.name.toLowerCase().includes(searchText.toLowerCase())) 
        filteredMentors = mentors.filter(mentor => mentor.name.toLowerCase().includes(searchText.toLowerCase()))
        filteredTimers = timers.filter(timer => timer.name.toLowerCase().includes(searchText.toLowerCase()))
        filteredTips = tips.filter(tip => tip.title.toLowerCase().includes(searchText.toLowerCase()))
    }
</script>

<Search bind:selectedCategory bind:searchText title="Home" />

<div class='grid-container'>
    {#each randomlySortedContentTypes as content}
    {#if content.type === 'footage' && (selectedCategory === 'all' || selectedCategory === 'footage')}
       <Footage footage={filteredFootages.pop()} />
    {/if}
    {#if content.type === 'schedule' && (selectedCategory === 'all' || selectedCategory === 'schedule')}
       <Schedule schedule={filteredSchedules.pop()} />
    {/if}
    {#if content.type === 'mentor' && (selectedCategory === 'all' || selectedCategory === 'mentor')}
       <Mentor mentor={filteredMentors.pop()} />
    {/if}
    {#if content.type === 'timer' && (selectedCategory === 'all' || selectedCategory === 'timer')}
       <Timer timer={filteredTimers.pop()} />
    {/if}
    {#if content.type === 'tip' && (selectedCategory === 'all' || selectedCategory === 'tip')}
       <Tip tip={filteredTips.pop()} />
    {/if}
 {/each}
</div>

<style>
      .grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    padding: 10px;
    justify-items: center;
    align-items: center;

  }
</style>