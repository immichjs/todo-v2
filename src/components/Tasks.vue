<template>
  <div class="h-full pb-24">
    <ul v-if="tasks.length !== 0" class="h-full overflow-y-scroll scroll">
      <li v-for="task in tasks" :key="Math.random() * task.id"
        class="w-full h-20 flex b items-center justify-between border-b border-b border-purple-100 px-4"
        :title="task.description"
        >
        <div class="flex flex-col truncate">
          <p class="font-semibold truncate">{{ task.name }}</p>
          <p class="truncate w-64">{{ task.description }}</p>
        </div>
        <input type="checkbox" name="" id="">
      </li>
    </ul>
    <p v-if="tasks.length === 0" class="text-center font-medium">Nenhuma tarefa no momento. :)</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      tasks: 'tasks'
    })
  },
  async created () {
    await this.reqTasks()
  },
  methods: {
    ...mapActions({
      reqTasks: 'requestTasks'
    })
  }
}
</script>
