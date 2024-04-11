<script>
import Header from './partials/Header.vue'
// import Hero from './partials/Hero.vue'
// import PostList from './partials/PostList.vue'
// import Boxes from './partials/Boxes.vue'
// import Sidebar from './partials/Sidebar.vue'
import Footer from './partials/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
  },
}
</script>


<template>
  <div>
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

