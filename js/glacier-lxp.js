/**
 * General Utils
 */
function getCookie(name, getValue) {
  var cookies = document.cookie.split(';')
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim()
    if (cookie.startsWith(name + '=')) {
      if (getValue) {
        var value = cookie.substring(name.length + 1)
        return decodeURIComponent(value)
      } else {
        return true
      }
    }
  }

  return null
}

/**
 * Dashboard Page
 */
function userNameReplacer() {
  var userName = localStorage.getItem('userName')
  var titleElement = document.getElementById('custom-dashboard-title')
  if (!titleElement || !userName || userName == '') {
    return
  }

  titleElement.innerHTML = 'Hi ' + userName.split(' ')[0] + '!'
}

function makeLogoClickable() {
  var logoElement = document.querySelector(
    '.header--dashboard .company__beta-logo'
  )
  if (!logoElement) {
    return
  }
  logoElement.addEventListener('click', function () {
    if (window.location.href.includes('/learn/')) {
      window.location.href = '/learn/dashboard'
    } else {
      window.location.href = '/'
    }
  })
  logoElement.style.cursor = 'pointer'
}

/**
 * Sign in Page
 */

function updateSignInPageLayout() {
  var pageContainer = document.querySelector('.session')
  pageContainer.classList.add('refresh-validator')
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

/**
 * Course Consumption Page
 */

function removeVideoSidebar() {
  var sidebarComponent = document.querySelector('.topic__contained__sidebar')
  if (sidebarComponent) {
    sidebarComponent.remove()
    var videoComponent = document.querySelector('.topic__contained__content')
    videoComponent.style.width = '100%'
  }
}

function removeTopNavigationButtons() {
  var elements = document.querySelectorAll(
    '.course__container .learner__content .directional__nav'
  )
  if (elements.length > 0) {
    elements[1].style.display = 'inline-block'
  }
}

/**
 * All Pages
 */
async function updatePageHeader() {
  var userAuth = getCookie('authTokenExpires')
  var mainGroup = document.querySelector('.container')
  if (window.location.href.includes('/learn/course/')) {
    mainGroup = document.querySelector('.course__container')
  }
  var defaultHeader = document.querySelector('.header')
  var refreshValidator = document.querySelector('.refresh-validator')
  if (!defaultHeader || refreshValidator) {
    return
  }

  var userName = localStorage.getItem('userName')
  if ((!userName || userName == '') && window.location.pathname === '/') {
    await new Promise((r) => setTimeout(r, 1000))
  }

  var avatar = defaultHeader.querySelector('.dashboard-header__avatar')
  var userName = defaultHeader.querySelector('.dashboard-header__name')
  if (avatar && userName) {
    localStorage.setItem('avatar', avatar.innerHTML)
    localStorage.setItem('userName', userName.innerText)
  }

  avatar = localStorage.getItem('avatar')
  userName = localStorage.getItem('userName')

  defaultHeader.remove()

  var extraClass = ''
  if (window.location.href.includes('/learn/dashboard')) {
    extraClass = 'dashboard'
  } else if (window.location.href.includes('/support')) {
    extraClass = 'support'
  }

  var newHeader = document.createElement('header')
  newHeader.className = 'pb-5 pt-5 bg-glacier-darkblue-600 refresh-validator'
  newHeader.innerHTML = `
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <nav
      class="flex items-center justify-between h-16 lg:h-20"
      style="font-weight: lighter !important"
    >
      <div class="flex-shrink-0">
        <a href="/" title="Glacier Home" class="flex">
          <img
            class="w-auto h-16 lg:h-20"
            src="https://glacier-projects.vercel.app/img/brand/logos/03_glacier_climate_academy/glacier_logo_climateacademy_1C_white.png"
            alt="Glacier Logo"
          />
        </a>
      </div>

      <div class="lg:flex lg:items-center lg:ml-auto lg:space-x-10">
        <a
          href="${userAuth ? '/learn/dashboard' : '/learn/sign_in'}"
          title="${userAuth ? 'Dashboard' : 'Sign In'}"
          class="hidden lg:inline-flex text-base flex items-center font-medium text-white transition-all duration-200 hover-text-glacier-darkgreen-400 gap-3"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 46 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- prettier-ignore -->
            <path fill-rule="evenodd" clip-rule="evenodd" d="M43 26.3H25C24.0611 26.3 23.3 27.0611 23.3 28V46C23.3 46.9389 24.0611 47.7 25 47.7H43C43.9389 47.7 44.7 46.9389 44.7 46V28C44.7 27.0611 43.9389 26.3 43 26.3ZM21 1.3H9C8.06112 1.3 7.3 2.06112 7.3 3V15C7.3 15.9389 8.06112 16.7 9 16.7H21C21.9389 16.7 22.7 15.9389 22.7 15V3C22.7 2.06112 21.9389 1.3 21 1.3ZM10 30.3H3C2.06112 30.3 1.3 31.0611 1.3 32V39C1.3 39.9389 2.06112 40.7 3 40.7H10C10.9389 40.7 11.7 39.9389 11.7 39V32C11.7 31.0611 10.9389 30.3 10 30.3ZM6 3C6 1.34315 7.34315 0 9 0H21C22.6569 0 24 1.34315 24 3V15C24 16.6569 22.6569 18 21 18H9C7.34315 18 6 16.6569 6 15V3ZM22 28C22 26.3431 23.3431 25 25 25H43C44.6569 25 46 26.3431 46 28V46C46 47.6569 44.6569 49 43 49H25C23.3431 49 22 47.6569 22 46V28ZM3 29C1.34315 29 0 30.3431 0 32V39C0 40.6569 1.34315 42 3 42H10C11.6569 42 13 40.6569 13 39V32C13 30.3431 11.6569 29 10 29H3Z" fill="#F1F1F1"/>
          </svg>
          <span style="font-size: 1.1rem !important; letter-spacing: 0.025em; ${
            extraClass === 'dashboard'
              ? 'font-weight: normal !important; border-bottom: 2px solid #6DD4AD; padding-bottom: 2px !important;'
              : ''
          }">
            ${userAuth ? 'Dashboard' : 'Sign In'}
          </span>
        </a>

        <a
          href="/support"
          title="Help Page"
          class="hidden lg:inline-flex text-base flex items-center font-medium text-white transition-all duration-200 hover-text-glacier-darkgreen-400 gap-3"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- prettier-ignore -->
            <path d="M22.5469 10H17.4531C14.7188 10 12.5 12.2188 12.5 14.9531V15.7812C12.5 16.1267 12.7808 16.4062 13.125 16.4062C13.4692 16.4062 13.75 16.1267 13.75 15.7812V14.9531C13.75 12.9141 15.4141 11.25 17.4531 11.25H22.5461C24.5859 11.25 26.25 12.9141 26.25 14.9531C26.25 16.2969 25.52 17.5375 24.3703 18.1773L19.2031 20.7578C18.4609 21.1016 18 21.9531 18 22.8047V24.375C18 24.7205 18.2807 25 18.625 25C18.9692 25 19.25 24.7205 19.25 24.375V22.8047C19.25 22.408 19.4648 22.0417 19.7871 21.8625L24.9504 19.2805C26.5234 18.4141 27.5 16.75 27.5 14.9531C27.5 12.2188 25.2812 10 22.5469 10ZM18.75 27.5C18.0625 27.5 17.5 28.0625 17.5 28.75C17.5 29.4375 18.0625 30 18.75 30C19.4375 30 20 29.4403 20 28.75C20 28.0597 19.4375 27.5 18.75 27.5ZM20 0C8.95312 0 0 8.95312 0 20C0 31.0469 8.95312 40 20 40C31.0469 40 40 31.0469 40 20C40 8.95312 31.0469 0 20 0ZM20 38.75C9.66406 38.75 1.25 30.3359 1.25 20C1.25 9.66406 9.66406 1.25 20 1.25C30.3359 1.25 38.75 9.66406 38.75 20C38.75 30.3359 30.3359 38.75 20 38.75Z" fill="#F1F1F1"/>
          </svg>
          <span style="font-size: 1.1rem !important; letter-spacing: 0.025em; ${
            extraClass === 'support'
              ? 'font-weight: normal !important; border-bottom: 2px solid #6DD4AD; padding-bottom: 2px !important;'
              : ''
          }">
            Support
          </span>
        </a>

        ${
          userAuth && userName && avatar
            ? `
        <div
          x-data="{
              open: false,
              toggle() {
                  if (this.open) {
                      return this.close()
                  }

                  this.$refs.button.focus()

                  this.open = true
              },
              close(focusAfter) {
                  if (! this.open) return

                  this.open = false

                  focusAfter && focusAfter.focus()
              }
          }"
          x-on:keydown.escape.prevent.stop="close($refs.button)"
          x-on:focusin.window="! $refs.panel.contains($event.target) && close()"
          x-id="['dropdown-button']"
          class="relative"
        >
          <a
            x-ref="button"
            x-on:click="toggle()"
            :aria-expanded="open"
            :aria-controls="$id('dropdown-button')"
            type="button"
            class="text-base flex items-center font-medium text-white transition-all duration-200 hover-text-glacier-darkgreen-400 gap-3 cursor-pointer"
            type="button"
          >
            ${userName}
            ${avatar}
            <!-- prettier-ignore -->
            <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" ></path> </svg>
          </a>
          <!-- Dropdown menu -->
          <div
            x-ref="panel"
            x-show="open"
            x-transition.origin.top.left
            x-on:click.outside="close($refs.button)"
            :id="$id('dropdown-button')"
            style="display: none;"
            class="bg-white divide-y divide-gray-100 rounded-lg shadow absolute w-44 left-0 z-10 "
          >
            <ul
              class="py-2 text-md"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="/learn/dashboard"
                  class="block lg:hidden block px-4 py-2 hover-bg-glacier-darkgreen-400 text-glacier-darkblue-600"
                  >Dashboard</a
                >
              </li>
              <li>
                <a
                  href="/learn/account?tab=dashboard.account_profile"
                  class="block px-4 py-2 hover-bg-glacier-darkgreen-400 text-glacier-darkblue-600"
                  >Profile</a
                >
              </li>
              <li>
                <a
                  href="/learn/account?tab=dashboard.account"
                  class="block px-4 py-2 hover-bg-glacier-darkgreen-400 text-glacier-darkblue-600"
                  >Account</a
                >
              </li>
              <li>
                <a
                  href="/support"
                  class="block lg:hidden block px-4 py-2 hover-bg-glacier-darkgreen-400 text-glacier-darkblue-600"
                  >Support</a
                >
              </li>
              <li>
                <a
                  href="/learn/sign_out"
                  class="block px-4 py-2 hover-bg-glacier-darkgreen-400 text-glacier-darkblue-600"
                  >Sign out</a
                >
              </li>
            </ul>
          </div>
        </div>
        `
            : ''
        }
      </div>
    </nav>
  </div>
  `

  mainGroup.prepend(newHeader)
}
