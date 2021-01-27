import ContatoService from "../../../services/ContatoService"
import { router } from "../../../main.js"
export const actions = {
    listarContatos: ({commit}, data) => {
        commit('setOverlay', true)
        ContatoService.listar(data)
        .then(res => {
            commit('setOverlay', false)
            commit('setContatos', res.data)
        })
        .catch(e => {
            commit('setOverlay', false)
            console.log(e)
        })
    },
    salvarContato: ({commit, dispatch}, data) => {
        commit('setOverlay', true)
        ContatoService.salvar(data)
        .then(res => {
            dispatch('listarContatos', {limite: 20, pagina: 1})
            commit('setOverlay', false)
            commit('alertSuccess', ['Registro salvo.'])
        })
        .catch(e => {
            if(e.response.status == 422){
                commit('alertError', e.response.data.errors)
            }
            console.log(e)
            commit('setOverlay', false)
        })
    },
    excluirContato: ({commit, dispatch}, id) => {
        dispatch('setModalExcluirContato', false)
        dispatch('setModalCadastroContato', false)
        commit('setOverlay', true)
        ContatoService.excluir(id)
        .then(res => {
            dispatch('listarContatos', {limite: 20, pagina: 1})
            commit('setOverlay', false)
            commit('alertSuccess', ['Registro excluído.'])
        })
        .catch(e => {
        })
    },
    setModalCadastroContato: ({commit}, status) => {
        commit('setModalCadastroContato', false)
        setTimeout(() => {
            commit('setModalCadastroContato', status)
        }, 100);
    },
    setModalExcluirContato: ({commit}, status) => {
        commit('setModalExcluirContato', false)
        setTimeout(() => {
            commit('setModalExcluirContato', status)
        }, 100);
    },
}

export default {}