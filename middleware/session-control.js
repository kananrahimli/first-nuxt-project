export default function(context){
    if(process.client){
        // Client side ..
        context.store.dispatch('initAuth')
    }else{
         // server side ..
         context.store.dispatch('initAuth',context.req)
    }
}