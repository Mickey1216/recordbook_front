<template>
  <div @click="btnClick" class="inputAreaItem" :style="{visibility: ishidden}"
   :class="{completedColor: iscompletedPos}" >
    {{ text }} 
    <img v-if="isIconShow" :src='picSrc'>
  </div>
</template>

<script>
export default {
    name:'inputAreaItem',
    props:['text', 'picSrc'],
    computed: {
        isIconShow(){
            return this.text == ''? true: false
        },
        iscompletedPos(){
            return this.text == "完成"? true: false
        },
        ishidden(){
            return (this.text == '' && typeof(this.picSrc) == "undefined")? "hidden": "visible"
        }
    },
    methods:{
        btnClick(){
            if(this.text == '' && typeof(this.picSrc) !== "undefined"){
                this.$emit('passText','delete')
            }else if(this.text == "完成"){
                this.$emit('completeEvent')
            }else{
                this.$emit('passText',this.text)
            }
            
        }
    }
}
</script>

<style scoped>
.inputAreaItem{
    width: 75px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bolder;
    border: 2px solid #111;
    border-radius: 8px;
    background-color: #fff;
    margin: 6px 0;
}

.completedColor{
    font-size: 19px;
    background-color: rgb(250, 124, 146);
    color: white;
}
</style>