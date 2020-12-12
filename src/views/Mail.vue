<template>
  <div>
    <div class="container mt-3">
      <div class="col-sm">
        <div class="card">
          <div class="card-header">Krijo Email @cegrani.mk</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">
              Na vjen Keq, Ky email egziston në databazën tonë, ju lutem
              zgjidhni një tjetër
            </div>
               <div v-if="password_doesnt_match" class="alert alert-danger">
             Ju lutem verifikoni fjalkalimin, duhet te perputhen patjeter.
            </div>
            <div>
              <label class="sr-only">Username</label>
              <div class="input-group mb-2 mr-sm-2">
                <input
                  type="text"
                  name="user"
                  v-model="email"
                  class="form-control"
                  placeholder="E-maili qe deshironi"
                />
                <div class="input-group-prepend">
                  <div class="input-group-text">@cegrani.mk</div>
                </div>
              </div>
              <input
                class="form-control mb-2 mr-sm-2"
                type="text"
                v-model="fullname"
                name="fullname"
                placeholder="Emri dhe Mbiemri juaj"
              />
              <input
                class="form-control mb-2 mr-sm-2"
                type="password"
                v-model="password"
                name="passwd"
                placeholder="Fjalkalimi"
              />
              <input
                class="form-control mb-2 mr-sm-2"
                type="password"
                v-model="password_confimation"
                name="passwd2"
                placeholder="Rishkruaj Fjalkalimin"
              />
              <button @click="createMail" class="btn btn-primary mb-2">
                Krijo Emailin
              </button>
            </div>
            <div v-if="success" class="alert alert-success">
              E-maili juaj u krijua me sukses, Ju lutem lexoni Rekomandimet e
              mëposhtme
            </div>
          </div>
        </div>

        <div class="alert alert-success mt-3" role="alert">
          <h2 class="text-center">Udhezime</h2>
          Pasi te Krijoni E-mailin ju mund ta perdorni duke u futur ne faqen:
          <a href="https://webmail.cegrani.mk">webmail.cegrani.mk</a>
          <hr />
          <p>
            Nese ju posedoni nje smartphone ju mund ta lidhni E-mailin direkt me
            aplikacionin tuaj duke perdorur serveret e faqes cegrani.mk
          </p>
          <p>Per ta lidhur smartphone tuaj perdorni:</p>
          <p>
            Per email-at qe pranojm zgjidheni opsionin <strong>IMAP</strong> dhe
            shkruani <strong>mail.cegrani.mk</strong> PORT: <strong>993</strong>
          </p>
          <p>
            Per email-at qe dergojm SMTP: <strong>mail.cegrani.mk</strong> PORT:
            <strong>465</strong>
          </p>
          <p>
            Per Username perdorni emailin tuaj p.sh:
            <strong>emriim@cegrani.mk</strong> - username do ju kerkohet 2 her
            nje her per IMAP dhe nje her per SMTP.
          </p>
          <p>
            Nese hasni probleme mos hezitoni ne kontaktoni per te mare me shume
            udhzime.
          </p>
          <strong
            ><p>
              Serveret Tone perdorin teknologjine SSL, emailet tuaja jan te
              mbrojtur me sigurine me te larte te mundshme.
            </p></strong
          >
        </div>
        <div class="alert alert-warning" role="alert">
          Nese ju krijoni E-mail, Ju nuk regjistroheni ne kete faqe
          automatikisht, ju duhet te regjistroheni ne kete faqe pasi te krijoni
          E-mail, ose mund te regjistroheni ne faqe me E-mailin tuaj.
        </div>
      </div>
    </div>
    <!-- /.row -->
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
      password_confimation: "",
      error: "",
      success: "",
      password_doesnt_match: "",
    };
  },
  watch: {
    email: {
      handler: function() {
        this.error = "";
      },
    },
    password: {
      handler: function() {
        if (this.password === this.password_confimation) {
           this.password_doesnt_match = "";
        }
      },
    },
    password_confimation: {
      handler: function() {
         if (this.password === this.password_confimation) {
           this.password_doesnt_match = "";
        }
      },
    },
  },
  methods: {
    createMail() {
      if (this.password === this.password_confimation) {
        Axios.post("https://nodejs.cegrani.mk/mailcreate", {
          fullname: this.fullname,
          mail: this.email,
          password: this.password,
          password_confirmation: this.password_confimation,
        })
          .then((response) => {
            if (response.data[0].msg[0] == "object_exists") {
              this.error = 1;
            }
            if (response.data[0].type == "success") {
              this.success = 1;
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        this.password_doesnt_match = 1;
      }
    },
  },
};
</script>

<style></style>
