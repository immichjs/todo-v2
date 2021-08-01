<template>
  <div class="w-screen h-screen absolute top-0 left-0 z-10 bg-dark-transparent px-32 flex justify-center items-center">
    <form @submit.prevent="addNewTask(task)"
      class="bg-white rounded shadow-sm flex flex-col items-center w-1/2 p-8 gap-2">
      <input type="text" placeholder="Nome da tarefa" v-model="task.name" class="input">
      <textarea rows="6" placeholder="Descrição da tarefa" v-model="task.description" class="input"></textarea>
      <div class="flex gap-2 self-end mt-2">
        <button type="submit" class="bg-purple-500 w-auto text-white font-medium text-sm py-3 px-8 rounded-full transform hover:-translate-y-1 duration-200">Adicionar tarefa +</button>
        <button class="bg-red-400 w-auto text-white font-medium text-sm py-3 px-8 rounded-full transform hover:-translate-y-1 duration-200" @click="changeMenuStatus(false)">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  data () {
    return {
      task: {
        id: '',
        description: '',
        name: ''
      }
    }
  },
  methods: {
    reset () {
      return {
        task: { id: '', name: '', description: '' }
      }
    },

    ...mapActions({
      reqTasks: 'requestTasks',
      reqAddTask: 'newTaskRequest',
    }),

    ...mapMutations({
      changeMenuStatus: 'changeMenuStatus'
    }),

    async addNewTask (task) {
      if (!this.task.name.trim().length || !this.task.description.trim().length) {
        alert('Preencha os campos para adicionar uma nova task.')
      } else {
        this.task.id = Math.random() * 1000000000
        
        await this.reqAddTask(task)
        await this.reqTasks()
        
        Object.assign(this.$data, this.reset())

        this.changeMenuStatus(false)
      }
    }
  },
}
</script>

<style>
.input {
  @apply p-2 rounded outline-none focus:border-purple-500 duration-200 w-full;
}
textarea {
  resize: vertical;
}
</style>
