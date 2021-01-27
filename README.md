# Sobre
Sistema de contatos em vue.js

## Configuração do projeto
```
yarn install
```

### Usar em modo de desenvolvimento
Informar o endereço da API na variável VUE_APP_URL_API no arquivo .env, exemplo:

```
VUE_APP_URL_API=http://localhost:8000/api
```
Rodar o seguinte comando:
```
yarn serve
```

### Compilar para modo de produção
Informar o endereço da API na variável VUE_APP_URL_API no arquivo .env.production, exemplo:

```
VUE_APP_URL_API=http://localhost:8000/api
```
Rodar o seguinte comando:
```
yarn build
```

### Deploy produção

Ao compilar para modo de podução será criada uma pasta chamda dist, do domínio deverá apontar a mesma usando NGINX.



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
