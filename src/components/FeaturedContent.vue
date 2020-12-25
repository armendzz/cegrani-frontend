<template>
  <!--Start code-->
  <div class="row">
    <div class="col-12">
      <!--SECTION START-->
      <section class="row">
        <!--Start slider news-->
        <div class="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
          <div class="carousel-item active">
            <div class="card border-0 rounded-0 text-light overflow zoom">
              <div class="position-relative">
                <!--thumbnail img-->
                <div class="ratio_left-cover-1 image-wrapper">
                  <a
                    href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/"
                  >
                    <img
                      class="img-fluid w-100"
                      src="https://api.cegrani.mk/gallery/1607815866-pTbX7NrIdA.jpg"
                      alt="Bootstrap news template"
                    />
                  </a>
                </div>
                <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                  <!--title-->
                  <a
                    href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/"
                  >
                    <h2 class="h5 post-title text-white my-1">
                      Bootstrap 4 template news portal magazine perfect for news
                      site
                    </h2>
                  </a>
                  <!-- meta title -->
                  <div class="news-meta">
                    <span class="news-author"
                      >by
                      <a
                        class="text-white font-weight-bold"
                        href="../category/author.html"
                        >Jennifer</a
                      ></span
                    >
                    <span class="news-date">Oct 22, 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--End slider news-->
  
        <!--Start box news-->
        <div class="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
          <div class="row">
            <!--news box-->
            <div class="col-6 pb-1 pt-0 pr-1"  v-for="(article, i) in lastFourArticles"
            :key="i" >
              <div class="card border-0 rounded-0 text-white overflow zoom">
                <div class="position-relative">
                  <!--thumbnail img-->
                  <div class="ratio_right-cover-2 image-wrapper">
                   <router-link :to="'/article/' + article.slug">
                      <img
                        class="img-fluid"
                        :src="'https://api.cegrani.mk/images/' + article.images"
                        alt="simple blog template bootstrap"
                        style="height:132px;"
                      />
                     </router-link>
                  </div>
                  <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                    <!-- category -->
                    <router-link class="p-1 badge badge-primary rounded-0" :to="'/category/' + article.category.slug">
                    {{ article.category.name }} </router-link>

                    <!--title-->
                    <router-link :to="'/article/' + article.slug">
                      <h2 class="font-size text-white my-1">
                        {{article.title.slice(0, 30) + '...'}}
                      </h2>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>

            <!--news box-->
          <!--  -->

            <!--news box-->
            

           
            <!--end news box-->
          </div>
        </div>
        <!--End box news-->
      </section>
      <!--END SECTION-->
    </div>
  </div>
  <!--end code-->
</template>

<script>
export default {
  computed: {
    lastFourArticles() {
      return this.$store.getters["articles/lastFourArticles"];
    } 
  }
}
</script>

<style scoped>
.b-0 {
  bottom: 0;
}
.bg-shadow {
  background: rgba(76, 76, 76, 0);
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(179, 171, 171, 0)),
    color-stop(49%, rgba(48, 48, 48, 0.37)),
    color-stop(100%, rgba(19, 19, 19, 0.8))
  );
  background: linear-gradient(
    to bottom,
    rgba(179, 171, 171, 0) 0%,
    rgba(48, 48, 48, 0.71) 49%,
    rgba(19, 19, 19, 0.8) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=0 );
}
.font-size {
  font-size: 1rem;
}
.top-indicator {
  right: 0;
  top: 1rem;
  bottom: inherit;
  left: inherit;
  margin-right: 1rem;
}
.overflow {
  position: relative;
  overflow: hidden;
}
.zoom img {
  transition: all 0.2s linear;
}
.zoom:hover img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
