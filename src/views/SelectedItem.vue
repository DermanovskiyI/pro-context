<template>
  <li class="selected__item">
      <div class="selected__item-block"
        v-for="count in item.count"
        :key="count"
        :style="{backgroundColor: item.color}"
        v-show="item.active">
      </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.selected__item {
    list-style-type: none;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    &:last-child {
      margin-bottom: 0;
    }
    &-block {
      width: 10px;
      height: 10px;
      margin: 5px;
    }
}
</style>
