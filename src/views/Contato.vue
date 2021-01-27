<template>
  <b-row>
    <b-col>
      <b-card title="Contatos" class="mb-2 ml-2 mr-2" style="max-width: 70rem;">
        <b-card-text>
          <Alert />
          <b-table bordered striped hover :items="getContatos" :fields="fields">
            <template #cell(arquivo)="data">
              <b-button target="_blank" :href="data.value" variant="primary" block @click="salvar">Visualizar</b-button> 
            </template>
          </b-table>
        </b-card-text>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data() {
      return {
        fields: [
          {
            key: 'id',
            sortable: true,
            label: '#'
          },
          {
            key: 'nome',
            sortable: true,
            label: 'Nome'
          },
          {
            key: 'email',
            sortable: true,
            label: 'E-mail'
          },
          {
            key: 'created_at',
            sortable: true,
            label: 'Data/Hora',
            formatter: value => {
              return this.$helper.formatDateTime(value)
            }
          },
          {
            key: 'ip',
            sortable: true,
            label: 'IP'
          },
          {
            key: 'arquivo',
            sortable: false,
            label: 'Arquivo',
          
          }
        ]
      }
    },

    computed: {
      ...mapGetters([
        'getContatos'
      ])
    },
    methods: {
      ...mapActions([
        'listarContatos'
      ])
    },
    created() {
      this.listarContatos()
    }
  }
</script>