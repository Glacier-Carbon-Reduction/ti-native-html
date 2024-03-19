/**
 * Global Utility Functions
 */

let INTERNAL_SYSTEM_PATH = 'https://internal.glacier.eco'
let currentUserLanguage =
  window.CONF?.preload?.currentUser?.currentUser?.lang ||
  window?.CONF?.preload?.currentUser?.clients?.[0]?.defaultLanguage
let languageWatcherActive = false
let pageSwticherReachable = false
let unreachablePageSwitherCodeInitiated = false

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

function showLoading() {
  const alertBoxShell = document.getElementById('customAlertBox')
  if (alertBoxShell) alertBoxShell.style.display = 'block'
}

function hideLoading() {
  const alertBoxShell = document.getElementById('customAlertBox')
  if (alertBoxShell) alertBoxShell.style.display = 'none'
}

function updateMessage(message) {
  const alertBoxShell = document.getElementById('customAlertBox')
  if (alertBoxShell) alertBoxShell.textContent = message
}

/**
 * LXP Level Functions
 */

function updatePageHeader() {
  if (window.location.href.includes('/redeem') || window.location.href.includes('/register')) {
    return
  }

  var userAuth = getCookie('authTokenExpires')
  var mainGroup = document.querySelector('.container')
  if (window.location.href.includes('/learn/course/')) {
    mainGroup = document.querySelector('.course__container')
  }

  var refreshValidator = document.querySelector('.refresh-validator-header')
  if (refreshValidator || !mainGroup) {
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
    // } else if (window.location.href.includes('/support')) {
    //   extraClass = 'support'
  } else if (window.location.href.includes('learn/license')) {
    extraClass = 'licence'
  } else if (window.location.href.includes('pages/live-stream')) {
    extraClass = 'livestream'
  } else if (window.location.href.includes('pages/download-hub')) {
    extraClass = 'downloadhub'
  } else if (window.location.href.includes('/learn/account?tab=dashboard.account')) {
    extraClass = 'account'
  }

  var newHeader = document.createElement('header')
  newHeader.className = 'py-4 bg-ocean refresh-validator-header nav-root'
  newHeader.innerHTML = `
    <nav
        id="dropdown-button-mobile"
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
        <a
          href="/pages/live-stream"
          title="Livestream"
          id="nav-live-stream"
          class="hidden natural-text natural-text-lg items-center text-white transition-all duration-200 hover:text-spring-dark gap-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewBox="0 0 29 26" fill="none"> <path d="M2.12465 0.582772C1.27882 2.37508 0.805556 4.38571 0.805556 6.50296C0.805556 8.62022 1.27882 10.6309 2.12465 12.4232C2.22031 12.6263 2.13472 12.87 1.93333 12.9664C1.73194 13.0629 1.49028 12.9766 1.39462 12.7735C0.498438 10.8695 0 8.74716 0 6.50296C0 4.25878 0.498438 2.13644 1.39462 0.232434C1.49028 0.0293402 1.73194 -0.0569748 1.93333 0.0394949C2.13472 0.135965 2.22031 0.379678 2.12465 0.582772ZM27.6054 0.232434C28.5016 2.13644 29 4.25878 29 6.50296C29 8.74716 28.5016 10.8695 27.6054 12.7735C27.5097 12.9766 27.2681 13.0629 27.0667 12.9664C26.8653 12.87 26.7797 12.6263 26.8753 12.4232C27.7212 10.6309 28.1944 8.62022 28.1944 6.50296C28.1944 4.38571 27.7212 2.37508 26.8753 0.582772C26.7797 0.379678 26.8653 0.135965 27.0667 0.0394949C27.2681 -0.0569748 27.5097 0.0293402 27.6054 0.232434ZM16.9167 6.50296C16.9167 5.8566 16.6621 5.2367 16.2088 4.77965C15.7556 4.3226 15.1409 4.06584 14.5 4.06584C13.8591 4.06584 13.2444 4.3226 12.7912 4.77965C12.3379 5.2367 12.0833 5.8566 12.0833 6.50296C12.0833 7.14933 12.3379 7.76923 12.7912 8.22628C13.2444 8.68333 13.8591 8.94009 14.5 8.94009C15.1409 8.94009 15.7556 8.68333 16.2088 8.22628C16.6621 7.76923 16.9167 7.14933 16.9167 6.50296ZM17.7222 6.50296C17.7222 8.15818 16.4937 9.52907 14.9028 9.72708V25.5938C14.9028 25.8172 14.7215 26 14.5 26C14.2785 26 14.0972 25.8172 14.0972 25.5938V9.72708C12.5063 9.52907 11.2778 8.15818 11.2778 6.50296C11.2778 4.71066 12.7227 3.25346 14.5 3.25346C16.2773 3.25346 17.7222 4.71066 17.7222 6.50296ZM6.33872 3.00975C5.89063 4.08614 5.63889 5.26409 5.63889 6.50296C5.63889 7.74184 5.89063 8.92486 6.33872 9.99618C6.42431 10.2044 6.32865 10.443 6.12726 10.5293C5.92587 10.6156 5.6842 10.5192 5.59861 10.3161C5.10521 9.14319 4.83333 7.85354 4.83333 6.50296C4.83333 5.15239 5.10521 3.86274 5.59861 2.69495C5.6842 2.48678 5.92083 2.39031 6.12726 2.4817C6.33368 2.57309 6.42934 2.80665 6.33872 3.01482V3.00975ZM23.4014 2.69495C23.8948 3.86274 24.1667 5.15239 24.1667 6.50296C24.1667 7.85354 23.8948 9.14319 23.4014 10.311C23.3158 10.5192 23.0792 10.6156 22.8727 10.5242C22.6663 10.4328 22.5707 10.1993 22.6613 9.99111C23.1144 8.91978 23.3611 7.74184 23.3611 6.49789C23.3611 5.25394 23.1094 4.08107 22.6613 3.00467C22.5757 2.7965 22.6714 2.55786 22.8727 2.47155C23.0741 2.38523 23.3158 2.4817 23.4014 2.6848V2.69495Z" fill="white"/> </svg>
            <span class="${extraClass === 'livestream' ? 'nav-list-active' : ''}">
              <span lang="de">Livestream</span>
              <span lang="en">Livestream</span>
            </span>
        </a>

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

          ${
            userAuth && false
              ? `
          <a
            href="/pages/download-hub"
            title="Download Hub"
            class="hidden lg:inline-flex natural-text natural-text-lg items-center text-white transition-all duration-200 hover:text-spring-dark gap-3 ${
              extraClass === 'downloadhub' ? 'font-medium' : ''
            }"
          >
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_206_48)"> <path d="M16.5 0.5C16.5 0.225 16.275 0 16 0C15.725 0 15.5 0.225 15.5 0.5V22.2938L8.35625 15.1438C8.1625 14.95 7.84375 14.95 7.65 15.1438C7.45625 15.3375 7.45625 15.6562 7.65 15.85L15.65 23.85C15.8438 24.0438 16.1625 24.0438 16.3563 23.85L24.3563 15.85C24.55 15.6562 24.55 15.3375 24.3563 15.1438C24.1625 14.95 23.8438 14.95 23.65 15.1438L16.5 22.2938V0.5ZM8.9625 20H4C1.79375 20 0 21.7938 0 24V28C0 30.2062 1.79375 32 4 32H28C30.2062 32 32 30.2062 32 28V24C32 21.7938 30.2062 20 28 20H23.0375L22.0375 21H28C29.6562 21 31 22.3438 31 24V28C31 29.6562 29.6562 31 28 31H4C2.34375 31 1 29.6562 1 28V24C1 22.3438 2.34375 21 4 21H9.9625L8.9625 20ZM27 27C26.7348 27 26.4804 26.8946 26.2929 26.7071C26.1054 26.5196 26 26.2652 26 26C26 25.7348 26.1054 25.4804 26.2929 25.2929C26.4804 25.1054 26.7348 25 27 25C27.2652 25 27.5196 25.1054 27.7071 25.2929C27.8946 25.4804 28 25.7348 28 26C28 26.2652 27.8946 26.5196 27.7071 26.7071C27.5196 26.8946 27.2652 27 27 27ZM25 26C25 26.5304 25.2107 27.0391 25.5858 27.4142C25.9609 27.7893 26.4696 28 27 28C27.5304 28 28.0391 27.7893 28.4142 27.4142C28.7893 27.0391 29 26.5304 29 26C29 25.4696 28.7893 24.9609 28.4142 24.5858C28.0391 24.2107 27.5304 24 27 24C26.4696 24 25.9609 24.2107 25.5858 24.5858C25.2107 24.9609 25 25.4696 25 26Z" fill="currentColor"/> </g> <defs> <clipPath id="clip0_206_48"> <rect width="32" height="32" fill="currentColor"/> </clipPath> </defs> </svg>
            <span class="${extraClass === 'downloadhub' ? 'nav-list-active' : ''}">
              Download Hub
            </span>
          </a>
          `
              : ``
          }
  
          ${
            userAuth && userName
              ? `
          <div
            id="accordion-nav-menu"
            class="relative"
          >
            <a
              onClick="toggleAccordion('nav-menu')"
              type="button"
              class="natural-text natural-text-lg hidden lg:inline-flex items-center text-white transition-all duration-200 hover:text-spring-dark gap-3 cursor-pointer ${
                extraClass === 'account' ? 'font-medium' : ''
              }"
              type="button"
            >
              <span class="${extraClass === 'account' ? 'nav-list-active' : ''}">
                ${userName}
              </span>
              <svg width="20px" height="20px" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" ></path> </svg>
            </a>
            <div
              style="top: 40px; width: 140%; margin-left: -50px;"
              class="bg-white divide-y divide-gray-100 rounded shadow-lg absolute w-44 left-0 z-10 hidden lg:inline-flex accordion-content accordion-hidden"
            >
              <ul
                class="py-2 text-md no-bullets"
                style="width: 100%;"
              >
                <li class="block lg:hidden hover:bg-spring py-2 pl-2">
                  <a class='w-full block' href="/learn/dashboard">
                    <span class="px-4 text-ocean natural-text natural-text-lg">Dashboard</span>
                  </a>
                </li>
                <li class="hover:bg-spring py-2 pl-2">
                  <a class='w-full block' href="/support">
                    <span class="px-4 text-ocean natural-text natural-text-lg">Support</span>
                  </a>
                </li>
                <li class="hover:bg-spring py-2 pl-2">
                  <a class='w-full block' href="/learn/account?tab=dashboard.account_profile">
                    <span lang="de" class="px-4 text-ocean natural-text natural-text-lg">Mein Konto</span>
                    <span lang="en" class="px-4 text-ocean natural-text natural-text-lg">My Account</span>
                  </a>
                </li>
                <li class="hover:bg-spring py-2 pl-2">
                  <a class='w-full block' href="/learn/sign_out">
                    <span lang="de" class="px-4 text-ocean natural-text natural-text-lg">Abmelden</span>
                    <span lang="en" class="px-4 text-ocean natural-text natural-text-lg">Sign out</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a
            onClick="toggleAccordion('nav-menu-mobile', this)"
            type="button"
            class="natural-text natural-text-lg flex lg:hidden items-center text-white transition-all duration-200 gap-3 cursor-pointer"
          >
            <svg class="accordion-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.6666 15C25.2189 15 25.6666 15.4477 25.6666 16C25.6666 16.5063 25.2904 16.9247 24.8023 16.9909L24.6666 17H7.33331C6.78103 17 6.33331 16.5523 6.33331 16C6.33331 15.4937 6.70952 15.0753 7.19762 15.0091L7.33331 15H24.6666Z" fill="white"/> <path d="M24.6666 20.3333C25.2189 20.3333 25.6666 20.781 25.6666 21.3333C25.6666 21.8396 25.2904 22.258 24.8023 22.3242L24.6666 22.3333H7.33331C6.78103 22.3333 6.33331 21.8856 6.33331 21.3333C6.33331 20.8271 6.70952 20.4087 7.19762 20.3425L7.33331 20.3333H24.6666Z" fill="white"/> <path d="M24.6666 9.66666C25.2189 9.66666 25.6666 10.1144 25.6666 10.6667C25.6666 11.1729 25.2904 11.5913 24.8023 11.6575L24.6666 11.6667H7.33331C6.78103 11.6667 6.33331 11.2189 6.33331 10.6667C6.33331 10.1604 6.70952 9.74201 7.19762 9.67579L7.33331 9.66666H24.6666Z" fill="white"/> </svg>
            
            <svg class="accordion-icon hidden" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.95958 9.95956C10.3146 9.60454 10.8702 9.57226 11.2616 9.86274L11.3738 9.95956L22.0405 20.6262C22.431 21.0168 22.431 21.6499 22.0405 22.0404C21.6854 22.3955 21.1299 22.4277 20.7384 22.1373L20.6262 22.0404L9.95958 11.3738C9.56906 10.9832 9.56906 10.3501 9.95958 9.95956Z" fill="white"/> <path d="M20.6262 9.95956C21.0168 9.56904 21.6499 9.56904 22.0405 9.95956C22.3955 10.3146 22.4278 10.8701 22.1373 11.2616L22.0405 11.3738L11.3738 22.0404C10.9833 22.431 10.3501 22.431 9.95958 22.0404C9.60456 21.6854 9.57228 21.1299 9.86276 20.7384L9.95958 20.6262L20.6262 9.95956Z" fill="white"/> </svg>
          </a>
          `
              : ''
          }
        </div>
        <div
          id="accordion-nav-menu-mobile"
          class="bg-white divide-y divide-gray-100 shadow absolute left-0 z-10 block lg:hidden nav-menu-mobile"
        >
        <ul
          class="pt-8 pb-8 px-4 text-md no-bullets flex flex-col gap-5 accordion-content accordion-hidden"
        >
          <li
            id="nav-live-stream-dropdown"
            class="px-4 hidden"
          >
            <a
              href="/pages/live-stream"
              class="text-ocean natural-text natural-text-lg ${
                extraClass === 'livestream' ? 'nav-menu-mobile-active' : ''
              }"
              >
              <span lang="de">Livestream</span>
              <span lang="en">Livestream</span>
            </a>
          </li>
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
              href="/learn/account?tab=dashboard.account_profile"
              class="text-ocean natural-text natural-text-lg ${
                extraClass === 'account' ? 'nav-menu-mobile-active' : ''
              }"
              >
                <span lang="de">Mein Konto</span>
                <span lang="en">My Account</span>
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

  document.addEventListener('click', function (event) {
    const navMenu = document.getElementById('accordion-nav-menu')
    const navMenuContent = navMenu.querySelector('.accordion-content')
    if (
      navMenuContent &&
      navMenuContent.style.maxHeight &&
      navMenuContent.style.maxHeight !== '0px' &&
      navMenuContent.style.maxHeight !== ''
    ) {
      const isClickInsideNavMenu = navMenu.contains(event.target)
      if (!isClickInsideNavMenu) {
        toggleAccordion('nav-menu')
      }
    }
  })

  return true
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
  const dynamicEmbed = document.getElementById('lxp-intro-video')
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

async function dashboardUsageBasedTransformations() {
  const userName = window.CONF?.preload?.currentUser?.currentUser?.firstName
  const certificateIssued = await checkForCertificate()
  const bannerPretitleElement = document.getElementById('banner-pretitle')
  const bannerTitleElement = document.getElementById('banner-title')
  const bannerDescriptionElement = document.getElementById('banner-description')
  const bannerButtonElement = document.getElementById('banner-button')

  if (!bannerPretitleElement || !bannerTitleElement || !bannerDescriptionElement || !bannerButtonElement) {
    return
  }

  const climateHour = document.querySelector('.climate-hour')
  const climateHourActive = !!climateHour

  switch (true) {
    case climateHourActive && certificateIssued === 2:
      {
        if (currentUserLanguage === 'de') {
          bannerPretitleElement.textContent = 'HERZLICHEN GLÜCKWUNSCH, CLIMATE RANGER!'
          bannerTitleElement.textContent = 'Hi' + (userName ? ' ' + userName : '') + '!'
          bannerDescriptionElement.innerHTML =
            'Du hast das Abschlussquiz erfolgreich abgeschlossen!</br>Dein offizielles Zertifikat wartet schon auf dich.'
          bannerButtonElement.textContent = `Hol dir dein Zertifikat`
        } else {
          bannerPretitleElement.textContent = 'CONGRATULATIONS, CLIMATE RANGER!'
          bannerTitleElement.textContent = 'Hi' + (userName ? ' ' + userName : '') + '!'
          bannerDescriptionElement.innerHTML =
            'You have successfully completed the Final Quiz!</br>Your official certificate is awaiting you.'
          bannerButtonElement.textContent = `Get your certificate`
        }

        bannerButtonElement.onclick = function () {
          triggerScrollIntoView('certificate-section')
        }
      }
      break

    case climateHourActive:
      {
        if (currentUserLanguage === 'de') {
          bannerPretitleElement.textContent = 'SETZE DEINE LERNREISE FORT!'
          bannerTitleElement.textContent = 'Hi' + (userName ? ' ' + userName : '') + '!'
          bannerDescriptionElement.innerHTML =
            'Du hast es fast geschafft!</br>Schließe noch das Abschlussquiz ab und erhalte dein persönliches Zertifikat für die Climate Hours!'
          bannerButtonElement.textContent = `Zum Abschlussquiz`
        } else {
          bannerPretitleElement.textContent = 'COMPLETE YOUR LEARNING JOURNEY!'
          bannerTitleElement.textContent = 'Hi' + (userName ? ' ' + userName : '') + '!'
          bannerDescriptionElement.innerHTML =
            'You are almost there!</br>You only need to complete the Final Quiz to receive your certificate for the Climate Hours!'
          bannerButtonElement.textContent = `Complete the Final Quiz`
        }

        bannerButtonElement.onclick = function () {
          triggerScrollIntoView('modules-overview')
        }
      }
      break

    case certificateIssued === 2:
      {
        if (currentUserLanguage === 'de') {
          bannerPretitleElement.textContent = 'HERZLICHEN GLÜCKWUNSCH, CLIMATE RANGER!'
          bannerTitleElement.textContent = 'Hi' + (userName ? ' ' + userName : '') + '!'
          bannerDescriptionElement.innerHTML =
            'Gratuliere, du hast alle Klimaschutz-Module erfolgreich abgeschlossen!</br>Dein offizielles Zertifikat wartet auf dich.'
          bannerButtonElement.textContent = `Hol dir dein Zertifikat`
        } else {
          bannerPretitleElement.textContent = 'CONGRATULATIONS, CLIMATE RANGER!'
          bannerTitleElement.textContent = 'Hi' + (userName ? ' ' + userName : '') + '!'
          bannerDescriptionElement.innerHTML =
            'You have successfully completed all the climate action modules!</br>Your official certificate is awaiting you.'
          bannerButtonElement.textContent = `Get your certificate`
        }

        bannerButtonElement.onclick = function () {
          triggerScrollIntoView('certificate-section')
        }
      }
      break

    case certificateIssued === 1:
      {
        if (currentUserLanguage === 'de') {
          bannerPretitleElement.textContent = 'SETZE DEINE LERNREISE FORT!'
          bannerTitleElement.textContent = 'Hi' + (userName ? ' ' + userName : '') + '!'
          bannerDescriptionElement.innerHTML =
            'Wähle dein nächstes Lernmodul and erweitere deine Klimaschutz-Kompetenzen.'
          bannerButtonElement.textContent = `Weiter geht's`
        } else {
          bannerPretitleElement.textContent = 'CONTINUE YOUR LEARNING JOURNEY!'
          bannerTitleElement.textContent = 'Hi' + (userName ? ' ' + userName : '') + '!'
          bannerDescriptionElement.innerHTML =
            'Discover the next module and take your climate competences to the next level.'
          bannerButtonElement.textContent = `Let's continue`
        }
        bannerButtonElement.style.display = 'none'
      }
      break

    default: {
      if (currentUserLanguage === 'de') {
        bannerPretitleElement.textContent = 'LERNE DIE PLATTFORM KENNEN'
        bannerTitleElement.textContent = 'Willkommen' + (userName ? ' ' + userName : '') + '!'
        bannerDescriptionElement.innerHTML =
          'Das erste Mal hier?<br>Dann schau dir doch das kurze Erklärungsvideo an, das wir für dich vorbereitet haben.'
        bannerButtonElement.textContent = `Zum Einführungsvideo`
      } else {
        bannerPretitleElement.textContent = 'GET TO KNOW THE PLATFORM'
        bannerTitleElement.textContent = 'Welcome' + (userName ? ' ' + userName : '') + '!'
        bannerDescriptionElement.innerHTML =
          'First time around?<br>Then check out our short explanation video we prepared for you!'
        bannerButtonElement.textContent = `Watch Intro Video`
      }

      bannerButtonElement.onclick = function () {
        triggerScrollIntoView('dashboard-experience')
      }
    }
  }

  const progressSectionElement = document.getElementById('learning-progress-section')
  let dashboardAccessTabsElement = document.querySelector('ul.dashboard-access-tabs')
  let dashboardAccessTabsCount = dashboardAccessTabsElement?.querySelectorAll('li')?.length
  if (!dashboardAccessTabsCount || dashboardAccessTabsCount === 0) {
    // wait for 2 seconds and check again
    await new Promise((resolve) => setTimeout(resolve, 2000))
    dashboardAccessTabsElement = document.querySelector('ul.dashboard-access-tabs')
    dashboardAccessTabsCount = dashboardAccessTabsElement?.querySelectorAll('li')?.length
  }
  if (dashboardAccessTabsCount > 0) {
    console.log('User has active courses.')
    progressSectionElement.classList.remove('hidden')
  } else {
    console.log('User has no active courses.')
  }
}

