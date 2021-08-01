<template>
  <header class="flex justify-between items-center mb-4">
    <div class="flex items-center gap-2">
      <span class="text-3xl font-bold">{{ day }}</span>
      <div class="flex flex-col border-l pl-2">
        <span class="text-lg font-bold">{{ mounth }}</span>
        <span class="text-sm font-semibold">{{ year }}</span>
      </div>
    </div>
    <div>
    <span class="text-sm uppercase font-bold">{{ weekDay }}</span>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    day () {
      const date = (new Date().getDate()).toString()

      return date.length === 1 ?  `0${date}` : date
    },
    mounth () {
      const date = new Date().getMonth() + 1
      let mounthName

      switch (date) {
        case 1:
          mounthName = 'Jan'
          break
        case 2:
          mounthName = 'Fev'
          break
        case 3:
          mounthName = 'Mar'
          break
        case 4:
          mounthName = 'Abr'
          break
        case 5:
          mounthName = 'Mai'
          break
        case 6:
          mounthName = 'Jun'
          break
        case 7:
          mounthName = 'Jul'
          break
        case 8:
          mounthName = 'Ago'
          break
        case 9:
          mounthName = 'Set'
          break
        case 10:
          mounthName = 'Out'
          break
        case 11:
          mounthName = 'Nov'
          break
        case 12:
          mounthName = 'Dez'
          break
      }
      return mounthName
    },
    year: () => new Date().getFullYear(),
    weekDay () {
      const date = new Date().getDay()
      let weekName

      switch (date) {
        case 0:
          weekName = 'Domingo'
          break
        case 1:
          weekName = 'Segunda'
          break
        case 2:
          weekName = 'Terça'
          break
        case 3:
          weekName = 'Quarta'
          break
        case 4:
          weekName = 'Quinta'
          break
        case 5:
          weekName = 'Sexta'
          break
        case 6:
          weekName = 'Sábado'
          break
      }

      return weekName
    }
  }
}
</script>

<style>

</style>
