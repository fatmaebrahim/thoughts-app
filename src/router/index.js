/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import AllThoughts from "@/components/AllThoughts.vue";
const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/allthoughts",
        name: "Allthoughts",
        component: AllThoughts
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router