function generateCetificateContainerTitle(event, visualProps) {
  const title = {
    complete: {
      en: 'Congratulations!',
      de: 'Herzlichen Glückwunsch!'
    },
    halfway: {
      en: 'Your certificate awaits!',
      de: 'Dein Zertifikat warten auf dich!'
    },
    pending: {
      en: 'Your Certificate Awaits!',
      de: 'Dein Zertifikat wartet auf dich!'
    }
  }

  const description = {
    complete: {
      en: 'Receive your certificate now, share your achievements and your newly acquired knowledge.',
      de: 'Erhalte dein Zertifikat, teile deinen Erfolg und dein neu erlangtes Wissen.'
    },
    halfway: {
      en: 'Receive your certificate after completing the Glacier Climate Essentials.',
      de: 'Erhalte dein Zertifikat nach Abschluss der Climate Essentials!'
    },
    pending: {
      en: 'Complete all modules and receive your official Certificate for the Glacier Climate Essentials.',
      de: 'Schließe alle Module ab und erhalte dein offizielles Zertifikat für die Glacier Climate Essentials.'
    }
  }

  let image = visualProps?.image
  if (image && image.startsWith('/img/')) {
    image = INTERNAL_SYSTEM_PATH + image.replace('.webp', '_base.jpeg')
  } else if (image) {
    image = image.replace('.webp', '_base.jpeg')
  } else {
    image = 'https://res.cloudinary.com/df1dbnp0x/image/upload/v1692944345/img/certificate/certificate-blank_base.jpg'
  }

  return `
  <div id="certificate-section" class="mx-auto max-width-1200 der-flex-8p custom-section-top-full pb-8">
    <h3 class="display-text display-text-semibold display-text-xl sm:display-text-lg">
      <span lang="en">${title[event]['en']}</span>
      <span lang="de">${title[event]['de']}</span>
    </h3>
    <p class="natural-text natural-text-md">
      <span lang="en">${description[event]['en']}</span>
      <span lang="de">${description[event]['de']}</span>
    </p>
  </div>
  `
}

