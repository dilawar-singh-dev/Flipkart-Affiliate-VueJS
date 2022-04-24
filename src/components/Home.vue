<template>
  <div>
     <Navbar/>
     <BannerSlider/>
     <DealsProducts/>
     <PopularProducts/>
     <AboutUs/>
     <Footer/>
  </div>
</template>

<script>
import Navbar from './Partials/Frontend/NavbarComponent.vue'
import BannerSlider from './Partials/Frontend/BannerSliderComponent.vue'
import DealsProducts from './Partials/Frontend/DealsOfTheDayComponent.vue'
import PopularProducts from './Partials/Frontend/PopularProductsComponent.vue'
import AboutUs from './Partials/Frontend/AboutUsComponent.vue'
import Footer from './Partials/Frontend/FooterComponent.vue'
  export default {
    data: () => ({
    }),
    components:{
      Navbar,
      BannerSlider,
      DealsProducts,
      PopularProducts,
      AboutUs,
      Footer
    }
  }
</script>
