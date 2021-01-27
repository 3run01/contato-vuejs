export const mutations = {
    setContato(state, contato) {
        state.contato = contato
    },
    setContatos(state, contatos) {
        state.contatos = contatos
    },
    setModalCadastroContato(state, status) {
        state.modalCadastroContato = status
    },
    setModalExcluirContato(state, status) {
        state.modalExcluirContato = status
    },
    setModalPesquisarContato(state, status) {
        state.modalPesquisarContato = status
    }
}

export default {}