function generateCetificateSuspense(event, visualProps, conditionId) {
  let image = visualProps?.image
  if (image && image.startsWith('/img/')) {
    image = INTERNAL_SYSTEM_PATH + image.replace('.webp', '_base.jpeg')
  } else if (image) {
    image = image.replace('.webp', '_base.jpeg')
  } else {
    image = 'https://res.cloudinary.com/df1dbnp0x/image/upload/v1692944345/img/certificate/certificate-blank_base.jpg'
  }

  if (event === 'complete') {
    return `<div class="certificate-container certificate-complete" style="background-image: url('${image}');">
    <a href="/pages/glacier-certification?learnerId=${visualProps.learnerId}&conditionId=${conditionId}" target="_blank" rel="noopener noreferrer">
      <div class="certificate-text">
        <div class="certificate-centered-content">
          <p class="certificate-learner-name certificate-learner-name-min" style="color: ${visualProps.fontColor}">
            ${visualProps.learnerName}
          </p>
        </div>
        <div class="certificate-download-text">Download</div>
      </div>
    </a>
  </div>`
  }

  return `<div class="certificate-container certificate-greyscale-filter" style="background-image: url('${image}');">
        <div class="certificate-text">
          <div class="certificate-centered-content">
            <p class="certificate-learner-name certificate-learner-name-min" style="color: ${visualProps.fontColor}">
              ${visualProps.learnerName}
            </p>
          </div>
          <div class="certificate-download-text">.</div>
        </div>
    </div>`
}

