<template>
  <div class="md:grow pt-6 pb-12 md:pb-20">
    <div class="md:pr-6 lg:pr-20">

      <div class="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">

        <!-- Upvotes button -->
        <div class="shrink-0">
          <button class="sticky top-6 flex flex-col items-center text-center w-14 h-14 px-1 py-3 rounded border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">
            <svg class="inline-flex fill-indigo-400 mb-1" width="11" height="7" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.664 6.747.336 5.253 5.5.662l5.164 4.591-1.328 1.494L5.5 3.338z" />
            </svg>
            <span class="text-xs font-medium text-indigo-500">244</span>
          </button>
        </div>

        <!-- Content -->
        <div>

          <article class="mb-10">

            <!-- Post header -->
            <header class="mb-6">
              <h1 class="h2 font-aspekta text-slate-200 mb-4">Vertical SaaS vs Horizontal SaaS: 7 key differences</h1>
              <div class="flex items-center">
                <img class="rounded-full mr-2" src="../images/avatar-01.jpg" width="20" height="20" alt="User 01" />
                <div class="text-sm text-slate-600">
                  <a class="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">IndieMark</a> · <span class="text-slate-500">24 Feb</span> · <span class="text-slate-500">13 Comments</span>
                </div>
              </div>
            </header>

            <!-- Post content -->
            <div class="text-slate-400 space-y-6">
              <p>
                SaaS adoption is snowballing. A recent Harvey Nash survey revealed that SaaS was voted the most important technology in helping achieve business goals.
              </p>
              <p class="italic pl-3 border-l-2 border-slate-600">
                Metrics research found that organizations with more than 1,000 employees use over 150 SaaS applications 🙌
              </p>
              <p>
                Products within the SaaS industry serve an immense number of functions. While some are intended to cater to the specific needs of a particular group of users, others help a hugely diverse client base, providing solutions to a broader market. This critical distinction has resulted in two key SaaS models: <a class="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">vertical and horizontal</a>.
              </p>
              <img src="../images/post-image.jpg" width="624" height="352" alt="Post image" />
              <p>
                If you're thinking of becoming part of the SaaS industry, you'll need to clearly understand these <strong class="font-medium text-slate-200">two different models and determine which one is right for your business</strong>. Simply put - the better your understanding of these services, the higher your chances of success are.
              </p>
              <h2 class="text-xl font-bold text-slate-200">The 7 Key Differences Between Vertical and Horizontal SaaS</h2>
              <h3 class="text-lg font-bold text-slate-200">Scope of Industries and Market Size</h3>
              <p>
                The vertical SaaS business model is an end-to-end solution designed for the needs of a specific sector. These solutions' software features are specially designed to streamline particular industry operations. On the other hand, horizontal SaaS solutions are less industry-personalized and more problem-oriented. Their increased applicability across several industries sets them apart from horizontal SaaS.
              </p>
              <h3 class="text-lg font-bold text-slate-200">Customer Acquisition and Retention Approaches</h3>
              <p>
                In the vertical SaaS model, acquiring customers takes less time and effort than in horizontal SaaS. As you can imagine, if only a few businesses offer solutions to a niche problem, customers will likely choose a business and stick with it. Make sure you have a look over our SaaS customer acquisition guide, as it might come in handy.
              </p>
            </div>

          </article>

          <!-- Comment form -->
          <form class="mb-4">
            <div class="w-full mb-5">
              <label class="sr-only" for="comment">Comment</label>
              <textarea id="comment" rows="4" class="form-textarea w-full placeholder:italic" placeholder="Say something nice to IndieMark…"></textarea>
            </div>
            <div class="text-right">
              <button class="btn-sm py-1.5 text-white bg-indigo-500 hover:bg-indigo-600" type="submit">Post Comment</button>
            </div>
          </form>

          <!-- Comments list -->
          <div>
            <h4 class="font-bold text-slate-200 mb-2">4 comments</h4>
            <!-- Comments (1st level) -->
            <ul>
              <li class="pt-4">
                <div class="mb-1">
                  <div class="flex items-center mb-1">
                    <img class="rounded-full mr-2" src="../images/avatar-12.jpg" width="20" height="20" alt="User 12" />
                    <div class="text-xs text-slate-600">
                      <a class="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">MaryLync77</a> · <span class="text-slate-500">20 Feb</span>
                    </div>
                  </div>
                  <div class="text-sm text-slate-400 space-y-4 mb-1">
                    <p>
                      My reasons for not signing up are apparent: 1) Unable to access 2) Can't open it properly in my web browser... but I followed you here.
                    </p>
                    <p>
                      Can't answer anymore to your comment. Maybe we have reached the maximum depth of a thread. Let's talk it through outside the Community if that makes sense to you.
                    </p>
                  </div>
                  <div class="text-xs text-slate-600">
                    <a class="font-medium text-slate-500 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Report</a> · <a class="text-slate-200 underline hover:no-underline" href="#0">Reply</a>
                  </div>
                </div>
                <!-- Comments (2nd level) -->
                <ul class="pl-4 border-l-2 border-slate-700">
                  <li class="pt-4">
                    <div class="mb-1">
                      <div class="flex items-center mb-1">
                        <img class="rounded-full mr-2" src="../images/avatar-09.jpg" width="20" height="20" alt="User 09" />
                        <div class="text-xs text-slate-600">
                          <a class="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">zakaria_c</a> · <span class="text-slate-500">20 Feb</span>
                        </div>
                      </div>
                      <div class="text-sm text-slate-400 space-y-4 mb-1">
                        <p>
                          A very well written Comment. Thank you.
                        </p>
                      </div>
                      <div class="text-xs text-slate-600">
                        <a class="font-medium text-slate-500 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Report</a> · <a class="text-slate-200 underline hover:no-underline" href="#0">Reply</a>
                      </div>
                    </div>
                    <!-- Comment (3rd level) -->
                    <ul class="pl-4 border-l-2 border-slate-700">
                      <li class="pt-4">
                        <div class="mb-1">
                          <div class="flex items-center mb-1">
                            <img class="rounded-full mr-2" src="../images/avatar-12.jpg" width="20" height="20" alt="User 12" />
                            <div class="text-xs text-slate-600">
                              <a class="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">MaryLync77</a> · <span class="text-slate-500">20 Feb</span>
                            </div>
                          </div>
                          <div class="text-sm text-slate-400 space-y-4 mb-1">
                            <p>
                              Thanks for ur kindly comment. Tbh im totally new to Webflow and still figure it out haha
                            </p>
                          </div>
                          <div class="text-xs text-slate-600">
                            <a class="font-medium text-slate-500 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Report</a> · <a class="text-slate-200 underline hover:no-underline" href="#0">Reply</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="pt-4">
                <div class="mb-1">
                  <div class="flex items-center mb-1">
                    <img class="rounded-full mr-2" src="../images/avatar-15.jpg" width="20" height="20" alt="User 15" />
                    <div class="text-xs text-slate-600">
                      <a class="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">PhilipSnyder</a> · <span class="text-slate-500">20 Feb</span>
                    </div>
                  </div>
                  <div class="text-sm text-slate-400 space-y-4 mb-1">
                    <p>
                      You could always do both, post from your product profile and occassionally share/interact from your personal profile.
                    </p>
                    <p>
                      Andrew Gazdecki does this in a very entertaining way with MicroAcquire, it looks like he's basically talking to himself via the two accounts sometimes, very amusing.
                    </p>
                  </div>
                  <div class="text-xs text-slate-600">
                    <a class="font-medium text-slate-500 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Report</a> · <a class="text-slate-200 underline hover:no-underline" href="#0">Reply</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'PostContent',
}
</script>