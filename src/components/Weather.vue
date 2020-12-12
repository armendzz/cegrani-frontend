<template>
  <div class="d-none d-lg-block">
    <div class="card wather text-white">
      <div class="col-sm-12 mt-1">
        <p class="temtitle">Temperatura Momentale</p>
      </div>

      <div class="row  mb-auto">
        <div class="col-sm-2 mb-auto" id="tempico">
          <img v-if="sotWeather"
            :src="require(`@/assets/icon/${sotWeather.iconCode}.png`)"
            alt
            class="icon"
          />
        </div>
        <div class="col-sm-3 mb-auto" id="grada">
          <h1 id="baba">
            <strong v-if="sotWeather"> {{ sotWeather.temperature }} °C</strong>
          </h1>
        </div>
        <div class="col-sm-7  mb-auto" id="tjera">
          <p>{{ sotWeather.cloudCoverPhrase }}</p>
          <p>
            Kualiteti i Ajrit: <span>{{ airQuality }} - AQI</span>
          </p>
          <p>Gostivar, Cegran</p>
        </div>
      </div>
      <div class="col-sm-12"><p class="temtitle">Oret e ardhshme</p></div>
      <div class="row ml-2">
        <div class="col-sm">
          <span class="ora"
            ><strong>{{
              new Date(oraWeather["forecasts"][3]["fcst_valid_local"])
                | moment("hh:mm")
            }}</strong></span
          >
          <p>{{ oraWeather["forecasts"][3]["temp"] }} °C</p>
        </div>
        <div class="col-sm">
          <span class="ora"
            ><strong>{{
              new Date(oraWeather["forecasts"][7]["fcst_valid_local"])
                | moment("hh:mm")
            }}</strong></span
          >
          <p>{{ oraWeather["forecasts"][7]["temp"] }} °C</p>
        </div>
        <div class="col-sm">
          <span class="ora"
            ><strong>{{
              new Date(oraWeather["forecasts"][11]["fcst_valid_local"])
                | moment("hh:mm")
            }}</strong>
          </span>
          <p>{{ oraWeather["forecasts"][11]["temp"] }} °C</p>
        </div>
        <div class="col-sm">
          <span class="ora"
            ><strong>{{
              new Date(oraWeather["forecasts"][15]["fcst_valid_local"])
                | moment("hh:mm")
            }}</strong></span
          >
          <p>{{ oraWeather["forecasts"][15]["temp"] }} °C</p>
        </div>
        <div class="col-sm">
          <span class="ora"
            ><strong>{{
              new Date(oraWeather["forecasts"][19]["fcst_valid_local"])
                | moment("hh:mm")
            }}</strong></span
          >
          <p>{{ oraWeather["forecasts"][19]["temp"] }} °C</p>
        </div>
        <div class="col-sm">
          <span class="ora"
            ><strong>{{
              new Date(oraWeather["forecasts"][23]["fcst_valid_local"])
                | moment("hh:mm")
            }}</strong>
          </span>
          <p>{{ oraWeather["forecasts"][23]["temp"] }} °C</p>
        </div>
        <div class="col-sm">
          <span class="ora"
            ><strong>{{
              new Date(oraWeather["forecasts"][27]["fcst_valid_local"])
                | moment("hh:mm")
            }}</strong></span
          >
          <p>{{ oraWeather["forecasts"][27]["temp"] }} °C</p>
        </div>
      </div>
      <div class="container mb-2">Ditet e Ardhshme</div>
      <div class="row ml-2">
        <div class="col-sm-12 ditet">
          <div>
            <b-tabs content-class="mt-3">
              <b-tab :title="ditetWeather['forecasts'][1]['dow']" active>
                <div class="col-md-6 float-left">
                  <p>
                    Temperatura Minimale:
                    <strong
                      >{{ ditetWeather["forecasts"][1]["min_temp"] }}° C</strong
                    >
                  </p>
                  <p>
                    Temperatura Maximale:
                    <strong
                      >{{ ditetWeather["forecasts"][1]["max_temp"] }}° C</strong
                    >
                  </p>
                </div>
                <div class="col-md-6 float-right">
                  <p>
                    Lindja e Diellit:
                    <strong>{{
                      new Date(ditetWeather["forecasts"][1]["sunrise"])
                        | moment("hh:mm:ss")
                    }}</strong>
                  </p>
                  <p>
                    Perendimi i Diellit:
                    <strong>{{
                      new Date(ditetWeather["forecasts"][1]["sunset"])
                        | moment("hh:mm:ss")
                    }}</strong>
                  </p>
                </div>
              </b-tab>
              <b-tab :title="ditetWeather['forecasts'][2]['dow']">
                <div class="col-md-6 float-left">
                  <p>
                    Temperatura Minimale:
                    <strong
                      >{{ ditetWeather["forecasts"][2]["min_temp"] }}° C</strong
                    >
                  </p>
                  <p>
                    Temperatura Maximale:
                    <strong
                      >{{ ditetWeather["forecasts"][2]["max_temp"] }}° C</strong
                    >
                  </p>
                </div>
                <div class="col-md-6 float-right">
                  <p>
                    Lindja e Diellit:
                    <strong>{{
                      new Date(ditetWeather["forecasts"][2]["sunrise"])
                        | moment("hh:mm:ss")
                    }}</strong>
                  </p>
                  <p>
                    Perendimi i Diellit:
                    <strong>{{
                      new Date(ditetWeather["forecasts"][2]["sunset"])
                        | moment("hh:mm:ss")
                    }}</strong>
                  </p>
                </div>
              </b-tab>
              <b-tab :title="ditetWeather['forecasts'][3]['dow']">
                <div class="col-md-6 float-left">
                  <p>
                    Temperatura Minimale:
                    <strong
                      >{{ ditetWeather["forecasts"][3]["min_temp"] }}° C</strong
                    >
                  </p>
                  <p>
                    Temperatura Maximale:
                    <strong
                      >{{ ditetWeather["forecasts"][3]["max_temp"] }}° C</strong
                    >
                  </p>
                </div>
                <div class="col-md-6 float-right">
                  <p>
                    Lindja e Diellit:
                    <strong>{{
                      new Date(ditetWeather["forecasts"][3]["sunrise"])
                        | moment("hh:mm:ss")
                    }}</strong>
                  </p>
                  <p>
                    Perendimi i Diellit:
                    <strong>{{
                      new Date(ditetWeather["forecasts"][3]["sunset"])
                        | moment("hh:mm:ss")
                    }}</strong>
                  </p>
                </div>
              </b-tab>
              <b-tab :title="ditetWeather['forecasts'][4]['dow']">
                <div class="col-md-6 float-left">
                  <p>
                    Temperatura Minimale:
                    <strong
                      >{{ ditetWeather["forecasts"][4]["min_temp"] }}° C</strong
                    >
                  </p>
                  <p>
                    Temperatura Maximale:
                    <strong
                      >{{ ditetWeather["forecasts"][4]["max_temp"] }}° C</strong
                    >
                  </p>
                </div>
                <div class="col-md-6 float-right">
                  <p>
                    Lindja e Diellit:
                    <strong>{{
                      new Date(ditetWeather["forecasts"][4]["sunrise"])
                        | moment("hh:mm:ss")
                    }}</strong>
                  </p>
                  <p>
                    Perendimi i Diellit:
                    <strong>{{
                      new Date(ditetWeather["forecasts"][4]["sunset"])
                        | moment("hh:mm:ss")
                    }}</strong>
                  </p>
                </div>
              </b-tab>
              <b-tab :title="ditetWeather['forecasts'][5]['dow']">
                <div class="col-md-6 float-left">
                  <p>
                    Temperatura Minimale:
                    <strong
                      >{{ ditetWeather["forecasts"][5]["min_temp"] }}° C</strong
                    >
                  </p>
                  <p>
                    Temperatura Maximale:
                    <strong
                      >{{ ditetWeather["forecasts"][5]["max_temp"] }}° C</strong
                    >
                  </p>
                </div>
                <div class="col-md-6 float-right">
                  <p>
                    Lindja e Diellit:
                    <strong>{{
                      new Date(ditetWeather["forecasts"][5]["sunrise"])
                        | moment("hh:mm:ss")
                    }}</strong>
                  </p>
                  <p>
                    Perendimi i Diellit:
                    <strong>{{
                      new Date(ditetWeather["forecasts"][5]["sunset"])
                        | moment("hh:mm:ss")
                    }}</strong>
                  </p>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("othersData/getWeather");
  },
  computed: {
    sotWeather() {
      return this.$store.getters["othersData/sot"];
    },
    airQuality() {
      return this.$store.getters["othersData/air"];
    },
    oraWeather() {
      return this.$store.getters["othersData/ora"];
    },
    ditetWeather() {
      return this.$store.getters["othersData/ditet"];
    }
  }
};
</script>

<style>
.ditet ul li a {
  color: rgb(255, 255, 255);
}
p.temtitle {
  border-bottom-style: solid;
  border-bottom-width: thin;
}

span.ora {
  border-bottom-style: solid;
  border-bottom-width: thin;
  border-color: wheat;
}

#loc {
  width: 15px;
}
#dita {
  font-style: italic;
  margin-bottom: 7px;
}
#grada {
  margin: auto;
}
#tempico {
  margin: auto;
}
#tjera {
  margin: auto;
}
#baba {
  font-size: 55px;
}
.wather {
  background-color: #1292cddc !important;
}
</style>
