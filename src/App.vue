<template>
  <div class="row">
    <div class="col-sm-12">
      <h3>To Do List With Vuex</h3>
      <form v-on:submit.prevent="addTodo">
        <div class="form-group row">
          <label for="text-task" class="col-sm-2 col-form-label">Task : </label>
          <div class="col-sm-4">
            <input type="text" class="form-control" id="text-task" placeholder="New Task" v-model="task">
          </div>
        </div>
      </form>
      <todolist-component :items="todoListItems"></todolist-component>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                todoListItems: [],
                task: ''
            }
        },
        mounted() {
            this.todoListItems = this.$store.getters.all
        },
        methods: {
            addTodo(){
                var item = {
                    id: this.$store.getters.getLastID,
                    task: this.task,
                    completed: false
                }

                this.$store.commit('addTodo', item)
                this.task = ""
            }
        }
    }
</script>