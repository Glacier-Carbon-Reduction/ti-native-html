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
  var englishTitleElement = document.getElementById('custom-dashboard-title')
  var germanTitleElement = document.getElementById(
    'custom-dashboard-title-german'
  )
  if (!englishTitleElement || !userName || userName == '') {
    return
  }

  englishTitleElement.innerHTML =
    'Welcome ' + userName.trim().split(' ')[0] + '!'
  germanTitleElement.innerHTML =
    'Willkommen ' + userName.trim().split(' ')[0] + '!'
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

function updateCourseResumeAnchorTags() {
  const dashboardContainer = document.querySelector('.dashboard-access')
  if (dashboardContainer) {
    const anchorTags = dashboardContainer.querySelectorAll(
      'a[href^="/learn/course/"]'
    )
    anchorTags.forEach((anchorTag) => {
      const href = anchorTag.getAttribute('href')
      const courseName = href.substring('/learn/course/'.length)

      anchorTag.setAttribute('href', '/courses/' + courseName)
    })
  }
}

function openCertificatesInNewWindow() {
  var statusCheck = document.querySelector('.custom_certificate_update')
  var dashboardElement = document.querySelector('.dashboard-access-list-item')
  if (statusCheck || !dashboardElement) {
    return
  }
  var certificates = document.querySelectorAll(
    '.dashboard-access-list-item .btn--primary'
  )
  certificates.forEach((certificate) => {
    if (certificate.href.includes('/learn/certificates/')) {
      certificate.setAttribute('target', '_blank')
    }
    certificate.classList.add('custom_certificate_update')
  })
}

/**
 * Sign in Page
 */

function updateSignInPageLayout() {
  var pageContainer = document.querySelector('.session')
  pageContainer.classList.add('refresh-validator')

  var footerLogo =
    'https://glacier-projects.vercel.app/img/brand/logos/01_glacier_logo/horizontal/glacier_logo_horizontal_1C_white.png'
  var height = '2rem'
  switch (true) {
    case window.location.hostname.includes('a1-'):
      footerLogo =
        'https://res.cloudinary.com/df1dbnp0x/image/upload/v1692944343/img/clients/logos/a1_small_elpmzk.png'
      height = '5rem'
      break
    case window.location.hostname.includes('firstclimate'):
      footerLogo =
        'https://res.cloudinary.com/df1dbnp0x/image/upload/v1692944343/img/clients/logos/firstClimate_wide_wrlmnp.png'
      height = '2.5rem'
      break
    case window.location.href.includes('generali-sme-entreprise'):
      footerLogo =
        'https://res.cloudinary.com/df1dbnp0x/image/upload/v1693311948/img/clients/logos/sme_enterprize_wjmsgq.png'
      height = '2.5rem'
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
            style="height: ${height}"
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

function changeGermanTextsOnPref() {
  var pageTitle = document.querySelector('.session__form h2')
  if (pageTitle && pageTitle.innerText === 'Passwort zurücksetzen') {
    var formTitle = document.querySelector('.session__form p')
    if (formTitle.innerHTML === 'Please enter your new password below.') {
      formTitle.innerHTML = 'Bitte erstelle dein neues Passwort.'
      var newPassword = document.querySelector(
        'input[placeholder="New Password"]'
      )
      if (newPassword) {
        newPassword.setAttribute('placeholder', 'Neues Passwort')
      }
      var newPasswordLabel = document.querySelector('label[for="password"]')
      if (newPasswordLabel) {
        newPasswordLabel.firstChild.data = 'Neues Passwort'
      }
      var newPasswordConfirm = document.querySelector(
        'input[placeholder="Confirm New Password"]'
      )
      if (newPasswordConfirm) {
        newPasswordConfirm.setAttribute(
          'placeholder',
          'Neues Passwort bestätigen'
        )
      }
      var newPasswordConfirmLabel = document.querySelector(
        'label[for="password-confirm"]'
      )
      if (newPasswordConfirmLabel) {
        newPasswordConfirmLabel.firstChild.data = 'Neues Passwort bestätigen'
      }
    }
  }
}

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
        p.innerHTML =
          'Gib deine E-Mail-Adresse unten ein und wir senden dir einen Link, um dein Passwort zu setzen.'
        input.setAttribute('value', 'Bestätigen')
      } else {
        h2.innerHTML = 'Please confirm your email address'
        p.innerHTML =
          'Enter your email below and we will send you a link to set your password.'
        input.setAttribute('value', 'Confirm')
      }
    }
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

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

