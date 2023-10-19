function GetPlayer() {
  function GetVar(string) {
    return `Variable text for ${string}`
  }
  return {
    GetVar: GetVar
  }
}

function createPrintWindow() {
  var myWindow = window.open('', 'Print', 'width=842, height=595, scrollbars=1, resizable=0')
  var player = GetPlayer()
  var variable1 = player.GetVar('strategy1')
  var variable2 = player.GetVar('strategy2')
  var variable3 = player.GetVar('strategy3')
  var variable4 = player.GetVar('strategy4')
  var variable5 = player.GetVar('strategy5')
  var variable6 = player.GetVar('strategy6')

  var contents = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=842px, initial-scale=1.0" />
      <title>Climate Ranger</title>
      <link rel="stylesheet" href="https://glacier-projects.vercel.app/site-styling/pangea-fonts.css" />
      <style>
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            max-width: 850px;
            margin: 0 auto;
            transform: scale(1.2);
            transform-origin: top;
            background-color: #fff;
          }
        }
  
        @page {
          size: landscape;
          margin: 0;
        }
  
        body {
          max-width: 850px;
          margin: 0 auto;
          background-color: #143560;
        }
  
        main {
          background-color: #fff;
        }
  
        .page-break {
          page-break-after: always;
        }
  
        p,
        a,
        h1,
        h2,
        h3,
        h4 {
          font-family: 'Pangea';
          color: #143560;
          font-size: 11px;
          line-height: 14px;
        }
      </style>
    </head>
  
    <body>
      <main>
        <section style="padding: 68px 60px; position: relative" name="Page 1">
          <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1692944346/img/brand/logos/03_glacier_climate_academy/glacier_logo_climateacademy_4C_darkgreen_mmflq8.png" alt="Glacier Logo" style="position: absolute; top: 14px; right: 17px; width: 100px" />
  
          <h1 style="font-weight: 700; font-size: 24px; color: #143560">Die 6 Strategien angewendet</h1>
          <h2 style="font-size: 20px; margin: 0px; font-weight: 600; color: #2d9d90">Ziel: Weniger drucken</h2>
  
          <div style="display: flex; margin-top: 30px">
            <div style="flex: 50%">
              <p style="font-weight: 200; text-transform: uppercase; width: 317px">1. Persönliche Motivation Kennen</p>
              <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 317px; min-height: 70px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">
                ${variable1}
              </p>
              <p style="font-weight: 200; text-transform: uppercase; width: 317px">2. Ein messbares Ziel setzen</p>
              <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 317px; min-height: 70px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">
                ${variable2}
              </p>
              <p style="font-weight: 200; text-transform: uppercase; width: 317px">3. kleine Schritte machen</p>
              <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 317px; min-height: 70px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">
                ${variable3}
              </p>
            </div>
            <div style="flex: 50%; margin-left: 88px">
              <p style="font-weight: 200; text-transform: uppercase; width: 318px">4. Gleich beginnen</p>
              <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 318px; min-height: 70px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">
                ${variable4}
              </p>
              <p style="font-weight: 200; text-transform: uppercase; width: 318px">5. Verbündete suchen</p>
              <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 318px; min-height: 70px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">
                ${variable5}
              </p>
              <p style="font-weight: 200; text-transform: uppercase; width: 318px">6. Erfolge feiern</p>
              <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 318px; min-height: 70px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">
                ${variable6}
              </p>
            </div>
          </div>
  
          <div style="margin-top: 20px; display: flex; align-items: center; width: 103.5%">
            <p style="margin-right: 10px; font-weight: 300; font-size: 12px; text-transform: uppercase; color: #2d9d90">Climate Ranger Werden</p>
  
            <div style="flex: 1; height: 1px; background-color: #2d9d90"></div>
          </div>
        </section>
      </main>
    </body>
  </html>
  
    `
  myWindow.document.write(contents)
  setTimeout(function () {
    myWindow.print()
  }, 1500)
}
