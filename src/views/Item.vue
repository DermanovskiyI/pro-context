<template>
  <li class="item">
      <div class="item__desc">
          <label class="item__select">
              <input type="checkbox" class="item__check"
                v-model="visibleSelected"
                @change="handleSetActiveItem(listId, item.id)">
              <div class="item__title">{{item.title}}</div>
          </label>
          <div class="item__selected"
            v-show="visibleSelected">
              <input type="number" class="item__input"
                :placeholder="item.count"
                v-model="newCount"
                @change="handleSetCount(listId, item.id, newCount)">
              <label class="item__color-label">
                <input type="color" class="item__color"
                  v-model="newColor"
                  @change="handleSetColor(listId, item.id, newColor)">
                <div class="item__color-visible"
                  :style="{backgroundColor: item.color}">
                </div>
              </label>
          </div>
      </div>
  </li>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    listId: {
      type: Number,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visibleSelected: true,
      newCount: null,
      newColor: '#000000'
    }
  },
  methods: {
    ...mapMutations(['setCount', 'setColor', 'setVisible', 'setActiveItem']),
    handleSetCount (listId, itemId, newCount) {
      this.newCount = parseInt(this.newCount)
      if (this.newCount < 0) {
        this.newCount = 0
      } else {
        this.setCount({
          listId: listId,
          itemId: itemId,
          newCount: newCount
        })
      }
    },
    handleSetColor (listId, itemId, newColor) {
      this.setColor({
        listId: listId,
        itemId: itemId,
        newColor: newColor
      })
    },
    handleSetActiveItem (listId, itemId) {
      this.setActiveItem({
        listId: listId,
        itemId: itemId
      })
    }
  }
}
</script>

<style lang="scss">
.item {
    list-style-type: none;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    &__desc {
        padding: 0px 50px 0 20px;
        display: flex;
        justify-content: space-between;
    }
    &__select, &__selected {
        display: flex;
        align-items: center;
    }
    &__select {
        user-select: none;
    }
    &__check, &__count {
        margin-right: 15px;
    }
    &__check {
      cursor: pointer;
    }
    &__input {
      width: 30px;
      margin-right: 10px;
    }
    &__color-label {
      display: flex;
    }
    &__color {
        position: absolute;
        z-index: -1;
        width: 20px;
        height: 20px;
        border: none;
        background-color: transparent;
        padding: 0;

        &-visible {
          width: 20px;
          height: 20px;
          cursor: pointer;
          border: 1px solid black;
          box-shadow: 0 0 10px rgba(#000000, 0.5);
        }
    }
}
</style>
