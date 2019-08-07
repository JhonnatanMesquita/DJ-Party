import Firebase from 'firebase'

const firebaseConfig = {
  apiKey: "{SUA_CHAVE_AQUI}",
  authDomain: "{SUA_CHAVE_AQUI}",
  databaseURL: "{SUA_CHAVE_AQUI}",
  projectId: "{SUA_CHAVE_AQUI}",
  storageBucket: "{SUA_CHAVE_AQUI}",
  messagingSenderId: "{SUA_CHAVE_AQUI}",
  appId: "{SUA_CHAVE_AQUI}"
};  

Firebase.initializeApp(firebaseConfig);

export default Firebase;