watchLanguageChange()

async function mainWaiter() {
  await new Promise((resolve) => setTimeout(resolve, 800))
  learningPathRedirector()
  authPageModifiers()
  redeemPageModifiers()
  registerPageModifiers()
}

mainWaiter()
