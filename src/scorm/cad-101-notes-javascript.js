var myWindow = window.open( '', 'Print', 'width=842, height=595, scrollbars=1, resizable=0')
var player = GetPlayer()
var Plan1 = player.GetVar('Plan1')
var Plan2 = player.GetVar('Plan2')
var Plan3 = player.GetVar('Plan3')
var Plan4 = player.GetVar('Plan4')
var Plan5 = player.GetVar('Plan5')
var Plan6 = player.GetVar('Plan6')
var Plan7 = player.GetVar('Plan7')
var YourTeam = player.GetVar('YourTeam')
var YourCallToAction = player.GetVar('YourCallToAction')
var YourCommunication = player.GetVar('YourCommunication')
var contents = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=842px, initial-scale=1.0" />
    <title>Report</title>
    <link
      rel="stylesheet"
      href="https://glacier-projects.vercel.app/site-styling/pangea-fonts.css"
    />
    <style>
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          max-width: 850px;
          margin: 0 auto;
          transform: scale(1.2);
          transform-origin: top;
        }
      }
      @page {
        size: landscape;
        margin: 0;
      }
      body {
        max-width: 850px;
        margin: 0 auto;
      }
      .page-break {
        page-break-after: always;
      }
      p,
      a, h1 {
        font-family: 'Pangea';
        color: #143560;
        font-size: 11px;
        line-height: 14px;
      }
    </style>
  </head>
  <body>
    <section style="padding: 68px 60px; position: relative" name="Page 1">
      <img
        src="https://glacier-projects.vercel.app/img/brand/logos/04_glacier-climate-action-day/glacier_logo_climateday_4C_blue-blue.png"
        alt="Glacier Logo"
        style="position: absolute; top: 14px; right: 17px; width: 100px"
      />
      <p
        style="font-weight: 300; font-size: 12px; line-height: 15px; text-transform: uppercase; color: #539adb; position: absolute; top: 32px;"
      >
        Climate Action Day 101: Your Notes
      </p>
      <div style="display: flex">
        <div style="flex: 50%">
          <h1
            style="font-weight: 700; font-size: 24px; line-height: 30px; color: #143560;"
          >
            Getting Started
          </h1>
          <p style="margin-top: 6px; font-weight: 400; color: #2d9d90">
            First steps to planning your Climate Action Day
          </p>
          <p style="margin-top: 23px; font-weight: 600; width: 317px">
            What goal do you want to achieve with your participation?
          </p>
          <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 317px; min-height: 83px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black;"
          >
            ${Plan1}
          </p>
          <p style="margin-top: 23px; font-weight: 600; width: 317px">
            Are there any framework conditions or expectations from management,
            colleagues or stakeholders (investors/partners)?
          </p>
          <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 317px; min-height: 83px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black;"
          >
            ${Plan2}
          </p>
          <p style="margin-top: 23px; font-weight: 600; width: 317px">
            What resources are available or needed? Personnel, financial, time,
            logistical, etc.?
          </p>
          <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 317px; min-height: 83px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black;"
          >
            ${Plan3}
          </p>
        </div>
        <div style="flex: 50%; margin-left: 88px">
          <p style="font-weight: 600; width: 318px">
            How many resources can the participating colleagues allocate? Can
            everyone participate or, for example, only certain branch locations
            or departments?
          </p>
          <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 318px; min-height: 83px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black;"
          >
            ${Plan4}
          </p>
          <p style="margin-top: 23px; font-weight: 600; width: 318px">
            How long should the Climate Action Day last and in what form should
            it take place (online/offline/hybrid)?
          </p>
          <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 318px; min-height: 50px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black;"
          >
            ${Plan5}
          </p>
          <p style="margin-top: 23px; font-weight: 600; width: 318px">
            Is there a focus topic or certain topics that should be the focus of
            the day (e.g. sustainability strategy, next steps of your company)?
          </p>
          <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 318px; min-height: 50px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black;"
          >
            ${Plan6}
          </p>
          <p style="margin-top: 23px; font-weight: 600; width: 318px">
            Are there concrete next steps planned and what are they?
          </p>
          <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 318px; min-height: 83px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black;"
          >
            ${Plan7}
          </p>
        </div>
      </div>
    </section>
    <div class="page-break"></div>
    <section style="padding: 68px 60px; position: relative" name="Page 1">
      <img
        src="https://glacier-projects.vercel.app/img/brand/logos/04_glacier-climate-action-day/glacier_logo_climateday_4C_blue-blue.png"
        alt="Glacier Logo"
        style="position: absolute; top: 14px; right: 17px; width: 100px"
      />
      <p
        style="font-weight: 300; font-size: 12px; line-height: 15px; text-transform: uppercase; color: #539adb; position: absolute; top: 32px;"
      >
        Climate Action Day 101: Your Notes
      </p>
      <div style="display: flex">
        <div style="flex: 50%">
          <h1
            style="font-weight: 700; font-size: 24px; line-height: 30px; color: #143560;"
          >
            Your Team
          </h1>
          <p style="margin-top: 6px; font-weight: 400; color: #2d9d90">
            Allies in your company: organizing team of 2 to 5 Climate Rangers
          </p>
          <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 302px; min-height: 28px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black;"
          >
            Lorem ipsum dolor sit amet
          </p>
          <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 302px; min-height: 28px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black;"
          >
            Lorem ipsum dolor sit amet
          </p>
          <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 302px; min-height: 28px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black;"
          >
            Lorem ipsum dolor sit amet
          </p>
          <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 302px; min-height: 28px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black;"
          >
            Lorem ipsum dolor sit amet
          </p>
          <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 302px; min-height: 28px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black;"
          >
            Lorem ipsum dolor sit amet
          </p>

          <h1
            style="margin-top: 20px;font-weight: 700; font-size: 24px; line-height: 30px; color: #143560;"
          >
            Your Call to Action
          </h1>
          <p style="margin-top: 6px; font-weight: 400; color: #2d9d90">
            A strong call to action is an important piece to planning your day.
            These are the actions you want your colleagues to continue after the
            Climate Action Day.
          </p>
          <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 302px; min-height: 148px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black;"
          >
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div style="flex: 50%; margin-left: 88px">
          <h1
            style="font-weight: 700; font-size: 24px; line-height: 30px; color: #143560;"
          >
            Your Communication
          </h1>
          <p style="margin-top: 6px; font-weight: 400; color: #2d9d90">
            Communicate transparently, with honesty and authenticity!
          </p>
          <p style="border: 0.5px solid #2d9d90; margin-top: 8px; border-radius: 8px; width: 302px; min-height: 266px; padding: 5px 9px; font-family: 'Pangea Text'; font-style: normal; font-weight: 300; font-size: 9px; line-height: 12px; color: black;"
          >
            Lorem ipsum dolor sit amet
          </p>

          <h1
            style="
              margin-top: 28px;font-weight: 700; font-size: 24px; line-height: 30px; color: #143560;"
          >
            Resources
          </h1>

          <div style="padding: 10px 1px;">
            <a style="display: flex; align-items: center; gap: 6px;">
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M10.6157 5C9.92882 5.00391 9.37072 5.56055 9.37072 6.25C9.37072 6.93945 9.92882 7.49609 10.6157 7.48242C11.3026 7.49609 11.8607 6.93945 11.8607 6.25C11.8607 5.56055 11.3026 5.00391 10.6157 5ZM10.6177 7.16992C10.1025 7.18555 9.68489 6.76562 9.68489 6.25C9.68489 5.73633 10.1025 5.31641 10.6157 5.3125C11.1289 5.31641 11.5465 5.73633 11.5465 6.25C11.5465 6.76562 11.1289 7.18555 10.6177 7.16992ZM0.780568 4.6875C0.86643 4.6875 0.936681 4.61719 0.936681 4.53125V0.96875C0.936681 0.607422 1.21769 0.3125 1.56114 0.3125H10.9279C11.2714 0.3125 11.5524 0.607422 11.5524 0.96875V4.53125C11.5524 4.61719 11.6227 4.6875 11.7085 4.6875C11.7944 4.6875 11.8646 4.61719 11.8646 4.53125V0.96875C11.8646 0.435547 11.4451 0 10.9279 0H1.56114C1.04401 0 0.624454 0.433594 0.624454 0.96875V4.53125C0.624454 4.61719 0.694705 4.6875 0.780568 4.6875ZM4.99954 6.25C4.99954 6.93945 5.55764 7.49805 6.24454 7.5C6.93144 7.49609 7.48955 6.93945 7.48955 6.25C7.48955 5.56055 6.93144 5.00391 6.24454 5C5.55764 5.00391 4.99954 5.56055 4.99954 6.25ZM7.17537 6.25C7.17537 6.76562 6.75776 7.18555 6.24454 7.1875C5.73132 7.18555 5.31371 6.76562 5.31371 6.25C5.31371 5.73633 5.73132 5.31641 6.24454 5.3125C6.75776 5.31641 7.17537 5.73633 7.17537 6.25ZM6.70898 8.125H5.78205C5.00344 8.125 4.37118 8.7793 4.37118 9.58398C4.37118 9.8125 4.55266 10 4.77707 10H7.71006C7.93642 10 8.1179 9.8125 8.1179 9.58398C8.1179 8.7793 7.48564 8.125 6.70898 8.125ZM7.71201 9.6875H4.77707C4.72634 9.6875 4.68341 9.64062 4.68341 9.58398C4.68341 8.95117 5.17516 8.4375 5.78205 8.4375H6.70898C7.31392 8.4375 7.80568 8.95117 7.80568 9.58398C7.80568 9.64062 7.76275 9.6875 7.71201 9.6875ZM11.0802 8.125H10.1532C9.37462 8.125 8.74236 8.7793 8.74236 9.58398C8.74236 9.8125 8.92384 10 9.14825 10H12.0812C12.3076 10 12.4891 9.8125 12.4891 9.58398C12.4891 8.7793 11.8568 8.125 11.0802 8.125ZM12.0832 9.6875H9.1502C9.09752 9.6875 9.05459 9.64062 9.05459 9.58398C9.05459 8.95117 9.54634 8.4375 10.1532 8.4375H11.0802C11.6851 8.4375 12.1769 8.95117 12.1769 9.58398C12.1769 9.64062 12.1339 9.6875 12.0832 9.6875ZM2.3378 8.125H1.41088C0.63226 8.125 0 8.7793 0 9.58398C0 9.8125 0.181482 10 0.405895 10H3.33888C3.56524 10 3.74672 9.8125 3.74672 9.58398C3.74672 8.7793 3.11446 8.125 2.3378 8.125ZM3.34083 9.6875H0.405895C0.353207 9.6875 0.312227 9.64062 0.312227 9.58398C0.312227 8.95117 0.803985 8.4375 1.40892 8.4375H2.33585C2.94274 8.4375 3.43255 8.95117 3.43255 9.58398C3.4345 9.64062 3.39157 9.6875 3.34083 9.6875ZM0.628357 6.25C0.628357 6.93945 1.18646 7.49805 1.87336 7.5C2.56026 7.49609 3.11837 6.93945 3.11837 6.25C3.11837 5.56055 2.56026 5.00391 1.87336 5C1.18646 5.00391 0.628357 5.56055 0.628357 6.25ZM2.80419 6.25C2.80419 6.76562 2.38659 7.18555 1.87336 7.1875C1.36014 7.18555 0.940584 6.76562 0.940584 6.25C0.940584 5.73633 1.35819 5.31641 1.87141 5.3125C2.38659 5.31641 2.80419 5.73633 2.80419 6.25Z" fill="#6DD4AC" /> </svg>
                Livestream Agenda
            </a>
            <a style="display: flex; align-items: center; gap: 6px; padding-top: 9px;">
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M10.3623 0H0.942028C0.42195 0 0 0.419922 0 0.9375V7.1875C0 7.70509 0.42195 8.125 0.942028 8.125H4.4923L3.96889 9.6875H2.66909C2.58274 9.6875 2.51209 9.7578 2.51209 9.84374C2.51209 9.9297 2.58274 10 2.66909 10H8.63526C8.72174 10 8.79226 9.93011 8.79226 9.84374C8.79226 9.75739 8.72174 9.6875 8.63526 9.6875H7.33585L6.81244 8.125H10.3623C10.8824 8.125 11.3043 7.70509 11.3043 7.1875V0.9375C11.3043 0.419922 10.8824 0 10.3623 0ZM7.00437 9.6875H4.29998L4.82339 8.125H6.48096L7.00437 9.6875ZM10.9903 7.1875C10.9903 7.53202 10.7085 7.8125 10.3623 7.8125H0.942028C0.595833 7.8125 0.314009 7.53202 0.314009 7.1875V0.9375C0.314009 0.59297 0.595833 0.3125 0.942028 0.3125H10.3623C10.7085 0.3125 10.9903 0.59297 10.9903 0.9375V7.1875Z" fill="#6DD4AC" /> </svg>
                On-Demand Sessions
            </a>
            <a style="display: flex; align-items: center; gap: 6px; padding-top: 9px;">
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M6.5625 1.09375C6.5625 0.489648 7.05273 0 7.65625 0C8.25977 0 8.75 0.489648 8.75 1.09375C8.75 1.69785 8.25977 2.1875 7.65625 2.1875C7.05273 2.1875 6.5625 1.69785 6.5625 1.09375ZM7.65625 1.875C8.08789 1.875 8.4375 1.5252 8.4375 1.09375C8.4375 0.662305 8.08789 0.3125 7.65625 0.3125C7.22461 0.3125 6.875 0.662305 6.875 1.09375C6.875 1.5252 7.22461 1.875 7.65625 1.875ZM5 7.5C5 8.88086 3.88086 10 2.5 10C1.11934 10 0 8.88086 0 7.5C0 6.11914 1.11934 5 2.5 5C3.88086 5 5 6.11914 5 7.5ZM2.5 9.6875C3.70898 9.6875 4.6875 8.70898 4.6875 7.5C4.6875 6.29102 3.70898 5.3125 2.5 5.3125C1.2918 5.3125 0.3125 6.29102 0.3125 7.5C0.3125 8.70898 1.2918 9.6875 2.5 9.6875ZM12.5 7.5C12.5 8.88086 11.3809 10 10 10C8.61914 10 7.5 8.88086 7.5 7.5C7.5 6.11914 8.61914 5 10 5C11.3809 5 12.5 6.11914 12.5 7.5ZM10 9.6875C11.209 9.6875 12.1875 8.70898 12.1875 7.5C12.1875 6.29102 11.209 5.3125 10 5.3125C8.79102 5.3125 7.8125 6.29102 7.8125 7.5C7.8125 8.70898 8.79102 9.6875 10 9.6875ZM4.79883 3.94922C4.5625 4.15234 4.58789 4.52734 4.84961 4.69922L6.80273 5.96289C6.84766 5.99219 6.875 6.04102 6.875 6.09375V8.125C6.875 8.21094 6.80469 8.28125 6.71875 8.28125C6.63281 8.28125 6.5625 8.21094 6.5625 8.125V6.17969L4.67969 4.94336C4.24219 4.67773 4.19922 4.05078 4.5957 3.71094L5.75 2.72266C6.03906 2.47656 6.46094 2.4707 6.75391 2.71094L8.02539 3.75H9.53125C9.61719 3.75 9.6875 3.82031 9.6875 3.90625C9.6875 3.99219 9.61719 4.0625 9.53125 4.0625H7.96875C7.93359 4.0625 7.89844 4.05078 7.86914 4.02734L6.55664 2.95312C6.38086 2.80859 6.12695 2.81055 5.95508 2.95898L4.79883 3.94922Z" fill="#6DD4AC" /> </svg>
                Activites
            </a>
            <a style="display: flex; align-items: center; gap: 6px; padding-top: 9px;">
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" > <g clip-path="url(#clip0_6_196)"> <path d="M11.0938 0H0.15625C0.0703125 0 0 0.0703125 0 0.15625C0 0.242188 0.0703125 0.3125 0.15625 0.3125H0.625V5.32422C0.625 6.06055 1.18555 6.66016 1.875 6.66016H5.46875V7.75977L3.63867 9.7168C3.57812 9.78125 3.57812 9.88867 3.63867 9.95312C3.69922 10.0176 3.79883 10.0176 3.85938 9.95312L5.625 8.06641L7.38867 9.95117C7.44922 10.0156 7.54883 10.0156 7.60938 9.95117C7.66992 9.88672 7.66992 9.7793 7.60938 9.71484L5.78125 7.75977V6.66016H9.375C10.0645 6.66016 10.625 6.06055 10.625 5.32422V0.3125H11.0938C11.1797 0.3125 11.25 0.242188 11.25 0.15625C11.25 0.0703125 11.1797 0 11.0938 0ZM10.3125 5.32422C10.3125 5.87695 9.89258 6.32617 9.375 6.32617H5.625H1.875C1.35742 6.32617 0.9375 5.87695 0.9375 5.32422V0.3125H10.3125V5.32422Z" fill="#6DD4AC" /> <path d="M4.09375 2.65625C4.09375 2.58008 4.0332 2.51953 3.95703 2.51953H3.38086C3.30469 2.51953 3.24414 2.58008 3.24414 2.65625C3.24414 2.73242 3.30469 2.79297 3.38086 2.79297H3.95703C4.0332 2.79297 4.09375 2.73242 4.09375 2.65625Z" fill="#6DD4AC" /> <path d="M4.11526 3.23047L3.54104 3.57422C3.50979 3.5918 3.48636 3.62305 3.47854 3.66016C3.47073 3.69531 3.47659 3.73047 3.49221 3.76172C3.51761 3.80469 3.56253 3.82812 3.6094 3.82812C3.63284 3.82812 3.65823 3.82226 3.67971 3.80859L4.25589 3.46289C4.28714 3.44531 4.31057 3.41406 4.31839 3.37695C4.3262 3.3418 4.32034 3.30664 4.30471 3.27539C4.26761 3.21289 4.18362 3.19141 4.11526 3.23047Z" fill="#6DD4AC" /> <path d="M3.53709 1.61719L4.11717 1.96484C4.13865 1.97656 4.16209 1.98242 4.18552 1.98242C4.23045 1.98242 4.27537 1.95899 4.30076 1.91992C4.32029 1.88867 4.32615 1.85156 4.31834 1.81445C4.31053 1.78125 4.28904 1.75 4.25779 1.73242L3.67967 1.38477H3.67771C3.61326 1.34766 3.53318 1.36719 3.49412 1.42969L3.49217 1.43359C3.45701 1.49609 3.47654 1.57617 3.53709 1.61719Z" fill="#6DD4AC" /> <path d="M7.03909 1.97851C7.04886 1.98047 7.06057 1.98242 7.07034 1.98242C7.09378 1.98242 7.11917 1.97656 7.14065 1.96289L7.71682 1.61719C7.74807 1.59961 7.77151 1.56836 7.77932 1.53125C7.78714 1.49609 7.78128 1.46094 7.76565 1.42969C7.72854 1.36523 7.64456 1.34375 7.57815 1.38281L7.00393 1.72851C6.97268 1.74609 6.94925 1.77734 6.94143 1.81445C6.93362 1.84961 6.93948 1.88476 6.95511 1.91601C6.97268 1.94726 7.00393 1.9707 7.03909 1.97851Z" fill="#6DD4AC" /> <path d="M6.12891 4.36523H5.12891C5.04297 4.36523 4.97461 4.43359 4.97461 4.51953V4.55859C4.97461 4.91992 5.26758 5.21289 5.62891 5.21289C5.99023 5.21289 6.2832 4.91992 6.2832 4.55859V4.51953C6.2832 4.43359 6.21484 4.36523 6.12891 4.36523ZM5.62891 4.94141C5.44531 4.94141 5.29102 4.81055 5.25391 4.63672H6.00391C5.99023 4.70898 5.95508 4.77539 5.90234 4.82812C5.83008 4.90039 5.73242 4.94141 5.62891 4.94141Z" fill="#6DD4AC" /> <path d="M5.62891 1.36914C4.88672 1.36914 4.28125 1.97461 4.28125 2.7168C4.28125 2.99219 4.36523 3.25781 4.52148 3.48242C4.54883 3.52344 4.57617 3.56055 4.60547 3.59961C4.61523 3.61328 4.625 3.62695 4.63477 3.64062L4.65234 3.66602C4.73242 3.77539 4.81445 3.88867 4.87695 4.00586C4.91211 4.06836 4.93555 4.14063 4.95508 4.23242L4.96875 4.29492H5.24219L5.22656 4.20312C5.20508 4.07422 5.16797 3.9668 5.11719 3.875C5.04102 3.73633 4.94336 3.59961 4.84961 3.47461L4.81445 3.42578C4.79102 3.39258 4.76758 3.36133 4.74609 3.33008C4.62109 3.14844 4.55469 2.93555 4.55469 2.7168C4.55469 2.12305 5.03711 1.64063 5.63086 1.64063C6.22461 1.64063 6.70703 2.12305 6.70703 2.7168C6.70703 2.93555 6.64063 3.14844 6.51563 3.33008C6.48242 3.37695 6.44727 3.42578 6.41016 3.47656L6.4043 3.48633C6.31641 3.60547 6.21875 3.74023 6.14258 3.87891C6.08984 3.97656 6.05273 4.08594 6.0332 4.20703L6.01758 4.29883H6.29297L6.30469 4.23438C6.32031 4.15234 6.3457 4.07617 6.38281 4.00977C6.45117 3.88672 6.53711 3.76758 6.625 3.64453L6.62695 3.64258C6.66406 3.59375 6.70117 3.54102 6.73828 3.48828C6.89648 3.26172 6.97852 2.99609 6.97852 2.7207C6.97656 1.97461 6.37109 1.36914 5.62891 1.36914Z" fill="#6DD4AC" /> <path d="M7.72065 3.57617L7.14253 3.22852H7.14057C7.07612 3.19141 6.99604 3.21094 6.95698 3.27344L6.95503 3.27734C6.91792 3.3418 6.93745 3.42188 6.99995 3.46094L7.58003 3.80859C7.60151 3.82031 7.62495 3.82617 7.64839 3.82617C7.69331 3.82617 7.73823 3.80274 7.76362 3.76367L7.76557 3.75977C7.80073 3.69727 7.7812 3.61719 7.72065 3.57617Z" fill="#6DD4AC" /> <path d="M7.87891 2.51953H7.30273C7.22656 2.51953 7.16602 2.58008 7.16602 2.65625C7.16602 2.73242 7.22656 2.79297 7.30273 2.79297H7.87891C7.95508 2.79297 8.01562 2.73242 8.01562 2.65625C8.01562 2.58008 7.95508 2.51953 7.87891 2.51953Z" fill="#6DD4AC" /> <path d="M5.57227 1.82422C5.11523 1.82422 4.74414 2.19531 4.74414 2.65234C4.74414 2.72656 4.80469 2.78711 4.87891 2.78906C4.88086 2.78906 4.88281 2.78906 4.88477 2.78906C4.91797 2.78906 4.94922 2.77734 4.97266 2.75391C5 2.72852 5.01562 2.69141 5.01562 2.6543C5.01562 2.34766 5.26562 2.09766 5.57227 2.09766C5.64844 2.09766 5.70898 2.03711 5.70898 1.96094C5.70898 1.88477 5.64844 1.82422 5.57227 1.82422Z" fill="#6DD4AC" /> </g> <defs> <clipPath id="clip0_6_196"> <rect width="11.25" height="10" fill="white" /> </clipPath> </defs> </svg>
                Case Studies
            </a>
            <a style="display: flex; align-items: center; gap: 6px; padding-top: 9px;">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M3.4375 1.09375H6.5625C6.82227 1.09375 7.03125 1.30273 7.03125 1.5625V2.5H2.96875V1.5625C2.96875 1.30273 3.17773 1.09375 3.4375 1.09375ZM2.65625 1.5625V2.5H2.08008C1.74805 2.5 1.42969 2.63086 1.19531 2.86523L0.365234 3.69727C0.130859 3.93164 0 4.24805 0 4.58008V6.25V8.125C0 8.81445 0.560547 9.375 1.25 9.375H8.75C9.43945 9.375 10 8.81445 10 8.125V6.25V4.58008C10 4.24805 9.86914 3.92969 9.63477 3.69531L8.80469 2.86523C8.57031 2.63086 8.25195 2.5 7.91992 2.5H7.34375V1.5625C7.34375 1.13086 6.99414 0.78125 6.5625 0.78125H3.4375C3.00586 0.78125 2.65625 1.13086 2.65625 1.5625ZM9.6875 6.09375H6.875V5.15625C6.875 5.07031 6.80469 5 6.71875 5C6.63281 5 6.5625 5.07031 6.5625 5.15625V6.09375H3.4375V5.15625C3.4375 5.07031 3.36719 5 3.28125 5C3.19531 5 3.125 5.07031 3.125 5.15625V6.09375H0.3125V4.58008C0.3125 4.33203 0.412109 4.09375 0.587891 3.91797L1.41797 3.08789C1.59375 2.91211 1.83203 2.8125 2.08008 2.8125H2.8125H7.1875H7.91992C8.16797 2.8125 8.40625 2.91211 8.58203 3.08789L9.41211 3.91797C9.58789 4.09375 9.6875 4.33203 9.6875 4.58008V6.09375ZM0.3125 6.40625H3.125V7.34375C3.125 7.42969 3.19531 7.5 3.28125 7.5C3.36719 7.5 3.4375 7.42969 3.4375 7.34375V6.40625H6.5625V7.34375C6.5625 7.42969 6.63281 7.5 6.71875 7.5C6.80469 7.5 6.875 7.42969 6.875 7.34375V6.40625H9.6875V8.125C9.6875 8.64258 9.26758 9.0625 8.75 9.0625H1.25C0.732422 9.0625 0.3125 8.64258 0.3125 8.125V6.40625Z" fill="#6DD4AC" /> </svg>
                Communication Kit
            </a>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>

`
myWindow.document.write(contents)
setTimeout(function () {
  myWindow.print()
}, 1000)
