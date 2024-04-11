<template>
  <aside class="md:w-64 lg:w-80 md:shrink-0 pt-6 pb-12 md:pb-20">
    <div class="md:pl-6 lg:pl-10">

      <!-- Sidebar content -->
      <div class="space-y-6">

        <!-- Search form -->
        <form>
          <div class="flex flex-wrap">
            <div class="w-full">
              <label class="block text-sm sr-only" for="search">Search</label>
              <div class="relative flex items-center">
                <input id="search" type="search" class="form-input py-1 w-full pl-10 rounded-full" />
                <div class="absolute inset-0 right-auto flex items-center justify-center">
                  <svg class="w-4 h-4 shrink-0 mx-3" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path class="fill-slate-600" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm8.707 12.293a.999.999 0 11-1.414 1.414L11.9 13.314a8.019 8.019 0 001.414-1.414l2.393 2.393z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </form>

        <!-- New Discussions -->
        <div>
          <div class="text-xs uppercase text-slate-600 font-semibold mb-4">New Discussions</div>
          <ul class="space-y-3">
            <li>
              <div class="flex items-center mb-1">
                <img class="rounded-full mr-2" src="../images/avatar-06.jpg" width="16" height="16" alt="User 06" />
                <div class="text-xs">
                  <a class="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">MaryLync77</a>
                </div>
              </div>
              <h3 class="text-sm mb-1">
                <router-link class="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" to="/post">Search Startup Jobs - Week 5 - Build in Public - Slow Week</router-link>
              </h3>
              <div class="text-xs text-slate-600">
                <span class="text-slate-500">22 Feb</span> · <span class="text-slate-500">14 Comments</span>
              </div>
            </li>
            <li>
              <div class="flex items-center mb-1">
                <img class="rounded-full mr-2" src="../images/avatar-09.jpg" width="16" height="16" alt="User 09" />
                <div class="text-xs">
                  <a class="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">Zakaria_C</a>
                </div>
              </div>
              <h3 class="text-sm mb-1">
                <router-link class="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" to="/post">What are the most useful tools for SEO marketing?</router-link>
              </h3>
              <div class="text-xs text-slate-600">
                <span class="text-slate-500">22 Feb</span> · <span class="text-slate-500">44 Comments</span>
              </div>
            </li>
            <li>
              <div class="flex items-center mb-1">
                <img class="rounded-full mr-2" src="../images/avatar-05.jpg" width="16" height="16" alt="User 05" />
                <div class="text-xs">
                  <a class="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">ElenMary182</a>
                </div>
              </div>
              <h3 class="text-sm mb-1">
                <router-link class="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" to="/post">How can you minimize the customer acquisition cost?</router-link>
              </h3>
              <div class="text-xs text-slate-600">
                <span class="text-slate-500">20 Feb</span> · <span class="text-slate-500">19 Comments</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- Latest Startups -->
        <div>
          <div class="text-xs uppercase text-slate-600 font-semibold mb-4">Latest Startups</div>
          <ul class="space-y-3">
            <li>
              <div class="flex items-center justify-between">
                <div class="grow min-w-0 flex items-center mr-2">
                  <img class="shrink-0 mr-3" src="../images/startup-01.svg" width="32" height="32" alt="Startup 01" />
                  <h3 class="truncate text-sm">
                    <a class="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="#0">Visual Studio X</a>
                  </h3>
                </div>
                <button class="text-xs text-indigo-500 inline-flex font-medium rounded-full text-center px-2 py-0.5 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">Follow</button>
              </div>
            </li>
            <li>
              <div class="flex items-center justify-between">
                <div class="grow min-w-0 flex items-center mr-2">
                  <img class="shrink-0 mr-3" src="../images/startup-02.svg" width="32" height="32" alt="Startup 02" />
                  <h3 class="truncate text-sm">
                    <a class="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="#0">Gymp DevTools</a>
                  </h3>
                </div>
                <button class="text-xs text-indigo-500 inline-flex font-medium rounded-full text-center px-2 py-0.5 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">Follow</button>
              </div>
            </li>
            <li>
              <div class="flex items-center justify-between">
                <div class="grow min-w-0 flex items-center mr-2">
                  <img class="shrink-0 mr-3" src="../images/startup-03.svg" width="32" height="32" alt="Startup 03" />
                  <h3 class="truncate text-sm">
                    <a class="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="#0">Paytable Inc</a>
                  </h3>
                </div>
                <button class="text-xs text-indigo-500 inline-flex font-medium rounded-full text-center px-2 py-0.5 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">Follow</button>
              </div>
            </li>
          </ul>
        </div>

        <!-- Popular Posts -->
        <div>
          <div class="text-xs uppercase text-slate-600 font-semibold mb-4">Popular Posts</div>
          <ul class="space-y-3">
            <li>
              <div class="flex items-center mb-1">
                <img class="rounded-full mr-2" src="../images/avatar-06.jpg" width="16" height="16" alt="User 06" />
                <div class="text-xs">
                  <a class="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">MaryLync77</a>
                </div>
              </div>
              <h3 class="text-sm mb-1">
                <router-link class="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" to="/post">How do you decide and keep focus on the <em class="italic">"right"</em> things?</router-link>
              </h3>
              <div class="text-xs text-slate-600">
                <span class="text-slate-500">22 Feb</span> · <span class="text-slate-500">14 Comments</span>
              </div>
            </li>
            <li>
              <div class="flex items-center mb-1">
                <img class="rounded-full mr-2" src="../images/avatar-09.jpg" width="16" height="16" alt="User 09" />
                <div class="text-xs">
                  <a class="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">Zakaria_C</a>
                </div>
              </div>
              <h3 class="text-sm mb-1">
                <router-link class="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" to="/post">How do you approach building a team for your startup?</router-link>
              </h3>
              <div class="text-xs text-slate-600">
                <span class="text-slate-500">22 Feb</span> · <span class="text-slate-500">44 Comments</span>
              </div>
            </li>
            <li>
              <div class="flex items-center mb-1">
                <img class="rounded-full mr-2" src="../images/avatar-01.jpg" width="16" height="16" alt="User 01" />
                <div class="text-xs">
                  <a class="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">IndieMark</a>
                </div>
              </div>
              <h3 class="text-sm mb-1">
                <router-link class="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" to="/post">The 5 big lessons I've learnt from Geeks and Experts</router-link>
              </h3>
              <div class="text-xs text-slate-600">
                <span class="text-slate-500">20 Feb</span> · <span class="text-slate-500">19 Comments</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="-rotate-1">
          <div class="relative p-5 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20">
            <div class="absolute inset-0 -m-px pointer-events-none -z-10 before:absolute before:inset-0 before:bg-gradient-to-t before:from-slate-700 before:to-slate-800 after:absolute after:inset-0 after:bg-slate-900 after:m-px" aria-hidden="true"></div>
            <div class="font-semibold text-center bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 via-sky-300 to-slate-200 mb-3">Get the best of Community, directly in your inbox.</div>
            <!-- Form -->
            <div class="w-full">
              <label class="block text-sm sr-only" for="newsletter">Email</label>
              <form class="relative flex items-center max-w-xs mx-auto">
                <input id="newsletter" type="email" class="form-input py-1.5 w-full pr-10 rounded-full" placeholder="Your email">
                <button type="submit" class="absolute inset-0 left-auto" aria-label="Subscribe">
                  <svg class="w-3 h-3 fill-current text-indigo-500 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill-rule="nonzero"></path>
                  </svg>
                </button>
              </form>
              <!-- Success message -->
              <!-- <p class="mt-2 text-slate-200 text-center text-xs">Thanks for subscribing!</p> -->
            </div>
          </div>
        </div>

      </div>

    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>