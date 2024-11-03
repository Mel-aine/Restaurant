import { defineStore,acceptHMRUpdate } from 'pinia'

export const useCartStore =  defineStore('menu-cart', {
    // other options...
state : () => ({
    items: [],
    state : [],
    dishList : [],
    restoMemory : [],
    dishMemory : [],

}),

getters: {

    count: (state) => state.items.reduce((prevquantity,nextItem)=>prevquantity+nextItem.quantity, 0),
    subTotal: (state) => state.items.reduce((prevPrice,nextItem)=>prevPrice+(nextItem.price * nextItem.quantity), 0),


},



actions: {
add(newItem) {

      const existingItem = this.items.find(item => item.id_menu === newItem.id_menu);
    //  console.log('items', this.items)
     if (existingItem) {
    //      existingItem.quantity++;
        alert("Dish already added")
      } else {
          this.items.push({...newItem, quantity: 1 });
      }


    
 
},



increment(newItem) {
    const existingItem = this.items.find(item => item.id_menu === newItem.id_menu);
    if (existingItem) {
        existingItem.quantity++;
    }
},

decrement(newItem) {
    const existingItem = this.items.find(item => item.id_menu === newItem.id_menu);
    if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
    }
},
//vider le panier 
clear() {
    this.items = [];
},


remove(deleteItemId) {
    console.log('Items before deletion:', this.items);
console.log('Deleting item with ID:', deleteItemId);


    this.items = this.items.filter(item => item.id_menu !== deleteItemId)
console.log ( 'llll' , this.items)
},





},


  });
  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
  }