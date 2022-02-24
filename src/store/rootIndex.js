import rootMutations from './rootMutations';
import rootActions from './rootActions';
import rootGetters from './rootGetters' ;
import productsModule from './products/index' ;
import cartModule from './cards/index' ;

import { createStore } from 'vuex';

const store  = createStore({
    modules :{
        products  : productsModule ,
        cart      : cartModule
    } , 
    state(){
        return{
            isLoggedIn : false
        }
    } ,

    mutations:rootMutations ,
    actions:rootActions,
    getters:rootGetters 
}) ;

export default store ; 