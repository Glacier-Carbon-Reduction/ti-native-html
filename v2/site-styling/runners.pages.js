currentUserLanguage = window.CONF?.preload?.currentUser?.currentUser?.lang

function redirector() {
  if (window.location.pathname.startsWith('/learning-paths/')) {
    const path = window.location.pathname.split('/learning-paths/')[1]
    const newPath = window.location.origin + '/learn/learning-path/' + path
    window.location.replace(newPath)
  }
}

async function waiter() {
  await new Promise((resolve) => setTimeout(resolve, 800))
  currentUserLanguage = window.CONF?.preload?.currentUser?.currentUser?.lang

  const checker_1 = authPageModifiers()
  const checker_2 = redeemPageModifiers()
  const checker_3 = updatePageHeader()

  if (!(checker_1 || checker_2 || checker_3)) {
    waiter()
  } else {
    userNameReplacer()
    applyStylesForHasPsuedoClass()
    embedWistiaVideo(currentUserLanguage === 'de' ? '1o3n779t75' : 'sh9w3ogy2l')
    checkForCertificate()
    courseInformationPageModifier()
    accountsPageModifiers()
    addOpenInNewTabButtonForPDF(4000)
  }
}

redirector()
waiter()
coursePageModifiers()
