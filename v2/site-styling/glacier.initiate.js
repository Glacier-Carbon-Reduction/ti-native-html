watchLanguageChange()

async function mainWaiter() {
  await new Promise((resolve) => setTimeout(resolve, 800))
  authPageModifiers()
  redeemPageModifiers()
  registerPageModifiers()
}

mainWaiter()
