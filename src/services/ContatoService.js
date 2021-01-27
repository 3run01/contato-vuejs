import BaseService from './BaseService'

class ContatoService extends BaseService {
    constructor(){
        super('/contatos')
    }
}

export default new ContatoService