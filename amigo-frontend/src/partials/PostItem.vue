<template>
  <div class="[&:nth-child(-n+4)]:-order-1 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20">
    <div class="relative p-5">
      <div class="absolute inset-0 -m-px pointer-events-none -z-10 before:absolute before:inset-0 before:bg-gradient-to-t before:from-slate-700 before:to-slate-800 after:absolute after:inset-0 after:bg-slate-900 after:m-px" aria-hidden="true"></div>
      <div class="sm:flex items-center space-y-3 sm:space-y-0 sm:space-x-5">
        <div class="shrink-0">
          <button class="flex items-center text-left w-16 px-2.5 py-1 rounded border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">
            <svg class="shrink-0 fill-indigo-400 mr-1.5" width="11" height="7" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.664 6.747.336 5.253 5.5.662l5.164 4.591-1.328 1.494L5.5 3.338z" />
            </svg>
            <span class="grow text-center text-xs font-medium text-indigo-500">{{item.votes}}</span>
          </button>
        </div>
        <div class="grow lg:flex items-center justify-between space-y-5 lg:space-x-6 lg:space-y-0">
          <div>
            <div class="mb-2">
              <h2>
                <router-link class="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" :to="item.slug">{{item.title}}</router-link>
              </h2>
            </div>
            <div class="flex items-center">
              <img class="rounded-full mr-2" :src="item.authorImage" width="16" height="16" :alt="item.name" />
              <div class="text-xs text-slate-600">
                <a class="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">{{item.author}}</a> · <span class="text-slate-500">{{item.date}}</span> · <span class="text-slate-500">{{item.comments}} Comment{{(item.comments === 1 ? '' : 's')}}</span>
              </div>
            </div>
          </div>
          <div class="shrink-0 flex -space-x-3 -ml-0.5">
            <template v-for="commenter in item.commenters">
              <img class="rounded-full border-2 border-slate-900 box-content" :src="commenter" width="24" height="24" alt="Commenter" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: ['item'],
}
</script>