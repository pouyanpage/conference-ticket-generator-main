export default function () {
  return `
    <img class="bg-image left-0 bottom-0" src="./assets/images/pattern-squiggly-line-bottom-desktop.svg" alt="123">
  <img class="bg-image right-0 top-0" src="./assets/images/pattern-squiggly-line-top.svg" alt="123">
  <img class="bg-image top-0 opacity-60" src="./assets/images/pattern-lines.svg" alt="123">
  <img class="bg-image right-[25%] bottom-48" src="./assets/images/pattern-circle.svg" alt="123">
    <div class=" z-20 max-w-[500px]">
    <div class="flex flex-col items-center">
      <img class="w-52 mb-8" src="./assets/images/logo-full.svg" alt="123">
      <h1 class="text-4xl font-bold mb-5">Your Journey to Coding Conf 2025 Starts Here!</h1>
      <p>Secure your spot at next year's biggest coding conference.</p>
    </div>
    <!-- form -->
    <div class="max-w-[350px] mx-auto mt-8">
      <form class="flex flex-col gap-y-3">
        <label class="uploadLabel relative">
          <div class="hidden overlay absolute inset-0"></div>
          <input class="hidden input" type="file" accept="image/*">
          <span>Upload Avatar</span>
          <div
            class="uploadArea bg-white/5 mt-1 flex flex-col gap-y-2 items-center p-5 border border-gray-500 border-dashed rounded-xl cursor-pointer">
            <img class="iconImg bg-white/10 border border-gray-500 rounded-xl w-12 h-12"
              src="./assets/images/icon-upload.svg" alt="123">
            <p class="upload-text"> Drag and drop or click to upload</p>
            <div class="hidden edit-image flex gap-x-3 text-sm">
              <button class="remove-image icon-texts z-50">Remove image</button>
              <button class="change-image icon-texts z-50">Change image</button>
            </div>
          </div>
          <div class="below-text">
            <p class="active-text flex items-center gap-x-1 text-xs mt-1 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path stroke="#99a1af" stroke-linecap="round" stroke-linejoin="round"
                  d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z" />
                <path fill="" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
                <path stroke="#99a1af" stroke-linecap="round" stroke-linejoin="round"
                  d="M8.004 10.462V7.596M8 5.569v-.042" />
              </svg>
              Upload your photo (JPG or PNG, max size: 500KB).
            </p>
            <p class="size-error hidden text-[#f57261] flex items-center gap-x-1 text-xs mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path stroke="#f57261" stroke-linecap="round" stroke-linejoin="round"
                  d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z" />
                <path fill="" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
                <path stroke="#f57261" stroke-linecap="round" stroke-linejoin="round"
                  d="M8.004 10.462V7.596M8 5.569v-.042" />
              </svg>
              File too large. Please upload a photo under 500KB.
            </p>
          </div>
        </label>
        <label>
          <p>Full Name</p>
          <input class="fields giveFullName" type="text">
        </label>
        <label>
          <p>Email Address</p>
          <input class="email-value fields" type="email" placeholder="example@gmail.com">
          <div class="below-text">
            <p class="email-error hidden text-[#f57261] flex items-center gap-x-1 text-xs mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path stroke="#f57261" stroke-linecap="round" stroke-linejoin="round"
                  d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z" />
                <path fill="" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
                <path stroke="#f57261" stroke-linecap="round" stroke-linejoin="round"
                  d="M8.004 10.462V7.596M8 5.569v-.042" />
              </svg>
              Please enter a valid email address.
            </p>
          </div>
        </label>
        <label>
          <p>GitHub Username</p>
          <input type="text" class="fields giveUser" placeholder="@yourusername">
        </label>
        <button class="submitBtn font-bold py-2 rounded-md text-black bg-[#e16151] cursor-pointer">Generate My
          Ticket</button>
      </form>
    </div>
  </div>`
};