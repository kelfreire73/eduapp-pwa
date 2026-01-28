# 🎓 EduApp PWA - Plataforma Educacional Completa

Sistema educacional moderno desenvolvido como Progressive Web App (PWA) com React, Firebase e Vite.

## ✨ Funcionalidades

### 🔐 Autenticação
- ✅ Login com e-mail e senha
- ✅ Registro de novos usuários
- ✅ Recuperação de senha
- ✅ Sessão persistente
- ✅ Proteção de rotas

### 👥 Gerenciamento de Usuários
- ✅ Perfil individual por aluno
- ✅ Níveis de acesso (Aluno / Admin)
- ✅ Painel administrativo
- ✅ Visualizar usuários
- ✅ Bloquear/Desbloquear acesso

### 📚 Conteúdo Educacional
- ✅ Módulos organizados
- ✅ Aulas com vídeos
- ✅ Textos e PDFs
- ✅ Interface intuitiva

### 📱 PWA
- ✅ Instalável em Android/iOS
- ✅ Funciona offline (parcial)
- ✅ Ícones e manifest configurados
- ✅ Service Worker ativo

## 🚀 Instalação e Deploy

### 1. Configurar Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Crie um novo projeto
3. Ative **Authentication** → Email/Password
4. Ative **Firestore Database**
5. Ative **Storage**
6. Copie as credenciais em **Project Settings** → **General** → **Your apps** → **SDK**
7. Cole em `src/services/firebase.js`

### 2. Instalar Dependências

```bash
cd eduapp_pwa
npm install
```

### 3. Executar em Desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:8080`

### 4. Build para Produção

```bash
npm run build
```

### 5. Deploy

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 👨‍💼 Criar Usuário Administrador

Execute no Console do Firebase (Firestore):

```javascript
// 1. Registre um usuário normalmente no app
// 2. Vá em Firestore → users → [USER_ID]
// 3. Edite o campo 'role' para 'admin'
```

## 📂 Estrutura do Projeto

```
eduapp_pwa/
├── public/              # Arquivos públicos
├── src/
│   ├── components/      # Componentes React
│   │   └── PrivateRoute.jsx
│   ├── contexts/        # Context API
│   │   └── AuthContext.jsx
│   ├── pages/           # Páginas principais
│   │   ├── Login.jsx
│   │   ├── Registro.jsx
│   │   ├── Dashboard.jsx
│   │   ├── AdminPanel.jsx
│   │   └── RecuperarSenha.jsx
│   ├── services/        # Serviços externos
│   │   └── firebase.js
│   ├── App.jsx          # Componente raiz
│   └── main.jsx         # Entry point
├── index.html           # HTML principal
├── vite.config.js       # Configuração Vite + PWA
└── package.json         # Dependências

## 🔒 Segurança

- ✅ Autenticação Firebase
- ✅ Proteção de rotas
- ✅ Regras de segurança Firestore
- ✅ HTTPS obrigatório em produção
- ✅ Validação de formulários

## 📱 PWA - Como Instalar

### Android (Chrome)
1. Abra o app no Chrome
2. Toque em **Menu** (⋮) → **Instalar app**
3. Confirme a instalação

### iOS (Safari)
1. Abra o app no Safari
2. Toque em **Compartilhar** → **Adicionar à Tela de Início**
3. Confirme

## 🛠️ Tecnologias

- **React 18** - Framework UI
- **Vite** - Build tool moderna
- **Firebase** - Backend completo
- **React Router** - Navegação
- **Vite PWA Plugin** - PWA

## 📖 Uso do Painel Administrativo

1. Faça login como administrador
2. Acesse `/admin`
3. Visualize todos os usuários
4. Bloqueie/Desbloqueie acesso
5. Gerencie conteúdo

## 🎯 Próximos Passos

- [ ] Adicionar mais módulos educacionais
- [ ] Sistema de progresso do aluno
- [ ] Certificados de conclusão
- [ ] Integração com pagamento
- [ ] Chat entre alunos e professores

## 📧 Suporte

Para dúvidas e suporte, consulte a documentação do Firebase:
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Cloud Firestore](https://firebase.google.com/docs/firestore)
- [PWA](https://web.dev/progressive-web-apps/)

---

**✅ Projeto pronto para uso em produção!**
