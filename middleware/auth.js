export default function(context){
    if(!context.store.getters.isUser){
        context.redirect('/login')
    }
}