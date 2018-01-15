<style scoped>
.ys-main-header *{list-style: none;font-size: 14px;}
.ys-main-header{
  background-color: #505050;
  height: 50px;
  box-shadow: 12px 3px 5px rgba(1,1,1,0.2);
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0px;
}

.ys-logo{
  display: block;
    float: left;
    padding: 7px 20px;
    background-color: #505050;
    border: none;
}

.ys-logo .ys-logo-lg img{
    vertical-align: middle;
     border: none;
}
.ys-navbar-custom-menu{
  float: right;
}
.ys-nav li{
    float: right;
}
.ys-user-menu a{
 color: #ffffff;
        line-height: 20px;
        cursor: pointer;
         padding:15px;
         display: block;
}
.ys-user-menu a:hover{
  background: rgba(0,0,0,0.1);
}
.ys-user-image{
     float: left;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: -2px;
}
</style>
<template>
  <header class="ys-main-header">
            <a href="/" class="ys-logo">
                <span class="ys-logo-lg">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAkCAMAAAB19g5sAAACUlBMVEUAAAD/////////////////////ZCf/////////////aCX/////////////ZyX////////////////////9XSv/aCX/////aCX/////////////////////aCX/aCX/aCX/////////////////////aCX/////////Zib/////ZyX/aCX/////////////aCX/////////////aCX/aCX/aCX/aCX/Zib/////aCX/////////aCX/aCX/////////aCX/Yyf/////////aCX/////aCX/////ZyX/////aCX/aCX/aCX/////aCX/////aCX/ZSb/////ZSb/////////aCX/////////aCX/aCX/////aCX/aCX/aCX////////////////9WS3/aCX/////////////aCX/////aCX/////aCX/aCX/////////////////aCX/aCX/ZyX////8WC3/////aCX9WSz////8WC3////8Vy78Vy78WC78Vy7////8Vy7////9Wyv/ZiX+Yij8WC39XSr/aCX+ZCf8WS3+YCj9Xyr+YSn/ZSb/+vj//Pz/+PX+aDb/bTX/8+7/7+n/3tP+ooT+cET/dUH/1cb/yLX/xLD/xKz/tZv+qo3+l3X+jWX9YzP/0L7/t6D/sZb+pof/on7+kGz+e03+ekf//v3/6uP+zLz/wKn+lnD9gFf+azz+ZS3/5Nv/49j/2c3/0sP+uqT+ro//m3T+iGX/iVr9fFT+gU7/ZSf/6eH/5d39g17+g1P+Zy/+nHxw6mdMAAAAg3RSTlMAQCBQMKBACwMQ8ftLBgNw8dZ1XD/59eLfpWsdGQbQsKqRfUY9OzozGf397eXa0smNgGBgVTEoCvi+sK2ienlWRCPu6dnEwZaViYFuaF5QQTYtJA8ODebNv7icmYp0SSwpJxT71MfAvbWxq56PhmZaUzUT892blkMg2rhsYvPhyr+zYRUv/ggAAAcsSURBVFjDtZX3VxNBEMcnCZpCSCjSe0d6kyaCgIIIiIjYe++9d/2iEiWa0AUEwY69967/l7t73KWI+PQ9Pz8ws3Pv8bmdm90Qo2xWYLJlTPZW5pjod4SWBi/yIgWjr1ZKPILSqolC6smNNUHro10KNf6WcchIIgWvMBHmr64/lnk6FQwjyTSlIl0nsjggndTAQjdxk1up5uz4zGgkmRBMTk+rCICCZwnJRAPYwRPu3EgaIIoE842qUYB0VaxGE5vgkZjI+ux/9g/MIhlfOEiduT8kwcvpnTjBYZK4iDbAZw0JojAWMTTr7J9IzqdRsoCFm7dmlvgdXK0lZ/RVQMGONCCVdVvLxaW+WuVtx8KP9jk7Ot4+6nvRfePW+0/O1QYaJRMIpTFYGgB47qKmKNHspgKkZ+0/4lPuQZw6wNeDkaDiJPA0C0ig5MsKvQM2jPLgzidHPV4WVAFiHzFbq9XO4hKgIpYn9aqgCm+nXXE0gIZcyQY86ILMp9s2tA08vtfR8fHOjft48VF5MpFGCYaniFPlcZbZXZKg5ujNkAjaEBxdskoW19WbNSoHK5k4VhE/uwrbYIe8uncDbcO/iBehQsQJQKKL2MsTgvWxMzN9s9PgTQ52ANmT4UII4KeIr6Lrm5S9f8v/3rHb3ruLg+Aji1e6iNXyRuU5Xq3KzprgKz3baVwNV9QqlZ7OSdxG1z2R9PbD1suTt+hkkSOLVYCPinME2KkSaPwSxY53JWQCfh5hlFBX6rsQEjOVhoRkG+P4OZ6q5ogBHRX32uzfePz+xgZ0DovaIPpdxUEYg50kYQbU7LZwbupUcgWYIKeKeACDPNx9ANhvdki1Z5/xURYrH9KdVDHmK2PMRUCMuVQPIGAmkJZoBDbIjrqsOg0DWKQRzFPEHTYbs430AbghOi64g0fOYp1vSJxaKw+Xet5uo7lqqod8wAU+VJK9W0c+mKxeD2TKYtEG91Zc4gzh6qX2m3bg+TBfPnvzmIfvts5zPAqxgiRWu94gCCgH0tOLSBADpALKT5EWbgQr4kcYujQMtPU84yvW8K52nvRhxE0c56NRxKWLVHJZp+PXqV5eiilOm688LY0N02n1embU6/Vheq2otnJeYqS19QbsvSy/9wqMa7x8E495kL+xNm6pJ5Yq4mBM3py9W966EIf5ifwgv0LZhxxruOJQ4OcQf0FHa+sVG/pb2wftQHcf2p6y8jXccYh1BWAEqBXxKlFY6vhZXFUdwM/5vGBwqscWx2LySof4M7jnFu6/6eK7vdRrw4AQ9yhioUNFvdM3NpaD333KU08gzcsYxQK8+QitkRqlMiYY/ULMZrOY6ipUsZ+Jg3Vk5XRjhP1t7wTDjgGrlb3DE6v1NYb400mjrfYt8tXLEnEPh8VsLiWnQ16wVVjhGd20lXcnul5HtAtj4S2J+/GDhx6g+8lN2Ees17vQbbW+xBNZ7D7VKreStgCIUlPYQiA1OpRItx8M3nkzBAHeHOVgZVILpwcPebD2DVlb2L5ftbQMdfZY2+2267z8izgmqsjDvVa1Pk7E0DUk4ZfuY/bihZ2JofOd3lCdaIyZEO0lia/AfqVF5jXwrsXa3tJym7+OEP8PJFkf+ke1V/oBvOYZa/fwfxd/Be6K5LYN6Hos0kfobhlPnLTCpOS10/9a3CwxgLYPPN6C7dZ1UbkGO6twZHFS7bLZc3kyvTiSxVr/8Jw5JBG4/V/F11+gbZjHq1fE2joI9DS7iPMMgUsWW6ZxcaUllyjHQIERspiVx2DP+GLB0+eAkAredQPXml3FsxbkE81OTmLpRMscIW7Io7ziwllJtG7ZlDJWX14YuYKmLKd8Ypgats0wkYKuZGORhh19vVYRS7Q/BO6/uv3uw5O7g1+AtqFmN7H4N3MsuUI8UYgLC037MnJnZFCEZYF/Rn5tSu625Lm1/gss++KpbEaK/xJyEOJprkZcItJQfoyv1zYr3H0OGTvbvLt4iv+64kKDJYenlnj2DnspMjLPsoJyLXsi1oXnWXI2bWnItSyrsUwzLa6k4gxTnr/TzG3eSLrUag9M1WYF6Nj6cLMTX2++7LS1PXjY89S52kASebOXTFthmSvEE/nmmTjeMoXC48MjthFZpkVYAiuXxC83mGhZIG3aROGBtaQwM5honjoOK0mDMLY+cPFPrM0nQW7KctqzeIZJiKdzsSkyMolN2/LkKRGzmbhmi6ExqbBmdgSbh3WsDymGSnm6NpaHBgc1zfOJioWe/MA/c9naP4kPkETjJvYhF8yVBnwFUY2hsXgJmzaDYRpFsONkyCnL2JtSnL+9kqh4MUUkb48PV7ZboV4V5O25IXRXuZZCvEXt6PnxOdzouDKmTwwndxoPsdqh0a6Em0Zj/qGMlC0ZhmXkQCdf47r5JJnXjuc9mUT/xOLA+IbpkSk0HmUHTvzGevzUGRP9G/GFKf6BW+bS7/gJJH87Jvy5jtUAAAAASUVORK5CYII=">
                </span>
            </a>
            <div class="ys-navbar-custom-menu">
                  <ul class="ys-nav ys-navbar-nav">
                      <li class="ys-user-menu">
                          <a @click="loginout" >
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRTI2N0M3MEY3RkQxMUU2OTM1RkI5MDk2NjhGQjk1MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxRTI2N0M3MUY3RkQxMUU2OTM1RkI5MDk2NjhGQjk1MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFFMjY3QzZFRjdGRDExRTY5MzVGQjkwOTY2OEZCOTUxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFFMjY3QzZGRjdGRDExRTY5MzVGQjkwOTY2OEZCOTUxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+lpHniQAACw9JREFUeNpMV1lsXOUZ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" class="ys-user-image" alt="User Image">
                              <span class="hidden-xs">登出</span>
                          </a>
                      </li>
                  </ul>
              </div>
           
    </header>
</template>

<script>
export default {
    data(){
        return{

        }
    },
  computed:{
      id:function(){
         return this.faultCom;
      }
  },
  props:["loginOut"],
  methods:{
    loginout(e){
        e.preventDefault();
        e.stopPropagation();
        this.loginOut();    
    }
  },
  mounted(){
      
  }
}
</script>