async function checkForCertificate() {
  const certificateContainerSection = document.getElementById('certificate-validate-container')
  const dynamicVideoEmbed = document.getElementById('lxp-intro-video')
  // check for url query param forceUserId for testing
  const urlParams = new URLSearchParams(window.location.search)
  const forceUserId = urlParams.get('forceUserId')
  const forceLicenseId = urlParams.get('forceLicenseId')
  const sandboxMode = urlParams.get('sandboxMode')
  const userId = forceUserId || window.CONF.preload.currentUser.currentUser.id
  let stat = null
  if ((certificateContainerSection || dynamicVideoEmbed) && userId) {
    try {
      let activeLicence = forceLicenseId || window.CONF.preload.currentUser.currentUser.activeLicense
      let primaryLicense = window.CONF.preload.currentUser.clients[0]?.id
      if (!activeLicence) activeLicence = window.CONF.preload.currentUser.allocatedLicenses[0].license?.id
      if (activeLicence === primaryLicense) activeLicence = undefined

      const data = await fetch(
        `${INTERNAL_SYSTEM_PATH}/api/lxp/user/${userId}/dashboardStats?lang=${currentUserLanguage}` +
          (activeLicence ? `&subLicenseId=${activeLicence}` : '') +
          (sandboxMode === 'true' ? '&source=sandbox' : '')
      )
      const json = await data.json()
      let propHtmls = []
      let certPropHtmls = []
      let conditionalPropHtmls = []
      let visualPropsGlobal = null
      let completionStatus = null
      let coursesCompleted = 0
      let showReferralPoppup = 0

      if (json && json.completionData && json.completionData.length > 0) {
        for (const completionData of json.completionData) {
          const visualProps = completionData.displayProps
          if (!visualPropsGlobal) {
            visualPropsGlobal = visualProps
          }

          if (completionData.coursesRequired && completionData.coursesRequired.length > 0) {
            const licencesLenght = completionData.coursesRequired.length
            const coursesCompletedSet = completionData.coursesRequired.filter(
              (course) => course.completed === true
            ).length
            if (coursesCompletedSet === licencesLenght) {
              showReferralPoppup = 'full'
            }
            coursesCompleted = coursesCompleted + coursesCompletedSet
          }

          completionStatus = 'pending'
          const learnerName = visualProps.hideName ? '' : completionData.learnerName
          visualProps.learnerName = learnerName
          visualProps.learnerId = userId
          visualProps.fontColor = visualProps.fontColor || '#FFFFFF'
          let certStatus = 'pending'
          if (completionData.displayProps.bypassValidation) {
            let startTime = Date.now()
            let completedModules
            while (true) {
              completedModules = document.querySelectorAll('.catalog-grid-item__completed')
              if (completedModules.length > 0) {
                certStatus = 'complete'
                break
              } else if (Date.now() - startTime > 2000) {
                break
              }
              await new Promise((resolve) => setTimeout(resolve, 500))
            }
          }
          const html = generateCetificateSuspense(certStatus, visualProps, completionData.conditionId)
          conditionalPropHtmls.push(html)

          if (completionData.userStatus === 'courses_complete_quiz_incomplete') {
            const hiddenQuiz = document.querySelectorAll('.hidden-closing-feedback')
            hiddenQuiz.forEach((quiz) => {
              quiz.style.display = 'block'
            })

            if (stat === null) {
              stat = 1
            }
          } else if (completionData.userStatus !== 'not_started') {
            if (stat === null) {
              stat = 1
            }
          }
        }

        const alreadyShownReferralPopup = localStorage.getItem('referralPopupShown')
        const parsedAlreadyShownReferralPopup = alreadyShownReferralPopup ? JSON.parse(alreadyShownReferralPopup) : []

        if (coursesCompleted >= 2 && showReferralPoppup === 0) {
          if (2 <= coursesCompleted && coursesCompleted <= 5) {
            showReferralPoppup = 2
          } else {
            showReferralPoppup = 6
          }
        }

        if (
          showReferralPoppup &&
          !parsedAlreadyShownReferralPopup.includes(showReferralPoppup) &&
          primaryLicense === '5da504d2-4f23-486c-9083-e4b4fd7d9598'
        ) {
          //strabag
          glacierReferralModalHandler(showReferralPoppup)
          // store in localstorage to prevent multiple popups
          localStorage.setItem(
            'referralPopupShown',
            JSON.stringify([...parsedAlreadyShownReferralPopup, showReferralPoppup])
          )
        }
      }

      if (json && json.certificates && json.certificates.length > 0) {
        for (const certificate of json.certificates) {
          const visualProps = certificate.dataProps.visualProp
          if (!visualPropsGlobal) {
            visualPropsGlobal = visualProps
          }
          if (completionStatus === null) {
            completionStatus = 'complete'
          } else if (completionStatus === 'pending') {
            completionStatus = 'halfway'
          }
          const learnerName = visualProps.hideName ? '' : certificate.dataProps.learnerName
          visualProps.learnerName = learnerName
          visualProps.learnerId = userId
          visualProps.fontColor = visualProps.fontColor || '#FFFFFF'
          const html = generateCetificateSuspense('complete', visualProps, certificate.conditionId)
          certPropHtmls.push(html)
          if (stat === null) {
            stat = 2
          }
        }
      }

      if (
        dynamicVideoEmbed &&
        visualPropsGlobal &&
        visualPropsGlobal.introVideo &&
        visualPropsGlobal.introVideo !== ''
      ) {
        embedWistiaVideo(visualPropsGlobal.introVideo)
      }

      propHtmls = conditionalPropHtmls.concat(certPropHtmls)

      if (certificateContainerSection && propHtmls.length > 0) {
        const certificateContainer = document.createElement('div')
        certificateContainer.innerHTML = propHtmls.join('')
        certificateContainer.classList.add('force-full-width', 'custom-section')
        if (propHtmls.length === 1) {
          certificateContainer.classList.add('single-item')
          const learnerNameMin = certificateContainer.querySelector('.certificate-learner-name-min')
          if (learnerNameMin) {
            learnerNameMin.classList.remove('certificate-learner-name-min')
          }
        } else {
          certificateContainer.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-4')
          if (propHtmls.length % 2 !== 0) {
            const lastItemHtml = propHtmls.pop()
            certificateContainer.innerHTML = propHtmls.join('')
            const lastItemContainer = document.createElement('div')
            lastItemContainer.innerHTML = lastItemHtml
            lastItemContainer.classList.add('col-span-2')
            lastItemContainer
              .querySelector('.certificate-learner-name-min')
              .classList.remove('certificate-learner-name-min')
            certificateContainer.appendChild(lastItemContainer)
          }
        }
        const containerTitle = generateCetificateContainerTitle(completionStatus, visualPropsGlobal)
        certificateContainerSection.innerHTML = containerTitle
        certificateContainerSection.appendChild(certificateContainer)
      }

      if (stat === null) {
        stat = 0
      }

      return stat
    } catch (error) {
      console.log(error)
    }
  }
}

