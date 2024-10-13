<template>
    <h1>Add your thought</h1>
    <form v-on:submit.prevent="addThought">

        <div>
            <label for="title">Thought title</label>
            <input type="text" name="thought" id="title" v-model="title">
        </div>
        <div>
            <label for="content">Thought content</label>
            <textarea name="thought" id="content" cols="30" rows="10" v-model="content"></textarea>
        </div>
        <div class="radios">

            <input type="radio" id="positive" value="true" v-model="mood">
            <label for="positive">Positive</label>

            <input type="radio" id="negative" value="false" v-model="mood">
            <label for="negative">Negative</label>
        </div>


        <button class="button" type="submit" value="Submit">Submit</button>

    </form>
</template>

<script>


export default {
    name: "AddThought",

    data() {
        return {
            id: 0,
            title: "",
            content: "",
            mood: "true"
        }
    },
    methods: {
        addThought() {
            let thought = {
                id: Date.now(),
                title: this.title,
                content: this.content,
                mood: this.mood==="true",

            };
            if (thought.title == "" || thought.content == "") {
                alert("empty fields")
                return
            }
            this.$emit("add-thought", thought);
            this.title = "";
            this.content = "";
            this.mood = "true";

        }
    }
};
</script>

<style>
form {
    max-width: 500px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
}

input[type="text"],
textarea {
    width: 80%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
}

input[type="radio"] {
    margin-right: 5px;
    cursor: pointer; 
}

.radios {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    height: 20px;
}

.radios label {
    padding-top: 10px;
    font-weight: normal; 
}

.button {
    display: block;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: gray;
    color: white;
    font-size: 1.1em;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: rgb(182, 176, 176);
}
</style>
