<template>
    <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
    
      <!-- Site header -->
      <header class="absolute w-full bg-slate-900 z-30">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="flex items-center justify-between h-16 md:h-20">
    
            <!-- Site branding -->
            <div class="shrink-0 mr-4">
              <!-- Logo -->
              <router-link class="block group" to="/" aria-label="Cruip">
                <img src="../images/logo.svg" width="32" height="32" alt="Community" />
              </router-link>
            </div>
    
            <nav class="flex grow">
              <div class="flex grow justify-end flex-wrap items-center">
                <div class="text-sm text-slate-500">
                  Already a member? <router-link class="font-medium text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" to="/signin">Sign In</router-link>
                </div>
              </div>
            </nav>
    
          </div>
        </div>
      </header>
    
      <main class="grow">
    
        <!-- Pricing section -->
        <section class="relative">
    
          <div class="absolute inset-0 max-h-[470px] overflow-hidden">
            <!-- Bg -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-800 bg-opacity-60 pointer-events-none -z-10" aria-hidden="true"></div>
    
            <!-- Illustration -->
            <div class="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
              <img src="../images/hero-illustration.svg" class="max-w-none" width="1905" height="622" alt="Hero Illustration">
            </div>
          </div>
    
          <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div class="pt-32 pb-12 md:pt-40 md:pb-16">
    
              <!-- Page header -->
              <div class="max-w-2xl mx-auto text-center">
                <h1 class="h2 font-aspekta bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 via-sky-300 to-slate-200 pb-12">Join a community of mindful makers</h1>
              </div>
    
              <!-- Pricing table -->
              <div class="max-w-xs mx-auto">
                <div class="relative p-5 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20">
                  <div class="absolute inset-0 -m-px pointer-events-none -z-10 before:absolute before:inset-0 before:bg-gradient-to-t before:from-slate-700 before:to-slate-800 after:absolute after:inset-0 after:bg-slate-900 after:m-px" aria-hidden="true"></div>
                  <div class="mb-4">
                    <div class="inline-flex items-baseline bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 via-sky-300 to-slate-200">
                      <span class="text-2xl font-medium">$</span>
                      <span class="text-3xl font-bold">49</span>
                    </div>
                    <div class="text-sm text-slate-400">/month - billed yearly</div>
                  </div>
                  <div class="text-sm font-medium text-slate-200 mb-3">Your plan includes:</div>
                  <ul class="text-sm text-slate-400 space-y-3 grow mb-12">
                    <li class="flex items-center">
                      <svg class="w-3 h-3 fill-current text-teal-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unlimited access to Community</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-3 h-3 fill-current text-teal-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Your favourite content in one place</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-3 h-3 fill-current text-teal-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unlimited posts and comments</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-3 h-3 fill-current text-teal-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Exclusive access to the newsletter</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-3 h-3 fill-current text-teal-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>iOS and Android apps</span>
                    </li>
                  </ul>
                  <div>
                    <a class="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full" href="#0">Join Community</a>
                  </div>
                </div>
              </div>
    
            </div>
          </div>
    
        </section>
    
        <!-- Testimonials -->
        <section>
          <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div class="pb-12 md:pb-16">
    
              <!-- Boxes -->
              <div class="max-w-xs mx-auto md:max-w-none grid gap-8 md:grid-cols-3">
                <!-- Box -->
                <div class="odd:rotate-1 even:-rotate-1">
                  <div class="relative p-5 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20">
                    <div class="absolute inset-0 -m-px pointer-events-none -z-10 before:absolute before:inset-0 before:bg-gradient-to-t before:from-slate-700 before:to-slate-800 after:absolute after:inset-0 after:bg-slate-900 after:m-px" aria-hidden="true"></div>
                    <div class="h-full flex flex-col">
                      <div class="grow mb-1">
                        <div class="relative inline-flex">
                          <img class="rounded-full mb-4" src="../images/avatar-09.jpg" width="48" height="48" alt="User 09" />
                          <svg class="absolute top-0 right-0 -mr-3" width="27" height="17" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#6366F1" fill-rule="nonzero" d="m.048 15.889 8.092.14L15.305.153l-4.59-.08L.047 15.89Zm11.018.192 8.092.141L26.323.345 21.675.264 11.066 16.08Z" />
                          </svg>
                        </div>
                        <p class="text-sm text-slate-400 italic">I'm proud to be a part of this online community, which provides me with new knowledge on a daily basis.</p>
                      </div>
                      <div>
                        <a class="text-sm font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">— MaryLync77</a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Box -->
                <div class="odd:rotate-1 even:-rotate-1">
                  <div class="relative p-5 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20">
                    <div class="absolute inset-0 -m-px pointer-events-none -z-10 before:absolute before:inset-0 before:bg-gradient-to-t before:from-slate-700 before:to-slate-800 after:absolute after:inset-0 after:bg-slate-900 after:m-px" aria-hidden="true"></div>
                    <div class="h-full flex flex-col">
                      <div class="grow mb-1">
                        <div class="relative inline-flex">
                          <img class="rounded-full mb-4" src="../images/avatar-05.jpg" width="48" height="48" alt="User 05" />
                          <svg class="absolute top-0 right-0 -mr-3" width="27" height="17" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#6366F1" fill-rule="nonzero" d="m.048 15.889 8.092.14L15.305.153l-4.59-.08L.047 15.89Zm11.018.192 8.092.141L26.323.345 21.675.264 11.066 16.08Z" />
                          </svg>
                        </div>
                        <p class="text-sm text-slate-400 italic">I'm proud to be a part of this online community, which provides me with new knowledge on a daily basis.</p>
                      </div>
                      <div>
                        <a class="text-sm font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">— MaryLync77</a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Box -->
                <div class="odd:rotate-1 even:-rotate-1">
                  <div class="relative p-5 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20">
                    <div class="absolute inset-0 -m-px pointer-events-none -z-10 before:absolute before:inset-0 before:bg-gradient-to-t before:from-slate-700 before:to-slate-800 after:absolute after:inset-0 after:bg-slate-900 after:m-px" aria-hidden="true"></div>
                    <div class="h-full flex flex-col">
                      <div class="grow mb-1">
                        <div class="relative inline-flex">
                          <img class="rounded-full mb-4" src="../images/avatar-12.jpg" width="48" height="48" alt="User 12" />
                          <svg class="absolute top-0 right-0 -mr-3" width="27" height="17" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#6366F1" fill-rule="nonzero" d="m.048 15.889 8.092.14L15.305.153l-4.59-.08L.047 15.89Zm11.018.192 8.092.141L26.323.345 21.675.264 11.066 16.08Z" />
                          </svg>
                        </div>
                        <p class="text-sm text-slate-400 italic">I'm proud to be a part of this online community, which provides me with new knowledge on a daily basis.</p>
                      </div>
                      <div>
                        <a class="text-sm font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">— MaryLync77</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
            </div>
          </div>
        </section>
    
      </main>
    
    </div>
</template>

<script>
export default {
  name: 'JoinView',
}
</script>