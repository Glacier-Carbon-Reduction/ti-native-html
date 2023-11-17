/**
 * Global Utility Functions
 */

function watchNestedProperty(obj, value, callback) {
  let lastValue = obj[value]

  Object.defineProperty(obj, value, {
    get: function () {
      return lastValue
    },
    set: function (newValue) {
      lastValue = newValue
      callback(newValue)
    },
    configurable: true
  })
}

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
 * LXP Level Functions
 */

function updatePageHeader() {
  var userAuth = getCookie('authTokenExpires')
  var mainGroup = document.querySelector('.container')
  if (window.location.href.includes('/learn/course/')) {
    mainGroup = document.querySelector('.course__container')
  }

  var refreshValidator = document.querySelector('.refresh-validator-header')
  if (refreshValidator) {
    return
  }

  var userName =
    window.CONF?.preload?.currentUser?.currentUser?.firstName +
    ' ' +
    window.CONF.preload?.currentUser?.currentUser?.lastName

  var userLicences = window.CONF.preload.currentUser.allocatedLicenses
  var multiLicence = userLicences.length > 1

  var extraClass = ''
  if (window.location.href.includes('/learn/dashboard')) {
    extraClass = 'dashboard'
  } else if (window.location.href.includes('/support')) {
    extraClass = 'support'
  } else if (window.location.href.includes('learn/license')) {
    extraClass = 'licence'
  } else if (window.location.href.includes('/learn/account?tab=dashboard.account')) {
    extraClass = 'account'
  } else if (window.location.href.includes('/learn/account?tab=dashboard.account_profile')) {
    extraClass = 'profile'
  }

  var newHeader = document.createElement('header')
  newHeader.className = 'py-4 bg-ocean refresh-validator-header nav-root'
  newHeader.innerHTML = `
    <nav
        x-data="{ open: false, toggle() { if (this.open) { return this.close(); } this.$refs.button.focus(); this.open = true; }, close(focusAfter) { if (! this.open){ return; } this.open = false; focusAfter && focusAfter.focus(); } }"
        x-on:keydown.escape.prevent.stop="close($refs.button)"
        x-on:focusin.window="! $refs.panel.contains($event.target) && close()"
        x-id="['dropdown-button-mobile']"
        class="nav-main"
        style="font-weight: lighter !important"
    >
        <div class="flex-shrink-0">
          <a href="${userAuth ? '/learn/dashboard' : '/'}" title="Glacier Home" class="flex">
            <img
              class="w-auto h-20 py-3 flex"
              src="https://glacier-projects.vercel.app/img/brand/logos/03_glacier_climate_academy/glacier_logo_climateacademy_1C_white.png"
              alt="Glacier Logo"
            />
          </a>
        </div>
  
        <div class="lg:flex lg:items-center lg:ml-auto lg:space-x-10">
        ${
          multiLicence
            ? `<a
                href="/learn/license"
                title="Program"
                class="hidden lg:inline-flex natural-text natural-text-lg items-center text-white transition-all duration-200 hover:text-spring-dark gap-3"
              >
              <svg width="24" height="24" viewBox="0 0 46 49" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" > <path fill-rule="evenodd" clip-rule="evenodd" d="M43 26.3H25C24.0611 26.3 23.3 27.0611 23.3 28V46C23.3 46.9389 24.0611 47.7 25 47.7H43C43.9389 47.7 44.7 46.9389 44.7 46V28C44.7 27.0611 43.9389 26.3 43 26.3ZM21 1.3H9C8.06112 1.3 7.3 2.06112 7.3 3V15C7.3 15.9389 8.06112 16.7 9 16.7H21C21.9389 16.7 22.7 15.9389 22.7 15V3C22.7 2.06112 21.9389 1.3 21 1.3ZM10 30.3H3C2.06112 30.3 1.3 31.0611 1.3 32V39C1.3 39.9389 2.06112 40.7 3 40.7H10C10.9389 40.7 11.7 39.9389 11.7 39V32C11.7 31.0611 10.9389 30.3 10 30.3ZM6 3C6 1.34315 7.34315 0 9 0H21C22.6569 0 24 1.34315 24 3V15C24 16.6569 22.6569 18 21 18H9C7.34315 18 6 16.6569 6 15V3ZM22 28C22 26.3431 23.3431 25 25 25H43C44.6569 25 46 26.3431 46 28V46C46 47.6569 44.6569 49 43 49H25C23.3431 49 22 47.6569 22 46V28ZM3 29C1.34315 29 0 30.3431 0 32V39C0 40.6569 1.34315 42 3 42H10C11.6569 42 13 40.6569 13 39V32C13 30.3431 11.6569 29 10 29H3Z"/></svg>
                <span class="${extraClass === 'licence' ? 'nav-list-active' : ''}">
                  <span lang="de">Programm wählen</span>
                  <span lang="en">Select Program</span>
                </span>
              </a>`
            : ''
        }
          
          <a
            href="${userAuth ? '/learn/dashboard' : '/learn/sign_in'}"
            title="${userAuth ? 'Dashboard' : 'Sign In'}"
            class="${
              userAuth ? 'lg:inline-flex' : ''
            } hidden natural-text natural-text-lg items-center text-white transition-all duration-200 hover:text-spring-dark gap-3"
          >
            <svg width="24" height="24" viewBox="0 0 46 49" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" > <path fill-rule="evenodd" clip-rule="evenodd" d="M43 26.3H25C24.0611 26.3 23.3 27.0611 23.3 28V46C23.3 46.9389 24.0611 47.7 25 47.7H43C43.9389 47.7 44.7 46.9389 44.7 46V28C44.7 27.0611 43.9389 26.3 43 26.3ZM21 1.3H9C8.06112 1.3 7.3 2.06112 7.3 3V15C7.3 15.9389 8.06112 16.7 9 16.7H21C21.9389 16.7 22.7 15.9389 22.7 15V3C22.7 2.06112 21.9389 1.3 21 1.3ZM10 30.3H3C2.06112 30.3 1.3 31.0611 1.3 32V39C1.3 39.9389 2.06112 40.7 3 40.7H10C10.9389 40.7 11.7 39.9389 11.7 39V32C11.7 31.0611 10.9389 30.3 10 30.3ZM6 3C6 1.34315 7.34315 0 9 0H21C22.6569 0 24 1.34315 24 3V15C24 16.6569 22.6569 18 21 18H9C7.34315 18 6 16.6569 6 15V3ZM22 28C22 26.3431 23.3431 25 25 25H43C44.6569 25 46 26.3431 46 28V46C46 47.6569 44.6569 49 43 49H25C23.3431 49 22 47.6569 22 46V28ZM3 29C1.34315 29 0 30.3431 0 32V39C0 40.6569 1.34315 42 3 42H10C11.6569 42 13 40.6569 13 39V32C13 30.3431 11.6569 29 10 29H3Z"/> </svg>
            <span class="${extraClass === 'dashboard' ? 'nav-list-active' : ''}">
              ${userAuth ? 'Dashboard' : 'Sign In'}
            </span>
          </a>
  
          <a
            href="/support"
            title="Help Page"
            class="hidden lg:inline-flex natural-text natural-text-lg items-center text-white transition-all duration-200 hover:text-spring-dark gap-3 ${
              extraClass === 'support' ? 'font-medium' : ''
            }"
          >
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" > <path d="M22.5469 10H17.4531C14.7188 10 12.5 12.2188 12.5 14.9531V15.7812C12.5 16.1267 12.7808 16.4062 13.125 16.4062C13.4692 16.4062 13.75 16.1267 13.75 15.7812V14.9531C13.75 12.9141 15.4141 11.25 17.4531 11.25H22.5461C24.5859 11.25 26.25 12.9141 26.25 14.9531C26.25 16.2969 25.52 17.5375 24.3703 18.1773L19.2031 20.7578C18.4609 21.1016 18 21.9531 18 22.8047V24.375C18 24.7205 18.2807 25 18.625 25C18.9692 25 19.25 24.7205 19.25 24.375V22.8047C19.25 22.408 19.4648 22.0417 19.7871 21.8625L24.9504 19.2805C26.5234 18.4141 27.5 16.75 27.5 14.9531C27.5 12.2188 25.2812 10 22.5469 10ZM18.75 27.5C18.0625 27.5 17.5 28.0625 17.5 28.75C17.5 29.4375 18.0625 30 18.75 30C19.4375 30 20 29.4403 20 28.75C20 28.0597 19.4375 27.5 18.75 27.5ZM20 0C8.95312 0 0 8.95312 0 20C0 31.0469 8.95312 40 20 40C31.0469 40 40 31.0469 40 20C40 8.95312 31.0469 0 20 0ZM20 38.75C9.66406 38.75 1.25 30.3359 1.25 20C1.25 9.66406 9.66406 1.25 20 1.25C30.3359 1.25 38.75 9.66406 38.75 20C38.75 30.3359 30.3359 38.75 20 38.75Z"/> </svg>
            <span class="${extraClass === 'support' ? 'nav-list-active' : ''}">
              Support
            </span>
          </a>
  
          ${
            userAuth && userName
              ? `
          <div
          x-data="{ open: false, toggle() { if (this.open) { return this.close(); } this.$refs.button.focus(); this.open = true; }, close(focusAfter) { if (! this.open){ return; } this.open = false; focusAfter && focusAfter.focus(); } }"
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
              class="natural-text natural-text-lg hidden lg:inline-flex items-center text-white transition-all duration-200 hover:text-spring-dark gap-3 cursor-pointer"
              type="button"
            >
              ${userName}
              <svg width="20px" height="20px" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" ></path> </svg>
            </a>
            <div
              x-ref="panel"
              x-show="open"
              x-transition.origin.top.left
              x-on:click.outside="close($refs.button)"
              :id="$id('dropdown-button')"
              style="display: none; top: 3rem; width: 100%"
              class="bg-white divide-y divide-gray-100 rounded-lg shadow absolute w-44 left-0 z-10 hidden lg:inline-flex"
            >
              <ul
                class="py-2 text-md no-bullets"
                style="width: 100%;"
                aria-labelMobiledropdownDefaultButton"
              >
                <li class="block lg:hidden">
                  <a
                    href="/learn/dashboard"
                    class="px-4 py-2 hover:bg-spring text-ocean natural-text natural-text-lg"
                    >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="/learn/account?tab=dashboard.account_profile"
                    class="block px-4 py-2 hover:bg-spring text-ocean"
                    >
                      <span lang="de">Profil</span>
                      <span lang="en">Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/learn/account?tab=dashboard.account"
                    class="block px-4 py-2 hover:bg-spring text-ocean"
                    >
                    Account
                  </a>
                </li>
                <li class="block lg:hidden">
                  <a
                    href="/support"
                    class="px-4 py-2 hover:bg-spring text-ocean natural-text natural-text-lg"
                    >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="/learn/sign_out"
                    class="block px-4 py-2 hover:bg-spring text-ocean"
                    >
                    <span lang="de">Abmelden</span>
                    <span lang="en">Sign out</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a
            x-ref="button"
            x-on:click="toggle()"
            :aria-expanded="open"
            :aria-controls="$id('dropdown-button-mobile')"
            type="button"
            class="natural-text natural-text-lg flex lg:hidden items-center text-white transition-all duration-200 gap-3 cursor-pointer"
            type="button"
          >
            <svg x-show="!open" width="32px" height="32px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.6668 15C25.2191 15 25.6668 15.4477 25.6668 16C25.6668 16.5063 25.2906 16.9247 24.8025 16.9909L24.6668 17H7.3335C6.78121 17 6.3335 16.5523 6.3335 16C6.3335 15.4937 6.7097 15.0753 7.1978 15.0091L7.3335 15H24.6668Z" fill="white"/> <path d="M24.6668 20.3333C25.2191 20.3333 25.6668 20.7811 25.6668 21.3333C25.6668 21.8396 25.2906 22.258 24.8025 22.3242L24.6668 22.3333H7.3335C6.78121 22.3333 6.3335 21.8856 6.3335 21.3333C6.3335 20.8271 6.7097 20.4087 7.1978 20.3425L7.3335 20.3333H24.6668Z" fill="white"/> <path d="M24.6668 9.66667C25.2191 9.66667 25.6668 10.1144 25.6668 10.6667C25.6668 11.1729 25.2906 11.5913 24.8025 11.6575L24.6668 11.6667H7.3335C6.78121 11.6667 6.3335 11.219 6.3335 10.6667C6.3335 10.1604 6.7097 9.74202 7.1978 9.6758L7.3335 9.66667H24.6668Z" fill="white"/> </svg>
            
            <svg x-show="open" width="28px" height="28px" aria-hidden="true" fill="none" stroke="#FFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" ></path></svg>
          </a>
          `
              : ''
          }
        </div>
        <div
        x-ref="panel"
        x-show="open"
        x-transition.origin.top.left
        x-on:click.outside="close($refs.button)"
        :id="$id('dropdown-button-mobile')"
        style="display: none;"
        class="bg-white divide-y divide-gray-100 shadow absolute left-0 z-10 block lg:hidden nav-menu-mobile"
      >
        <ul
          class="py-8 px-4 text-md no-bullets flex flex-col gap-5"
          aria-labelledby="dropdownMobileButton"
        >
        ${
          multiLicence
            ? `<li class="px-4 block lg:hidden">
                <a
                  href="/learn/license"
                  class="text-ocean natural-text natural-text-lg ${
                    extraClass === 'licence' ? 'nav-menu-mobile-active' : ''
                  }"
                  >
                  <span lang="de">Programm wählen</span>
                  <span lang="en">Select Program</span>
                </a>
              </li>`
            : ''
        }
          <li class="px-4 block lg:hidden">
            <a
              href="/learn/dashboard"
              class="text-ocean natural-text natural-text-lg ${
                extraClass === 'dashboard' ? 'nav-menu-mobile-active' : ''
              }"
              >
                <span lang="de">Dashboard</span>
                <span lang="en">Dashboard</span>
            </a>
          </li>
          <li class="px-4 block">
            <a
              href="/learn/account?tab=dashboard.account_profile"
              class="text-ocean natural-text natural-text-lg ${
                extraClass === 'profile' ? 'nav-menu-mobile-active' : ''
              }"
              >
                <span lang="de">Profil</span>
                <span lang="en">Profile</span>
            </a>
          </li>
          <li class="px-4 block">
            <a
              href="/learn/account?tab=dashboard.account"
              class="text-ocean natural-text natural-text-lg ${
                extraClass === 'account' ? 'nav-menu-mobile-active' : ''
              }"
              >
                <span lang="de">Account</span>
                <span lang="en">Account</span>
              </a>
          </li>
          <li class="px-4 block lg:hidden">
            <a
              href="/support"
              class="text-ocean natural-text natural-text-lg ${
                extraClass === 'support' ? 'nav-menu-mobile-active' : ''
              }"
              >
                <span lang="de">Support</span>
                <span lang="en">Support</span>
            </a>
          </li>
          <li class="px-4 block">
            <a
              href="/learn/sign_out"
              class="text-ocean natural-text natural-text-lg"
              >
              <span lang="de">Abmelden</span>
              <span lang="en">Sign out</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    `

  mainGroup.prepend(newHeader)
}

function triggerScrollIntoView(objectId) {
  const targetElement = document.getElementById(objectId)

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
  }
}

function scrollToModuleCatalogOnFilter() {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  if (urlParams.has('labels')) {
    triggerScrollIntoView('custom-module-catalog')
  }
}

function embedWistiaVideo(videoId) {
  const dynamicEmbed = document.getElementById('dynamic-content-space')
  if (dynamicEmbed) {
    var embedCode = `
        <iframe 
          src="https://fast.wistia.net/embed/iframe/${videoId}" 
          allowtransparency="true"
          frameborder="0" 
          scrolling="no" 
          class="wistia_embed" 
          name="wistia_embed" 
          allowfullscreen 
          mozallowfullscreen 
          webkitallowfullscreen 
          oallowfullscreen 
          msallowfullscreen 
          width="100%">
        </iframe>`

    dynamicEmbed.innerHTML = embedCode
  }
}

function userNameReplacer() {
  const userName = window.CONF?.preload?.currentUser?.currentUser?.firstName
  const userNameElement = document.getElementById('banner-username')
  if (userName && userNameElement) {
    userNameElement.textContent = ' ' + userName
  }
}
