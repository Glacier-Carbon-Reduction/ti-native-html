function redirector() {
  if (window.location.pathname.startsWith('/learning-paths/' && window.CONF?.preload?.currentUser?.currentUser.id)) {
    const path = window.location.pathname.split('/learning-paths/')[1]
    const newPath = window.location.origin + '/learn/learning-path/' + path
    window.location.replace(newPath)
  }
}

async function waiter() {
  await new Promise((resolve) => setTimeout(resolve, 800))
  currentUserLanguage =
    window.CONF?.preload?.currentUser?.currentUser?.lang ||
    window?.CONF?.preload?.currentUser?.clients?.[0]?.defaultLanguage

  const checker_1 = authPageModifiers()
  const checker_2 = redeemPageModifiers()
  const checker_3 = updatePageHeader()

  if (!(checker_1 || checker_2 || checker_3)) {
    console.log('Delayed waiter')
    waiter()
  } else {
    checkForUpcomingLivestream()
    watchLanguageChange()
    dashboardUsageBasedTransformations()
    applyStylesForHasPsuedoClass()
    embedWistiaVideo(currentUserLanguage === 'de' ? 'sh9w3ogy2l' : '1o3n779t75')
    clickCourseCompleteButtonOnSidebar()
    catalogLearningPathTransformations()
    courseInformationPageModifier()
    iframeActiveWindowSizeListener()
    accountsPageModifiers()
    addOpenInNewTabButtonForPDF(4000)
    updateReferralAcceptance()
  }
}

let lastUrl = window.location.href

setInterval(function () {
  const currentUrl = window.location.href
  if ((!unreachablePageSwitherCodeInitiated || currentUrl !== lastUrl) && !pageSwticherReachable) {
    lastUrl = currentUrl
    unreachablePageSwitherCodeInitiated = true

    currentUserLanguage =
      window.CONF?.preload?.currentUser?.currentUser?.lang ||
      window?.CONF?.preload?.currentUser?.clients?.[0]?.defaultLanguage

    learningPathRedirector()
    waiter()
    coursePageModifiers()
  }
}, 500)
