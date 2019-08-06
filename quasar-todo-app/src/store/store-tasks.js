const state = {
    
    tasks: {
        'ID1': {
            name: 'Go to Store',
            compleated: false,
            dueDate: '02.05.2019',
            dueTime: '16:00'
        },
        'ID2': {
            name: 'Get Bannanas',
            compleated: false,
            dueDate: '02.05.2019',
            dueTime: '16:00'
        },
        'ID3': {
            name: 'Get Appels',
            compleated: false,
            dueDate: '04.06.2019',
            dueTime: '14:30'
        },
    }

}

const mutations = {
    updateTask(state, payload){
        Object.assign(state.tasks[payload.id], payload.update)
    }
}

const actions = {
    updateTask( { commit }, payload ) {
        commit('updateTask', payload)
    },
}

const getters = {
    tasks: (state) => {
        console.log("GETTING TASKS")
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