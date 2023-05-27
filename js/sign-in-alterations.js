function updateSignInPageLayout() {
  var pageContainer = document.querySelector('.session')
  pageContainer.classList.add('min-h-screen')
  pageContainer.classList.add('flex')
  pageContainer.classList.add('flex-col')
  pageContainer.classList.add('bg-shadow-inset-bottom')
  pageContainer.style.padding = '0px'

  var signinContainer = document.querySelector('.session .row')
  signinContainer.classList.add('flex')
  signinContainer.classList.add('flex-grow')
  signinContainer.classList.add('items-center')

  var footerContainer = document.createElement('footer')
  footerContainer.className = 'py-6'
  footerContainer.innerHTML = `
  <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
    <div class="grid items-center grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
      <div class="md:order-1">
        <img
          class="w-auto h-8"
          src="https://glacier-projects.vercel.app/img/brand/logos/01_glacier_logo/horizontal/glacier_logo_horizontal_1C_white.png"
          alt="Glacier Logo"
        />
      </div>

      <div class="md:order-3">
        <div class="flex items-center justify-end space-x-6 text-sm">
          <a
            href="https://glacier.eco/impressum"
            title="Impressum"
            class="text-white"
          >
            Impressum
          </a>
        </div>
      </div>

      <div class="col-span-2 md:col-span-1 md:order-2">
        <div
          class="flex items-center text-white justify-center sm:justify-between md:justify-center space-x-9 lg:space-x-16  text-sm"
        >
          Do you need help? &nbsp;
          <a
            href="/support"
            title="Support"
            class="text-white"
          >
            Support
          </a>
        </div>
      </div>
    </div>
  </div>`

  pageContainer.appendChild(footerContainer)
}

function updateSignInToLogin() {
  var form = document.querySelector('.session .row form')
  var h2 = form.querySelector('h2')
  if (h2.innerText == 'Sign In') {
    h2.innerText = 'Login'
  }

  var button = form.querySelector('input[type="submit"]')
  if (button.value == 'Sign In') {
    button.value = 'Login'
  }
}

updateSignInPageLayout()
updateSignInToLogin()
