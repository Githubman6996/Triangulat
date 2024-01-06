let themesdone;
    if (localStorage.getItem('theme') == 'Purple') {

        let change = (elem, css, value) => {
            setInterval(() => {
              if (document.querySelectorAll(elem).length) Array.from(document.querySelectorAll(elem)).forEach(t => t.style[css] = value);
            }, 25);
          };
          
          $(function reset() {
            if (!document.head) return setTimeout(reset, 1)
            let styleElement = document.createElement("style");
        styleElement.textContent = `::placeholder { color: #8521B7; } ::-webkit-scrollbar-track { background: #4d136b; } ::-webkit-scrollbar-thumb { background: #7b1ea9; } ::-webkit-scrollbar-thumb:hover { background: #a436db; }`;
        document.head.appendChild(styleElement);
        let link = document.createElement("link")
        link.rel = "shortcut icon"
        link.href = "/media/misc/purplefavicon.png"
        document.head.appendChild(link)
          })
        let hover = (elem, css, value) => {
            $('head').append(`<style>${elem}:hover { ${css}: ${value} !important }</style>`)
          };
        change('.styles__edge___3eWfq-camelCase','background-color','#a436db')
        change('.styles__front___vcvuy-camelCase','background-color','#a436db')
        change('.headerside','background-color', '#8521B7')
        change('.styles__background___2J-JA-camelCase','background-color', '#8521B7')
        change('.signUpButton','background-color', '#8521B7')
        change('.center-square','background-color', '#4d136b')
        hover('.welcomeButton','color', '#8521B7')
        change('.styles__chatInput___hfdT6-camelCase','border', '1px solid #4d136b')
        change('.styles__chatInput___hfdT6-camelCase', 'background-color','#7b1ea9')
        change('.navigation-line','background-color','#4d136b')
        change('.styles__icon___358UQ-camelCase','color','#b55ce2')
        hover('.styles__button___2hNZo-camelCase','border-color','#3f3f3f')
        change('.center-square','box-shadow','inset 0 -7px #3f0a5b')
        change('.center-square-create','box-shadow','inset 0 -7px #3f0a5b')
        change('.styles__button___2hNZo-camelCase','background-color','#4d136b')
        change('.styles__input___2XTSp-camelCase','background-color','#4d136b')
        change('.styles__buttonFilled___23Dcn-camelCase','border-color','#b55ce2')
        change('.styles__forgotLink___KkpPa-camelCase','color','#b55ce2')
        change('.styles__sidebar___1XqWi-camelCase','background-color','#4d136b')
        change('.styles__statsContainer___QnrRB-camelCase','background-color','#4d136b')
        change('.styles__statContainer___QKuOF-camelCase','background-color','#8521B7')
        change('.styles__containerHeader___3xghM-camelCase','background-color','#4d136b')
        change('.styles__container___1BPm9-camelCase','background-color','#4d136b')
        change('.styles__container___1BPm9-camelCase','border-color','#7b1ea9')
        change('.styles__input___2vJSW-camelCase','background-color','#4d136b')
        change('.styles__container___3St5B-camelCase','background-color','#4d136b')
        change('.styles__containerHeaderInside___2omQm-camelCase','background','linear-gradient(#a436db,#a436db 50%,#7b1ea9 50.01%,#7b1ea9)')
        change('.styles__profileContainer___CSuIE-camelCase','background-color','#4d136b')
        change('.styles__profileContainer___CSuIE-camelCase','box-shadow','inset 0 -8px #4d136b, 0 0 4px rgba(0, 0, 0, 0.15)')
        change('.styles__profileDropdownMenu___2jUAA-camelCase','box-shadow','inset 0 -8px #4d136b, 0 0 4px rgba(0, 0, 0, 0.15)')
        change('.styles__profileDropdownMenu___2jUAA-camelCase','background-color','#4d136b')
        hover('.styles__profileDropdownOption___ljZXD-camelCase','background-color','#4d136b')
        change('.styles__profileDropdownOption___ljZXD-camelCase','background-color','#a436db')
        change('.styles__infoContainer___2uI-S-camelCase','background-color','#4d136b')
        change('.styles__headerIcon___1ykdN-camelCase','color','#b55ce2')
        hover('.styles__pageButton___1wFuu-camelCase','background-color','#8521B7')
        change('.postbackground','background-color','#7b1ea9')
        hover(".styles__bottomIcon___3FswG-camelCase",'color','#4d136b')
        change('.postbackground','color','#fff')
        change('.explaination','color','#4d136b')
        change('.center-square-create','background-color','#4d136b')
        change('.fourofoursquare','background-color','#7b1ea9')
        change('.fourofoursquare','color','#fff')
        change('.styles__left___9beun-camelCase','background-color','#7b1ea9')
        change('.styles__tokenBalance___1FHgT-camelCase','background-color','#4d136b')
        change('#themeselect','background-color','rgb(164, 54, 219)')
        if (window.location.pathname == '/stats') {
            $(function reset() {
                if (!document.getElementsByClassName('styles__headerBg___12ogR-camelCase') || !document.getElementById("profiletrian")) return setTimeout(reset, 1)
            document.getElementsByClassName('styles__headerBg___12ogR-camelCase')[0].src = '/media/misc/purplestatbackground.png'
        })
        }
        else if (window.location.pathname == '/trians') {
            $(function reset() {
                if (!document.getElementById("trianimg") || !document.getElementById("trianbackground")) return setTimeout(reset, 1)
            document.getElementById('trianimg').src = "/media/misc/purplefavicon.png"
            document.getElementById('trianbackground').src = '/media/misc/purpletrianbackground.png'
            })
        }
        else if (window.location.pathname == '/market') {
            $(function reset() {
                if (!document.getElementById("phill") || !document.getElementById("market")) return setTimeout(reset, 1)
            document.getElementById("phill").src = "/media/misc/purplephill.png"
            document.getElementById("market").src = "/media/misc/purplemarket.png"
            })
        }
    }
    else {
    }
