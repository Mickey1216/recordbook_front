<template>
  <div class="inputArea">
      <input-area-top :text="text" ref="iat" :resetFlag="resetFlag"/>

      <div id="inputAreaItems">
        <div v-for="(item,index) in btnArr" :key="index" class="ct"> 
            <input-area-item :text="item.text" :picSrc="item.picSrc" 
                @passText="passText" @completeEvent="complete"/>
        </div>
      </div>
  </div>
</template>

<script>
import inputAreaTop from 'views/add/inputAreaTop'
import inputAreaItem from 'views/add/inputAreaItem'
export default {
    name:"inputArea",
    components:{
        inputAreaTop,
        inputAreaItem
    },
    props:['resetFlag'],
    data(){
        return {
            btnArr:[
                {text:'7'},{text:'8'},{text:'9'},{text:''},
                {text:'4'},{text:'5'},{text:'6'},{text:'+'},
                {text:'1'},{text:'2'},{text:'3'},{text:'-'},
                {text:'.'},{text:'0'},{text:'', picSrc: require("../../assets/img/add/delete.png")},{text:'完成'}
            ], 
            //金额money
            text:''
        }
    },
    methods:{
        //点击‘完成’按钮之外的处理
        passText(text){
            if(text == 'delete' && this.text.length > 0){
                this.text = this.text.substring(0, this.text.length - 1)
            }else if(!isNaN(parseInt(this.text.substr(this.text.length - 1, 1),10))){
                //表达式最后一位它是数字才能进来 如 23, 23+1
                if(text == '.'){
                    let arr = this.text.split(/\+|-/)
                    if(arr[arr.length - 1].indexOf('.') !== -1){
                        return 
                    }
                }
                if(text == '+' || text == '-'){
                    let arr = this.text.split(/\+|-/)
                    if(arr.length == 2){
                        if(this.text.indexOf('+') !== -1){
                            this.text = (parseFloat(arr[0]) + parseFloat(arr[1])).toFixed(2)
                        }else{
                            this.text = (parseFloat(arr[0]) - parseFloat(arr[1])).toFixed(2)
                        }
                    }
                }

                this.text += text
            }else{
                //表达式最后一位它是非数字才能进来 如 空字符串, 23+, 23., 23-
                this.text += (text == 'delete' || text == '+' || text == '-' || text == '.')
                             ? '' : text
                
                if(this.resetFlag){
                    this.$emit("startNewRecord")
                }
            }
        },
        
        //点击完成按钮进行的处理
        complete(){
            if(this.text == ''){
                return
            }

            if(this.text.endsWith('+') || this.text.endsWith('-')){
                this.text = parseFloat(this.text.substring(0,this.text.length - 1))
            }else{
                let arr = this.text.split(/\+|-/)
                if(arr.length == 1){
                    this.text = parseFloat(arr[0]).toFixed(2)
                }else{
                    if(this.text.indexOf('+') != -1){
                        this.text = (parseFloat(arr[0]) + parseFloat(arr[1])).toFixed(2)
                    }else{
                        this.text = (parseFloat(arr[0]) - parseFloat(arr[1])).toFixed(2)
                    }
                }
            }
            
            if(this.text == 0){
                this.text = ''
                return
            }

            this.$emit('completeEvent',this.text,this.$refs.iat.inputText)
        }
    },
    watch: {
        resetFlag(){
            if(this.resetFlag){
                this.text = ''
            }
        }
    }
}
</script>

<style scoped>
.inputArea{
    margin-top: 10px;
    width:100%;
    height:350px;
    border-top:1px solid #111111;
    background-color: #FF9933;
}

#inputAreaItems{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 15px;
}
</style>