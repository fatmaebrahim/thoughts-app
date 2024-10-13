<template>
    <div id="welcome-container">
        <h1>Welcome to Thoughts App</h1>
        <router-link to="/allthoughts" class="link" >
            <button class="button">All your Thoughts</button>
        </router-link>
    </div>
</template>

<style>
#welcome-container {
    text-align: center;
    padding: 20px;
    max-width: max-content;
    margin: auto;
    background-color: #f9f9f9; 
    border-radius: 10px; 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
}

h1 {
    font-size: 2.5em;
    color: #2c3e50; 
    margin-bottom: 20px;
}
.link{
    text-decoration: none; 
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

.button:active {
    transform: scale(0.95); 
}
</style>
