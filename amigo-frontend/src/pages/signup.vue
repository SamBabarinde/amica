<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <main class="grow">


      <section class="relative">

        <!-- Illustration -->
        <div class="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
          <img src="../images/hero-illustration.svg" class="max-w-none" width="1905" height="622" alt="Hero Illustration">
        </div>

        <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">

            <!-- Page header -->
            <div class="max-w-2xl mx-auto text-center">
              <h1 class="h2 font-aspekta bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 via-sky-300 to-slate-200 pb-12">Welcome back to the Community</h1>
            </div>


            <div class=" text-center text-sm text-slate-500 mb-5">
              Already a member? <router-link class="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" to="/signin">Sign in</router-link>
            </div>

            <!-- Form -->
            <div class="max-w-sm mx-auto">

              <form>
                <div class="space-y-4">
                  <div>
                    <label class="sr-only" for="email">Email</label>
                    <input id="email" class="form-input text-sm w-full" type="email" placeholder="Your email" required />
                  </div>

                  <div>
                    <label class="sr-only" for="email">Username</label>
                    <input id="username" class="form-input text-sm w-full" type="username" placeholder="Your username" required />
                  </div>

                  <div>
                    <label class="sr-only" for="password">Password</label>
                    <input id="password1" class="form-input text-sm w-full" type="password1" placeholder="Your password" autocomplete="on" required />
                  </div>
                  
                  <div>
                    <label class="sr-only" for="password">Repeat Password</label>
                    <input id="password2" class="form-input text-sm w-full" type="password2" placeholder="Please Repeat Your password" autocomplete="on" required />
                  </div>
                </div>
                <div class="mt-6">
                  <button class="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full">Create Account</button>
                </div>
              </form>

              <!-- Divider -->
              <div class="flex items-center my-4">
                <div class="border-t border-slate-800 grow mr-3" aria-hidden="true"></div>
                <div class="text-xs text-slate-400 italic">Or</div>
                <div class="border-t border-slate-800 grow ml-3" aria-hidden="true"></div>
              </div>

              <!-- Social login -->
              <button class="btn-sm h-9 text-indigo-500 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 w-full relative flex after:flex-1">
                <div class="flex-1 flex items-center">
                  <svg class="w-4 h-4 fill-indigo-500 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.679 6.545H8.043v3.273h4.328c-.692 2.182-2.401 2.91-4.363 2.91a4.727 4.727 0 1 1 3.035-8.347l2.378-2.265A8 8 0 1 0 8.008 16c4.41 0 8.4-2.909 7.67-9.455Z" />
                  </svg>
                </div>
                <span class="flex-auto pl-3">Sign In With Google</span>
              </button>

            </div>

          </div>
        </div>

      </section>

    </main>

  </div>
</template>

<script>
export default {
  name: 'SignUp',
}
</script>