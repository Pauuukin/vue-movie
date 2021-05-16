import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // подключаем модуль к проекту Vue

// данный store позволяет нам иметь глобальные файлы в проекте
// это позволяет пробрасывать информацию между компонентами, которые не имеют связь parent-child 
// к store имеют доступы все компоненты

const store = new Vuex.Store({
    state: {
        backendUrl: "http://127.0.0.1:8002/api/v1"
    },
    mutations: {},
    actions: {},
    modules: {},
    getters: {
        getServerUrl: state => {        // принимаем state и возвращаем backendUrl 
            return state.backendUrl
        }
    },
})

export default store  // экспортируем store