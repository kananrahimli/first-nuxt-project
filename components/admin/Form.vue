<template>
  <div class="form mt-4 pb-4">
    
    <div class="container">
        <h5 class="mb-4">{{ formTitle }}</h5>
        <div class="form-group">
      <label for="exampleInputEmail1">Author</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
         v-model="data.author"
      />
      
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Title</label>
      <input
        type="text"
        class="form-control"
         v-model="data.title"
        
      />
    </div>
     <div class="form-group">
      <label for="exampleInputPassword1">Sub-Title</label>
      <input
        type="text"
        class="form-control"
         v-model="data.subtitle"
        
      />
    </div>
     <div class="form-group">
      <label for="exampleInputPassword1">Kose yazisi</label>
      <textarea name="" class="form-control" id="" cols="30" rows="10" v-model="data.text"></textarea>
    </div>
    
    <button type="submit" class="btn btn-primary" @click="submit">Submit</button>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    formTitle:{
      type:String,
      required:true
    },
    edit:{
      type:Object,
      required:false,
    }
  },
  emits:['onSubmit'],
  data(){
      return{
          data:{
              title:'',
              subtitle:'',
              author:'',
              text:''
          }
      }
  },
  

  methods:{
      submit(){
          this.$emit('onSubmit',this.data)
      }
  },
  created(){
    this.data=this.edit?this.edit:this.data
  }
};
</script>

<style scoped>
 
</style>