<template>
  <div>
    <div class="card">
      <div class="card-header">Kualiteti i Ajrit</div>
      <div class="card-body">
        <div v-bind:class="{ shumMire: airQuality <= 50, mire: airQuality >= 51 && airQuality <= 100, deriDiku: airQuality >= 101 && airQuality <= 150, keq: airQuality >= 151 && airQuality <= 200, shumKeq: airQuality >= 201 && airQuality <= 300, hell: airQuality > 300  } " id="circle">{{ airQuality }} - AQI</div>
        <div class="mt-2"></div>
        <span>Tabela sipas ngjyrave</span>
        <ul class="list-group list-group-flush">
          <li class="shumMire liTable" width="80px"> Shum Mire</li>
          <li class="mire liTable"> Mire</li>
          <li class="deriDiku liTable"> Jo Keq</li>
          <li class="keq liTable"> Keq</li>
          <li class="shumKeq liTable"> Shum Keq</li>
          <li class="hell liTable"> Hell</li>
        
      </ul>
        <hr>
        <span>Stacioni Per matjen e ajrit gjendet ne Gostivar</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  mounted(){
     this.$store.dispatch("othersData/getAir");
  },
    computed: {
    airQuality() {
      return this.$store.getters['othersData/air']
    }
  },
};
</script>

<style scoped>
#circle {
  width: 250;
  height: 290px;
  border-radius: 250px;
  font-size: 70px;
  color: #fff;
  line-height: 250px;
  text-align: center;
}

.shumMire {
  color: #fff;
  background-color: #05720b;
}
.mire {
  color: #fff;
  background: #dde02b;
}
.deriDiku {
  color: #fff;
  background: #d48d09;
}
.keq {
  color: #fff;
  background-color: #d40909;
}
.shumKeq{
  color: #fff;
  background: #580b52;
}
.hell {
  color: #fff;
  background: #580b0b;
}
.liTable {
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 20px;
  font: 1.1rem sans-serif;
}
</style>