function applyStylesForHasPsuedoClass() {
  const checkHasSupport = window.CSS && CSS.supports && CSS.supports('selector(:has(*))')
  if (!checkHasSupport) {
    const glacierGreengooWidgets = document.querySelectorAll('.bg-glacier-greengoo')
    glacierGreengooWidgets.forEach((widget) => {
      const parentEl = widget.parentElement
      parentEl.style.background =
        'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url("https://glacier-projects.vercel.app/img/brand/backgrounds/background-nature-2.jpeg"), lightgray 50% / cover no-repeat'
      parentEl.style.backgroundSize = 'cover'
      parentEl.style.backgroundPosition = 'center'
    })

    const glacierBlueHazeWidgets = document.querySelectorAll('.bg-glacier-blue-haze')
    glacierBlueHazeWidgets.forEach((widget) => {
      const parentEl = widget.parentElement
      parentEl.style.background =
        'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url("https://res.cloudinary.com/df1dbnp0x/image/upload/v1702445650/img/brand/banner/Climate-Academy_Hero_g5rg7c.jpg"), lightgray 50% / cover no-repeat'
      parentEl.style.backgroundSize = 'cover'
      parentEl.style.backgroundPosition = 'center'
    })

    const oceanWidgets = document.querySelectorAll('.bg-ocean-full')
    oceanWidgets.forEach((widget) => {
      const parentEl = widget.parentElement
      parentEl.style.backgroundColor = 'var(--Ocean)'
    })

    const expanderItems = document.querySelectorAll('.dashboard-access-list-item-expander')

    expanderItems.forEach((item) => {
      item.addEventListener('click', async function () {
        await new Promise((resolve) => setTimeout(resolve, 800))
        applyStylesForHasPsuedoClass()
      })
    })

    const screenWidth = window.innerWidth
    if (screenWidth >= 1024) {
      const dashboardItems = document.querySelectorAll('.dashboard-access-list-item-expansion .columns')
      dashboardItems.forEach((item) => {
        if (item.querySelector('img')) {
          item.style.width = '15%'
        }
        if (item.querySelector('.dashboard-access-list-item__description')) {
          item.style.width = '85%'
        }
      })

      const dashboardRows = document.querySelectorAll('.dashboard-access-list-item-expansion .row .columns')
      dashboardRows.forEach((row) => {
        if (row.querySelector('.dashboard-access-list-item__description')) {
          row.style.display = 'grid'
          row.style.gridTemplateColumns = '3fr 2fr 1fr'
          row.style.gap = '28px'
        }
      })
    } else if (screenWidth >= 768) {
      const dashboardItems = document.querySelectorAll('.dashboard-access-list-item-expansion .columns')
      dashboardItems.forEach((item) => {
        if (item.querySelector('img')) {
          item.style.width = 'auto'
        }
        if (item.querySelector('.dashboard-access-list-item__description')) {
          item.style.width = '75%'
        }
      })

      const dashboardRows = document.querySelectorAll('.dashboard-access-list-item-expansion .row .columns')
      dashboardRows.forEach((row) => {
        if (row.querySelector('.dashboard-access-list-item__description')) {
          row.style.display = 'grid'
          row.style.gridTemplateColumns = '3fr 2fr'
          row.style.gap = '28px'
        }
      })
    }
  }
}

async function courseInformationPageModifier() {
  const path = window.location.pathname.split('/')[1]
  if (path !== 'courses') return

  let startTime = Date.now()
  let container
  let courseTitle
  let courseButton
  let i = 0
  while (true) {
    i++
    container = document.querySelector('.course__detail__container')
    courseTitle = document.querySelector('.course__detail__container .course__detail__content h1')
    courseButton = document.querySelector('.course__detail__container .course__detail__sidebar .btn.btn--primary')

    if (courseButton || Date.now() - startTime > 6000) {
      console.log('course information page modifier found the elements at iteration: ' + i)
      break
    }
    await new Promise((resolve) => setTimeout(resolve, 500))
  }

  const courseInformationHeader = document.createElement('div')
  courseInformationHeader.classList.add('course-information-header')
  courseInformationHeader.classList.add('column')
  courseInformationHeader.classList.add('custom-section-top')

  if (courseTitle) {
    courseTitle.classList.remove('h2')
    courseTitle.classList.add('display-text')
    courseTitle.classList.add('display-text-xl')
    courseTitle.classList.add('sm:display-text-lg')
    courseTitle.classList.add('display-text-semibold')
    courseInformationHeader.appendChild(courseTitle)
  }
  if (courseButton) {
    courseButton.classList.remove('btn--alt')
    courseButton.classList.remove('btn--expand')
    const clonedButton = courseButton.cloneNode(true)
    courseInformationHeader.appendChild(courseButton)

    const courseNavButton = document.createElement('div')
    courseNavButton.classList.add('mobile-footer-nav-bar')
    courseNavButton.appendChild(clonedButton)
    container.appendChild(courseNavButton)
  }

  container.insertBefore(courseInformationHeader, container.firstChild)
}

function toggleAccordion(id, element) {
  const accordion = document.getElementById(`accordion-${id}`)
  if (!accordion) {
    console.log(`accordion-${id} not found`)
    return
  }
  const content = accordion.querySelector('.accordion-content')
  let icons = []
  if (element) {
    icons = element.querySelectorAll('.accordion-icon')
  } else {
    icons = accordion.querySelectorAll('.accordion-icon')
  }

  if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
    content.classList.remove('accordion-hidden')
    content.style.maxHeight = content.scrollHeight + 10 + 'px'
    icons.forEach((icon) => icon.classList.toggle('hidden'))
  } else {
    content.style.maxHeight = '0px'
    setTimeout(() => {
      content.classList.add('accordion-hidden')
    }, 300)
    icons.forEach((icon) => icon.classList.toggle('hidden'))
  }
}

function alertBannerCloser() {
  const alertBox = document.querySelector('.alert-box.success')
  if (alertBox) {
    alertBox.remove()
  }
}

function performAccountsPageTransformations() {
  console.log('performing accounts page transformations')
  // if dom contains input of type email
  const personalSection = document.getElementById('account-section-0')
  if (personalSection) {
    const lastNameInput = personalSection.querySelector('input#lastname')
    // Select the grandparent element, assuming it's a form
    const parentForm = lastNameInput.closest('form')

    // Select the submit button within the form
    const submitButton = parentForm.querySelector('button')
    const validateSpan = submitButton.querySelector('span')
    if (validateSpan) return
    const appendText = `<span lang="de">Änderungen speichern</span><span lang="en">Save changes</span>`

    // Find the second script tag (it's assumed to be the one after the first script tag)
    let firstScriptTag = submitButton.querySelector('script')
    let secondScriptTag = firstScriptTag.nextElementSibling

    // Remove all nodes between the two script tags
    while (firstScriptTag.nextSibling !== secondScriptTag) {
      submitButton.removeChild(firstScriptTag.nextSibling)
    }

    // Insert the new content
    secondScriptTag.insertAdjacentHTML('beforebegin', appendText)
  }

  const accountSection = document.getElementById('account-section-1')
  if (accountSection) {
    const emailInput = accountSection.querySelector('input#email')
    emailInput.setAttribute('placeholder', currentUserLanguage === 'de' ? 'Neue E-Mail-Adresse' : 'New E-Mail-Address')

    // Select the grandparent element, assuming it's a form
    const parentForm = emailInput.closest('form')

    // Select the submit button within the form
    const submitButton = parentForm.querySelector('button')
    const validateSpan = submitButton.querySelector('span')
    if (validateSpan) return
    const appendText = `<span lang="de">E-Mail Adresse ändern</span><span lang="en">Change email address</span>`

    // Find the second script tag (it's assumed to be the one after the first script tag)
    let firstScriptTag = submitButton.querySelector('script')
    let secondScriptTag = firstScriptTag.nextElementSibling

    // Remove all nodes between the two script tags
    while (firstScriptTag.nextSibling !== secondScriptTag) {
      submitButton.removeChild(firstScriptTag.nextSibling)
    }

    // Insert the new content
    secondScriptTag.insertAdjacentHTML('beforebegin', appendText)

    // select all inputs of type password
    const passwordInputs = accountSection.querySelectorAll('input[type="password"]')
    passwordInputs.forEach((input) => {
      input.setAttribute(
        'placeholder',
        currentUserLanguage === 'de' ? 'Bestätige mit deinem Passwort' : 'Confirm with your password'
      )
    })
  }
}

