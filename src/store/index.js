import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: [
      {
        id: 1,
        title: 'list 1',
        visible: false,
        items: [
          {
            id: 1,
            title: 'item 1',
            count: 5,
            color: '#e66465',
            active: true
          },
          {
            id: 2,
            title: 'item 2',
            count: 6,
            color: '#f6b73c',
            active: true
          },
          {
            id: 3,
            title: 'item 3',
            count: 2,
            color: '#FF00FF',
            active: true
          },
          {
            id: 4,
            title: 'item 4',
            count: 22,
            color: '#008B8B',
            active: true
          },
          {
            id: 5,
            title: 'item 4',
            count: 12,
            color: '#C72A0F',
            active: true
          }
        ]
      },
      {
        id: 2,
        title: 'list 2',
        visible: false,
        items: [
          {
            id: 1,
            title: 'item 1',
            count: 18,
            color: '#e66465',
            active: true
          },
          {
            id: 2,
            title: 'item 2',
            count: 6,
            color: '#f6b73c',
            active: true
          },
          {
            id: 3,
            title: 'item 3',
            count: 2,
            color: '#FF00FF',
            active: true
          },
          {
            id: 4,
            title: 'item 4',
            count: 2,
            color: '#008B8B',
            active: true
          }
        ]
      },
      {
        id: 3,
        title: 'list 3',
        visible: false,
        items: [
          {
            id: 1,
            title: 'item 1',
            count: 5,
            color: '#e66465',
            active: true
          },
          {
            id: 2,
            title: 'item 2',
            count: 16,
            color: '#f6b73c',
            active: true
          },
          {
            id: 3,
            title: 'item 3',
            count: 22,
            color: '#FF00FF',
            active: true
          },
          {
            id: 4,
            title: 'item 4',
            count: 1,
            color: '#008B8B',
            active: true
          }
        ]
      },
      {
        id: 4,
        title: 'list 4',
        visible: false,
        items: [
          {
            id: 1,
            title: 'item 1',
            count: 24,
            color: '#e66465',
            active: true
          },
          {
            id: 2,
            title: 'item 2',
            count: 18,
            color: '#f6b73c',
            active: true
          },
          {
            id: 3,
            title: 'item 3',
            count: 24,
            color: '#FF00FF',
            active: true
          },
          {
            id: 4,
            title: 'item 4',
            count: 2,
            color: '#008B8B',
            active: true
          }
        ]
      },
      {
        id: 5,
        title: 'list 5',
        visible: false,
        items: [
          {
            id: 1,
            title: 'item 1',
            count: 7,
            color: '#e66465',
            active: true
          },
          {
            id: 2,
            title: 'item 2',
            count: 3,
            color: '#f6b73c',
            active: true
          },
          {
            id: 3,
            title: 'item 3',
            count: 15,
            color: '#FF00FF',
            active: true
          },
          {
            id: 4,
            title: 'item 4',
            count: 10,
            color: '#008B8B',
            active: true
          }
        ]
      }
    ]
  },
  mutations: {
    setVisible (state, listId) {
      state.lists.forEach(list => {
        if (list.id === listId) {
          list.visible = !list.visible
        }
      })
    },
    setCount (state, { listId, itemId, newCount }) {
      newCount = parseInt(newCount)
      state.lists.forEach(list => {
        if (list.id === listId) {
          list.items.forEach(item => {
            if (item.id === itemId) {
              item.count = newCount
            }
          })
        }
      })
    },
    setColor (state, { listId, itemId, newColor }) {
      state.lists.forEach(list => {
        if (list.id === listId) {
          list.items.forEach(item => {
            if (item.id === itemId) {
              item.color = newColor
            }
          })
        }
      })
    },
    setActiveItem (state, { listId, itemId }) {
      state.lists.forEach(list => {
        if (list.id === listId) {
          list.items.forEach(item => {
            if (item.id === itemId) {
              item.active = !item.active
            }
          })
        }
      })
    },
    setSort (state, { listId, sortType }) {
      state.lists.forEach(list => {
        if (list.id === listId) {
          list.items.sort((a, b) => {
            if (sortType === 'ascended') {
              return b.count - a.count
            }
            if (sortType === 'descended') {
              return a.count - b.count
            }
          })
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
