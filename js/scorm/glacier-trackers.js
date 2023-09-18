// Google tag (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-D1P0S4C02Q');


// Hotjar Tracking Code for LXP SCORMs
(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:3641016,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
    console.log("Hotjar loaded");
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

let currentCourse = null

// Initiate the postMessage listener
document.addEventListener('DOMContentLoaded', function () {
  window.onload = function () {
    window.parent.postMessage('requestUserId', '*')
  }

  window.addEventListener('message', function (event) {
    const pattern = /^https?:\/\/([a-z0-9-]+\.)*glacier\.eco(:[0-9]+)?$/i
    if (!pattern.test(event.origin)) {
      console.log('Message received from invalid origin:', event.origin)
      return
    }

    const receivedData = event.data
    if (receivedData && receivedData.userId) {
      localStorage.setItem('userId', receivedData.userId)
      currentCourse = receivedData.course
      console.log('Message stored in localStorage:', receivedData)
    }
  })
})

// Custom function to send events to API
async function postEvent(eventData) {
  try {
    const response = await fetch('https://glacier-projects.vercel.app/api/webhook/scorm?source=iframeLXP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...eventData,
        userId: localStorage.getItem('userId'),
        source: currentCourse || '_knownCourse_'
      })
    })
    const data = await response.json()
    console.log('Response from API:', data)
  } catch (error) {
    console.log(error)
  }
}
