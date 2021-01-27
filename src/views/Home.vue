<template>
    <b-row>
      <b-col>
        <b-card title="Contato" class="mb-2 ml-2 mr-2" style="max-width: 70rem;">
          <b-card-text>
            <Alert />
            <b-form-group id="fieldset-1" label="Nome" label-for="input-1">
              <b-form-input v-model="getContato.nome" placeholder="Digite seu nome"></b-form-input>
            </b-form-group>
            <b-form-group id="fieldset-1" label="E-mail" label-for="input-1">
              <b-form-input v-model="getContato.email" placeholder="Digite seu e-mail"></b-form-input>
            </b-form-group>
            <b-form-group id="fieldset-1" label="Telefone" label-for="input-1">
              <b-form-input v-model="getContato.telefone" v-mask="['(##) ####-####', '(##) #####-####']"
                placeholder="Telefone para contato"></b-form-input>
            </b-form-group>
            <b-form-group id="fieldset-1" label="Mensagem" label-for="input-1">
              <b-form-textarea id="textarea" v-model="getContato.mensagem" placeholder="Digite sua mensagem" rows="3"
                max-rows="6">
              </b-form-textarea>
            </b-form-group>
            <b-form-group id="fieldset-1" label="Arquivo" label-for="input-1">
              <b-form-file v-model="getContato.arquivo" placeholder="Tamanho máximo 500 kB"></b-form-file>
            </b-form-group>
          </b-card-text>
          <b-button href="#" variant="success" block @click="salvar">Enviar</b-button>
        </b-card>
      </b-col>
    </b-row>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data() {
      return {
        arquivo: null,
      }
    },
    computed: {
      ...mapGetters([
        'getContato'
      ])
    },
    methods: {
      ...mapActions([
        'salvarContato',
      ]),
      salvar() {
        const form = new FormData;
        form.append('nome', this.getContato.nome)
        form.append('email', this.getContato.email)
        form.append('telefone', this.getContato.telefone)
        form.append('mensagem', this.getContato.mensagem)
        form.append('arquivo', this.getContato.arquivo)
        this.salvarContato(form)
      },

    },
    created() {
    }
  }
</script>