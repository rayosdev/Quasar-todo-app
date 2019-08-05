const state = {
    tasks: {
        ID1: {
          name: 'Go to Shop',
          compleated: false,
          dueDate: '12.05.2019',
          dueTime: '14:00'
        },
        ID2: {
          name: 'Gety Bannanas',
          compleated: false,
          dueDate: '02.05.2019',
          dueTime: '16:00'
        },
        ID3: {
          name: 'Get Appels',
          compleated: false,
          dueDate: '04.06.2019',
          dueTime: '14:30'
        }
    }
}

const mutations = {

}

const actions = {

}

const getters = {
    tasks: (state) => {
        return state.tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}