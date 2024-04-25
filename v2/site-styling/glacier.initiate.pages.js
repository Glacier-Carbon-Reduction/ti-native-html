currentUserLanguage =
  window.CONF?.preload?.currentUser?.currentUser?.lang ||
  window?.CONF?.preload?.currentUser?.clients?.[0]?.defaultLanguage

pageSwticherReachable = true

async function waiter() {
  await new Promise((resolve) => setTimeout(resolve, 800))
  currentUserLanguage =
    window.CONF?.preload?.currentUser?.currentUser?.lang ||
    window?.CONF?.preload?.currentUser?.clients?.[0]?.defaultLanguage

  const checker_1 = authPageModifiers()
  const checker_2 = redeemPageModifiers()
  const checker_3 = updatePageHeader()

  if (!(checker_1 || checker_2 || checker_3)) {
    console.log('Delayed waiter: page switch')
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

// showUnderConstructionPage()
learningPathRedirector()
waiter()
coursePageModifiers()
