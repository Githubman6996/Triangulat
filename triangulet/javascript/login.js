let cookie = document.cookie.match(new RegExp(
    "(?:^|; )" + "token".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ))
  if (cookie) {
    token = cookie[1]
    
  }
  else {
    token = undefined
  }
    fetch('/api/check-login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"token":token})
    })
    .then(response => response.json())
    .then(response => continuestf(response))
    function continuestf(response) {
    if (response.message === 'logged in') {
        window.location.href = `${window.location.origin}/stats`
    }
    else {
        document.getElementById('logbtn').onclick = (event) => {
            if ($(".styles__errorContainer___1LbDZ-camelCase").length > 0) $(".styles__errorContainer___1LbDZ-camelCase").remove();
            event.preventDefault()
            let username =  document.getElementById('username').value
            let password = document.getElementById('password').value
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "username": username,"password":password })
        })
        .then(response => response.json())
        .then(response => checkreq(response))
        }
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
          let pagename = window.location.pathname.replace("/","")
          document.title = `${pagename.charAt(0).toUpperCase() + pagename.slice(1)} | ${response.name}`;
          document.getElementsByClassName("styles__blooketText___1pMBG-camelCase")[0].innerText = response.name
        })
    }
    }
    function checkreq(response) {
        if (response.message === "login Successful"){
            document.cookie=`token=${response.token}`
            document.cookie=`tokenraw=${response.tokenraw}`
            window.location.href = `${window.location.origin}/stats`
        }
        else {
            $(".center-square").append(`<div class="styles__errorContainer___1LbDZ-camelCase"><i class="styles__errorIcon___3JrS4-camelCase fas fa-times-circle" aria-hidden="true"></i><div class="styles__errorText___3OuU1-camelCase">${response.message}</div></div>`)
        }
    }    
