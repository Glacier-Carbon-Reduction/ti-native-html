var myWindow = window.open('', 'Print', 'width=842, height=595, scrollbars=1, resizable=0')
var player = GetPlayer()
var variable1 = player.GetVar('Name')
var variable2 = player.GetVar('Andreas1')
var variable3 = player.GetVar('Barbara11')
var variable4 = player.GetVar('Barbara12')
var variable5 = player.GetVar('Barbara13')
var variable6 = player.GetVar('Barbara14')
var variable7 = player.GetVar('Barbara2')
var variable8 = player.GetVar('Barbara3')
var variable9 = player.GetVar('Learning1')
var variable10 = player.GetVar('Learning2')
var variable11 = player.GetVar('Learning3')

var contents = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=842px, initial-scale=1.0" />
    <title>HANDBOOK Sustainable Leadership Masterclass #2</title>
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
          <p style="font-size: 18px; margin-bottom: 1.3rem; color: #2d9d90">SESSION #2</p>
          <p style="font-size: 32px; margin: 0px; font-weight: 600; color: #2d9d90; letter-spacing: 1.6px">Sustainable Leadership Masterclass</p>
          <p style="font-size: 32px; margin-top: 30px; font-weight: 600; color: #2d9d90; letter-spacing: 1.6px">A1 Group</p>
        </span>

        <span style="font-weight: 600; position: absolute; top: 205px; left: 43%; text-align: center">
          <p style="font-size: 18px; margin-bottom: 1.3rem">with input from</p>
        </span>

        <div style="display: grid; grid-template-columns: 1fr 1fr; max-width: 600px; left: 33%; grid-gap: 5rem; position: absolute; top: 280px">
          <div style="text-align: center">
            <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1695020731/img/people/Barbara_Kump_g6clhx.jpg" alt="Description" style="width: 100%; max-width: 100px; border-radius: 999px; margin-bottom: 10px" />
            <p style="font-weight: 400; font-size: 16px; margin: 0px; color: #2d9d90">Barbara Kump</p>
          </div>

          <div style="text-align: center">
            <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1695020801/img/people/Andreas_Tschas_cm0ior.jpg" alt="Description" style="width: 100%; max-width: 100px; border-radius: 999px; margin-bottom: 10px" />
            <p style="font-weight: 400; font-size: 16px; margin: 0px; color: #2d9d90">Andreas Tschas</p>
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
            <p style="font-weight: 600; width: 318px">Which climate jobs already exist in your company and which will be needed in the future?</p>
            <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 318px; min-height: 280px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">${variable2}</p>
          </div>

          <div style="flex: 50%; margin-left: 88px">
            <p style="font-weight: 600; width: 317px">Evaluate your company or specifically your team/department based on the elements of the dominant logic.</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 0.1rem; position: relative">
              <p style="font-weight: 600; position: absolute; transform: rotate(-90deg); transform-origin: center; text-transform: uppercase; left: -45px; top: 50%">NOT VISIBLE</p>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%">
                <p style="font-weight: 600; margin: 0">How the world is</p>
                <p style="font-family: 'Pangea Text'; margin: 2px; font-style: normal; font-weight: 300; font-size: 8px; line-height: 12px; color: black">e.g., the strongest survive</p>
                <p style="border: 0.5px solid #2d9d90; margin-top: 0px; border-radius: 8px; width: 150px; min-height: 105px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">${variable3}</p>
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%">
                <p style="font-weight: 600; margin: 0">What is important</p>
                <p style="font-family: 'Pangea Text'; margin: 2px; font-style: normal; font-weight: 300; font-size: 8px; line-height: 12px; color: black">e.g., it is important to be fast and agile</p>
                <p style="border: 0.5px solid #2d9d90; margin-top: 0px; border-radius: 8px; width: 150px; min-height: 105px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">${variable4}</p>
              </div>
            </div>
            <hr style="border: none; height: 1px; background: #143560; margin: 2px" />
            <div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 0.1rem; position: relative">
              <p style="font-weight: 600; position: absolute; transform: rotate(-90deg); transform-origin: center; text-transform: uppercase; left: -34px; top: 25%">Visible</p>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%">
                <p style="border: 0.5px solid #2d9d90; margin-top: 8px; margin-bottom: 2px; border-radius: 8px; width: 150px; min-height: 105px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">${variable5}</p>
                <p style="font-weight: 600; margin: 0">How things are structured</p>
                <p style="font-family: 'Pangea Text'; margin: 2px; font-style: normal; font-weight: 300; font-size: 8px; line-height: 12px; color: black">e.g., flat hierarchies, streamlined structures</p>
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%">
                <p style="border: 0.5px solid #2d9d90; margin-top: 8px; margin-bottom: 2px; border-radius: 8px; width: 150px; min-height: 105px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">${variable6}</p>
                <p style="font-weight: 600; margin: 0">How processes work</p>
                <p style="font-family: 'Pangea Text'; margin: 2px; font-style: normal; font-weight: 300; font-size: 8px; line-height: 12px; color: black">e.g., flexible and fast processes</p>
              </div>
            </div>
          </div>
        </div>

        <div style="margin-top: 130px; display: flex; align-items: center; width: 103.5%">
          <p style="margin-right: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">HANDBOOK Sustainable Leadership Masterclass</p>

          <div style="flex: 1; height: 1px; background-color: #2d9d90"></div>

          <p style="margin-left: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">Page 2/3</p>
        </div>
      </section>

      <div class="page-break"></div>
      <section style="padding: 68px 60px; position: relative; min-height: 600px" name="Page 3">
        <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1692944346/img/brand/logos/03_glacier_climate_academy/glacier_logo_climateacademy_4C_darkgreen_mmflq8.png" alt="Glacier Logo" style="position: absolute; top: 14px; right: 17px; width: 100px" />

        <span style="display: flex; align-items: end; gap: 1rem">
          <h1 style="font-weight: 700; font-size: 24px; color: #143560">My Reflections</h1>
        </span>

        <div style="display: flex">
          <div style="flex: 50%">
            <p style="font-weight: 600; width: 317px">Where does the dominant logic of your company/team/department support sustainable behavior?</p>
            <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 317px; min-height: 260px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">${variable7}</p>
          </div>
          <div style="flex: 50%; margin-left: 88px">
            <p style="font-weight: 600; width: 318px">Where does the dominant logic of your company/team/department hinder sustainable behavior?</p>
            <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 318px; min-height: 260px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black">${variable8}</p>
          </div>
        </div>

        <div style="margin-top: 100px; display: flex; align-items: center; width: 103.5%">
          <p style="margin-right: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">HANDBOOK Sustainable Leadership Masterclass</p>

          <div style="flex: 1; height: 1px; background-color: #2d9d90"></div>

          <p style="margin-left: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">Page 2/3</p>
        </div>
      </section>

      <div class="page-break"></div>
      <section style="padding: 68px 60px; padding-bottom: 10px; position: relative; min-height: 500px" name="Page 4">
        <img src="https://res.cloudinary.com/df1dbnp0x/image/upload/v1692944346/img/brand/logos/03_glacier_climate_academy/glacier_logo_climateacademy_4C_darkgreen_mmflq8.png" alt="Glacier Logo" style="position: absolute; top: 14px; right: 17px; width: 100px" />

        <h1 style="font-weight: 700; font-size: 24px; color: #143560">My 3 Main Learnings</h1>

        <p style="border: 0.5px solid #2d9d90; margin-top: 30px; border-radius: 8px; min-height: 100px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black; width: 102%">${variable9}</p>
        <p style="border: 0.5px solid #2d9d90; margin-top: 30px; border-radius: 8px; min-height: 100px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black; width: 102%">${variable10}</p>
        <p style="border: 0.5px solid #2d9d90; margin-top: 30px; border-radius: 8px; min-height: 100px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black; width: 102%">L${variable11}</p>

        <div style="margin-top: 60px; display: flex; align-items: center; width: 103.5%">
          <p style="margin-right: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">HANDBOOK Sustainable Leadership Masterclass</p>

          <div style="flex: 1; height: 1px; background-color: #2d9d90"></div>

          <p style="margin-left: 10px; font-weight: 300; font-size: 10px; text-transform: uppercase">Page 3/3</p>
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