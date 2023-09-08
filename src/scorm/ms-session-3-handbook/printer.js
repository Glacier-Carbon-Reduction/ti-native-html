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
  var variable1 = player.GetVar('variable1')
  var variable2 = player.GetVar('variable2')
  var variable3 = player.GetVar('variable3')
  var variable4 = player.GetVar('variable4')
  var variable5 = player.GetVar('variable5')
  var variable6 = player.GetVar('variable6')
  var variable7 = player.GetVar('variable7')
  var variable8 = player.GetVar('variable8')

  var contents = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=842px, initial-scale=1.0" />
        <title>Report</title>
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
          <section style="padding: 68px 60px; position: relative; min-height: 600px" name="Page 1">
            <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1692944346/img/brand/logos/03_glacier_climate_academy/glacier_logo_climateacademy_4C_darkgreen_mmflq8.png" alt="Glacier Logo" style="position: absolute; top: 14px; right: 17px; width: 100px" />
            <span style="font-weight: 300; color: #143560; position: absolute; top: 15px; left: 37%; text-align: center">
              <p style="font-size: 10px; margin-bottom: 2px">12.10.2023</p>
              <p style="font-size: 15px; margin: 0px">Sustainable Leadership Masterclass</p>
            </span>
    
            <span style="font-weight: 300; color: #2d9d90; position: absolute; top: 100px; left: 22%; text-align: center">
              <p style="font-size: 18px; margin-bottom: 1.3rem; color: #2d9d90">SESSION #3</p>
              <p style="font-size: 32px; margin: 0px; margin-bottom: 30px; font-weight: 600; color: #2d9d90; letter-spacing: 1.6px">Nachhaltigkeitstransformation</p>
              <p style="font-size: 32px; margin: 0px; font-weight: 600; color: #2d9d90; letter-spacing: 1.6px">erfolgreich umsetzen</p>
            </span>
    
            <span style="font-weight: 600; position: absolute; top: 230px; left: 40.4%; text-align: center">
              <p style="font-size: 18px; margin-bottom: 1.3rem">Speaker*innen & Sessions</p>
            </span>
    
            <div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 5rem; position: absolute; top: 300px; left: 20%">
              <div style="text-align: center">
                <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1694097719/img/people/Denise_ul0xgg.jpg" alt="Description" style="width: 100%; max-width: 100px; border-radius: 999px" />
                <h4 style="font-weight: 500; font-size: 16px; margin-bottom: 10px; line-height: 1.2rem; letter-spacing: 1.1px">Mitarbeiter*innen<br />Engagement richtig gemacht</h4>
                <p style="font-weight: 400; font-size: 11px; margin: 0px; color: #2d9d90">mit Denise Kovarik</p>
              </div>
              <div style="text-align: center">
                <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1694097719/img/people/Ali_eyag1k.jpg" alt="Description" style="width: 100%; max-width: 100px; border-radius: 999px" />
                <h4 style="font-weight: 500; font-size: 16px; margin-bottom: 10px; line-height: 1.2rem; letter-spacing: 1.1px">Die Transformation<br />(mit)gestalten</h4>
                <p style="font-weight: 400; font-size: 11px; margin: 0px; color: #2d9d90">mit Ali Mahlodji</p>
              </div>
            </div>
    
            <span style="font-weight: 700; position: absolute; top: 550px; left: 39.5%; text-align: center">
              <p style="font-size: 32px; margin-bottom: 1.3rem; letter-spacing: 1.5px">HANDBUCH</p>
            </span>
          </section>
    
          <div class="page-break"></div>
          <section style="padding: 68px 60px; position: relative; min-height: 600px" name="Page 2">
            <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1692944346/img/brand/logos/03_glacier_climate_academy/glacier_logo_climateacademy_4C_darkgreen_mmflq8.png" alt="Glacier Logo" style="position: absolute; top: 14px; right: 17px; width: 100px" />
            <p style="font-weight: 300; font-size: 12px; line-height: 15px; text-transform: uppercase; position: absolute; top: 10px">12.10.2023 Sustainable Leadership Masterclass</p>
            <p style="font-weight: 300; font-size: 15px; line-height: 15px; text-transform: uppercase; position: absolute; top: 28px; color: #2d9d90">SESSION #3: Nachhaltigkeitstransformation erfolgreich umsetzen</p>
            <div style="display: flex; margin-top: 50px">
              <div style="flex: 50%">
                <p style="margin-top: 23px; font-weight: 600; width: 317px">Hallo Climate Ranger,</p>
                <p style="margin-top: 20px; font-weight: 400; line-height: 1.2rem; font-size: 12px; letter-spacing: 0.5px">herzlich willkommen bei der Glacier Climate Academy!</p>
                <p style="margin-top: 20px; font-weight: 400; line-height: 1.2rem; font-size: 12px; letter-spacing: 0.5px">Dieses Handbuch soll dich bei der Implementierung von Sustainable Leadership in deinem Unternehmen unterstützen. Hier findest du deine Reflexionen zu den gestellten Aufgaben. Nutze das Handbuch, um dich inspirieren zu lassen, um noch einmal auf Gelerntes zuzugreifen und identifizierte Blindspots in deinem Unternehmen zu lösen.</p>
                <p style="margin-top: 20px; font-weight: 400; line-height: 1.2rem; font-size: 12px; letter-spacing: 0.5px">Wenn du am Ende der Session alle Aufgaben erledigt hast, wird dich das Handbuch bei der weiteren Umsetzung von Sustainable Leadership in deinem Unternehmen unterstützen.</p>
              </div>
              <div style="flex: 50%; margin-left: 88px">
                <p style="margin-top: 20px; font-weight: 400; line-height: 1.2rem; font-size: 12px; letter-spacing: 0.5px">
                  Hast du Fragen zu den Aufgaben? Dann kontaktiere uns jederzeit unter
                  <a style="color: #2d9d90; text-decoration: none; font-size: 12px" href="mailto:academy@glacier.eco">academy@glacier.eco</a>.
                </p>
    
                <p style="margin-top: 20px; font-weight: 400; line-height: 1.2rem; font-size: 12px; letter-spacing: 0.5px">Wir wünschen dir viel Spaß mit diesem Handbuch und der Umsetzung von Sustainable Leadership im Unternehmen!</p>
    
                <p style="margin-top: 20px; font-weight: 400; line-height: 1.2rem; font-size: 12px; letter-spacing: 0.5px">
                  Klimafreundliche Grüße,
                  <br />
                  dein Glacier-Team
                </p>
    
                <p style="margin-top: 48px; font-weight: 600; width: 318px">TEILNEHMER*IN</p>
                <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 318px; min-height: 70px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">${variable1}</p>
              </div>
            </div>
    
            <p style="margin-top: 100px; font-weight: 400; line-height: 1.2rem; font-size: 12px; letter-spacing: 0.5px">🖨️ Wenn du das Handbook ausdrucken möchtest, verwende wenn möglich Recyclingpapier und drucke es beidseitig und in schwarz-weiß aus. Oder noch besser - drucke es auf Schmierpapier, das sonst im Altpapier landen würde. 😉</p>
          </section>
    
          <div class="page-break"></div>
          <section style="padding: 68px 60px; position: relative; min-height: 600px" name="Page 3">
            <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1692944346/img/brand/logos/03_glacier_climate_academy/glacier_logo_climateacademy_4C_darkgreen_mmflq8.png" alt="Glacier Logo" style="position: absolute; top: 14px; right: 17px; width: 100px" />
            <p style="font-weight: 300; font-size: 12px; line-height: 15px; text-transform: uppercase; position: absolute; top: 10px">12.10.2023 Sustainable Leadership Masterclass</p>
            <p style="font-weight: 300; font-size: 15px; line-height: 15px; text-transform: uppercase; position: absolute; top: 28px; color: #2d9d90">SESSION #3: Nachhaltigkeitstransformation erfolgreich umsetzen</p>
    
            <span style="display: flex; align-items: end; gap: 1rem">
              <h1 style="font-weight: 700; font-size: 24px; color: #143560">
                Meine Reflexionen zu<br /><br />
                Mitarbeiter*innen Engagement richtig gemacht
              </h1>
              <p style="font-weight: 400; color: #2d9d90; margin-bottom: 15px">mit Denise Kovarik</p>
            </span>
    
            <p style="margin-top: 23px; font-weight: 600">
              Stelle dir den Erfolgskreislauf des Mitarbeiter*innen Engagements vor.<br />
              In welchem Bereichen liegt eure größte Stärke & in welchem Bereich eure größte Schwäche? Warum?
            </p>
            <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; min-height: 150px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black; width: 102%">${variable2}</p>
    
            <p style="margin-top: 23px; font-weight: 600">Überlege dir, welche 3 Anreize du bei deinen Kolleg*innen schaffen kannst, um sie für mehr Nachhaltigkeit zu begeistern.</p>
            <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; min-height: 150px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black; width: 102%">${variable3}</p>
    
            <div style="margin-top: 35px; display: flex; align-items: center; width: 103.5%">
              <p style="margin-right: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">Handbuch: SUSTAINABLE LEADERSHIP MASTERCLASS - SESSION #3</p>
    
              <div style="flex: 1; height: 1px; background-color: #2d9d90"></div>
    
              <p style="margin-left: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">Seite 1/3</p>
            </div>
          </section>
    
          <div class="page-break"></div>
          <section style="padding: 68px 60px; position: relative; min-height: 600px" name="Page 4">
            <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1692944346/img/brand/logos/03_glacier_climate_academy/glacier_logo_climateacademy_4C_darkgreen_mmflq8.png" alt="Glacier Logo" style="position: absolute; top: 14px; right: 17px; width: 100px" />
            <p style="font-weight: 300; font-size: 12px; line-height: 15px; text-transform: uppercase; position: absolute; top: 10px">12.10.2023 Sustainable Leadership Masterclass</p>
            <p style="font-weight: 300; font-size: 15px; line-height: 15px; text-transform: uppercase; position: absolute; top: 28px; color: #2d9d90">SESSION #3: Nachhaltigkeitstransformation erfolgreich umsetzen</p>
    
            <span style="display: flex; align-items: end; gap: 1rem">
              <h1 style="font-weight: 700; font-size: 24px; color: #143560">Meine Reflexionen zu Die Transformation (mit)gestalten</h1>
              <p style="font-weight: 400; color: #2d9d90; margin-bottom: 15px">mit Ali Mahlodji</p>
            </span>
            <p style="font-weight: 400; margin-top: -5px; font-size: 14px; line-height: 15px; color: #2d9d90">Trainiere deine Neugierde und höre in den nächsten Wochen aktiv zu. Konzentriere dich darauf gute, Fragen zu stellen. Starte den Prozess bereits hier mit den folgenden Aufgaben.</p>
    
            <p style="margin-top: 23px; font-weight: 600">Identifiziere die Opinion Leaders in deinem Unternehmen und erstelle hier eine Liste von ihnen:</p>
            <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; min-height: 150px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black; width: 102%">${variable4}</p>
    
            <p style="margin-top: 23px; font-weight: 600">Sprich mit mindestens zwei dieser Opinion Leaders! Finde dabei heraus: Was sind die Sorgen und Unsicherheiten der Mitarbeiter*innen zum Thema Nachhaltigkeit? Was sind ihre 3 wichtigsten Fragen?</p>
            <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; min-height: 150px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black; width: 102%">${variable5}</p>
    
            <div style="margin-top: 35px; display: flex; align-items: center; width: 103.5%">
              <p style="margin-right: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">Handbuch: SUSTAINABLE LEADERSHIP MASTERCLASS - SESSION #3</p>
    
              <div style="flex: 1; height: 1px; background-color: #2d9d90"></div>
    
              <p style="margin-left: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">Seite 2/3</p>
            </div>
          </section>
    
          <div class="page-break"></div>
          <section style="padding: 68px 60px; padding-bottom: 10px; position: relative; min-height: 500px" name="Page 5">
            <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1692944346/img/brand/logos/03_glacier_climate_academy/glacier_logo_climateacademy_4C_darkgreen_mmflq8.png" alt="Glacier Logo" style="position: absolute; top: 14px; right: 17px; width: 100px" />
            <p style="font-weight: 300; font-size: 12px; line-height: 15px; text-transform: uppercase; position: absolute; top: 10px">12.10.2023 Sustainable Leadership Masterclass</p>
            <p style="font-weight: 300; font-size: 15px; line-height: 15px; text-transform: uppercase; position: absolute; top: 28px; color: #2d9d90">SESSION #3: Nachhaltigkeitstransformation erfolgreich umsetzen</p>
    
            <h1 style="font-weight: 700; font-size: 24px; color: #143560">Meine 3 wichtigsten Learnings aus</h1>
            <p style="font-weight: 400; color: #2d9d90; margin-top: 0; margin-bottom: 15px; font-size: 24px">SESSION #3: Nachhaltigkeitstransformation erfolgreich umsetzen</p>
    
            <p style="border: 0.5px solid #2d9d90; margin-top: 30px; border-radius: 8px; min-height: 100px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black; width: 102%">${variable6}</p>
            <p style="border: 0.5px solid #2d9d90; margin-top: 30px; border-radius: 8px; min-height: 100px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black; width: 102%">${variable7}</p>
            <p style="border: 0.5px solid #2d9d90; margin-top: 30px; border-radius: 8px; min-height: 100px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black; width: 102%">${variable8}</p>
    
            <div style="margin-top: 35px; display: flex; align-items: center; width: 103.5%">
              <p style="margin-right: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">Handbuch: SUSTAINABLE LEADERSHIP MASTERCLASS - SESSION #3</p>
    
              <div style="flex: 1; height: 1px; background-color: #2d9d90"></div>
    
              <p style="margin-left: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">Seite 3/3</p>
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
