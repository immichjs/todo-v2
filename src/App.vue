<template>
  <div id="app" class="flex items-center justify-center h-screen bg-gray-900 px-8">
    <Menu v-if="menuStatus"/>
    <div class="relative bg-gray-50 md:w-1/3 md:h-5/6 rounded shadow-sm px-12 py-8">
      <Header />
      <Tasks />
      <button
        class="bg-purple-500 absolute -bottom-8 left-0 right-0 mx-auto text-white w-16 h-16 text-xl rounded-full text-center font-semibold transform hover:-translate-y-1 duration-200 shadow-md"
        @click="changeMenuStatus(true)"
      >+</button>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Tasks from '@/components/Tasks'
import Menu from '@/components/Menu'

import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'App',
  metaInfo: {
    title: 'ToDo',
    titleTemplate: '%s | v2.0 ',
    htmlAttrs: {
      lang: 'pt-br',
    }
  },
  computed: {
    ...mapGetters({
      menuStatus: 'menuStatus'
    })
  },
  components: {
    Header,
    Tasks,
    Menu,
  },
  methods: {
    ...mapMutations({
      changeMenuStatus: 'changeMenuStatus'
    })
  }
}
</script>

<style lang="postcss">
#app {
  font-family: 'Montserrat', sans-serif;
  @apply text-gray-500
}

.input {
  @apply border;
}
</style>