function accountsPageModifiers() {
  if (window.location.href.includes('/learn/account')) {
    performAccountsPageTransformations()
    // const tabs = document.querySelectorAll('.dashboard-account-tab')
    // if (tabs.length === 0) return
    // tabs.forEach((tab) => {
    //   tab.addEventListener('click', alertBannerCloser)
    // })
  }
}

function coursePageSidebarHideHandler() {
  const activeSidebar = document.querySelector('.learner__container--toggled')
  if (activeSidebar && window.matchMedia('(max-width: 768px)').matches) {
    const toggleButton = document.querySelector('.learner__container__toggle button')
    if (toggleButton) {
      toggleButton.click()
    }
  }
}

function coursePageModifiers() {
  if (window.location.href.includes('/learn/course')) {
    coursePageSidebarHideHandler()
  }
}

function watchLanguageChange() {
  if (window.CONF?.preload?.currentUser.currentUser.lang && !languageWatcherActive) {
    watchNestedProperty(window.CONF.preload.currentUser.currentUser, 'lang', (newValue) => {
      console.log('Language watcher changed to:', newValue)
      const langStylesheetDE = document.getElementById('lang-stylesheet-de').sheet
      const langStylesheetEN = document.getElementById('lang-stylesheet-en').sheet
      if (langStylesheetDE && langStylesheetEN) {
        if (newValue === 'de') {
          langStylesheetDE.disabled = false
          langStylesheetEN.disabled = true
        } else {
          langStylesheetDE.disabled = true
          langStylesheetEN.disabled = false
        }
      }
    })

    languageWatcherActive = true
  } else if (!window.CONF?.preload?.currentUser.currentUser.lang) {
    console.log('Language static changed to:', currentUserLanguage)
    const langStylesheetDE = document.getElementById('lang-stylesheet-de').sheet
    const langStylesheetEN = document.getElementById('lang-stylesheet-en').sheet
    if (currentUserLanguage === 'de') {
      langStylesheetDE.disabled = false
      langStylesheetEN.disabled = true
    } else {
      langStylesheetDE.disabled = true
      langStylesheetEN.disabled = false
    }
  }
}

function showUnderConstructionPage() {
  const userEmail = window.CONF?.preload?.currentUser?.currentUser?.email
  if (
    (!userEmail || (userEmail && !userEmail.includes('@glacier.eco'))) &&
    !window.location.href.includes('/pages/maintenance-mode')
  ) {
    window.location.href = '/pages/maintenance-mode'
  }
}

async function catalogLearningPathTransformations() {
  const learningPathContainer = document.querySelector('.catalog-learning-paths')
  if (learningPathContainer) {
    let learningPathCards = learningPathContainer.querySelectorAll('.catalog-item')
    let i = 0
    while (learningPathCards.length === 0 && i < 10) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      learningPathCards = learningPathContainer.querySelectorAll('.catalog-item')
      i++
    }
    learningPathCards.forEach((card) => {
      const buttonText = card.querySelector('.btn.btn--link.btn--right.btn--primary').innerText.trim()
      const cardHref = card.getAttribute('href')
      if (!buttonText.includes('Learning Path') && !cardHref.includes('/learning-paths/')) {
        card.parentElement.style.display = 'none'
      }
    })
    learningPathContainer.style.display = 'block'
  }
}

async function checkForUpcomingLivestream() {
  const panoramaId = window.CONF?.preload?.currentUser?.currentUser?.client?.id
  const licenseId = window.CONF?.preload?.currentUser?.currentUser?.activeLicense
  const response = await fetch(
    `${INTERNAL_SYSTEM_PATH}/api/lxp/client/${panoramaId}/fetchClientProperties?subLicenseId=${licenseId}`
  )
  const data = await response.json()
  if (data?.value?.liveStreamDate && new Date(data.value.liveStreamDate) <= new Date()) {
    const livestreamNavLink = document.getElementById('nav-live-stream')
    const livestreamNavDrop = document.getElementById('nav-live-stream-dropdown')

    if (livestreamNavLink) {
      livestreamNavLink.classList.add('lg:inline-flex')
    }

    if (livestreamNavDrop) {
      livestreamNavDrop.classList.remove('hidden')
      livestreamNavDrop.classList.add('block')
      livestreamNavDrop.classList.add('lg:hidden')
    }

    const redirect = localStorage.getItem('livestream-redirect')
    if (!(redirect === 'true')) {
      localStorage.setItem('livestream-redirect', 'true')
      window.location.href = '/pages/live-stream'
    }
  }
}

/**
 * Referral Systems
 */

function glacierReferralModalHandler(completedModules) {
  let modal = document.createElement('div')
  modal.className = 'modal'
  modal.id = 'myModal'
  modal.innerHTML = `
    <div id="modal" class="glacier-modal">
      <div class="glacier-modal-frame">
        <div class="glacier-modal-content">
          <button id="closeModal" onclick="closeGlacierModal()" class="close-btn">×</button>
          <div class="text-center">
                <img 
                  src="https://glacier-projects.vercel.app/img/brand/logos/03_glacier_climate_academy/glacier_logo_climateacademy_4C_darkgreen.png"
                  alt="Glacier Logo"
                  class="mt-2 mb-5"
                  style="max-width: 220px;"
                >
          </div>
          <h2 class="display-text display-text-lg sm:display-text-md display-text-semibold text-center my-4">Empfehle die Climate Academy an Kolleg*innen!</h2>
          <p class="natural-text natural-text-md text-center mb-5">Gib hier Email-Adressen von Kolleg*innen ein um ihnen diese Weiterbildung zu empfehlen. Gemeinsam fürs Klima</p>
          <div class="md:flex gap-2">
              <input type="text" class="glacier-modal-input" id="referral-invitation-emails"  placeholder="Email Adressen (mit Komma getrennt)">
              <button 
                  onclick="processReferralInvitationRequest('${completedModules}')"
                  class="btn btn--primary btn--wide-phone"
              >
                  Empfehlen
              </button>
          </div>
        </div>
      </div>
    </div>
  `

  document.body.appendChild(modal)
  modal.style.visibility = 'visible'
  modal.style.opacity = '1'

  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeGlacierModal()
    }
  })
}

function closeGlacierModal(exitIntend) {
  let modal = document.getElementById('myModal')
  modal.style.visibility = 'hidden'
  modal.style.opacity = '0'
  modal.addEventListener('transitionend', function () {
    modal.parentNode.removeChild(modal)
  })
}

async function processReferralInvitationRequest(completedModules) {
  updateMessage('Sending invitations...')
  showLoading()
  let emails = document.getElementById('referral-invitation-emails').value
  const currentUser = window.CONF.preload.currentUser.currentUser.id
  try {
    const response = await fetch(`${INTERNAL_SYSTEM_PATH}/api/lxp/user/${currentUser}/referralInvitation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        emails: emails.split(','),
        referrer: currentUser,
        completedModules: completedModules
      })
    })
    const data = await response.json()
    console.log(data)
    updateMessage(data.message || 'Invitations sent successfully')
  } catch (error) {
    updateMessage('Error sending invitations')
  }
  closeGlacierModal()
  hideLoading()
}

function checkForReferralInvitation() {
  const urlParams = new URLSearchParams(window.location.search)
  const glacierInvitationId = urlParams.get('glacierInvitationId')
  if (glacierInvitationId) {
    localStorage.setItem('glacierInvitationId', glacierInvitationId)
    localStorage.setItem('glacierInvitationValidated', 'false')
  }
}

async function updateReferralAcceptance() {
  const glacierInvitationId = localStorage.getItem('glacierInvitationId')
  const glacierInvitationValidated = localStorage.getItem('glacierInvitationValidated')
  if (glacierInvitationId && glacierInvitationValidated === 'false') {
    try {
      const response = await fetch(
        `${INTERNAL_SYSTEM_PATH}/api/lxp/user/validateReferralInvitation?referralId=${glacierInvitationId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const data = await response.json()
      if (data.message === 'success') {
        localStorage.setItem('glacierInvitationValidated', 'true')
      }
    } catch (error) {
      console.log('Error updating referral acceptance')
    }
  }
}

/**
 * iFrame actions
 */

function iframeActivatePostMessage() {
  document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('message', function (event) {
      if (event.data === 'requestUserId') {
        const iframeWindow = document.querySelector('.sco--iframe')
        if (iframeWindow) {
          const iframeContentWindow = iframeWindow.contentWindow
          const messageData = {
            userId: window.CONF.preload.currentUser.currentUser.id,
            course: window.location.pathname
          }
          iframeContentWindow.postMessage(messageData, '*')
        }
      }
    })
  })
}

