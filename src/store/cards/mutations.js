export default {
    addProductToCart(state, {id ,image , price , title} ) {
   
        const productInCartIndex = state.items.findIndex(
          (ci) => ci.productId ===id
          );
        if (productInCartIndex >= 0) {
          state.items[productInCartIndex].qty++;
        } else {
          const newItem = {
            productId: id,
            title: title,
            image: image,
            price: price,
            qty: 1,
          };
          state.items.push(newItem);
        }
        state.qty++;
        state.total += price;
      },
      remove (state , payload){
         
        const productInCartIndex = state.items.findIndex(
            (cartItem) => cartItem.productId === payload
          );
          
          const prodData = state.items[productInCartIndex];
          state.items.splice(productInCartIndex, 1);
          state.qty -= prodData.qty;
          state.total -= prodData.price * prodData.qty;
      }
}