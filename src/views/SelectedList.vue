<template>
  <ul class="selected__list" v-if="list.visible">
      <div class="selected__header">
        <div class="selected__title">{{list.title}}</div>
        <div class="selected__btn">
          <button type="button" class="btn" id="sort" @click="handleSetSort">Сортировать</button>
        </div>
      </div>
      <SelectedItem
          v-for="item in sortedList"
          :key="item.id"
          :item="item"
      />
  </ul>
</template>

<script>
import SelectedItem from './SelectedItem'

export default {
  components: {
    SelectedItem
  },
  props: {
    list: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      sortType: null,
      shuffling: true
    }
  },
  computed: {
    sortedList () {
      if (this.sortType === 'ascended') {
        return [...this.list.items].sort((a, b) => {
          return a.count - b.count
        })
      } else if (this.sortType === 'descended') {
        return [...this.list.items].sort((a, b) => {
          return b.count - a.count
        })
      } else {
        return [...this.list.items]
      }
    }
  },
  methods: {
    handleSetSort () {
      if (this.sortType === 'ascended') {
        this.sortType = 'descended'
      } else {
        this.sortType = 'ascended'
      }
    },
    handleSetShuffle () {
      console.log('ok')
    }
  }
}
</script>
<style lang="scss">
.selected__list {
  border: 1px solid black;
  padding: 40px;
  margin-bottom: 10px;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
}
.selected__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn {
  border: none;
  padding: 7px;
  border-radius: 5px;
  background-color: rgb(79, 123, 219);
  color: white;
  cursor: pointer;
}

</style>
