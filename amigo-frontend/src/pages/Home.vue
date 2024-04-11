<template>
  <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    

    <!-- Page content -->
    <main class="grow">

      <Hero />

      <!-- Page content -->
      <section>
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
      
          <div class="md:flex md:justify-between md:divide-x md:divide-slate-800">

            <!-- Main content -->
            <div class="md:grow pt-6 pb-12 md:pb-20">
              <div class="md:pr-6 lg:pr-10">
                <PostList />
                <Boxes />
              </div>
            </div>

            <Sidebar />

          </div>
        </div>
      </section>

    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import Hero from '../partials/Hero.vue'
import PostList from '../partials/PostList.vue'
import Boxes from '../partials/Boxes.vue'
import Sidebar from '../partials/Sidebar.vue'

export default {
  name: 'HomeView',
  components: {
    Hero,
    PostList,
    Boxes,
    Sidebar,
  },
}
</script>