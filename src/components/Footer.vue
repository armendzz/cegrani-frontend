<template>
  <div class="mt-2">
    <section id="footer">
      <div class="container">
        <div class="row text-center text-xs-center text-sm-left text-md-left">
          <div class="col-xs-12 col-sm-12 col-lg-4">
            <h5>RASTE URGJENTE</h5>
            <ul class="list-unstyled quick-links">
              <li>
                <a href="tel:192">
                  <div class="d-flex justify-content-between">
                    <div><i class="fas fa-phone-alt"></i> Policia</div>
                    <div><strong>192</strong></div>
                  </div>
                </a>
              </li>
                <li>
                <a href="tel:193">
                  <div class="d-flex justify-content-between">
                    <div><i class="fas fa-phone-alt"></i> Brigada zjarrëfikse</div>
                    <div><strong>193</strong></div>
                  </div>
                </a>
              </li>
                <li>
                <a href="tel:194">
                  <div class="d-flex justify-content-between">
                    <div><i class="fas fa-phone-alt"></i> Ndihma e shpejtë</div>
                    <div><strong>194</strong></div>
                  </div>
                </a>
              </li>
                <li>
                <a href="tel:192">
                  <div class="d-flex justify-content-between">
                    <div><i class="fas fa-phone-alt"></i> Bashkesia Lokale</div>
                    <div><strong>07xxxx</strong></div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-12 col-lg-4">
            <h5>Linqe</h5>
            <ul class="list-unstyled quick-links">
              <li>
                <a href="http://gostivari.gov.mk/" target="_blank"
                  ><i class="fa fa-angle-double-right"></i> Komuna e Gostivarit</a
                >
              </li>
              <li>
                <a href="http://ombudsman.mk/SQ/default.aspx" target="_blank"
                  ><i class="fa fa-angle-double-right"></i> Avokati i Popullit</a
                >
              </li>
              <li>
                <a href="https://www.sobranie.mk/home-al.nspx" target="_blank"
                  ><i class="fa fa-angle-double-right"></i> Kuvendi i RVM</a
                >
              </li>
              <li>
                <a href="https://sq.raporto.mk/" target="_blank"
                  ><i class="fa fa-angle-double-right"></i> Raporto Ankesën</a
                >
              </li>
            </ul>
          </div>
        <!--   <div class="col-xs-12 col-sm-12 col-lg-3">
            <h5>Shërbimet elektronike</h5>
            <ul class="list-unstyled quick-links">
              <li>
                 <a href="https://www.e-urbanizam.mk/najava.nspx" target="_blank"
                  ><i class="fa fa-angle-double-right"></i> e-Urbanizimi</a
                >
              </li>
              <li>
                 <a href="http://www.test.gradezno-zemjiste.mk/Default.aspx" target="_blank"
                  ><i class="fa fa-angle-double-right"></i> e-Toka Ndërtimore</a
                >
              </li>
              <li>
                 <a href="http://62.162.98.17/e-tax/" target="_blank"
                  ><i class="fa fa-angle-double-right"></i> e-Tatime</a
                >
              </li>
              <li>
                 <a href="https://www.gradezna-dozvola.mk/" target="_blank"
                  ><i class="fa fa-angle-double-right"></i> e-Leje Ndërtimi</a
                >
              </li>
              <li>
                 <a href="https://gostivar.eregulations.org/?l=sq" target="_blank"
                  ><i class="fa fa-angle-double-right"></i> e-Regullativa</a
                >
              </li>
           
            </ul>
          </div> -->
              <div class="col-xs-12 col-sm-12 col-lg-4">
            <h5>Reth Faqes</h5>
            <ul class="list-unstyled quick-links">
            <span class="info">Faqja Cegrani.Mk është me burim te hapur, nëse ju keni njohuri për zhvillim të faqeve me teknologjitë moderne ju ftoj te jepni kontributin tuaj. Faqja përdor <strong>VueJs në FrontEnd</strong> dhe <strong>PHP (Laravel) në BackEnd</strong>.</span>
            
              <li class="mt-2">
                <a href="https://github.com/armendzz/cegrani-frontend" target="_blank"
                  ><i class="fa fa-angle-double-right"></i> Github - FrontEnd</a
                >
              </li>
              <li>
                <a href="https://github.com/armendzz/cegrani-backend" target="_blank"
                  ><i class="fa fa-angle-double-right"></i> Github - BackEnd</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div
            class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white"
          >
            <p class="h6">
              © Te gjitha te drejtat e rezervuara.<a
                class="text-green ml-2"
                href="#"
                >Cegrani.Mk</a
              >
            </p>
          </div>
          <hr />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Footer */
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
section {
  padding: 20px 0;
}
.info {
  font-size: 0.9rem;
  color: #ffffff;
}
section .section-title {
  text-align: center;
  color: #1291cd;
  margin-bottom: 50px;
  text-transform: uppercase;
}
#footer {
  background: #1291cd !important;
}
#footer h5 {
  padding-left: 10px;
  border-left: 3px solid #eeeeee;
  padding-bottom: 6px;

  color: #ffffff;
}
#footer a {
  color: #ffffff;
  text-decoration: none !important;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
#footer ul.social li {
  padding: 3px 0;
}
#footer ul.social li a i {
  margin-right: 5px;
  font-size: 25px;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
}
#footer ul.social li:hover a i {
  font-size: 30px;
  margin-top: -10px;
}
#footer ul.social li a,
#footer ul.quick-links li a {
  color: #ffffff;
}
#footer ul.social li a:hover {
  color: #eeeeee;
}
#footer ul.quick-links li {
  padding: 3px 0;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
}
#footer ul.quick-links li:hover {
  padding: 3px 0;
  margin-left: 5px;
  font-weight: 700;
}
#footer ul.quick-links li a i {
  margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
  font-weight: 700;
}

@media (max-width: 767px) {
  #footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
  }
}
</style>
