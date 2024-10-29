// stores/userStore.js
import { defineStore } from 'pinia';
import { auth } from '/src/firebase.js'; 
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';


export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false, // État de connexion de l'utilisateur
    userInfo: null,
    global: {}
  }),
  actions: { 
      async login(email, password) {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          this.isLoggedIn = true;
          this.userInfo = userCredential.user; // Stockez les informations de l'utilisateur
        } catch (error) {
          console.error('Erreur de connexion:', error.message);
          throw error; // Vous pouvez gérer l'erreur selon vos besoins
        }
    },
    async logout() {
        try {
          await signOut(auth);
          this.isLoggedIn = false;
          this.userInfo = null;
        } catch (error) {
          console.error('Erreur de déconnexion:', error.message);
        }
      },
    },
  
    
});

