var myWindow = window.open('', 'Print', 'width=842, height=595, scrollbars=1, resizable=0')
var player = GetPlayer()
var variable1 = player.GetVar('Name')
var variable2 = player.GetVar('Reflection1')
var variable3 = player.GetVar('Reflection2')
var variable4 = player.GetVar('Learning1')
var variable5 = player.GetVar('Learning2')
var variable6 = player.GetVar('Learning3')

var contents = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=842px, initial-scale=1.0" />
    <title>HANDBOOK Sustainable Leadership Masterclass #3</title>
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

        <span style="font-weight: 300; color: #2d9d90; position: absolute; top: 70px; left: 16.5%; text-align: center">
          <p style="font-size: 18px; margin-bottom: 1.3rem; color: #2d9d90">SESSION #3</p>
          <p style="font-size: 32px; margin: 0px; font-weight: 600; color: #2d9d90; letter-spacing: 1.6px">Sustainable Leadership Masterclass</p>
          <p style="font-size: 32px; margin-top: 30px; font-weight: 600; color: #2d9d90; letter-spacing: 1.6px">A1 Group</p>
        </span>

        <span style="font-weight: 600; position: absolute; top: 205px; left: 43%; text-align: center">
          <p style="font-size: 18px; margin-bottom: 1.3rem">with input from</p>
        </span>

        <div style="display: grid; grid-template-columns: 1fr 1fr; max-width: 600px; left: 30%; grid-gap: 5rem; position: absolute; top: 280px">
          <div style="text-align: center">
            <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1695023997/img/people/Raffaela_Ortner_tstizu.jpg" alt="Description" style="width: 100%; max-width: 100px; border-radius: 999px; margin-bottom: 10px" />
            <p style="font-weight: 400; font-size: 16px; margin: 0px; color: #2d9d90">Raffaela Ortner</p>
          </div>

          <div style="text-align: center">
            <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1695023883/img/people/Johannes_Scherrer_lju0ob.jpg" alt="Description" style="width: 100%; max-width: 100px; border-radius: 999px; margin-bottom: 10px" />
            <p style="font-weight: 400; font-size: 16px; margin: 0px; color: #2d9d90">Johannes Scherrer</p>
          </div>
        </div>

        <span style="font-weight: 700; position: absolute; top: 450px; left: 29.5%; text-align: center">
          <p style="font-size: 32px; margin-bottom: 1.3rem; letter-spacing: 1.5px">HANDBOOK</p>
          <p style="border: 0.5px solid #143560; margin-top: 8px; border-radius: 8px; width: 318px; min-height: 50px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">${variable1}</p>
        </span>

        <p style="position: absolute; top: 600px; font-weight: 400; line-height: 1.2rem; font-size: 8px">🖨️ If you want to print the handbook, use recycled paper if possible and print it on both sides and in black and white. Or even better - print it on scratch paper, which would otherwise end up in the waste paper. 😉</p>
      </section>

      <div class="page-break"></div>
      <section style="padding: 68px 60px; position: relative; min-height: 600px" name="Page 2">
        <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1692944346/img/brand/logos/03_glacier_climate_academy/glacier_logo_climateacademy_4C_darkgreen_mmflq8.png" alt="Glacier Logo" style="position: absolute; top: 14px; right: 17px; width: 100px" />

        <span style="display: flex; align-items: end; gap: 1rem">
          <h1 style="font-weight: 700; font-size: 24px; color: #143560">My Reflections</h1>
        </span>

        <div style="display: flex">
          <div style="flex: 50%">
            <p style="font-weight: 600; width: 317px">Where does the dominant logic of your company/team/department support sustainable behavior?</p>
            <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 317px; min-height: 260px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">${variable2}</p>
          </div>
          <div style="flex: 50%; margin-left: 88px">
            <p style="font-weight: 600; width: 318px">Where does the dominant logic of your company/team/department hinder sustainable behavior?</p>
            <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 318px; min-height: 260px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">${variable3}</p>
          </div>
        </div>

        <div style="margin-top: 130px; display: flex; align-items: center; width: 103.5%">
          <p style="margin-right: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">HANDBOOK Sustainable Leadership Masterclass</p>

          <div style="flex: 1; height: 1px; background-color: #2d9d90"></div>

          <p style="margin-left: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">Page 1/2</p>
        </div>
      </section>

      <div class="page-break"></div>
      <section style="padding: 68px 60px; padding-bottom: 10px; position: relative; min-height: 500px" name="Page 3">
        <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1692944346/img/brand/logos/03_glacier_climate_academy/glacier_logo_climateacademy_4C_darkgreen_mmflq8.png" alt="Glacier Logo" style="position: absolute; top: 14px; right: 17px; width: 100px" />

        <h1 style="font-weight: 700; font-size: 24px; color: #143560">My 3 Main Learnings</h1>

        <p style="border: 0.5px solid #2d9d90; margin-top: 30px; border-radius: 8px; min-height: 100px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black; width: 102%">${variable4}</p>
        <p style="border: 0.5px solid #2d9d90; margin-top: 30px; border-radius: 8px; min-height: 100px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black; width: 102%">${variable5}</p>
        <p style="border: 0.5px solid #2d9d90; margin-top: 30px; border-radius: 8px; min-height: 100px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black; width: 102%">${variable6}</p>

        <div style="margin-top: 60px; display: flex; align-items: center; width: 103.5%">
          <p style="margin-right: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">HANDBOOK Sustainable Leadership Masterclass</p>

          <div style="flex: 1; height: 1px; background-color: #2d9d90"></div>

          <p style="margin-left: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">Page 2/2</p>
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