async function updatePageHeader() {
  var userAuth = getCookie('authTokenExpires')
  var mainGroup = document.querySelector('.container')
  if (window.location.href.includes('/learn/course/')) {
    mainGroup = document.querySelector('.course__container')
  }
  var defaultHeader = document.getElementsByClassName('header')
  var refreshValidator = document.querySelector('.refresh-validator')
  if (!(defaultHeader && defaultHeader[0]) || refreshValidator) {
    return
  }

  var userName = localStorage.getItem('userName')
  if ((!userName || userName == '') && window.location.pathname === '/') {
    await new Promise((r) => setTimeout(r, 1000))
  }

  var avatar = defaultHeader[0].querySelector('.dashboard-header__avatar')
  var userName = defaultHeader[0].querySelector('.dashboard-header__name')
  if (avatar && userName) {
    localStorage.setItem('avatar', avatar.innerHTML)
    var setUserName = userName.innerText.trim()
    if (setUserName.includes('generated')) {
      localStorage.setItem('userName', ' ')
    } else {
      localStorage.setItem('userName', userName.innerText.trim())
    }
  }

  var currentLanguage = localStorage.getItem('sys_language')
  var userLicences = window.CONF.preload.currentUser.allocatedLicenses
  var multiLicence = userLicences.length > 1
  avatar = localStorage.getItem('avatar')
  userName = localStorage.getItem('userName')

  var extraClass = ''
  if (window.location.href.includes('/learn/dashboard')) {
    extraClass = 'dashboard'
  } else if (window.location.href.includes('/support')) {
    extraClass = 'support'
  } else if (window.location.href.includes('learn/license')) {
    extraClass = 'licence'
  }

  var checkIfMobileDevice = isMobileDevice()
  var coursePage = window.location.href.includes('/learn/course/')

  var newHeader = document.createElement('header')
  newHeader.className = 'pb-5 pt-5 bg-glacier-darkblue-600 refresh-validator'
  newHeader.innerHTML = `
  ${
    coursePage
      ? `
<div class="fullscreen-overlay">
  <div>
    <p>
      ${
        currentLanguage === 'de'
          ? 'Für ein besseres Lernerlebnis, dreh dein<br/>Gerät ins Querformat.'
          : 'Please rotate your device to landscape mode for a<br/>better learning experience'
      }
    </p>
    <img
      style="width: 50%; margin: 0 auto;"
      src="https://glacier-projects.vercel.app/img/props/phone_flipp.gif">
  </div>
</div>`
      : ''
  }
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <nav
        x-data="{
          open: false,
          toggle() {
              if (this.open) {
                  return this.close();
              }
              this.$refs.button.focus();
              this.open = true;
          },
          close(focusAfter) {
              if (! this.open){
                return;
              }
              this.open = false;
              focusAfter && focusAfter.focus();
          }
      }"
      x-on:keydown.escape.prevent.stop="close($refs.button)"
      x-on:focusin.window="! $refs.panel.contains($event.target) && close()"
      x-id="['dropdown-button-mobile']"
      class="flex items-center justify-between h-16 lg:h-20"
      style="font-weight: lighter !important"
    >
      <div class="flex-shrink-0">
        <a href="${
          userAuth ? '/learn/dashboard' : '/'
        }" title="Glacier Home" class="flex">
          <img
            class="w-auto h-16 lg:h-20 hidden md:flex"
            src="https://glacier-projects.vercel.app/img/brand/logos/03_glacier_climate_academy/glacier_logo_climateacademy_1C_white.png"
            alt="Glacier Logo"
          />
          <img
            class="w-auto h-16 lg:h-20 inline-flex md:hidden"
            src="https://glacier-projects.vercel.app/img/brand/logos/03_glacier_climate_academy/glacier_logo_climateacademy_beta_mini.png"
            alt="Glacier Logo"
          />
        </a>
      </div>

      <div class="lg:flex lg:items-center lg:ml-auto lg:space-x-10">
      ${
        multiLicence
          ? `<a
              href="/learn/license"
              title="${
                currentLanguage === 'de'
                  ? 'Programm wählen'
                  : 'Select Program'
              }"
              class="${
                userAuth || !checkIfMobileDevice ? 'hidden' : 'inline-flex'
              } lg:inline-flex text-base items-center text-white transition-all duration-200 hover-text-glacier-darkgreen-400 gap-3 ${
              extraClass === 'licence' ? 'font-medium' : ''
            }"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 46 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M43 26.3H25C24.0611 26.3 23.3 27.0611 23.3 28V46C23.3 46.9389 24.0611 47.7 25 47.7H43C43.9389 47.7 44.7 46.9389 44.7 46V28C44.7 27.0611 43.9389 26.3 43 26.3ZM21 1.3H9C8.06112 1.3 7.3 2.06112 7.3 3V15C7.3 15.9389 8.06112 16.7 9 16.7H21C21.9389 16.7 22.7 15.9389 22.7 15V3C22.7 2.06112 21.9389 1.3 21 1.3ZM10 30.3H3C2.06112 30.3 1.3 31.0611 1.3 32V39C1.3 39.9389 2.06112 40.7 3 40.7H10C10.9389 40.7 11.7 39.9389 11.7 39V32C11.7 31.0611 10.9389 30.3 10 30.3ZM6 3C6 1.34315 7.34315 0 9 0H21C22.6569 0 24 1.34315 24 3V15C24 16.6569 22.6569 18 21 18H9C7.34315 18 6 16.6569 6 15V3ZM22 28C22 26.3431 23.3431 25 25 25H43C44.6569 25 46 26.3431 46 28V46C46 47.6569 44.6569 49 43 49H25C23.3431 49 22 47.6569 22 46V28ZM3 29C1.34315 29 0 30.3431 0 32V39C0 40.6569 1.34315 42 3 42H10C11.6569 42 13 40.6569 13 39V32C13 30.3431 11.6569 29 10 29H3Z" fill="#F1F1F1"/>
              </svg>
              <span style="font-size: 1.1rem !important; letter-spacing: 0.025em; ${
                extraClass === 'licence'
                  ? 'font-weight: normal !important; border-bottom: 2px solid #6DD4AD; padding-bottom: 2px !important;'
                  : ''
              }">
              ${
                currentLanguage === 'de'
                  ? 'Programm wählen'
                  : 'Select Program'
              }
              </span>
            </a>`
          : ''
      }
        
        <a
          href="${userAuth ? '/learn/dashboard' : '/learn/sign_in'}"
          title="${userAuth ? 'Dashboard' : 'Sign In'}"
          class="${
            userAuth || !checkIfMobileDevice ? 'hidden' : 'inline-flex'
          } lg:inline-flex text-base items-center text-white transition-all duration-200 hover-text-glacier-darkgreen-400 gap-3 ${
    extraClass === 'dashboard' ? 'font-medium' : ''
  }"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 46 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
          class="hidden lg:inline-flex text-base items-center text-white transition-all duration-200 hover-text-glacier-darkgreen-400 gap-3 ${
            extraClass === 'support' ? 'font-medium' : ''
          }"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
                    return this.close();
                }
                this.$refs.button.focus();
                this.open = true;
            },
            close(focusAfter) {
                if (! this.open){
                  return;
                }
                this.open = false;
                focusAfter && focusAfter.focus();
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
            class="text-base hidden lg:inline-flex items-center text-white transition-all duration-200 hover-text-glacier-darkgreen-400 gap-3 cursor-pointer"
            type="button"
          >
            ${userName}
            ${avatar}
            <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" ></path> </svg>
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
              class="py-2 text-md"
              style="width: 100%;"
              aria-labelMobiledropdownDefaultButton"
            >
              <li>
                <a
                  href="/learn/dashboard"
                  class="block lg:hidden px-4 py-2 hover-bg-glacier-darkgreen-400 text-glacier-darkblue-600"
                  >Dashboard</a
                >
              </li>
              <li>
                <a
                  href="/learn/account?tab=dashboard.account_profile"
                  class="block px-4 py-2 hover-bg-glacier-darkgreen-400 text-glacier-darkblue-600"
                  >${currentLanguage === 'de' ? 'Profil' : 'Profile'}</a
                >
              </li>
              <li>
                <a
                  href="/learn/account?tab=dashboard.account"
                  class="block px-4 py-2 hover-bg-glacier-darkgreen-400 text-glacier-darkblue-600"
                  >${currentLanguage === 'de' ? 'Account' : 'Account'}</a
                >
              </li>
              <li>
                <a
                  href="/support"
                  class="block lg:hidden px-4 py-2 hover-bg-glacier-darkgreen-400 text-glacier-darkblue-600"
                  >${currentLanguage === 'de' ? 'Support' : 'Support'}</a
                >
              </li>
              <li>
                <a
                  href="/learn/sign_out"
                  class="block px-4 py-2 hover-bg-glacier-darkgreen-400 text-glacier-darkblue-600"
                  >${currentLanguage === 'de' ? 'Abmelden' : 'Sign out'}</a
                >
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
          class="text-base flex lg:hidden items-center text-white transition-all duration-200 hover-text-glacier-darkgreen-400 gap-3 cursor-pointer"
          type="button"
        >
          ${avatar}
          <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" ></path> </svg>
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
      style="display: none; top: 6.5rem; left: 0px; width: 100%"
      class="bg-white divide-y divide-gray-100 rounded-lg shadow absolute left-0 z-10 block lg:hidden"
    >
      <ul
        class="py-2 text-md"
        aria-labelledby="dropdownMobileButton"
      >
      ${
        multiLicence
          ? `<li>
              <a
              href="/learn/license"
                class="block lg:hidden px-4 py-2 hover-bg-glacier-darkgreen-400 text-glacier-darkblue-600"
                >${
                  currentLanguage === 'de'
                    ? 'Programm wählen'
                    : 'Select Program'
                }</a
              >
            </li>`
          : ''
      }
        <li>
          <a
            href="/learn/dashboard"
            class="block lg:hidden px-4 py-2 hover-bg-glacier-darkgreen-400 text-glacier-darkblue-600"
            >Dashboard</a
          >
        </li>
        <li>
          <a
            href="/learn/account?tab=dashboard.account_profile"
            class="block px-4 py-2 hover-bg-glacier-darkgreen-400 text-glacier-darkblue-600"
            >${currentLanguage === 'de' ? 'Profil' : 'Profile'}</a
          >
        </li>
        <li>
          <a
            href="/learn/account?tab=dashboard.account"
            class="block px-4 py-2 hover-bg-glacier-darkgreen-400 text-glacier-darkblue-600"
            >${currentLanguage === 'de' ? 'Account' : 'Account'}</a
          >
        </li>
        <li>
          <a
            href="/support"
            class="block lg:hidden px-4 py-2 hover-bg-glacier-darkgreen-400 text-glacier-darkblue-600"
            >${currentLanguage === 'de' ? 'Support' : 'Support'}</a
          >
        </li>
        <li>
          <a
            href="/learn/sign_out"
            class="block px-4 py-2 hover-bg-glacier-darkgreen-400 text-glacier-darkblue-600"
            >${currentLanguage === 'de' ? 'Abmelden' : 'Sign out'}</a
          >
        </li>
      </ul>
    </div>
    </nav>
  </div>
  `

  mainGroup.prepend(newHeader)
}

