<template>
  <header class="absolute w-full bg-slate-900 z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="shrink-0 mr-4">
          <!-- Logo -->
          <router-link class="block group" to="/" aria-label="Cruip">

            <ul class="flex grow justify-end flex-wrap items-center">
              <li class="ml-3">
                <img src="../images/logo.svg" width="32" height="32" alt="Community" />
              </li>
              <li>
                <h2 class="text-2xl font-medium text-slate-400 hover:text-slate-200 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"> Amica </h2>
              </li>
            </ul>
            
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="flex grow">

          <!-- Desktop sign in links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <li>
              <router-link class="text-sm font-medium text-slate-400 hover:text-slate-200 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" to="/signin">Sign in</router-link>
            </li>
            <li class="ml-3">
              <router-link class="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full" to="/register">Join Community</router-link>
            </li>
          </ul>

        </nav>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>