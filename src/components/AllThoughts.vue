<template>
    <h1>All your Thoughts</h1>
    <div class="athought" v-for="thought in thoughts" v-bind:key="thought.id"
        :style="{ backgroundColor: thought.mood ? '#fff3bf' : '#adb5bd' }">
        <h3>{{ thought.title }}</h3>
        <p>{{ thought.content }}</p>
    </div>
    <div >
        <AddThought @add-thought="updateThoughts"></AddThought>
    </div>

</template>
<script>
import AddThought from '@/components/AddThought.vue';
export default {
    name: "AllThoughts",
    components: { AddThought },
    data() {
        return {
            thoughts: [{id:1, title: "thought1", content: "content1", mood: true }, 
            {id:2, title: "thought2", content: "content2", mood: false }]
        }
    },
    methods: {
        updateThoughts(thought) {
            this.thoughts.push(thought)
        }
    }
};
</script>

<style>
.athought {
    width: 50%;
    margin: 20px auto;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}

.athought:hover {
    transform: scale(1.02);
}

h3 {
    margin: 0;
    font-size: 1.5em;
}

p {
    font-size: 1.1em;
    line-height: 1.5;
}

.add-thought-container {
    text-align: center;
    margin-top: 20px;
}


</style>
