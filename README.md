# Aplicativo de Pontos Turísticos - Recife

Este é um aplicativo simples desenvolvido com React Native que apresenta uma lista de pontos turísticos em Recife, com a funcionalidade de permitir ao usuário adicionar um novo ponto turístico. O aplicativo também oferece a possibilidade de alternar entre o modo claro e o modo escuro, e simula operações de carregamento para interações realistas.

## Funcionalidades

- **Modo Escuro/Claro**: Permite alternar entre o modo escuro e o modo claro, afetando o estilo de toda a interface.
- **Cadastro de Novos Pontos**: O usuário pode adicionar um novo ponto turístico ao aplicativo através de um modal.
- **Saudação Personalizada**: O aplicativo saudará o usuário com seu nome, caso fornecido.
- **Carregamento Simulado**: Um botão simula o processo de atualização dos pontos turísticos com um indicador de carregamento.

## Tecnologias

- React Native
- Hooks (useState)
- FlatList
- Modal
- ActivityIndicator
- Switch para alternância de modo escuro/claro

## Instalação

Siga as etapas abaixo para instalar e rodar o aplicativo localmente:

### 1. Clone o repositório

```bash
git clone https://github.com/SEU_USUARIO/pontos-turisticos-recife.git
cd pontos-turisticos-recife

---Instale as dependências:
npm install

---Execute:
npx expo start