function expandFirstModuleListItem() {
  var courseListItem = document.querySelector(
    '.dashboard-access-list-item-expander'
  )
  var courseListItemDescription = document.querySelector(
    '.dashboard-access-list-item__description'
  )
  if (courseListItem && !courseListItemDescription) {
    courseListItem.click()
  }
}

function scrollToModuleCatalogOnFilter() {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  if (urlParams.has('labels')) {
    const customElement = document.getElementById('custom-module-catalog')
    if (customElement) {
      customElement.scrollIntoView()
    }
  }
}

function germanComponentVisualiser() {
  var languageSelector = document.querySelector('.learner__language__selector')
  var allEnglishElements = document.querySelectorAll('.english-component')
  var allGermanElements = document.querySelectorAll('.german-component')

  if (!languageSelector || !allEnglishElements || !allGermanElements) {
    return
  }

  if (languageSelector.innerText === 'English') {
    allEnglishElements.forEach((element) => {
      element.classList.remove('english-component')
    })
    allGermanElements.forEach((element) => {
      element.classList.add('hidden')
    })
  } else if (languageSelector.innerText === 'Deutsch') {
    allEnglishElements.forEach((element) => {
      element.classList.add('hidden')
    })
    allGermanElements.forEach((element) => {
      element.classList.remove('german-component')
    })
  }
}

