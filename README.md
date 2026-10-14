# My App — React Navigation

**Desenvolvedor:** Michael Gouveia de Oliveira

## Sobre o projeto

O **My App** é um aplicativo desenvolvido com React Native e Expo para praticar e demonstrar diferentes tipos de navegação entre telas utilizando a biblioteca React Navigation.

O projeto possui três tipos de navegação:

- **Stack Navigation:** permite navegar entre as telas Home e Product, com a possibilidade de retornar à tela anterior.
- **Bottom Tabs Navigation:** apresenta uma barra de navegação inferior com quatro opções: Início, Produtos, Perfil e Configurações. A aba Produtos possui um indicador numérico com o valor 3.
- **Drawer Navigation:** disponibiliza um menu lateral com as opções Início, Produtos, Perfil e Configurações.

## Tecnologias utilizadas

- React Native
- Expo
- JavaScript
- React Navigation
- React Native Gesture Handler
- React Native Reanimated
- Material Icons

## Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- npm instalado.
- Expo CLI utilizado por meio do `npx`.

### Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/michaelgvo33/my-app2
   ```

2. Entre na pasta do projeto:

   ```bash
   cd my-app
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o Expo:

   ```bash
   npx expo start
   ```

5. Escolha a plataforma desejada para executar o aplicativo, como navegador ou emulador.

## Modos de navegação

O modo de navegação pode ser selecionado no arquivo `src/routes/index.jsx`, alterando o valor da constante `TIPO_DE_NAVEGACAO`.

### 1. Stack Navigation

Navegação entre as telas Home e Product, utilizando o botão de adicionar para abrir a tela de produtos e a seta de retorno para voltar.

![Stack Navigation]

### 2. Bottom Tabs Navigation

Navegação por meio de uma barra inferior com quatro abas: Início, Produtos, Perfil e Configurações. A aba Produtos apresenta um indicador numérico vermelho com o valor 3.

![Bottom Tabs Navigation]

### 3. Drawer Navigation

Navegação por menu lateral, acessível pelo botão de menu ou pelo gesto de deslizar, com as opções Início, Produtos, Perfil e Configurações.

![Drawer Navigation]

## Organização do projeto

```text
my-app/
├── src/
│   ├── components/
│   ├── routes/
│   │   ├── index.jsx
│   │   ├── StackRoutes.jsx
│   │   ├── BottomRoutes.jsx
│   │   └── DrawerRoutes.jsx
│   ├── screens/
│   │   ├── Home.jsx
│   │   ├── Product.jsx
│   │   ├── Profile.jsx
│   │   └── Settings.jsx
│   └── App.jsx
├── screenshots/
│   ├── stack.png
│   ├── bottom-tabs.png
│   └── drawer.png
├── index.js
├── package.json
└── README.md
```

## Desafio extra: navegação aninhada

A navegação aninhada permite utilizar um navegador dentro de outro, combinando diferentes formas de navegação no mesmo aplicativo.

## Autor

## Michael Gouveia de Oliveira

Projeto desenvolvido para fins acadêmicos e de aprendizagem em desenvolvimento de aplicativos móveis com React Native, Expo e React Navigation.
