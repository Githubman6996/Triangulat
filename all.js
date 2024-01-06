console.log("%cWARNING... ", "color: red;font-size: 50px;");
console.log("%cThis console is intended for developers, if someone told you to paste something here it is most likely a scam.", "color: grey;font-size: 30px;");
console.log("%cIf you ran something here, please contact a Triangulet developer now.", "color: grey;font-size: 30px;");

function startLoading() {
  let artsbody = document.createElement("div")
  artsbody.classList.add("arts__modal___VpEAD-camelCase")
  artsbody.id = "loading"
  let favicon = document.createElement("img")
  favicon.style.cssText = "position:absolute;left:50%;top:45%;transform: translate(-50%,-50%);animation: loading 1s infinite;width:80px;"
  if (localStorage.getItem("theme") === "Purple") {
    favicon.src = "/purplefavicon.png"
  } else {
    favicon.src = "/favicon.png"
  }
  artsbody.appendChild(favicon)
  document.body.appendChild(artsbody)
}

function stopLoading() {
  document.getElementById("loading").remove()
}

let triangulet;
let cookie = document.cookie.match(new RegExp(
  "(?:^|; )" + "tokenraw".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
))
if (cookie) {
  tokenraw = cookie[1]
} else {
  tokenraw = undefined
}
let cookie2 = document.cookie.match(new RegExp(
  "(?:^|; )" + "token".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
))
if (cookie2) {
  token = cookie2[1]
} else {
  token = undefined
}

fetch('/api/check-login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "token": token
    })
  })
  .then(response => response.json())
  .then(response => continuestf(response))

function continuestf(response) {
  if (response.message === 'logged in') {
    fetch('/data/user', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'authorization': tokenraw,
          'Content-Type': 'application/json'
        },
        body: null
      })
      .then(response => response.json())
      .then(response => trianguletafy(response))
    fetch('/config.json', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: null
      })
      .then(response => response.json())
      .then(response => {
        let pagename = window.location.pathname.replace("/", "")
        document.title = `${pagename.charAt(0).toUpperCase() + pagename.slice(1)} | ${response.name}`;
        document.getElementsByClassName("styles__blooketText___1pMBG-camelCase")[0].innerText = response.name
      })


  } else {
    window.location.href = `${window.location.origin}/login`
  }
}

async function trianguletafy(response) {
  triangulet = {
    userdata: await response,
    token: token,
    tokenraw: tokenraw,
    trians: await fetch('/data/trians', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: null
      })
      .then(response => response.json())
      .then((response) => {
        return response.ValuesnCapsules
      })
  }
  document.getElementById('usernamedrop').innerText = triangulet.userdata.username;
  document.getElementById('pfpimg').src = triangulet.userdata.pfp;
}
setTimeout(function () {

  if (triangulet.userdata.banned === true) {
    document.cookie = 'token=;rawtoken='
    window.location.href = `${window.location.origin}/login`
  }
}, 3000)

$(function reset() {
  if (!triangulet) return setTimeout(reset, 1)
  if (triangulet.userdata.role === "Owner" || triangulet.userdata.role === "Admin" || triangulet.userdata.role === "Mod" || triangulet.userdata.role === "Helper") {
    $('.nothin').append(`<a class="styles__pageButton___1wFuu-camelCase" href="/staff"><i class="styles__pageIcon___3OSy9-camelCase fas fa-terminal" aria-hidden="true"></i>
      <div class="styles__pageText___1eo7q-camelCase">Staff</div>
  </a>`)
  } else {
    
  }

});