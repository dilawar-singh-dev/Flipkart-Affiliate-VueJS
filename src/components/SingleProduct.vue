<template>
  <div>
    <Navbar/>
    <Product/>
    <PopularProducts/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './Partials/Frontend/NavbarComponent.vue'
import Product from './Partials/Frontend/SingleProductComponent.vue'
import PopularProducts from './Partials/Frontend/DealsOfTheDayComponent.vue'
import Footer from './Partials/Frontend/FooterComponent.vue'
export default {
    data: () => ({
    }),
    components:{
      Navbar,
      Product,
      PopularProducts,
      Footer
    }
}
</script>
