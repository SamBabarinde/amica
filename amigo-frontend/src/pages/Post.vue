<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <Header />

    <main class="grow">

      <section>
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-28 md:pt-36">

            <div class="md:flex md:justify-between md:divide-x md:divide-slate-800">

              <!-- Page content -->
              <PostContent />

              <Sidebar />

            </div>

          </div>
        </div>
      </section>

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import PostContent from '../partials/PostContent.vue'
import Sidebar from '../partials/Sidebar.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Post',
  components: {
    Header,
    PostContent,
    Sidebar,
    Footer,
  },
}
</script>