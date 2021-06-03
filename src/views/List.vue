<template>
  <ul class="list">
    <label class="list__decor">
      <div class="list__arrow">
        <img src="../assets/arrow.png" alt="" class="list__arrow-pic" :class="{'list__arrow-pic--open' : list.visible}">
      </div>
      <div class="list__input">
        <input type="checkbox" class="list__input-check" @change="handleSetVisible(list.id)">
      </div>
      <div class="list__title">{{list.title}}</div>
    </label>
    <Item
      v-for="item in list.items"
      :key="item.id"
      :item="item"
      :listId="list.id"
      v-show="list.visible"
    />
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'
import Item from './Item'
export default {
  components: {
    Item
  },
  props: {
    list: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapMutations(['setVisible']),
    handleSetVisible (listId) {
      this.setVisible(listId)
    }
  }
}
</script>

<style lang="scss">
.list {
  margin-bottom: 20px;
  border: 1px solid black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  &:last-child {
    margin-bottom: 0;
  }
  &__decor {
    display: flex;
    user-select: none;
    cursor: pointer;
    align-self: flex-start;
    margin-bottom: 20px;
  }
  &__arrow {
    width: 20px;
    height: 20px;
    &-pic {
      max-width: 100%;
      transition: .3s;
      &--open {
        transform: rotateZ(90deg);
        transition: .3s;
      }
    }
  }
  &__input-check{
    cursor: pointer;
  }
}
</style>
