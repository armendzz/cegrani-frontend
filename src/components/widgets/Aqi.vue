<template>
    <div>
       <div class="card">
  <div class="card-header">Kualiteti i Ajrit</div>
<div class="card-body" >

<div class="circle" id="circle" value="104">104 - AQI</div>
<span>Stacioni Per matjen e ajrit gjendet ne Gostivar</span> 
</div>
</div>   
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.circle
    {
    width:250;
    height:290px;
    border-radius:250px;
    font-size:70px;
    color:#fff;
    line-height:250px;
    text-align:center;
    background:#05720b
    }

</style>

<!--  

Regullimin e ngjyurave

  (function () { 

var aqi = document.getElementById("circle").getAttribute("value");

if (aqi <= 50) {
document.getElementById("circle").style.backgroundColor = '#05720b';
}
else  
if (aqi >= 51 && aqi <= 100)  
{
document.getElementById("circle").style.backgroundColor = '#dde02b';
}  
else  
if (aqi >= 101 && aqi <= 150)  
{
document.getElementById("circle").style.backgroundColor = '#d48d09';
}
else  
if (aqi >= 151 && aqi <= 200)  
{
document.getElementById("circle").style.backgroundColor = '#d40909';
}
else  
if (aqi >= 201 && aqi <= 300)  
{
document.getElementById("circle").style.backgroundColor = '#580b52';
}
else  
if (aqi > 300 )  
{
document.getElementById("circle").style.backgroundColor = '#580b0b';
}

})(); -->