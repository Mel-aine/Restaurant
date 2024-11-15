// store.js
import { reactive,watch ,  } from 'vue'

 const restored = ()=>{
  try {
    return JSON.parse(localStorage.getItem('storeVue001'))
  } catch (error) {
    return {}
  }
}
export const store = reactive({
  global: {},

  restored(){
    this.global= restored();
  },
  
  setRestaurantId(restaurantId) {
    console.log('GLOBAL:::: Setting new user :: ', restaurantId);
    this.global = {...this.global, restaurantId};
  },
  
  getRestaurantId() {
 
    return this.global?.user?.Restaurants[0]?.id_restaurant
    // this.global?.restaurantId || this.global?.user?.Restaurants[0]?.id_restaurant

    ;

  },

  
  
  setRestaurant(restaurant) {
    console.log('GLOBAL:::: Setting new restaurant :: ', restaurant);
    this.global = {...this.global, restaurant};
    this.global.hasRestaurant=true;
  },
  
  getRestaurant() {
    return this.global?.restaurant;
    
  },

  setCategorieId(categorieId) {
    console.log('GLOBAL:::: Setting new categorie id :: ', categorieId);
    
    this.global = {...this.global, categorieId};
  },
  
  getCategorieId() {
    return this.global?.categorieId;
  },

  setMenu(menu) {
    console.log('GLOBAL:::: Setting new menu  :: ', menu);
    this.global = {...this.global, menu};
    this.global.hasMenu=true;
    
  },
  getMenu() {
    return this.global?.menu;
  },

  setUser(user) {
    console.log('GLOBAL:::: Setting new user :: ', user);
   // console.log('GLOBAL:::: Setting new user :: ', user.Restaurants[0].id_restaurant);
    
    this.global = {...this.global, user};
    this.global.hasUser=true;
  },
  getUser() {
    return this.global?.user;
  },
  getUserId() {
    return this.global?.user?.id_utilisateur;
  }
  
  
})
watch(
  () => store.global,
  (newValue, oldValue) => {
    // newValue === oldValue

    console.log(newValue);
    console.log(oldValue);
    if(newValue)localStorage.setItem('storeVue001', JSON.stringify(newValue));

    
  },
  { deep: true }
)

