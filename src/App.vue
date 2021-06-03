<template>
  <div class="wrapper">
    <div class="maincontent">
      <ul class="lists">
          <list
            v-for="list in lists"
            :key="list.key"
            :list="list"
          />
      </ul>
      <div class="display">
        <SelectedList
          v-for="list in lists"
          :key="list.key"
          :list="list"
        />
      </div>
    </div>
  </div>
</template>
<script>
import List from './views/List'
import SelectedList from './views/SelectedList'
import { mapState } from 'vuex'
export default {
  components: {
    List,
    SelectedList
  },
  computed: {
    ...mapState({
      lists: (state) => state.lists
    })
  }

}
</script>
<style lang="scss">
ul {
  margin: 0;
  padding: 0;
}
label {
  cursor: pointer;
}
.wrapper {
  display: flex;
  flex-direction: column;
}
.maincontent {
  display: flex;
  padding: 20px;
  border: 1px solid black;
}
.lists, .display {
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 30px;
  justify-content: flex-start;
}
.lists {
  margin-right: 15px;
}

</style>
