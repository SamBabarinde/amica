<template>
  <div class="grid gap-5 sm:grid-cols-2">
    <!-- Box -->
    <div class="relative p-5 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20">
      <div class="absolute inset-0 -m-px pointer-events-none -z-10 before:absolute before:inset-0 before:bg-gradient-to-t before:from-slate-700 before:to-slate-800 after:absolute after:inset-0 after:bg-slate-900 after:m-px" aria-hidden="true"></div>
      <div class="h-full flex flex-col">
        <div class="grow mb-1">
          <img class="mb-3" src="../images/box-icon-01.svg" width="40" height="40" alt="News icon" />
          <h3 class="text-slate-200 font-semibold mb-1">News & Updates</h3>
          <p class="text-sm text-slate-500">Check out the latest news and updates from the community.</p>
        </div>
        <div class="text-right">
          <a class="text-sm font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">Learn More <span class="tracking-normal">-&gt;</span></a>
        </div>
      </div>
    </div>
    <!-- Box -->
    <div class="relative p-5 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20">
      <div class="absolute inset-0 -m-px pointer-events-none -z-10 before:absolute before:inset-0 before:bg-gradient-to-t before:from-slate-700 before:to-slate-800 after:absolute after:inset-0 after:bg-slate-900 after:m-px" aria-hidden="true"></div>
      <div class="h-full flex flex-col">
        <div class="grow mb-1">
          <img class="mb-3" src="../images/box-icon-02.svg" width="40" height="40" alt="Resources icon" />
          <h3 class="text-slate-200 font-semibold mb-1">Other Resources</h3>
          <p class="text-sm text-slate-500">Books, guides, and webinars full of industry standard to grow your startup.</p>
        </div>
        <div class="text-right">
          <a class="text-sm font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">Learn More <span class="tracking-normal">-&gt;</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Boxes',
}
</script>