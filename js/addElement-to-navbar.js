function updateHeaderLinks(mainGroup) {
  var spacer = document.createElement('div')
  spacer.className = 'small-1 columns'
  spacer.innerHTML = `&nbsp`

  var dashboardLink = document.createElement('div')
  dashboardLink.className = 'small-4 column refresh-validator'
  dashboardLink.innerHTML = `
    <div class="dashboard-header__name" style="padding-top: 6.3px;">
      <a href="/learn/dashboard" style="display: flex; align-items: center; text-decoration: none;">
          <svg width="36" height="36" viewBox="0 0 46 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M43 26.3H25C24.0611 26.3 23.3 27.0611 23.3 28V46C23.3 46.9389 24.0611 47.7 25 47.7H43C43.9389 47.7 44.7 46.9389 44.7 46V28C44.7 27.0611 43.9389 26.3 43 26.3ZM21 1.3H9C8.06112 1.3 7.3 2.06112 7.3 3V15C7.3 15.9389 8.06112 16.7 9 16.7H21C21.9389 16.7 22.7 15.9389 22.7 15V3C22.7 2.06112 21.9389 1.3 21 1.3ZM10 30.3H3C2.06112 30.3 1.3 31.0611 1.3 32V39C1.3 39.9389 2.06112 40.7 3 40.7H10C10.9389 40.7 11.7 39.9389 11.7 39V32C11.7 31.0611 10.9389 30.3 10 30.3ZM6 3C6 1.34315 7.34315 0 9 0H21C22.6569 0 24 1.34315 24 3V15C24 16.6569 22.6569 18 21 18H9C7.34315 18 6 16.6569 6 15V3ZM22 28C22 26.3431 23.3431 25 25 25H43C44.6569 25 46 26.3431 46 28V46C46 47.6569 44.6569 49 43 49H25C23.3431 49 22 47.6569 22 46V28ZM3 29C1.34315 29 0 30.3431 0 32V39C0 40.6569 1.34315 42 3 42H10C11.6569 42 13 40.6569 13 39V32C13 30.3431 11.6569 29 10 29H3Z" fill="#F1F1F1"/>
          </svg>
          &nbsp&nbspDashboard
      </a>
    </div>
  `

  var supportLink = document.createElement('div')
  supportLink.className = 'small-4 column refresh-validator'
  supportLink.innerHTML = `
    <div class="dashboard-header__name" style="padding-top: 8.2px;">
      <a href="/support" style="display: flex; align-items: center; text-decoration: none;">
          <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.5469 10H17.4531C14.7188 10 12.5 12.2188 12.5 14.9531V15.7812C12.5 16.1267 12.7808 16.4062 13.125 16.4062C13.4692 16.4062 13.75 16.1267 13.75 15.7812V14.9531C13.75 12.9141 15.4141 11.25 17.4531 11.25H22.5461C24.5859 11.25 26.25 12.9141 26.25 14.9531C26.25 16.2969 25.52 17.5375 24.3703 18.1773L19.2031 20.7578C18.4609 21.1016 18 21.9531 18 22.8047V24.375C18 24.7205 18.2807 25 18.625 25C18.9692 25 19.25 24.7205 19.25 24.375V22.8047C19.25 22.408 19.4648 22.0417 19.7871 21.8625L24.9504 19.2805C26.5234 18.4141 27.5 16.75 27.5 14.9531C27.5 12.2188 25.2812 10 22.5469 10ZM18.75 27.5C18.0625 27.5 17.5 28.0625 17.5 28.75C17.5 29.4375 18.0625 30 18.75 30C19.4375 30 20 29.4403 20 28.75C20 28.0597 19.4375 27.5 18.75 27.5ZM20 0C8.95312 0 0 8.95312 0 20C0 31.0469 8.95312 40 20 40C31.0469 40 40 31.0469 40 20C40 8.95312 31.0469 0 20 0ZM20 38.75C9.66406 38.75 1.25 30.3359 1.25 20C1.25 9.66406 9.66406 1.25 20 1.25C30.3359 1.25 38.75 9.66406 38.75 20C38.75 30.3359 30.3359 38.75 20 38.75Z" fill="#F1F1F1"/>
          </svg>    
          &nbsp&nbspSupport
      </a>
    </div>
  `

  var userProfile = document.getElementsByClassName('small-10 columns')
  userProfile[0].classList.replace('small-10', 'small-3')

  var parentElement = mainGroup[0].parentNode
  parentElement.insertBefore(spacer, mainGroup[0])
  parentElement.insertBefore(dashboardLink, mainGroup[0])
  parentElement.insertBefore(supportLink, mainGroup[0])
}

function makeLogoClickable() {
  var logoElement = document.querySelector(
    '.header--dashboard .company__beta-logo'
  )
  logoElement.addEventListener('click', function () {
    if (window.location.href.includes('/learn/')) {
      window.location.href = '/learn/dashboard'
    } else {
      window.location.href = '/'
    }
  })
  logoElement.style.cursor = 'pointer'
}

var mainGroup = document.getElementsByClassName('row collapse')

if (mainGroup) {
  updateHeaderLinks(mainGroup)
}
