<template>
  <div class="d-none d-lg-block">
    <div class="card wather text-white">
      <div class="col-sm-12 mt-1">
        <p class="temtitle">Temperatura Momentale</p>
      </div>

      <div class="row  mb-auto">
        <div class="col-sm-2 mb-auto" id="tempico">
          <img src="https://cegrani.mk/icon/31.png" alt="" />
        </div>
        <div class="col-sm-3 mb-auto" id="grada">
          <h1 id="baba"><strong> 3 °C</strong></h1>
        </div>
        <div class="col-sm-7  mb-auto" id="tjera">
          <p>Clear</p>
          <p>Kualiteti i Ajrit: <span>25 - AQI</span></p>
          <p>Gostivar, Cegran</p>
        </div>
      </div>
      <div class="col-sm-12"><p class="temtitle">Oret e ardhshme</p></div>
      <div class="row ml-2">
        <div class="col-sm">
          <span class="ora"><strong>20:45</strong></span>
          <p>3 °C</p>
        </div>
        <div class="col-sm">
          <span class="ora"><strong>21:45</strong></span>
          <p>2 °C</p>
        </div>
        <div class="col-sm">
          <span class="ora"><strong>22:45</strong> </span>
          <p>2 °C</p>
        </div>
        <div class="col-sm">
          <span class="ora"><strong>23:45</strong></span>
          <p>1 °C</p>
        </div>
        <div class="col-sm">
          <span class="ora"><strong>00:45</strong></span>
          <p>1 °C</p>
        </div>
        <div class="col-sm">
          <span class="ora"><strong>01:45</strong> </span>
          <p>1 °C</p>
        </div>
        <div class="col-sm">
          <span class="ora"><strong>02:45</strong></span>
          <p>1 °C</p>
        </div>
      </div>

      <div class="row ml-2">
        <div class="col-sm-12 ditet">
          <div>
            <b-tabs content-class="mt-3">
              <b-tab title="Monday" active>
                <h4 class="mt-2">Monday</h4>
                <div class="col-md-6 float-left">
                  <p>Temperatura Minimale: <strong>1° C</strong></p>
                  <p>Temperatura Maximale: <strong>15° C</strong></p>
                </div>
                <div class="col-md-6 float-right">
                  <p>Lindja e Diellit: <strong>06:35:46</strong></p>
                  <p>Perendimi i Diellit: <strong>16:09:34</strong></p>
                </div>
              </b-tab>
              <b-tab title="Monday">
                <h4 class="mt-2">Monday</h4>
                <div class="col-md-6 float-left">
                  <p>Temperatura Minimale: <strong>1° C</strong></p>
                  <p>Temperatura Maximale: <strong>15° C</strong></p>
                </div>
                <div class="col-md-6 float-right">
                  <p>Lindja e Diellit: <strong>06:35:46</strong></p>
                  <p>Perendimi i Diellit: <strong>16:09:34</strong></p>
                </div>
              </b-tab>
              <b-tab title="Monday">
                <h4 class="mt-2">Monday</h4>
                <div class="col-md-6 float-left">
                  <p>Temperatura Minimale: <strong>1° C</strong></p>
                  <p>Temperatura Maximale: <strong>15° C</strong></p>
                </div>
                <div class="col-md-6 float-right">
                  <p>Lindja e Diellit: <strong>06:35:46</strong></p>
                  <p>Perendimi i Diellit: <strong>16:09:34</strong></p>
                </div>
              </b-tab>
              <b-tab title="Monday">
                <h4 class="mt-2">Monday</h4>
                <div class="col-md-6 float-left">
                  <p>Temperatura Minimale: <strong>1° C</strong></p>
                  <p>Temperatura Maximale: <strong>15° C</strong></p>
                </div>
                <div class="col-md-6 float-right">
                  <p>Lindja e Diellit: <strong>06:35:46</strong></p>
                  <p>Perendimi i Diellit: <strong>16:09:34</strong></p>
                </div>
              </b-tab>
              <b-tab title="Monday">
                <h4 class="mt-2">Monday</h4>
                <div class="col-md-6 float-left">
                  <p>Temperatura Minimale: <strong>1° C</strong></p>
                  <p>Temperatura Maximale: <strong>15° C</strong></p>
                </div>
                <div class="col-md-6 float-right">
                  <p>Lindja e Diellit: <strong>06:35:46</strong></p>
                  <p>Perendimi i Diellit: <strong>16:09:34</strong></p>
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
export default {};
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