function iframeActiveWindowSizeListener() {
  window.addEventListener('message', (event) => {
    if (event.origin !== INTERNAL_SYSTEM_PATH) {
      console.log('iframeActiveWindowSizeListener: Origin not allowed')
      return
    }

    if (event.data.type === 'setIframeHeight') {
      const iframe = document.getElementById('internal-glacier-iframe')
      iframe.style.height = `${event.data.height}px`
    }
  })
}

async function addOpenInNewTabButtonForPDF(waitTime) {
  if (waitTime) {
    await new Promise((resolve) => setTimeout(resolve, waitTime))
  }
  const pdfIframe = document.getElementById('pdf-viewer')
  const button = document.getElementById('pdf-open-in-new-tab')
  if (pdfIframe && !button) {
    pdfIframe.style.height = '500px'
    const pdfUrl = pdfIframe.getAttribute('src')
    const newTabButton = document.createElement('a')
    newTabButton.setAttribute('id', 'pdf-open-in-new-tab')
    newTabButton.classList.add('btn')
    newTabButton.classList.add('btn--secondary')
    newTabButton.classList.add('btn--fitcontent')
    newTabButton.classList.add('mt-4')
    newTabButton.setAttribute('href', pdfUrl)
    newTabButton.setAttribute('target', '_blank')
    newTabButton.setAttribute('rel', 'noopener noreferrer')
    newTabButton.innerHTML = `
    <span lang="de">Dokument in neuem Tab öffnen</span>
    <span lang="en">Open document in new tab</span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.9498 7.04999L7.0498 16.95" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 7L16.95 7.049L17 14" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    `
    pdfIframe.insertAdjacentElement('afterend', newTabButton)
  }
}

async function resizeIframe(obj) {
  setInterval(async () => {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px'
  }, 1000)
}

/**
 * Legacy Functions
 */

function checkIfEmailConfirmationVisit() {
  var url = new URL(window.location.href)
  if (url.searchParams.has('confirm-email')) {
    var pageContainer = document.querySelector('.session__form')
    if (pageContainer) {
      var h2 = pageContainer.querySelector('h2')
      var p = pageContainer.querySelector('p')
      var input = pageContainer.querySelector('input[type="submit"]')
      if (url.searchParams.has('de')) {
        h2.innerHTML = 'Bitte bestätige deine E-Mail-Adresse'
        p.innerHTML = 'Gib deine E-Mail-Adresse unten ein und wir senden dir einen Link, um dein Passwort zu setzen.'
        input.setAttribute('value', 'Bestätigen')
      } else {
        h2.innerHTML = 'Please confirm your email address'
        p.innerHTML = 'Enter your email below and we will send you a link to set your password.'
        input.setAttribute('value', 'Confirm')
      }
    }
  }
}