function languageSelector() {
  var currentLanguage = localStorage.getItem('sys_language')
  // var languageSelector = document.querySelector('.learner__language__selector')
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  // if (languageSelector) {
  //   if (languageSelector.innerText === 'English') {
  //     localStorage.setItem('sys_language', 'en')
  //   } else {
  //     localStorage.setItem('sys_language', 'de')
  //   }
  // } else
  if (urlParams.has('sys_lang') && urlParams.get('sys_lang') === 'de') {
    localStorage.setItem('sys_language', 'de')
  } else if (urlParams.has('sys_lang') && urlParams.get('sys_lang') === 'en') {
    localStorage.setItem('sys_language', 'en')
  } else if (window.CONF.preload.currentUser.currentUser.lang) {
    localStorage.setItem(
      'sys_language',
      window.CONF.preload.currentUser.currentUser.lang
    )
  } else if (window.CONF.preload.company.lang) {
    localStorage.setItem('sys_language', window.CONF.preload.company.lang)
  }

  var newLanguage = localStorage.getItem('sys_language')
  if (['en', 'de'].includes(newLanguage) && currentLanguage !== newLanguage) {
    window.location.reload()
    // switchLanguage(newLanguage)
  }
}

function switchLanguage(language) {
  const allEnglishElements = document.querySelectorAll('.english-component')
  const allGermanElements = document.querySelectorAll('.german-component')
  if (language === 'en') {
    allEnglishElements.forEach((element) => {
      element.classList.remove('english-component')
    })
    allGermanElements.forEach((element) => {
      element.classList.add('hidden')
    })
  } else if (language === 'de') {
    allEnglishElements.forEach((element) => {
      element.classList.add('hidden')
    })
    allGermanElements.forEach((element) => {
      element.classList.remove('german-component')
    })
  }
}

/**
 * Redeem code page
 */

function trackCodeRedemptions() {
  const submitButton = document.querySelector(
    '.widget--redemption-form .btn.btn--primary.btn--expand'
  )

  submitButton.addEventListener('click', async function () {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    let emailInput = document.querySelector(
      'input[placeholder="E-Mail-Adresse"]'
    )
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

function switchTitleLanguage() {
  const preTitleElement = document.getElementById('redemption-pretitle')
  const titleElement = document.getElementById('redemption-title')
  if (preTitleElement && titleElement) {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    if (urlParams.has('client') && urlParams.get('client') === 'demo') {
      preTitleElement.innerText = 'DEINEN ACCOUNT ERSTELLEN'
      titleElement.innerText = 'Deine Registrierung'
    } else if (localStorage.getItem('sys_language') === 'de') {
      preTitleElement.innerText = 'ERSTELLE DEINEN ACCOUNT'
      titleElement.innerText = 'Gib deinen Anmeldungscode ein'
    } else {
      preTitleElement.innerText = 'LET US SET UP YOUR ACCOUNT'
      titleElement.innerText = 'Redeem a code'
    }
  }
}
