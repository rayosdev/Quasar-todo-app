import Vue from 'vue'
import { uid } from 'quasar'

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
            compleated: true,
            dueDate: '04.06.2019',
            dueTime: '14:30'
        },
    },
    search: ''

}

const mutations = {
    updateTask(state, payload){
        Object.assign(state.tasks[payload.id], payload.update)
    },
    onDeleteTask(state, id){
        console.log("made it through")
        Vue.delete(state.tasks, id)
    },
    addTask(state, payload){
        Vue.set(state.tasks, payload.id, payload.task)
    },
    setSearch(state, value){
        state.search = value
    }
}

const actions = {
    updateTask( { commit }, payload ) {
        commit('updateTask', payload)
    },
    onDeleteTask({ commit }, id){
        commit('onDeleteTask', id)
    },
    addTask({ commit }, task){
        let taskID = uid()
        let payload = {
            id: taskID,
            task: task,
        }
        commit('addTask', payload)
    },
    setSearch({commit}, value){
        commit('setSearch', value)
    }
}

const getters = {
    tasksFilterd: (state) => {
        let tasksFilterd = {}
        if(state.search){
            Object.keys(tasks).forEach(key => {
                let task = state.tasks[key]
                if(task.name.includes(state.search)){
                    tasksFilterd[key] = task
                }
            })
            return tasksFilterd
        }
        else{
            return state.tasks
        }
    },
    tasksTodo: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach(key => {
            let task = state.tasks[key]
            if(!task.compleated){
                tasks[key] = task
            }
        })
        return tasks
    },
    tasksCompleated: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach(key => {
            let task = state.tasks[key]
            if(task.compleated){
                tasks[key] = task
            }
        })
        return tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}