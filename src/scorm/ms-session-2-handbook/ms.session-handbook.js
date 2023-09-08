var myWindow = window.open( '', 'Print', 'width=842, height=595, scrollbars=1, resizable=0' )
var player = GetPlayer()
var variable1 = player.GetVar('Name')
var variable2 = player.GetVar('Barbara1.1')
var variable3 = player.GetVar('Barbara1.2')
var variable4 = player.GetVar('Barbara1.3')
var variable5 = player.GetVar('Barbara1.4')
var variable6 = player.GetVar('Barbara2')
var variable7 = player.GetVar('Barbara3')
var variable8 = player.GetVar('Drew1')
var variable9 = player.GetVar('Drew2')
var variable10 = player.GetVar('Eva1')
var variable11 = player.GetVar('Learning1')
var variable12 = player.GetVar('Learning2')
var variable13 = player.GetVar('Learning3')

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
          <p style="font-size: 10px; margin-bottom: 2px">28.9.2023</p>
          <p style="font-size: 15px; margin: 0px">Sustainable Leadership Masterclass</p>
        </span>

        <span style="font-weight: 300; color: #2d9d90; position: absolute; top: 100px; left: 16.5%; text-align: center">
          <p style="font-size: 18px; margin-bottom: 1.3rem; color: #2d9d90">SESSION #2</p>
          <p style="font-size: 32px; margin: 0px; margin-bottom: 30px; font-weight: 600; color: #2d9d90; letter-spacing: 1.6px">Unternehmens- & Nachhaltigkeitsziele</p>
          <p style="font-size: 32px; margin: 0px; font-weight: 600; color: #2d9d90; letter-spacing: 1.6px">vereinen</p>
        </span>

        <span style="font-weight: 600; position: absolute; top: 230px; left: 40.4%; text-align: center">
          <p style="font-size: 18px; margin-bottom: 1.3rem">Speaker*innen & Sessions</p>
        </span>

        <div style="display: grid; grid-template-columns: 1fr 3fr 2fr; grid-gap: 5rem; position: absolute; top: 300px; padding-right: 2rem">
          <div style="text-align: center; margin-right: -3rem; margin-left: -3rem; width: 200px">
            <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1694082991/img/people/Barbara_lot2m8.png" alt="Description" style="width: 100%; max-width: 92px; border-radius: 999px" />
            <h4 style="font-weight: 500; font-size: 16px; margin-top: 17px; margin-bottom: 10px; line-height: 1.2rem; letter-spacing: 1.1px">Chancen der<br />Veränderung erkennen</h4>
            <p style="font-weight: 400; font-size: 11px; margin: 0px; color: #2d9d90">mit Barbara Kump</p>
          </div>

          <div style="text-align: center">
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-gap: 1rem">
              <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1694082991/img/people/Drew_jj1rzn.png" alt="Description" style="width: 100%; max-width: 100px; border-radius: 999px" />
              <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1694100462/img/people/Raffaela_Ortner_hcetow.jpg" alt="Description" style="width: 100%; max-width: 100px; border-radius: 999px" />
              <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1694100462/img/people/Johannes_Scherrer_gx1xtx.jpg" alt="Description" style="width: 100%; max-width: 100px; border-radius: 999px" />
            </div>
            <h4 style="font-weight: 500; font-size: 16px; margin-top: 30px; margin-bottom: 10px; line-height: 1.2rem; letter-spacing: 1.1px">Good Practice</h4>
            <p style="font-weight: 400; font-size: 11px; margin: 0px; color: #2d9d90">
              mit<br />
              Drew Wilkinson & Raffaela Ortner & Johannes Scherrer
            </p>
          </div>

          <div style="text-align: center">
            <div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 1rem">
              <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1694082991/img/people/Eva_wots8u.png" alt="Description" style="width: 100%; max-width: 100px; border-radius: 999px" />
              <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1694082991/img/people/Theresa_aeng1i.png" alt="Description" style="width: 100%; max-width: 100px; border-radius: 999px" />
            </div>
            <h4 style="font-weight: 500; font-size: 16px; margin-bottom: 5px; margin-top: 30px; line-height: 1.2rem; letter-spacing: 1.1px">ESG Regulatorik & KPIs</h4>
            <p style="font-weight: 400; font-size: 11px; margin: 0px; color: #2d9d90">mit<br />Eva Aschauer & Theresa Kühmayer</p>
          </div>
        </div>

        <span style="font-weight: 700; position: absolute; top: 550px; left: 39.5%; text-align: center">
          <p style="font-size: 32px; margin-bottom: 1.3rem; letter-spacing: 1.5px">HANDBUCH</p>
        </span>
      </section>

      <div class="page-break"></div>
      <section style="padding: 68px 60px; position: relative; min-height: 600px" name="Page 2">
        <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1692944346/img/brand/logos/03_glacier_climate_academy/glacier_logo_climateacademy_4C_darkgreen_mmflq8.png" alt="Glacier Logo" style="position: absolute; top: 14px; right: 17px; width: 100px" />
        <p style="font-weight: 300; font-size: 12px; line-height: 15px; text-transform: uppercase; position: absolute; top: 10px">28.9.2023 Sustainable Leadership Masterclass</p>
        <p style="font-weight: 300; font-size: 15px; line-height: 15px; text-transform: uppercase; position: absolute; top: 28px; color: #2d9d90">SESSION #2: Unternehmens- & Nachhaltigkeitsziele vereinen</p>
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
        <p style="font-weight: 300; font-size: 12px; line-height: 15px; text-transform: uppercase; position: absolute; top: 10px">28.9.2023 Sustainable Leadership Masterclass</p>
        <p style="font-weight: 300; font-size: 15px; line-height: 15px; text-transform: uppercase; position: absolute; top: 28px; color: #2d9d90">SESSION #2: Unternehmens- & Nachhaltigkeitsziele vereinen</p>

        <span style="display: flex; align-items: end; gap: 1rem">
          <h1 style="font-weight: 700; font-size: 24px; color: #143560">Meine Reflexionen zu Chancen der Veränderung erkennen</h1>
          <p style="font-weight: 400; color: #2d9d90; margin-bottom: 15px">mit Barbara Kump</p>
        </span>

        <div style="display: flex">
          <div style="flex: 50%">
            <p style="font-weight: 600; width: 317px">Bewerte dein Unternehmen bzw. im speziellen dein Team/deine Abteilung anhand der Elemente der dominanten Logik.</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 0.1rem; position: relative">
              <p style="font-weight: 600; position: absolute; transform: rotate(-90deg); transform-origin: center; text-transform: uppercase; left: -45px; top: 50%">unsichtbar</p>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%">
                <p style="font-weight: 600; margin: 0">Wie die Welt ist</p>
                <p style="font-family: 'Pangea Text'; margin: 2px; font-style: normal; font-weight: 300; font-size: 8px; line-height: 12px; color: black">z.B. der*die Stärkste überlebt</p>
                <p style="border: 0.5px solid #2d9d90; margin-top: 0px; border-radius: 8px; width: 150px; min-height: 85px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">${variable2}</p>
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%">
                <p style="font-weight: 600; margin: 0">Was ist wichtig</p>
                <p style="font-family: 'Pangea Text'; margin: 2px; font-style: normal; font-weight: 300; font-size: 8px; line-height: 12px; color: black">z.B. es ist entscheidend, schnell & agil zu sein</p>
                <p style="border: 0.5px solid #2d9d90; margin-top: 0px; border-radius: 8px; width: 150px; min-height: 85px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">${variable3}</p>
              </div>
            </div>
            <hr style="border: none; height: 1px; background: #143560; margin: 2px" />
            <div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 0.1rem; position: relative">
              <p style="font-weight: 600; position: absolute; transform: rotate(-90deg); transform-origin: center; text-transform: uppercase; left: -38px; top: 25%">sichtbar</p>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%">
                <p style="border: 0.5px solid #2d9d90; margin-top: 8px; margin-bottom: 2px; border-radius: 8px; width: 150px; min-height: 85px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">${variable4}</p>
                <p style="font-weight: 600; margin: 0">Wie die Dinge strukturiert sind</p>
                <p style="font-family: 'Pangea Text'; margin: 2px; font-style: normal; font-weight: 300; font-size: 8px; line-height: 12px; color: black">z.B. flache Hierarchien, schlanke Strukturen</p>
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%">
                <p style="border: 0.5px solid #2d9d90; margin-top: 8px; margin-bottom: 2px; border-radius: 8px; width: 150px; min-height: 85px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">${variable5}</p>
                <p style="font-weight: 600; margin: 0">Wie die Abläufe sind</p>
                <p style="font-family: 'Pangea Text'; margin: 2px; font-style: normal; font-weight: 300; font-size: 8px; line-height: 12px; color: black">z.B. flexible und schnelle Prozesse</p>
              </div>
            </div>
          </div>

          <div style="flex: 50%; margin-left: 88px">
            <p style="font-weight: 600; width: 318px">Wo unterstützt die dominante Logik deines Unternehmens nachhaltiges Verhalten?</p>
            <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 318px; min-height: 235px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">${variable6}</p>
          </div>
        </div>

        <p style="margin-top: 23px; font-weight: 600">Wo hemmt die dominante Logik deines Unternehmens nachhaltiges Verhalten?</p>
        <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; min-height: 80px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black; width: 102%">${variable7}</p>

        <div style="margin-top: 35px; display: flex; align-items: center; width: 103.5%">
          <p style="margin-right: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">Handbuch: SUSTAINABLE LEADERSHIP MASTERCLASS - SESSION #2</p>

          <div style="flex: 1; height: 1px; background-color: #2d9d90"></div>

          <p style="margin-left: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">Seite 1/3</p>
        </div>
      </section>

      <div class="page-break"></div>
      <section style="padding: 68px 60px; position: relative; min-height: 600px" name="Page 4">
        <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1692944346/img/brand/logos/03_glacier_climate_academy/glacier_logo_climateacademy_4C_darkgreen_mmflq8.png" alt="Glacier Logo" style="position: absolute; top: 14px; right: 17px; width: 100px" />
        <p style="font-weight: 300; font-size: 12px; line-height: 15px; text-transform: uppercase; position: absolute; top: 10px">28.9.2023 Sustainable Leadership Masterclass</p>
        <p style="font-weight: 300; font-size: 15px; line-height: 15px; text-transform: uppercase; position: absolute; top: 28px; color: #2d9d90">SESSION #2: Unternehmens- & Nachhaltigkeitsziele vereinen</p>

        <span style="display: flex; align-items: end; gap: 1rem">
          <h1 style="font-weight: 700; font-size: 24px; color: #143560">Meine Reflexionen zu Good Practice</h1>
          <p style="font-weight: 400; color: #2d9d90; margin-bottom: 15px">mit Drew Wilkinson, Raffaela Ortner & Johannes Scherrer</p>
        </span>

        <div style="display: flex">
          <div style="flex: 50%">
            <p style="font-weight: 600; width: 317px">Was sind 3 Inspirationen, die du dir von den Good Practice Beispielen mitnehmen konntest?</p>
            <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 317px; min-height: 160px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">${variable8}</p>
          </div>
          <div style="flex: 50%; margin-left: 88px">
            <p style="font-weight: 600; width: 318px">Welchen der 3 Punkte könntest du bei euch im Unternehmen umsetzen und was bräuchte es dazu? <span style="font-weight: 300; margin-top: -10px; font-size: 8.5px"> (Ressourcen, Personen etc.)</span></p>
            <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 318px; min-height: 160px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">${variable9}</p>
          </div>
        </div>

        <span style="margin-top: 20px; display: flex; align-items: end; gap: 1rem">
          <h1 style="font-weight: 700; font-size: 24px; color: #143560">Meine Reflexionen zu ESG Regulatorik & KPIs</h1>
          <p style="font-weight: 400; color: #2d9d90; margin-bottom: 15px">mit Eva Aschauer & Theresa Kühmayer</p>
        </span>

        <p style="margin-top: 20px; font-weight: 600">Was ist dein wichtigstes Learning im Bereich ESG Regulatorik & KPIs?</p>
        <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; min-height: 100px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black; width: 102%">${variable10}</p>

        <div style="margin-top: 35px; display: flex; align-items: center; width: 103.5%">
          <p style="margin-right: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">Handbuch: SUSTAINABLE LEADERSHIP MASTERCLASS - SESSION #2</p>

          <div style="flex: 1; height: 1px; background-color: #2d9d90"></div>

          <p style="margin-left: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">Seite 2/3</p>
        </div>
      </section>

      <div class="page-break"></div>
      <section style="padding: 68px 60px; padding-bottom: 10px; position: relative; min-height: 500px" name="Page 5">
        <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1692944346/img/brand/logos/03_glacier_climate_academy/glacier_logo_climateacademy_4C_darkgreen_mmflq8.png" alt="Glacier Logo" style="position: absolute; top: 14px; right: 17px; width: 100px" />
        <p style="font-weight: 300; font-size: 12px; line-height: 15px; text-transform: uppercase; position: absolute; top: 10px">28.9.2023 Sustainable Leadership Masterclass</p>
        <p style="font-weight: 300; font-size: 15px; line-height: 15px; text-transform: uppercase; position: absolute; top: 28px; color: #2d9d90">SESSION #2: Unternehmens- & Nachhaltigkeitsziele vereinen</p>

        <h1 style="font-weight: 700; font-size: 24px; color: #143560">Meine 3 wichtigsten Learnings aus</h1>
        <p style="font-weight: 400; color: #2d9d90; margin-top: 0; margin-bottom: 15px; font-size: 24px">SESSION #2: Unternehmens- & Nachhaltigkeitsziele vereinen</p>

        <p style="border: 0.5px solid #2d9d90; margin-top: 30px; border-radius: 8px; min-height: 100px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black; width: 102%">${variable11}</p>
        <p style="border: 0.5px solid #2d9d90; margin-top: 30px; border-radius: 8px; min-height: 100px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black; width: 102%">${variable12}</p>
        <p style="border: 0.5px solid #2d9d90; margin-top: 30px; border-radius: 8px; min-height: 100px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black; width: 102%">${variable13}.</p>

        <div style="margin-top: 35px; display: flex; align-items: center; width: 103.5%">
          <p style="margin-right: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">Handbuch: SUSTAINABLE LEADERSHIP MASTERCLASS - SESSION #2</p>

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
