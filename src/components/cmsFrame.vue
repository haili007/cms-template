<template>
  <div class="ys-layout">
      <cms-aside   :data="menu" :fold="fold"></cms-aside>
      <cms-head :loginOut="loginOut"></cms-head>
        <div class="ys-content">
            <slot></slot>
        </div>   
  </div> 
</template>

<script>
import cmsAside from "./cmsAside"; 
import cmsHead from "./cmsHead"; 
export default {
    name:"cms-frame",
    data(){
        return{
        }
    },
    props:["menu","fold","loginOut"],
    components:{
        cmsAside,cmsHead
    },
    beforeCreate(){
        var head = document.getElementsByTagName('HEAD').item(0);
        var style = document.createElement('link');
        style.href = 'https://at.alicdn.com/t/font_469943_mqandn510glanhfr.css';
        style.rel = 'stylesheet';
        style.type = 'text/css';
        head.appendChild(style);
        let animationStyle= document.createElement('style'),str="";
        for(let i =1 ;i<9;i++)
        {
            str+='@-webkit-keyframes showAnimation'+i+' { 0% {height: 0px;}100% { height: '+(i*40)+'px;}}';
            str+='.showAnimation'+i+'{-webkit-animation: showAnimation'+i+' 0.5s ease-in-out;}'
        }
        animationStyle.innerHTML=str;
        head.appendChild(animationStyle);
        //
    }
}
</script>
<style >
*{margin: 0;padding: 0}
.ys-afclear{ zoom:1;}
    .ys-afclear:after{
    content: '\20';
    display: block;
    height: 0;
    clear: both;
    }
.ys-content{
        margin-left: 160px;
        margin-top: 50px;
}
</style>
