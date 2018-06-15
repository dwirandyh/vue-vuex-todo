<template>
    <div>
        <ul>
            <li v-bind:key="item.id" v-for="item in items" :class="{ 'checklist-item': item.completed }" v-on:click="toggleItem(item.id)">{{ item.task }} | <label class="text-danger" v-on:click="deleteTodo(item.id)">Delete</label>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "TodoListComponent",
        props: {
            items: {
                type: Array
            }
        },
        methods: {
            deleteTodo(id) {
                this.$store.commit('delete', id)
            },
            toggleItem(id) {
                this.$store.commit('updateStatus', id)
            }
        }
    }
</script>

<style scoped>
    .checklist-item {
        text-decoration: line-through
    }
</style>