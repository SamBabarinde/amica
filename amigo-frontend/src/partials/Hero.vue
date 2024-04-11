<template>
  <section class="relative overflow-hidden">

    <!-- Bg -->
    <div class="absolute inset-0 bg-gradient-to-t from-slate-800 bg-opacity-60 pointer-events-none -z-10" aria-hidden="true"></div>

    <!-- Illustration -->
    <div class="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
      <img src="../images/hero-illustration.svg" class="max-w-none" width="1905" height="622" alt="Hero Illustration">
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-28 pb-8 md:pt-36 md:pb-16">

        <!-- Hero content -->
        <div class="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row">

          <!-- Content -->
          <div class="md:w-[48rem]">

            <!-- Copy -->
            <div class="md:pr-32">
              <h1 class="h2 font-aspekta bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 via-sky-300 to-slate-200 pb-6">A community of friends that learn and grow together</h1>
              <p class="text-lg text-slate-400 mb-8">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
            </div>
            <!-- Logos -->
            <div class="md:flex flex-wrap items-center md:space-x-5 text-center">
              <!-- Label -->
              <div class="mb-4 md:mb-0">
                <div class="text-sm italic text-slate-500 whitespace-nowrap">Catch up with founders from</div>
              </div>
              <div class="inline-flex flex-wrap items-center">
                <div class="py-2 px-3">
                  <img src="../images/client-01.svg" width="85" height="40" alt="Client 01">
                </div>
                <div class="py-2 px-3">
                  <img src="../images/client-02.svg" width="72" height="16" alt="Client 02">
                </div>
                <div class="py-2 px-3">
                  <img src="../images/client-03.svg" width="67" height="32" alt="Client 03">
                </div>
              </div>
            </div>

            <!-- Image -->
            <div class="max-w-sm mx-auto md:max-w-none md:absolute md:left-[42rem] lg:left-[48rem] mt-12 md:mt-0 md:top-1/2 md:-translate-y-1/2">
              <img src="../images/hero-image.png" class="md:max-w-none mx-auto" width="332" height="298" alt="Hero Illustration" />
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>