function updateSignInPageLayout() {
  var pageContainer = document.querySelector('.session')
  if (!pageContainer || pageContainer.classList.contains('refresh-validator')) {
    return
  }
  pageContainer.classList.add('refresh-validator')

  var footerLogo =
    'https://glacier-projects.vercel.app/img/brand/logos/01_glacier_logo/horizontal/glacier_logo_horizontal_1C_white.png'
  var height = '2rem'
  var visibility = 'hidden'
  switch (true) {
    case window.location.hostname.includes('a1-'):
      footerLogo = 'https://res.cloudinary.com/df1dbnp0x/image/upload/v1692944343/img/clients/logos/a1_small.png'
      height = '5rem'
      visibility = 'visible'
      break
    case window.location.hostname.includes('firstclimate'):
      footerLogo =
        'https://res.cloudinary.com/df1dbnp0x/image/upload/v1692944343/img/clients/logos/firstClimate_wide.png'
      height = '2.5rem'
      visibility = 'visible'
      break
    case window.location.href.includes('generali-sme-entreprise'):
      footerLogo =
        'https://res.cloudinary.com/df1dbnp0x/image/upload/v1693311948/img/clients/logos/sme_enterprize_wide.png'
      height = '3rem'
      visibility = 'visible'
      break
  }

  var footerContainer = document.createElement('footer')
  footerContainer.className = 'py-6'
  footerContainer.innerHTML = `
    <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
      <div class="grid items-center grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
        <div class="md:order-1">
          <img
            class="w-auto"
            src="${footerLogo}"
            alt="Logo"
            style="height: ${height}; visibility: ${visibility}"
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
  
        <div class="col-span-2 md:col-span-1 md:order-2 pangia-text-force">
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

function changeGermanTextsOnPref() {
  var pageTitle = document.querySelector('.session__form h2')
  if (pageTitle && pageTitle.innerText === 'Passwort zurücksetzen') {
    var formTitle = document.querySelector('.session__form p')
    if (formTitle.innerHTML === 'Please enter your new password below.') {
      formTitle.innerHTML = 'Bitte erstelle dein neues Passwort.'
      var newPassword = document.querySelector('input[placeholder="New Password"]')
      if (newPassword) {
        newPassword.setAttribute('placeholder', 'Neues Passwort')
      }
      var newPasswordLabel = document.querySelector('label[for="password"]')
      if (newPasswordLabel) {
        newPasswordLabel.firstChild.data = 'Neues Passwort'
      }
      var newPasswordConfirm = document.querySelector('input[placeholder="Confirm New Password"]')
      if (newPasswordConfirm) {
        newPasswordConfirm.setAttribute('placeholder', 'Neues Passwort bestätigen')
      }
      var newPasswordConfirmLabel = document.querySelector('label[for="password-confirm"]')
      if (newPasswordConfirmLabel) {
        newPasswordConfirmLabel.firstChild.data = 'Neues Passwort bestätigen'
      }
    }
  }
}

function authPageModifiers() {
  if (
    window.location.href.includes('/learn/sign_in') ||
    window.location.href.includes('/learn/sign_out') ||
    window.location.href.includes('/learn/register') ||
    window.location.href.includes('/learn/redeem') ||
    window.location.href.includes('/learn/reset_password') ||
    window.location.href.includes('/learn/forgot')
  ) {
    console.log('auth page')
    checkIfEmailConfirmationVisit()
    updateSignInPageLayout()
    changeGermanTextsOnPref()
    return true
  }
}

function trackCodeRedemptions() {
  console.log('tracking code redemptions')
  const submitButton = document.querySelector('.widget--redemption-form .btn.btn--primary.btn--expand')

  submitButton.addEventListener('click', async function () {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    let emailInput = document.querySelector('input[placeholder="E-Mail-Adresse"]')
    if (!emailInput) {
      emailInput = document.querySelector('input[placeholder="Email Address"]')
    }
    const data = {
      email: emailInput?.value || 'unknown',
      ...Object.fromEntries(urlParams)
    }
    await fetch('https://glacier-projects.vercel.app/api/webhook/lxp_redeem', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'glacier-projects'
      },
      body: JSON.stringify(data)
    })
  })
}

function performRedemptionPageTransformations() {
  console.log('performing redemption page transformations')
  const footer = document.querySelector('.footer')
  if (footer) {
    footer.remove()
  }
  const container = document.querySelector('.container')
  const session = document.querySelector('.session')
  if (container && !session) {
    container.classList.add('session')
    let homeContent = document.querySelector('.home__content')
    if (homeContent) {
      homeContent.style.display = 'flex'
      homeContent.style.minHeight = '93vh'
    }
    let widget = document.querySelector('.widget--redemption-form')
    if (widget) {
      const div = widget.querySelector('div')
      div.classList.add('session__container')
      div.style.padding = '3rem 2rem'
      div.style.margin = '0 auto'

      const heading = div.querySelector('div')
      heading.innerHTML = `
          <h2 class="h2 widget__title">
            <span lang="de">Registrieren</span>
            <span lang="en">Register</span>
          </h2>`

      const logo = document.createElement('div')
      logo.classList.add('company__beta-logo')
      div.prepend(logo)

      const alreadyMember = div.querySelector('.already-member')
      if (alreadyMember) {
        alreadyMember.remove()
      }

      const subtitle = div.querySelector('.widget__subtitle')
      if (subtitle) {
        subtitle.remove()
      }

      const hr = div.querySelector('hr')
      if (hr) {
        hr.remove()
      }

      const form = div.querySelectorAll('.medium-6')
      form.forEach((form) => {
        form.classList.remove('medium-6')
        form.classList.remove('small-6')
        form.style.maxWidth = '600px'
        form.style.padding = '0 2rem'
      })

      const rowCollapses = div.querySelectorAll('.row.collapse')
      rowCollapses.forEach((rowCollapse) => {
        if (
          rowCollapse.innerText.includes('Add Another Code') ||
          rowCollapse.innerText.includes('Weiteren Code hinzufügen')
        ) {
          rowCollapse.remove()
        }
      })

      const nameInputs = div.querySelectorAll('.small-6.name-input')
      nameInputs.forEach((nameInput) => {
        nameInput.classList.remove('small-6')
        nameInput.classList.remove('name-input')
      })

      let row = div.querySelector('.medium-4.columns.text-right')
      let formSubmit = row.parentNode
      const column1 = formSubmit.querySelector('.medium-8')
      column1.style.width = '100%'
      column1.style.marginBottom = '1rem'
      column1.style.marginTop = '1rem'

      const column2 = formSubmit.querySelector('.medium-4')
      column2.style.width = '100%'
      column2.style.marginBottom = '1.5rem'
      column2.style.marginTop = '1rem'

      const button = column2.querySelector('button')
      button.style.maxWidth = '200px'
      button.style.margin = 'auto'

      const column3 = document.createElement('div')
      column3.style.width = '100%'
      column3.innerHTML = `
          <p style="text-align: center;">
            <span lang="de">Bereits Mitglied? </span>
            <span lang="en">Already a member? </span>
            <a href="/learn/sign_in" class="btn btn--link btn--inherit-font underline">
              <span>Login</span>
            </a>
          </p>`
      formSubmit.append(column3)

      const inputs = div.querySelectorAll('input[type=text], input[type=email], input[type=password]')
      inputs.forEach((input) => {
        let currentPlaceholder = input.getAttribute('placeholder')
        if (currentPlaceholder === 'Password Confirmation') {
          currentPlaceholder = 'Confirm Password'
        }
        if (currentPlaceholder === 'Passwortbestätigung') {
          currentPlaceholder = 'Passwort bestätigen'
        }
        input.setAttribute('placeholder', currentPlaceholder + '*')
      })
    }
  }
}

async function performDelayedTransformations() {
  console.log('performing delayed transformations')
  let rowCollapses = document.querySelectorAll('.row.collapse')
  let target = null
  while (!target) {
    await new Promise((resolve) => setTimeout(resolve, 500))
    rowCollapses = document.querySelectorAll('.row.collapse')
    rowCollapses.forEach((rowCollapse) => {
      if (rowCollapse.innerText.includes('Validate') || rowCollapse.innerText.includes('Überprüfen')) {
        target = rowCollapse
        const inputContainer = target.querySelector('.medium-8')
        if (inputContainer) {
          inputContainer.classList.remove('medium-8')
          inputContainer.classList.add('medium-10')
        }

        const buttonContainer = target.querySelector('.medium-4')
        if (buttonContainer) {
          buttonContainer.classList.remove('medium-4')
          buttonContainer.classList.add('medium-2')
        }

        const inputs = target.querySelectorAll('input[type=text], input[type=email], input[type=password]')
        inputs.forEach((input) => {
          let currentPlaceholder = input.getAttribute('placeholder')
          if (currentPlaceholder === 'Den Code hier eingeben') {
            currentPlaceholder = 'Registrierungscode'
          } else if (currentPlaceholder === 'Enter Code Here') {
            currentPlaceholder = 'Enter Registration Code Here'
          }

          input.setAttribute('placeholder', currentPlaceholder + '*')
        })

        const button = target.querySelector('button')
        button.style.height = '1.5rem'
        button.style.marginTop = '0.5rem'
        button.style.padding = '0'
        button.style.fontSize = '.7rem'
        button.style.textTransform = 'uppercase'
      }
    })
  }
}

function redeemPageModifiers() {
  if (window.location.href.includes('/redeem')) {
    console.log('redeem page')
    trackCodeRedemptions()
    performRedemptionPageTransformations()
    checkForReferralInvitation()
    performDelayedTransformations()
    return true
  }
}

async function performRegistrationPageTransformations() {
  console.log('performing registration page transformations')
  let widget = document.querySelector('.widget--registration-form')
  let timeoutId
  const timeout = 3000 // 3 seconds
  const interval = 100 // Check every 100ms
  const startTime = Date.now()

  while (!widget && Date.now() - startTime < timeout) {
    await new Promise((resolve) => {
      timeoutId = setTimeout(resolve, interval)
    })
    widget = document.querySelector('.widget--registration-form')
  }

  clearTimeout(timeoutId)

  const footer = document.querySelector('.footer')
  if (footer) {
    footer.remove()
  }
  const container = document.querySelector('.container')
  const session = document.querySelector('.session')
  if (container && !session) {
    container.classList.add('session')
    let homeContent = document.querySelector('.home__content')
    if (homeContent) {
      homeContent.style.display = 'flex'
      homeContent.style.minHeight = '93vh'
    }

    if (widget) {
      const div = widget.querySelector('div')
      div.classList.add('session__container')
      div.style.padding = '3rem 2rem'
      div.style.margin = '0 auto'

      const alreadyMember = div.querySelector('.text-centered')
      if (alreadyMember) {
        alreadyMember.remove()
      }

      const logo = document.createElement('div')
      logo.classList.add('company__beta-logo')
      div.prepend(logo)

      const nameInputs = div.querySelectorAll('.small-6.columns')
      nameInputs.forEach((nameInput) => {
        nameInput.classList.remove('small-6')
      })

      const form = div.querySelector('.small-offset-3')
      const formParent = form.parentNode
      form.classList.remove('small-offset-3')
      form.classList.remove('small-6')
      form.style.maxWidth = '600px'
      form.style.padding = '0 2rem'
      formParent.style.margin = 'auto'

      let row = div.querySelector('.row')
      row = row.querySelector('.row')
      row = row.querySelectorAll('.row')
      let formSubmit = row[1]
      const column1 = formSubmit.querySelector('.medium-8')
      column1.style.width = '100%'
      column1.style.marginBottom = '1rem'
      column1.style.marginTop = '1rem'

      const column2 = formSubmit.querySelector('.medium-4')
      column2.style.width = '100%'
      column2.style.marginBottom = '1.5rem'
      column2.style.marginTop = '1rem'

      const button = column2.querySelector('button')
      button.style.maxWidth = '200px'
      button.style.margin = 'auto'

      const column3 = document.createElement('div')
      column3.style.width = '100%'
      column3.innerHTML = `
          <p style="text-align: center;">
          <span lang="de">Bereits Mitglied? </span>
            <span lang="en">Already a member? </span>
            <a href="/learn/sign_in" class="btn btn--link btn--inherit-font underline">
              <span>Login</span>
            </a>
          </p>`
      formSubmit.append(column3)

      const inputs = div.querySelectorAll('input[type=text], input[type=email], input[type=password]')
      inputs.forEach((input) => {
        let currentPlaceholder = input.getAttribute('placeholder')
        if (currentPlaceholder === 'Password Confirmation') {
          currentPlaceholder = 'Confirm Password'
        }
        if (currentPlaceholder === 'Passwortbestätigung') {
          currentPlaceholder = 'Passwort bestätigen'
        }
        input.setAttribute('placeholder', currentPlaceholder + '*')
      })
    }
  }
}

function registerPageModifiers() {
  if (window.location.href.includes('/register')) {
    console.log('register page')
    performRegistrationPageTransformations()
  }
}
