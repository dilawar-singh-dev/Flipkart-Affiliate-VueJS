<template>
  <div>
    <Navbar/>
    <Products/>
    <PopularProducts/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './Partials/Frontend/NavbarComponent.vue'
import Products from './Partials/Frontend/ProductsComponent.vue'
import PopularProducts from './Partials/Frontend/DealsOfTheDayComponent.vue'
import Footer from './Partials/Frontend/FooterComponent.vue'
export default {
    data: () => ({
    }),
    components:{
      Navbar,
      Products,
      PopularProducts,
      Footer
    }
}
</script>
