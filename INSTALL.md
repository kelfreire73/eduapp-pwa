# 🚀 GUIA RÁPIDO DE INSTALAÇÃO - EduApp PWA

## ⚡ Instalação em 5 Minutos

### 1. Configure o Firebase

```bash
# Acesse: https://console.firebase.google.com/
# Crie projeto → Ative Authentication (Email/Password)
# Ative Firestore Database → Ative Storage
# Copie as credenciais em Project Settings
```

Cole em `src/services/firebase.js`:
```javascript
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto-id",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

### 2. Instale Dependências

```bash
cd eduapp_pwa
npm install
```

### 3. Execute Localmente

```bash
npm run dev
```

Acesse: `http://localhost:8080`

### 4. Build para Produção

```bash
npm run build
```

### 5. Deploy Rápido

**Vercel:**
```bash
npm i -g vercel
vercel
```

**Netlify:**
```bash
npm i -g netlify-cli
netlify deploy --prod
```

## 👤 Criar Admin

1. Registre usuário no app
2. Firebase Console → Firestore → users → [USER_ID]
3. Edite campo `role` para `"admin"`

## ✅ Pronto!

Seu app educacional PWA está funcionando! 🎉
