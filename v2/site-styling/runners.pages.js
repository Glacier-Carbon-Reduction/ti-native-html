currentUserLanguage = window.CONF?.preload?.currentUser?.currentUser?.lang

async function waiter() {
  await new Promise((resolve) => setTimeout(resolve, 800))
  currentUserLanguage = window.CONF?.preload?.currentUser?.currentUser?.lang

  authPageModifiers()
  redeemPageModifiers()
  updatePageHeader()
  userNameReplacer()
  applyStylesForHasPsuedoClass()
  embedWistiaVideo(currentUserLanguage === 'de' ? '1o3n779t75' : 'sh9w3ogy2l')
  checkForCertificate()
  courseInformationPageModifier()
}

waiter()

// const mainStylesheet = document.getElementById('main-custom-stylesheet').sheet
// mainStylesheet.disabled = true
