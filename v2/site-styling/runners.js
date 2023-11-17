if (window.CONF.preload.currentUser) {
  watchNestedProperty(window.CONF.preload.currentUser.currentUser, 'lang', (newValue) => {
    console.log('Language changed to:', newValue)
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
}
