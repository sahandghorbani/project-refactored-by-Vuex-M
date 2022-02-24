import cartMutations from './mutations' ; 
import cartGetters from './getters' ; 
import cartActions from './actions'


export default {
    
    state(){
        return{
           items: [],
            total: 0,
             qty: 0 ,
        }
    } ,
    mutations: cartMutations ,
    actions:cartActions ,
    getters: cartGetters
}