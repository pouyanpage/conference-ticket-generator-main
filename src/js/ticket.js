export default function () {
    return ` <div class="max-w-[600px] z-20">
    <div class="flex flex-col items-center justify-center text-center gap-y-7">
      <img class="w-52 mb-3" src="./assets/images/logo-full.svg" alt="123">
      <h1 class="text-5xl font-bold">Congrats, <span
          class="getFullName bg-gradient-to-r from-[#f37362] to-[#ffffff] text-transparent  bg-clip-text"></span>! Your ticket is ready.</h1>
      <p class="max-w-[370px] text-gray-400">We've emailed your ticket to <span
          class="getEmail text-[#f57261]"></span>
        and
        will send updates in
        the run up to the
        event.</p>
    </div>
    <div class="mt-20 max-w-[450px] mx-auto">
      <div class="relative ">
        <img class="w-full h-full backdrop-blur-xl" src="./assets/images/pattern-ticket.svg" alt="123">
        <div class="absolute inset-0 flex items-center justify-between py-5 pl-5 pr-2">
          <div class="flex flex-col h-full justify-between">
            <div class="icon-ticket">
              <img class="w-52" src="./assets/images/logo-full.svg" alt="123">
              <p class="mt-2 pl-12 text-sm text-gray-500">Jan 31, 2025 / Austin, TX</p>
            </div>
            <div class="flex items-center gap-x-3">
              <div class="w-14 rounded-xl overflow-hidden">
                <img class="get-image" src="" alt="123">
              </div>
              <div class="">
                <h3 class="getFullName text-xl"></h3>
                <div class="flex items-center gap-x-1">
                  <img src="./assets/images/icon-github.svg" alt="github">
                  <p class="getUser"></p>
                </div>
              </div>
            </div>
          </div>
          <span class="rotate-90 text-2xl text-gray-400">#01609</span>
        </div>
      </div>
    </div>
  </div>`
}