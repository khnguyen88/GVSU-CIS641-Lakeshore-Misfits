import PropTypes from 'prop-types';
import './MockSite.scss';
import { PaletteContext } from '../../context/PaletteContext';
import React, { useContext, useState, useEffect } from 'react';


const MockSite = () => {
  const [palette, setPalette] = useContext(PaletteContext);

  //Work-around to get change colors of pseudo classes
  //https://stackoverflow.com/questions/11371550/change-hover-css-properties-with-javascript
  
  useEffect(() => { 
    const mockNavItems = document.querySelectorAll('.inactive div');

    mockNavItems.forEach((navItem) => {
      navItem.style.setProperty('--nav-item-background-color', `${palette.colors[1]}`);
      navItem.style.setProperty('--nav-item-text-color', `${palette.colors[1].isLight() ? palette.colors[4]: 'white'}`);
    });
  }, [palette]);

  return (
  <div className="MockSite" data-testid="MockSite" style={{ backgroundColor: palette.colors[0] }}>
    <ul className="mock-nav" style={{backgroundColor: palette.colors[4]}}>
      <li className="mock-nav-item active" style={{backgroundColor: palette.colors[2]}}><div href="" style={{color: palette.colors[2].isLight() ? palette.colors[4] : palette.colors[0]}}>Home</div></li>
      <li className="mock-nav-item inactive"><div href="">Link 1</div></li>
      <li className="mock-nav-item inactive"><div href="">Link 2</div></li>
      <li className="mock-nav-item inactive"><div href="">Link 3</div></li>
    </ul>
    
    <h1 style={{color: palette.colors[4]}}> Mock Site Page</h1>
    <section className="section-1">
      <h2 style={{ color: palette.colors[3] }}>Sub Header</h2>
      <div className="sub-section-1-content">
        {/* Source of SVG from unDraw:  https://undraw.co/*/}
          
        <div className="svg-profile-image">
          {/* SVG format: https://stackoverflow.com/questions/59820954/syntaxerror-unknown-namespace-tags-are-not-supported-by-default */}
          {/* For react and SVG file, change xmlns:xlink TO xmlnsXlink*/}
          {/* For react and SVG file, remove all <g></g> elements*/}
          <svg xmlns="http://www.w3.org/2000/svg" width="532" height="532" viewBox="0 0 532 532" xmlnsXlink="http://www.w3.org/1999/xlink"><polygon points="297.05536 387.22083 309.71625 308.09024 224.2552 273.27277 211.59431 393.55127 297.05536 387.22083" fill="#a0616a"/><path d="M382.94672,504.16492c-7.33743,3.57727-14.81442,6.80649-22.40332,9.67133-15.17813,5.74329-30.84525,10.07666-46.91769,12.97015-15.70908,2.83618-31.83749,4.27606-47.96591,4.27606-21.78879,0-43.45168-2.61371-64.40176-7.7851-8.20377-2.01178-16.47781-4.47125-24.61163-7.3374-.85269-.30707-1.71902-.6142-2.57172-.92267-10.09067-3.66052-20.01379-7.9516-29.5592-12.80093-1.28603-.64285-2.57172-1.30069-3.85741-1.99951-1.42558-.7261-2.83717-1.49451-4.26276-2.29156-1.81696-.99225-3.61992-2.02679-5.4229-3.07501-6.03741-3.49402-11.97723-7.26782-17.65159-11.19449l-.37738-.25113c-.33541-.23749-.67082-.46133-.99225-.69879,.2095-1.10416,.40536-2.11142,.58689-3.0054,.6988-3.50766,1.16012-5.43619,1.16012-5.43619l38.26627-79.04932,10.66391-22.02594,5.19905-2.13873,39.27284-16.14206h95.98743l30.28601,12.52249s.1539,.57324,.46133,1.6774c3.01871,10.83145,20.62866,72.32608,47.95193,132.49271,.37704,.83801,.76874,1.69104,1.15979,2.54407l-.00006,.00003Z" fill={palette.colors[2].toHexString()}/><circle cx="275.45874" cy="246.37804" r="87.14982" fill="#a0616a"/>
            <path d="M167.97998,370.32001l-.14996,.75-26.57001,126.32996-.22998,1.10004-.37006,1.73999c-1.42999-.72998-2.83997-1.5-4.25995-2.28998-1.82001-1-3.62-2.03003-5.43005-3.08002-6.02997-3.48999-11.96997-7.27002-17.64996-11.19l-.38-.26001c-.33002-.22998-.66998-.46002-.98999-.69-4.34003-3.02997-8.57001-6.19-12.70001-9.45001-.03003-.01996-.04999-.03998-.08002-.07001-7.37-5.94-14.46997-12.32996-21.26001-19.12-4.37994-4.38-8.58997-8.88995-12.62-13.51996l.61005-2.56,.06-.26001,.75995-3.26001c6.76001-28.54999,29.63-50.46002,58.44-55.97998l38.28003-7.33002,4.53998-.85999Z" fill={palette.colors[2].toHexString()}/>
            <path d="M439.39618,467.22528c-11.27878,9.60172-23.36792,18.29581-36.12823,25.92667-1.24371,.75476-2.51575,1.49451-3.78745,2.23563-5.42255,3.13095-10.94336,6.05173-16.53378,8.77734-7.33743,3.57727-14.81442,6.80649-22.40332,9.67133l-.58722-2.76791-30.00653-142.6813,3.88538,.74112,38.93744,7.46298c28.80444,5.52081,51.68341,27.43481,58.43362,55.98746l7.44934,31.5444,.74078,3.10229h-.00003Z" fill={palette.colors[2].toHexString()}/>
            <path d="M375.81912,269.67435c-2.26428,8.44159-13.65463,46.16327-42.82281,54.10123-5.72998,1.56549-19.39859,3.36844-15.77869,0,.82437-.7684,1.62109-1.52316,2.41782-2.26428,31.65561-29.76871,44.56949-47.96487,38.67163-88.35622-3.74582-25.71648-46.40042-49.07042-70.39752-51.39066-10.11865-.97723-23.0325,2.44582-31.55768,11.26546-14.07397,14.53429-11.75407,59.14709-19.55247,85.3522-2.09641,7.01532-4.90561,12.71765-8.94489,16.16937-2.51576,2.15237-4.12286-.58688-5.31097-5.07315-2.5294-9.5321-3.18623-26.98715-6.77818-22.0546-10.38411,14.29816-.4893,33.24908,2.50177,40.5592,.61485,1.49588,1.24371,2.93442,1.87257,4.30472v.01364c.36339,.78207,.74077,1.56549,1.10416,2.30658v.01364c9.97874,20.34854,21.97031,27.63,32.53629,40.30673,4.15086,4.96124,8.0782,10.73315,11.5862,18.44867,2.40384,5.28333,4.13687,10.59396,5.32495,15.8063,6.05139,26.1355-1.13214,49.88113-3.07501,56.33823-4.06689,13.44513-11.05493,36.54657-31.55769,49.5863-25.74413,16.38092-49.23761,1.94354-60.47441,17.49872-.13989,.18152-.26579,.36304-.39137,.54456-.41936,.62921-.79672,1.25836-1.11815,1.88623-10.09067-3.66052-20.01379-7.9516-29.5592-12.80093-1.28603-.64285-2.57172-1.30069-3.85741-1.99951-1.42558-.7261-2.83717-1.49451-4.26276-2.29156-.05595-1.09052-.11192-2.17966-.15388-3.28384-.82437-18.90997,.41936-39.69254,5.12944-60.41913,3.01871-13.23492,6.00977-26.35931,10.59361-39.00739,2.99107-8.24506,6.6526-16.2963,11.47427-24.05273,3.85776-6.23325,8.44159-12.285,14.00403-18.09927,12.21539-12.75998,23.07481-18.08426,24.79384-31.55804,2.45946-19.23071-17.56799-25.0163-24.79384-54.10123-4.93324-19.88721-10.09067-48.55177-5.08713-67.86711,4.72408-18.25212,8.83296-34.0871,22.54355-49.60133,3.29816-3.71785,30.36993-29.57355,61.73212-33.82232,14.45102-1.94218,27.33725,16.56245,44.80731,20.54507,20.0834,4.57088,31.58566,7.18456,42.82248,15.77902,18.99359,14.50697,24.34616,36.19852,29.30774,56.35188,3.88538,15.76537,8.9169,36.1562,2.25027,60.86543l.00003,.00012Z" fill="#2f2e41"/>
            <path d="M454.09003,77.90997C403.84998,27.66998,337.04999,0,266,0S128.15002,27.66998,77.90997,77.90997C27.66998,128.14996,0,194.95001,0,266c0,64.84998,23.04999,126.15997,65.28998,174.57001,4.03003,4.63,8.24005,9.13995,12.62,13.51996,6.79004,6.79004,13.89001,13.17999,21.26001,19.12,.03003,.03003,.04999,.05005,.08002,.07001,47.10999,38.04999,105.34002,58.72003,166.74999,58.72003,71.04999,0,137.84998-27.67004,188.09003-77.91003,50.23999-50.23999,77.90997-117.03998,77.90997-188.08997s-27.66998-137.85004-77.90997-188.09003Zm-15.15002,387.39001c-17.07001,14.84998-36.07001,27.52997-56.56,37.63-7.19,3.54999-14.56,6.77997-22.09998,9.66998-29.29004,11.23999-61.08002,17.40002-94.28003,17.40002-32.03998,0-62.76001-5.73999-91.19-16.23999-11.66998-4.30005-22.95001-9.41003-33.77997-15.26001-1.59003-.85999-3.17004-1.73004-4.74005-2.62-8.25995-4.67999-16.25-9.79004-23.91998-15.31-17.14001-12.30005-32.75-26.60004-46.46997-42.56C26.09003,391.76996,2,331.64996,2,266,2,120.42999,120.42999,2,266,2s264,118.42999,264,264c0,79.47998-35.29999,150.87-91.06,199.29999Z" fill="#3f3d56" />
          </svg>
        </div>
          
        <div className="svg-static-site-image">
          {/* SVG format: https://stackoverflow.com/questions/59820954/syntaxerror-unknown-namespace-tags-are-not-supported-by-default */}
          {/* For react and SVG file, change xmlns:xlink TO xmlnsXlink*/}
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="693" height="528" viewBox="0 0 693 528" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path d="M946.5,469.5V691.31A22.71737,22.71737,0,0,1,923.81,714H753.67l1.58-2L944.5,472.04Z" transform="translate(-253.5 -186)" fill={palette.colors[1].toHexString()}/>
            <path d="M524.3118,391.368H328.943a6.036,6.036,0,0,0,0,12.072H524.3118a6.036,6.036,0,0,0,0-12.072Z" transform="translate(-253.5 -186)" fill={palette.colors[3].toHexString()}/>
            <path d="M389.51753,357.52356H328.943a6.036,6.036,0,0,0,0,12.072h60.57458a6.036,6.036,0,0,0,0-12.072Z" transform="translate(-253.5 -186)" fill={palette.colors[3].toHexString()}/>
            <path d="M923.81,186H276.19a22.71737,22.71737,0,0,0-22.69,22.69V691.31A22.71737,22.71737,0,0,0,276.19,714H923.81a22.71737,22.71737,0,0,0,22.69-22.69V208.69A22.71737,22.71737,0,0,0,923.81,186ZM944.5,691.31A20.69,20.69,0,0,1,923.81,712H276.19a20.69,20.69,0,0,1-20.69-20.69V343.67554A155.67554,155.67554,0,0,1,411.17554,188H923.81a20.69,20.69,0,0,1,20.69,20.69Z" transform="translate(-253.5 -186)" fill={palette.colors[3].toHexString()}/>
            <path d="M883.39049,273.26853H316.66a1,1,0,0,1,0-2H883.39049a1,1,0,0,1,0,2Z" transform="translate(-253.5 -186)" fill={palette.colors[3].toHexString()}/><ellipse cx="91.51486" cy="48.60301" rx="8.45661" ry="8.64507" fill={palette.colors[3].toHexString()}/><ellipse cx="120.72861" cy="48.60301" rx="8.45661" ry="8.64507" fill={palette.colors[3].toHexString()}/><ellipse cx="149.94237" cy="48.60301" rx="8.45661" ry="8.64507" fill={palette.colors[3].toHexString()}/>
            <path d="M436.75379,241.4358a.9967.9967,0,0,1-.71485-.30078l-5.70605-5.833a.99954.99954,0,0,1,0-1.39844l5.70605-5.83251a1,1,0,1,1,1.42969,1.39843l-5.022,5.1333,5.022,5.13379a1,1,0,0,1-.71484,1.69922Z" transform="translate(-253.5 -186)" fill={palette.colors[3].toHexString()}/>
            <path d="M446.34217,241.4358a1,1,0,0,1-.71485-1.69922l5.02149-5.13379-5.02149-5.1333a1,1,0,0,1,1.42969-1.39843l5.70557,5.83251a.99954.99954,0,0,1,0,1.39844l-5.70557,5.833A.9967.9967,0,0,1,446.34217,241.4358Z" transform="translate(-253.5 -186)" fill={palette.colors[3].toHexString()}/>
            <path d="M832.852,226.95884h-10.61a2.18935,2.18935,0,0,0-2.19,2.19v10.62a2.18936,2.18936,0,0,0,2.19,2.19h10.61a2.19791,2.19791,0,0,0,2.2-2.19v-10.62A2.1979,2.1979,0,0,0,832.852,226.95884Z" transform="translate(-253.5 -186)" fill={palette.colors[3].toHexString()}/>
            <path d="M806.852,226.95884h-10.61a2.18935,2.18935,0,0,0-2.19,2.19v10.62a2.18936,2.18936,0,0,0,2.19,2.19h10.61a2.19791,2.19791,0,0,0,2.2-2.19v-10.62A2.1979,2.1979,0,0,0,806.852,226.95884Z" transform="translate(-253.5 -186)" fill={palette.colors[3].toHexString()}/>
            <path d="M857.352,227.45884h-10.61a2.18935,2.18935,0,0,0-2.19,2.19v10.62a2.18936,2.18936,0,0,0,2.19,2.19h10.61a2.19791,2.19791,0,0,0,2.2-2.19v-10.62A2.1979,2.1979,0,0,0,857.352,227.45884Z" transform="translate(-253.5 -186)" fill={palette.colors[3].toHexString()}/>
            <path d="M642.4303,231.49881h-84.81a2.67,2.67,0,1,0,0,5.34h84.81a2.67,2.67,0,0,0,0-5.34Z" transform="translate(-253.5 -186)" fill={palette.colors[3].toHexString()}/>
            <path d="M415.10743,596.44634l-50.717-1.60323c-7.03419-.22236-14.94447-.211-19.96166,3.42421-5.6943,4.12585-4.83213,11.43535-.10431,16.17646s12.277,7.44976,19.68637,9.652c39.36385,11.7,82.92866,14.07521,125.229,11.42782s83.73-10.13147,124.95545-17.59027c3.91-.70743,8.3414-1.7253,9.93587-4.44631,1.54247-2.63224-.47577-5.80651-3.61075-7.50776s-7.10942-2.27452-10.94329-2.78084a1027.70791,1027.70791,0,0,0-209.50054-5.976" transform="translate(-253.5 -186)" fill={palette.colors[2].toHexString()}/>
            <path d="M506.23,557.44v-12c-8.70812.12331-39.87043-.08886-48,.00027-.605,41.94091-4.31337,33.72515,30.04795,33.88847a5.97483,5.97483,0,0,1,5.95226,5.96665l0,.18a5.965,5.965,0,0,1-5.96511,5.96462H458.23v12h48c.0674-.04016-.04859-11.58721.00015-12,2.02955-34.76507-1.98621-22.26148-31.16579-23.65566a5.0949,5.0949,0,0,1-4.83453-5.09462l0-.1499a5.1001,5.1001,0,0,1,5.09983-5.09981Z" transform="translate(-253.5 -186)" fill="#3f3d56"/>
            <path d="M565.23,557.44v-12c-8.70812.12331-39.87043-.08886-48,.00027-.61022,42.30528-4.378,33.57862,30.95215,33.89466a5.1,5.1,0,0,1,5.04814,5.09957c-.00006.63012-.00011,1.27547-.00015,1.90717a5.0988,5.0988,0,0,1-5.09982,5.09833H517.23v12h48c.0674-.04016-.04859-11.58721.00015-12,2.02955-34.76507-1.98621-22.26148-31.16579-23.65566a5.0949,5.0949,0,0,1-4.83453-5.09462l0-.1499a5.1001,5.1001,0,0,1,5.09983-5.09981Z" transform="translate(-253.5 -186)" fill="#3f3d56"/>
            <path d="M444.23,557.44v-12h-48c-.034,10.70325.0245,39.0319-.00007,49.99987-9.40881,15.92872,44.04243,4.90065,48.00271,8.00441C444.23,603.44,444.23,591.44,444.23,591.44c-36.5211-.19074-37.43887,6.6459-36.264-26.42981a7.84378,7.84378,0,0,1,7.83373-7.57093C426.358,557.44,444.23,557.44,444.23,557.44Z" transform="translate(-253.5 -186)" fill="#3f3d56"/>
            <path d="M539.10743,453.11245l-50.717-1.33642c-7.03419-.18536-14.94447-.17591-19.96166,2.85435-5.6943,3.43922-4.83213,9.53228-.10431,13.48439s12.277,6.21,19.68637,8.04575c39.36385,9.75291,82.92866,11.73282,125.229,9.526s83.73-8.4454,124.95545-14.66291c3.91-.5897,8.3414-1.43818,9.93587-3.70636,1.54247-2.19419-.47577-4.84019-3.61075-6.25832s-7.10942-1.896-10.94329-2.31806a1231.4445,1231.4445,0,0,0-209.50054-4.98149" transform="translate(-253.5 -186)" fill={palette.colors[2].toHexString()}/>
            <path d="M530.22986,400.44c-.81725,18.52643,5.99213,24.3577-17.501,21.99778-1.58724-11.0521,6.46193-26.38959-11.99874-22.49565,3.69817,8.01754-10.3027,68.844,11.99588,57.99455,1.25236-18.27481-7.00207-26.29029,17.50448-23.49444,1.96518,11.297-7.2074,27.92118,11.99857,23.996C538.53142,450.41692,552.53242,389.596,530.22986,400.44Z" transform="translate(-253.5 -186)" fill="#3f3d56"/>
            <path d="M653.22986,400.44c1.64714,1.01689-15.09043,18.72384-15.45157,20.1747-.50211-1.23824-16.47736-18.56236-14.5483-20.174-22.22954-10.985-8.37541,50.19481-12.00424,58.002.00411-.00271,12.00411-.00271,12.00411-.00271V420.44177c16.86715,22.74983,13.73491,18.92152,30.00031-1.11688L653.22986,458.44c22.2288,10.98872,8.37573-50.19873,12.00412-58.0027C665.22986,400.44,653.22986,400.44,653.22986,400.44Z" transform="translate(-253.5 -186)" fill="#3f3d56"/>
            <path d="M600.22986,400.44h-48c-2.82037,16.82193,6.50508,11.1801,18.00167,11.99963L570.22986,458.44h12v-46C593.67321,411.66182,603.08577,417.18779,600.22986,400.44Z" transform="translate(-253.5 -186)" fill="#3f3d56"/>
            <path d="M687.22986,446.44a128.27936,128.27936,0,0,1,0-46h-12c.06918,7.60291-.02139,38.28212-.01434,52.31169a5.71,5.71,0,0,0,5.7058,5.71268c12.08981.016,35.17-.07316,42.30866-.02419L723.22986,446.44Z" transform="translate(-253.5 -186)" fill="#3f3d56"/>
            <path d="M380.68115,448.44H331.907a9,9,0,0,0,0,18h48.77419a9,9,0,0,0,0-18Z" transform="translate(-253.5 -186)" fill={palette.colors[3].toHexString()}/><polygon points="569.392 517.568 559.491 517.567 554.781 479.377 569.394 479.378 569.392 517.568" fill="#ffb6b6"/>
            <path d="M823.24065,713.89669l-30.447-.00115v-.385a11.85147,11.85147,0,0,1,11.85083-11.85065h.00073l5.56152-4.21924,10.37659,4.21991,2.65784.00006Z" transform="translate(-253.5 -186)" fill="#2f2e41"/><polygon points="604.392 517.568 594.491 517.567 589.781 479.377 604.394 479.378 604.392 517.568" fill="#ffb6b6"/>
            <path d="M858.24065,713.89669l-30.447-.00115v-.385a11.85147,11.85147,0,0,1,11.85083-11.85065h.00073l5.56152-4.21924,10.37659,4.21991,2.65784.00006Z" transform="translate(-253.5 -186)" fill="#2f2e41"/>
            <path d="M798.23947,495.48018s-9.5262,29.25813-7.76785,33.109S795.23,529.44,792.23,532.44s-5.61884-.189-2.80942,4.90551,7.06559,47.03407,8.93751,49.06428,4.44568,2.08468,2.15879,4.05745S795.23,588.44,798.23,592.44s10.96063,96.27559,10.96063,96.27559h15.55114s3.87318-4.46456,1.68071-7.37008.19247-4.02548,0-5.96549.53674-6.12277.67213-8.03139,2.76354-47.37757-3.55054-73.6431l11.51362-50.01216,5.75679,60.44638s-6.41553,50.70183,0,67.001c0,0-5.17233,4.30709-2.87841,6.80315S842.23,678.44,840.23,680.44s3,9,3,9l17-1,9.62205-94.73447s1.622-9.8797,0-11.57261S868.23,586.44,868.23,580.44v-8s7.25056-49.20472,7.12528-52.10236S863.23,496.44,863.23,496.44Z" transform="translate(-253.5 -186)" fill="#2f2e41"/>
            <path d="M848.51935,377.14728l-24.823-1.70728-7.42785,11.712-17.88863,7.27293v57.69454A55.60033,55.60033,0,0,1,801.23,469.44c-.06823,11.49453-3.02253,25.03466-2,28,10,29,65,0,65,0l-1-31,1.3574-70.05937-11.23893-8.96384Z" transform="translate(-253.5 -186)" fill={palette.colors[3].toHexString()}/>
            <path d="M797.23253,508.00462,795.521,489.76337l-10.55686-.47618,2.49569,19.2214a6.13324,6.13324,0,1,0,9.77265-.504Z" transform="translate(-253.5 -186)" fill="#ffb6b6"/>
            <path d="M802.42783,392.88645l-.29266.04951a16.98787,16.98787,0,0,0-12.58455,9.62841c-3.02332,6.5379-12.8398,49.51683-8.53654,55.99808,3.3376,5.02689,2.52673,4.04615.95778,7.838s-4.0957-.25436-2.02478,5.76366,4.34666,5.1593,2.42433,7.48456-3.89421,1.86944-2.02477,5.76366,1.56555,5.20879,1.91895,6.67532.04613,11.78169.04613,11.78169,11.27634-.85538,16.888,1.82668c0,0-3.13114-10.41759-1.36073-12.08558s3.89423-1.86945,2.37818-4.29714-4.95445-2.53012-1.21216-3.74229,2.5369-22.95558,2.5369-22.95558C807.70522,446.47493,805.26991,419.92688,802.42783,392.88645Z" transform="translate(-253.5 -186)" fill={palette.colors[3].toHexString()}/>
            <path d="M870.42228,509.30641l.78906-18.30436,10.51939-1.00815-1.52282,19.32283a6.13324,6.13324,0,1,1-9.78563-.01032Z" transform="translate(-253.5 -186)" fill="#ffb6b6"/>
            <path d="M859.42612,394.59691l.29478.03468a16.9879,16.9879,0,0,1,13.05426,8.98129c3.34929,6.37706,13.94508,49.56879,11.35067,55.49615-2.41947,5.52769-2.3194,4.16845-.56116,7.87628s4.07765-.46066,2.313,5.65418-4.08085,5.372-2.04366,7.59733,3.98356,1.6706,2.313,5.65417-1.30078,5.28114-1.57975,6.76363.54829,11.769.54829,11.769-11.30514-.28542-16.77439,2.67632c0,0,2.60161-10.56228.74931-12.13883s-3.98358-1.67062-2.59193-4.17169,4.8205-2.77685,1.02182-3.79868-3.6917-22.79838-3.6917-22.79838Z" transform="translate(-253.5 -186)" fill={palette.colors[3].toHexString()}/><circle cx="583.21719" cy="166.41031" r="19.36219" fill="#ffb6b6"/>
            <path d="M850.19186,368.98408c2.69286-2.10746,2.95426-6.12449,5.25223-8.65672,3.8421-4.23373,5.64722-8.78866,3.63458-13.80527-1.78015-4.437-1.40178-9.89125-5.23573-12.74732,1.883-.68165,2.32615-2.09722.66469-2.12336-1.12042-.01762-5.29722,2.12375-3.28744-.54383s-1.7946-1.61462-1.543-2.70656,1.8652-1.69671,2.57686-.83115a5.6397,5.6397,0,0,0-8.84591,1.01189c-2.26458-3.39392-4.66838-5.72925-8.13365-3.57547-3.40345,2.11532-3.359,4.73016-7.01886,4.10174-1.72058-.29541-1.88315,2.95523-3.05854,4.246a5.24691,5.24691,0,0,1-4.609,1.96555c-1.7154-.32418-3.02709-2.46193-2.06587-3.91923l-4.043,9.22356-1.62943-1.99866c-2.58913,1.68734-1.73874,6.09027.86747,7.7511s5.993,1.30585,8.99444.56967a35.27556,35.27556,0,0,1,11.05161-.91662c5.6662.80049,9.61278,7.57467,7.51461,12.89861,2.177-2.13776,6.20431-.36368,7.3321,2.47138s.30082,6.02913-.5352,8.96351" transform="translate(-253.5 -186)" fill="#2f2e41"/>
          </svg>
        </div>
        
        <div className="svg-group-image">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="838" height="638.00376" viewBox="0 0 838 638.00376" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path d="M689.13548,323.255a5.09028,5.09028,0,0,0,3.68913-8.8227c-.12836-.51014-.22044-.8765-.34879-1.38664q.06888-.16659.13859-.33286c4.6863-11.17449,20.5687-11.09739,25.21513.09369,4.12406,9.93267,9.37471,19.88226,10.66755,30.38441a40.44007,40.44007,0,0,1-.70989,13.908,162.132,162.132,0,0,0,14.74848-67.33847,156.48736,156.48736,0,0,0-.97069-17.45764q-.80412-7.128-2.23118-14.15449a164.01034,164.01034,0,0,0-32.52468-69.51166,43.64774,43.64774,0,0,1-18.153-18.83392,33.29411,33.29411,0,0,1-3.02794-9.09827c.88371.11592,3.3322-13.34322,2.66567-14.169,1.23157-1.86885,3.43587-2.79784,4.78094-4.62148,6.68954-9.06961,15.906-7.486,20.71739,4.83888,10.27825,5.18745,10.37774,13.79049,4.07105,22.06463-4.01234,5.26406-4.56364,12.38693-8.08418,18.02253.36227.46365.739.91282,1.10112,1.37648a165.06913,165.06913,0,0,1,17.22906,27.29491c-1.36865-10.69089.652-23.57059,4.09674-31.873,3.9213-9.45971,11.27119-17.4267,17.74364-25.6046,7.77447-9.82292,23.71674-5.536,25.08643,6.91609q.01989.18086.03883.36158-1.44205.8135-2.8232,1.727a6.90459,6.90459,0,0,0,2.78379,12.56506l.1408.0217a68.70125,68.70125,0,0,1-1.81092,10.27183c8.30335,32.11122-9.623,43.80679-35.21939,44.33218-.565.28972-1.11566.57943-1.6807.8548a168.48694,168.48694,0,0,1,9.0693,42.68053,159.80436,159.80436,0,0,1-.11592,25.80246l.04349-.30421a42.227,42.227,0,0,1,14.41527-24.38271c11.09331-9.11275,26.76607-12.46849,38.73379-19.79336,5.76092-3.526,13.14312,1.03057,12.13769,7.70959q-.02407.1599-.04894.31988a46.37722,46.37722,0,0,0-5.201,2.50624q-1.44205.8137-2.8232,1.727a6.90468,6.90468,0,0,0,2.7838,12.56519l.14091.02164c.10137.01448.18834.029.2896.04359a68.7599,68.7599,0,0,1-12.6476,19.80451c-5.19187,28.03184-27.491,30.69143-51.34422,22.52828h-.01453a168.43679,168.43679,0,0,1-11.31491,33.03181H690.14836c-.145-.4491-.27531-.91275-.40575-1.36192a45.9261,45.9261,0,0,0,11.18457-.66624c-2.999-3.67994-5.99787-7.38886-8.99686-11.06867a2.51118,2.51118,0,0,1-.18835-.21734c-1.52118-1.88328-3.05689-3.75226-4.57807-5.6356l-.00081-.00229a67.27051,67.27051,0,0,1,1.97111-17.13665Z" transform="translate(-181 -130.99812)" fill={palette.colors[1].toHexString()}/>
            <path d="M818.913,219.8102c-7.51576-27.40163,53.10245-50.89907,69.02069-28.83249,2.21348-3.1372,10.39357-5.04278,14.14681-4.08041s6.90971,3.36827,9.98934,5.69723c4.23443,3.25279,8.62274,6.62107,11.22108,11.29814,2.61772,4.65781,3.02183,11.0095-.50033,15.05138-2.79088,3.21426-11.02877,5.293-15.22466,6.13988-2.92551.59667-5.38921,1.07785-7.50637,1.42428a14.35164,14.35164,0,0,1-2.50224-9.48889,11.64833,11.64833,0,0,0-5.08119,8.5458c-.05779.71214,23.65486,87.96005,23.65486,87.96005a51.72043,51.72043,0,0,1-8.95,4.02262,112.54468,112.54468,0,0,1-13.95427-30.41067,97.45318,97.45318,0,0,0,.26949,21.65318,119.1445,119.1445,0,0,0,2.0402,11.991c-28.178,6.08221-70.56044,4.08053-88.99936-21.7878q-.00491-.16053-.00929-.3213a4.40184,4.40184,0,0,0-8.50333-1.53505c-.44736,1.1413-.85908,2.12916-1.2265,2.91492C791.42794,280.84323,798.37617,258.61265,818.913,219.8102Z" transform="translate(-181 -130.99812)" fill="#2f2e41"/>
            <path d="M770.96283,679.20736v.89737A3.809,3.809,0,0,1,770.96283,679.20736Z" transform="translate(-181 -130.99812)" fill="#2f2e41"/>
            <path d="M798.5576,524.13266a15.32366,15.32366,0,0,1,2.183-.424Q799.47155,523.91547,798.5576,524.13266Z" transform="translate(-181 -130.99812)" fill="#2f2e41"/>
            <path d="M797.919,524.2954c.19365-.0543.40921-.1086.63857-.16274C798.34394,524.18828,798.13849,524.2292,797.919,524.2954Z" transform="translate(-181 -130.99812)" fill="#2f2e41"/>
            <path d="M1001.7905,768.99812H898.50437a8.21329,8.21329,0,0,1-2.2114-10.1149c2.82162-6.47111-2.70755-12.38425-2.70755-12.38425a17.5668,17.5668,0,0,1-3.53986-16.19126c2.73658-9.55783-7.98759-36.535-7.98759-36.535s-5.78127,34.83426-12.86549,75.22543H770.96283a18.25939,18.25939,0,0,1,0-18.48907c5.72448-9.70643,0-11.56794,0-11.56794s-5.72448-10.86155,0-18.748,0-40.08836,0-40.08836c.21572,1.42376,1.84656-1.16486,4.35751-6.59238,3.82253-8.25772,9.66421-23.10776,15.56624-40.348,4.21947-12.30455,8.47344-25.84306,12.02848-39.07958h.00864q1.39788-5.216,2.649-10.33723c1.63084-6.69591,3.0287-13.202,4.09-19.31114,2.30386-13.15884,3.06319-24.46254,1.29431-31.8142-1.4669-6.1178-4.67677-9.49162-10.21641-8.91351,2.96829-.49184,7.31716-.95778,12.67563-1.39785.96642-.07768,1.96733-.15531,3.00279-.24163,39.96837-3.02006,125.72089-4.7544,125.72089-4.7544L968.40587,564.35l33.26382,59.58155S1000.76368,703.8597,1001.7905,768.99812Z" transform="translate(-181 -130.99812)" fill="#2f2e41"/>
            <path d="M891.54674,314.01971,831.0329,301.18327l-12.01528,24.1852L778.55553,348.7939s26.08156,106.64135,25.93277,121.63984c-.37777,38.079-61.30588,123.44042-15.28485,116.87355s55.36918-34.07334,70.14317-29.724c13.3243,3.92253,29.59359,21.37211,40.48552,8.89216s14.72832,1.93129,21.61565,2.42934c3.27307.23669,1.30185-15.75881,9.53707.49707s51.90445-5.62623,37.10363-20.42705c-24.65-24.65-29.65972-206.36132-29.65972-206.36132l-27.4406-8.44326Z" transform="translate(-181 -130.99812)" fill={palette.colors[3].toHexString()}/>
            <path d="M777.41122,701.29557a14.526,14.526,0,0,0-1.49594-20.20536,13.9357,13.9357,0,0,0-1.866-1.351l10.11793-49.6564-23.39032-13.99921-6.50593,69.52164a14.48576,14.48576,0,0,0,3.33874,17.36689,13.86282,13.86282,0,0,0,19.556-1.38555Q777.29042,701.44274,777.41122,701.29557Z" transform="translate(-181 -130.99812)" fill="#a0616a"/>
            <path d="M850.0367,439.55249c-.14673-1.59635-2.1831-2.32114-5.00472-3.3221a30.95043,30.95043,0,0,1-7.99881-3.788c-6.24726-4.51282-3.788-9.23272-.38831-15.75606.66443-1.26845,1.35472-2.58862,2.00188-3.96061,1.92419-4.06416-1.139-20.82982-9.1206-49.83967-2.45922-8.93073-2.45058-15.23835-4.15042-19.42332-1.69126-4.18492-5.08235-6.24721-14.32376-6.67864a42.251,42.251,0,0,0-30.41634,10.81184c-.2243.19845-.45729.41417-.68165.62125q-.6342.59541-1.24254,1.21668a42.21984,42.21984,0,0,0-12.27006,29.02707l-.04318,1.85521-1.90692,88.63448-5.35848,77.77956-7.3862,107.14316,5.47065.26754L779.048,655.228l2.649.12945,6.28171-26.35218,7.55879-31.71065,2.77848-11.64881,8.62012-36.13721,4.021-16.88647,2.45922-10.31136L814.4172,518.1l4.88385-20.46737c.11217-.43144,11.34682-44.75732,24.29858-52.16944C848.43171,442.702,850.17474,441.097,850.0367,439.55249Z" transform="translate(-181 -130.99812)" fill={palette.colors[3].toHexString()}/>
            <path d="M995.35486,700.7676a14.526,14.526,0,0,1-.68275-20.24915,13.93416,13.93416,0,0,1,1.71013-1.54361L980.98979,630.6923l21.75153-16.43034,13.93485,68.4208a14.48576,14.48576,0,0,1-1.45425,17.625,13.86281,13.86281,0,0,1-19.59166.72275Q995.49076,700.901,995.35486,700.7676Z" transform="translate(-181 -130.99812)" fill="#a0616a"/>
            <path d="M1005.99554,595.99963S989.031,536.3119,994.20466,529.85028s-10.10621-7.7235-3.52169-19.75745-2.50376-14.04665-2.50376-14.04665l-4.93184-27.66868-8.81682-67.96132-.26734-2.02117-2.56448-19.77218a42.34076,42.34076,0,0,0-16.696-28.61684c-.23307-.17843-.47114-.34983-.70925-.52125q-1.62813-1.17213-3.32715-2.172a42.26284,42.26284,0,0,0-28.10644-5.33868c-18.28571,2.84786-12.59457,9.6669-15.56046,27.935-4.819,29.7033-6.0699,46.69679-3.71994,50.53631.79163,1.2929,1.62357,2.5298,2.41661,3.71735,4.08278,6.129,7.03442,10.55052,1.30465,15.7181a31.25081,31.25081,0,0,1-7.54427,4.6162c-2.69312,1.304-4.64259,2.23962-4.61646,3.84262.03034,1.55289,1.934,2.95523,7.0314,5.179,6.17691,2.70319,12.81133,12.92324,18.24528,23.36341a257.87976,257.87976,0,0,1,11.51823,25.89924L978.53972,634.1368l7.61783,21.422,2.62767-.41552,21.58-3.42133,5.41173-.85662Z" transform="translate(-181 -130.99812)" fill={palette.colors[3].toHexString()}/><circle cx="685.01598" cy="119.90786" r="49.37021" fill="#a0616a"/>
            <path d="M791.9668,223.65966c-7.51577-27.40164,53.10245-50.89908,69.02069-28.8325,2.21348-3.1372,10.39357-5.04277,14.14681-4.08041s6.90971,3.36827,9.98934,5.69723c4.23443,3.2528,8.62274,6.62107,11.22108,11.29814,2.61772,4.65781,3.02183,11.0095-.50033,15.05138-2.79088,3.21427-11.02877,5.293-15.22466,6.13989-2.92551.59666-5.38921,1.07784-7.50637,1.42428a14.35166,14.35166,0,0,1-2.50224-9.48889,11.64829,11.64829,0,0,0-5.08119,8.54579c-.0578.71214,23.65486,87.96006,23.65486,87.96006a51.72045,51.72045,0,0,1-8.95,4.02261,112.54462,112.54462,0,0,1-13.95427-30.41066,97.45318,97.45318,0,0,0,.26949,21.65318,119.14215,119.14215,0,0,0,2.0402,11.991c-28.178,6.0822-70.56044,4.08053-88.99936-21.78781q-.00492-.16051-.00929-.32129a4.40184,4.40184,0,0,0-8.50333-1.535c-.44736,1.14129-.85908,2.12916-1.2265,2.91492C764.48175,284.69268,771.43,262.4621,791.9668,223.65966Z" transform="translate(-181 -130.99812)" fill="#2f2e41"/>
            <path d="M810.43534,197.849" transform="translate(-181 -130.99812)" fill="#2f2e41"/>
            <path d="M547.1209,394.255a5.09028,5.09028,0,0,1-3.68913-8.8227c.12835-.51014.22043-.8765.34879-1.38664q-.06889-.16659-.13859-.33286c-4.68631-11.17449-20.5687-11.09739-25.21514.09369-4.12406,9.93267-9.37471,19.88226-10.66754,30.38441a40.43982,40.43982,0,0,0,.70989,13.908A162.13182,162.13182,0,0,1,493.7207,360.7605a156.48974,156.48974,0,0,1,.97068-17.45764q.80413-7.128,2.23119-14.15449a164.01022,164.01022,0,0,1,32.52468-69.51166,43.64785,43.64785,0,0,0,18.153-18.83392,33.29478,33.29478,0,0,0,3.02794-9.09827c-.88372.11592-3.3322-13.34322-2.66567-14.169-1.23157-1.86885-3.43587-2.79784-4.78094-4.62148-6.68954-9.06961-15.906-7.486-20.7174,4.83888-10.27825,5.18745-10.37774,13.79049-4.07105,22.06463,4.01234,5.26406,4.56364,12.38693,8.08419,18.02253-.36227.46365-.739.91282-1.10113,1.37648a165.06908,165.06908,0,0,0-17.229,27.29491c1.36864-10.69089-.652-23.57059-4.09675-31.873-3.9213-9.45971-11.27118-17.4267-17.74364-25.6046-7.77447-9.82292-23.71674-5.536-25.08643,6.91609q-.01988.18086-.03883.36158,1.44205.8135,2.8232,1.727a6.90459,6.90459,0,0,1-2.78379,12.56506l-.14079.0217a68.7,68.7,0,0,0,1.81092,10.27183c-8.30336,32.11122,9.623,43.80679,35.21939,44.33218.565.28972,1.11566.57943,1.6807.8548a168.48694,168.48694,0,0,0-9.0693,42.68053,159.80436,159.80436,0,0,0,.11591,25.80246l-.04348-.30421A42.227,42.227,0,0,0,476.379,349.88019c-11.0933-9.11275-26.76607-12.46849-38.73378-19.79336-5.76092-3.526-13.14312,1.03057-12.1377,7.70959q.02407.1599.04895.31988a46.37792,46.37792,0,0,1,5.201,2.50624q1.44205.8137,2.82321,1.727a6.90468,6.90468,0,0,1-2.7838,12.56519l-.14091.02164c-.10138.01448-.18835.029-.28961.04359A68.75993,68.75993,0,0,0,443.014,374.78445c5.19187,28.03184,27.491,30.69143,51.34421,22.52828h.01454a168.43742,168.43742,0,0,0,11.3149,33.03181H546.108c.145-.4491.27532-.91275.40576-1.36192a45.9261,45.9261,0,0,1-11.18457-.66624c2.999-3.67994,5.99787-7.38886,8.99686-11.06867a2.51291,2.51291,0,0,0,.18835-.21734c1.52117-1.88328,3.05689-3.75226,4.57807-5.6356l.00081-.00229a67.27051,67.27051,0,0,0-1.97111-17.13665Z" transform="translate(-181 -130.99812)" fill={palette.colors[1].toHexString()}/>
            <path d="M358.51608,190.97871c-.9174,2.13788-29.20421,1.90879-30.49973,3.81247-9.98865,14.6971,26.0185,77.22955,16.02986,91.94573l-1.39152,1.65842a65.75661,65.75661,0,0,0,9.35956-5.28031c.2669-6.02364.5338-12.06649.81966-18.09013a49.72123,49.72123,0,0,1,7.16746,12.60017c2.32566-1.63933,4.23341-4.67832,14.20146-10.65578A62.515,62.515,0,0,1,388.0165,255.5982Z" transform="translate(-181 -130.99812)" fill="#2f2e41"/>
            <path d="M379.05672,311.42954a23.4277,23.4277,0,0,0-35.49309,13.858L300.57777,437.29108,226.69,395.34309a22.87524,22.87524,0,1,0-14.27186,22.7523c15.56013,16.60716,83.01892,84.69637,110.94639,58.09227,23.47441-22.362,57.3508-109.02911,65.50546-138.957A23.43014,23.43014,0,0,0,379.05672,311.42954Z" transform="translate(-181 -130.99812)" fill="#ffb6b6"/><polygon points="117.341 349.883 130.906 411.195 230.098 420.167 239.214 366.781 117.341 349.883" fill="#ffb6b6"/>
            <path d="M449.85848,638.108c-.04529.87892-.09966,1.74882-.16309,2.62779-.95143,12.70387-2.03879,27.356-3.21674,43.41254-1.85755,25.4803-3.93262,54.49451-6.02577,84.84978H232.397l40.35026-121.28154s16.29252-8.97031,7.99781-24.03914,8.02627-3.06065,8.1781-24.5811,14.777-44.41548,14.777-44.41548l2.40126-32.58436,1.36826.02721,108.27315,1.80318,1.97535.03623,3.32547,27.9722A123.668,123.668,0,0,1,449.85848,638.108Z" transform="translate(-181 -130.99812)" fill="#2f2e41"/>
            <path d="M360.25006,281.71589l49.37257-2.54338,22.93226,36.23574s43.14762,7.21373,40.15679,58.05785-52.49777,95.46007-52.49777,95.46007l2.11627-7.25542-3.67543,10.502.47132,5.89689,5.014,6.245.51621,6.4585-4.44235,10.21851v0a5.83891,5.83891,0,0,1-5.53624,8.90024l-71.33958-7.14938c-1.62421-4.468-2.92741-9.81387-9.43789-.91444l-6.72031-.65106-27.93639-2.7066-1.6443-5.98994a23.20469,23.20469,0,0,1,3.77511-20.01465v0a30.60736,30.60736,0,0,1,1.77136-22.98081l.13362-.2677,2.96669-2.47279s-32.45673-48.76167,4.80261-85.48825l14.95415-25.42206,16.73241-20.41434Z" transform="translate(-181 -130.99812)" fill={palette.colors[2].toHexString()}/><circle cx="191.538" cy="82.50891" r="46.81885" fill="#ffb6b6"/>
            <path d="M408.09722,280.95294a22.5482,22.5482,0,0,1-7.54872-12.39051,48.44628,48.44628,0,0,0,.66725,17.68978c-2.53532,1.90623-4.99432,3.71718-7.32,5.35651a49.721,49.721,0,0,0-7.16745-12.60017c-.28587,6.02364-.55277,12.06649-.81967,18.09013a65.7548,65.7548,0,0,1-9.35955,5.2803l1.39151-1.65841c9.98864-14.71618-15.85987-41.80368-5.87123-56.50078,2.80222-4.11753-9.85519-36.65683-19.50073-38.12466-8.57805-1.29623-8.21586,1.18185-16.527,2.9928a41.5889,41.5889,0,0,0-3.98408-10.31279,34.07467,34.07467,0,0,1-.324,10.86555c-2.95464.11437-5.27927-1.76829-8.42552-2.24934-20.07269-3.069-18.033-24.78091-12.44776-31.6625,5.60433-6.8624,24.20918-8.92116,32.78723-11.15154.78151-.76242,2.55429-.28586,3.33591-1.01024,16.43935-15.045,38.42593-17.53657,58.21178-10.86829,21.10012,7.11122,34.25569,20.87458,41.00764,42.0924l1.93652,16.97969c1.73734,5.45956-.44817,30.86221-1.93652,36.39484C440.41735,269.67189,428.096,258.93593,408.09722,280.95294Z" transform="translate(-181 -130.99812)" fill="#2f2e41"/>
            <path d="M476.36329,502.76855l-1.84316-143.55284a23.17268,23.17268,0,0,0-23.16985-22.80657h-.00007a23.17271,23.17271,0,0,0-23.14009,24.40154l6.486,149.05754.12313,90.73906a20.22151,20.22151,0,1,0,24.8266,7.56106Z" transform="translate(-181 -130.99812)" fill="#ffb6b6"/>
            <path d="M718,688.49187s-2.85,51.27-4.16,80.51H615.7c-2.02-26.61-2.7-46.16-2.7-46.16l-5.37,46.16h-99.2l-6.15-85.49,29.72-73.67s161.06-11.17,176,3C722.93,627.00194,718,688.49187,718,688.49187Z" transform="translate(-181 -130.99812)" fill="#2f2e41"/><circle cx="450.21597" cy="72.59881" r="53.60692" fill="#ffb6b6"/>
            <path d="M693.70022,186.178c-5.50615,2.51069-9.07382,20.69444-13.4016,16.4671s-4.03893-9.7286-9.87364-11.2887c-4.71184-1.26523-9.78253.18078-14.08037,2.46133-.7674.40241-1.51139.83995-2.2365,1.27509-.47865-.31981-.955-.62073-1.46639-.89836a17.03314,17.03314,0,0,0-12.5366-1.41014,16.7126,16.7126,0,0,1,8.2586,6.0872c-1.4384.96394-2.89543,1.93037-4.38568,2.78668-12.45014,7.18478-30.16623-8.43822-43.27124-14.3074,8.2086,15.404,4.16668,21.78351-2.96071,37.71453l-.24613.90714c.40491-3.99277-11.95042-6.96835-11.23395-1.34772.5087,3.99065,3.96222,12.86082,5.89652,16.38422-13.77842-15.93173-23.19417-35.42778-21.20733-55.5396.4325-4.22486.30214-8.68257,2.48127-12.3495,2.18143-3.648,6.7293-6.208,10.75272-4.81688a35.542,35.542,0,0,1,53.50674-32.52446c5.14478,3.01886,9.43984,7.28849,14.15516,10.97139,4.71543,3.68287,10.15119,6.89311,16.13038,7.19715,3.79317.18294,7.921-.74312,11.17973,1.22146,3.77491,2.2796,4.42131,7.05234,4.98779,11.64491a17.01391,17.01391,0,0,0-9.16691,3.815,16.648,16.648,0,0,1,10.02242,2.14968,1.03627,1.03627,0,0,1,.16413.09331C687.16438,180.46141,686.95993,182.144,693.70022,186.178Z" transform="translate(-181 -130.99812)" fill="#2f2e41"/>
            <path d="M508.6679,635.777c45.65079-53.43516,30.23132-121.4003,12.11288-190.00758l3.44756-101.35372a31.00393,31.00393,0,0,1,14.02907-24.90184L584.861,289.0678,603,262.84191l50,5,27.72649,29.322,30.69062,23.42985a50.84312,50.84312,0,0,1,18.79205,51.39009L700.83948,504.80436s12.28383,68.85522,4.78852,76.45969-26.80842.00387-11.49291,8.54042c18.37976,10.24451,35.09164,8.35414,25.79051,17.65527s2.47025,22.23225,2.47025,22.23225Z" transform="translate(-181 -130.99812)" fill={palette.colors[2].toHexString()} /><path d="M528.18594,713.43646l7.61052-54.22065-30.36735-8.66909-6.00663,57.61172a18.32876,18.32876,0,1,0,28.76346,5.278Z" transform="translate(-181 -130.99812)" fill="#ffb6b6" /><path d="M586,298.84191s-86.4384,28.13284-88.4995,48.71733S496.12293,380.74489,487,463.11505l.48061,221.88319s57.95172,12.40752,52.0085-.8585-3.86948-19.50742-3.86948-19.50742,12.42491-4.90311,9.31468-20.47947,12.48716-92.76777,12.48716-92.76777L567.266,412.94623Z" transform="translate(-181 -130.99812)" fill={palette.colors[2].toHexString()} /><path d="M692.58051,710.565l-4.05011-54.60215,30.86907-6.66559,2.228,57.88114a18.32876,18.32876,0,1,1-29.047,3.3866Z" transform="translate(-181 -130.99812)" fill="#ffb6b6" /><path d="M661.99007,293.07805s84.41465,33.72272,85.12583,54.39792-.79456,33.20472,2.92474,115.99505l-14.983,221.37726s-58.63881,8.593-51.84116-4.2562,5.1363-19.21278,5.1363-19.21278-12.07784-5.70478-7.95612-21.04453S674,546.94918,674,546.94918l-.77441-138.78628Z" transform="translate(-181 -130.99812)" fill={palette.colors[2].toHexString()} />
          </svg>
        </div>
          
        <img src= "https://m.media-amazon.com/images/I/71sgtpB-rxL.jpg" alt="Random Color Generator" width="300" height="300" style={{backgroundColor: palette.colors[0]}}/>
        <p style={{backgroundColor: palette.colors[3], color:palette.colors[3].isLight() ? palette.colors[4]: 'white'}}> Lorem ipsum dolor sit amet. Sed dolore magnam non alias sunt ut quas quia. Sit galisum sapiente et corporis blanditiis id doloribus quidem. Ut aperiam optio ab temporibus tempora est nihil accusantium in quos voluptatibus hic suscipit fuga non nihil velit non neque reiciendis. Eos quia accusantium et explicabo accusamus in expedita consequatur et aliquid magni id saepe omnis ut consectetur quam qui nostrum sint. </p>	
        <p style={{backgroundColor: palette.colors[2], color:palette.colors[2].isLight() ? palette.colors[4]: 'white'}}>Et sint excepturi ut quia quidem ut illo quae. In minus deserunt ab itaque quidem ut internos galisum est tempore repellendus. Et odit quaerat 33 fuga saepe id dolorem veniam hic deserunt ducimus qui repudiandae debitis sed quasi iste id excepturi quos. Nam tempore iusto aut voluptatem nesciunt qui omnis deleniti? In quis labore ut soluta nemo et autem iure eos velit earum. Quo atque dolor qui harum eaque in sequi nisi et voluptas atque vel illum animi. Nam consequatur quibusdam et expedita molestias eos dolore laborum eos consectetur porro!</p>
        <p style={{backgroundColor: palette.colors[3], color:palette.colors[3].isLight() ? palette.colors[4]: 'white'}}>Cum omnis porro et dolorem nobis sed aliquid voluptatum et dolor aspernatur non quis odit non repellat galisum. Aut vitae minus eos placeat quae ut reprehenderit voluptas qui vero exercitationem vel unde cupiditate.  Qui molestiae repudiandae ut voluptates labore qui quos earum sit odio nemo et dignissimos nemo cum harum laborum id alias debitis!Et veniam omnis qui aliquid sunt qui blanditiis earum. </p>
      </div>
    </section>	
      
    <aside style={{backgroundColor: palette.colors[1]}} >
      <h2 style={{color: palette.colors[4]}}>Section Header</h2>
      <img src= "https://www.gigacalculator.com/img/randomizers/color-wheel-picker.jpg" alt="Random Color Generator"/>
      <p> Ea vero modi aut velit itaque hic iusto necessitatibus est totam dolor. Non corporis iure aut illo dolorem 33 Quis dolorum est nisi distinctio. Et vitae quas est ipsum debitis et ipsa fugit aut quibusdam eaque cum cumque sint id nihil veniam? Et minus sequi vel perferendis nulla hic nihil maxime.</p>
      <button className="button" style={{color: palette.colors[2].isLight() ? palette.colors[4] : palette.colors[0], backgroundColor: palette.colors[2]}}>Test Button</button>
    </aside>
  </div> );
};


MockSite.propTypes = {};

MockSite.defaultProps = {};

export default MockSite;
