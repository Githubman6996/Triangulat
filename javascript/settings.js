startLoading()
$(function reset() {
    if (!triangulet) return setTimeout(reset, 1)
    stopLoading()
    function ordinal_suffix_of(i) {
        let j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return i + "st";
        }
        if (j == 2 && k != 12) {
            return i + "nd";
        }
        if (j == 3 && k != 13) {
            return i + "rd";
        }
        return i + "th";
    }
    let date = new Date(triangulet.userdata.joined)
    let splited = date.toLocaleString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).split(" ")
    let together = splited[1] + " " + ordinal_suffix_of(splited[0]) + ", " + splited[2]
    document.getElementById('joined').innerHTML = `<b>Joined:</b> ${together}`
    document.getElementById('username').innerHTML = `<b>Username:</b> ${triangulet.userdata.username}`
    document.getElementById("role").innerHTML = `<b>Role:</b> ${triangulet.userdata.role}`
    if (localStorage.getItem('theme') == 'Purple') {
        document.getElementById('themeselect').value = "Purple"
    }
    else {
        document.getElementById('themeselect').value = "Green"
    }
    document.getElementById('themeselect').onchange = () => {
        localStorage.setItem('theme', document.getElementById('themeselect').value)
        location.reload();
    } 
    document.getElementById("chnguser").onclick = () => {
        $('body').append(`
    <div class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase">Change Username:</div><br><div class="styles__holder___3CEfN-camelCase"><div class="styles__numRow___xh98F-camelCase"><div class="styles__inputContainer___2Fn7J-camelCase styles__inputFilled___3AmpF-camelCase" style="width: 305px; margin: 0px;"><input class="styles__input___2vJSW-camelCase" id="newuser" style="width: 100%; text-align: center;" placeholder="New Username" fdprocessedid="s86fb"></div></div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__numRow___xh98F-camelCase"><div class="styles__inputContainer___2Fn7J-camelCase styles__inputFilled___3AmpF-camelCase" style="width: 305px; margin: 0px;"><input placeholder="Password" type="password" style="width: 100%; text-align: center;" id="password" class="styles__input___2vJSW-camelCase"></div></div></div><div class="styles__buttonContainer___2EaVD-camelCase"><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" id="yes" role="button"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: rgb(32, 150, 55);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: rgb(32, 150, 55);">Yes</div></div><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" id="no" role="button"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: rgb(38, 175, 64);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: rgb(38, 175, 64);">No</div></div></div></form></div>
    `)
        document.getElementById("yes").onclick = () => {
            fetch('/api/setusername', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "authorization": triangulet.tokenraw
                },
                body: JSON.stringify({ "newuser": `${document.getElementById("newuser").value}`, "password": `${document.getElementById("password").value}` })
            }).then(response => response.json())
                .then(response => {
                    if (response.error) {
                        $('.arts__modal___VpEAD-camelCase').remove()
                        $("body").append(`
                <div class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase" style="color:#fff"><div style="color:#fff">${response.error}</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" id="okay" role="button"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: rgb(32, 150, 55);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: rgb(32, 150, 55);">Okay</div></div></div></div></form></div>
                `)
                        document.getElementById("okay").onclick = () => {
                            $('.arts__modal___VpEAD-camelCase').remove()
                        }
                    }
                    else {
                        document.cookie = `token=${response.token}`
                        document.cookie = `tokenraw=${response.tokenraw}`
                        document.getElementById('username').innerHTML = `<b>Username:</b> ${document.getElementById("newuser").value}`
                        document.getElementById('usernamedrop').innerText = document.getElementById("newuser").value
                        $('.arts__modal___VpEAD-camelCase').remove()
                    }
                })
        }
        document.getElementById("no").onclick = () => {
            $(".arts__modal___VpEAD-camelCase").remove()
        }
    }
    document.getElementById("chngpass").onclick = () => {
        $('body').append(`
    <div class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase">Change Password:</div><br><div class="styles__holder___3CEfN-camelCase"><div class="styles__numRow___xh98F-camelCase"><div class="styles__inputContainer___2Fn7J-camelCase styles__inputFilled___3AmpF-camelCase" style="width: 305px; margin: 0px;"><input class="styles__input___2vJSW-camelCase" id="newpass" style="width: 100%; text-align: center;" type="password" placeholder="New Password" fdprocessedid="s86fb"></div></div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__numRow___xh98F-camelCase"><div class="styles__inputContainer___2Fn7J-camelCase styles__inputFilled___3AmpF-camelCase" style="width: 305px; margin: 0px;"><input placeholder="Password" type="password" style="width: 100%; text-align: center;" id="password" class="styles__input___2vJSW-camelCase" fdprocessedid="45ilo"></div></div></div><div class="styles__buttonContainer___2EaVD-camelCase"><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" id="yes" role="button"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: rgb(32, 150, 55);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: rgb(32, 150, 55);">Yes</div></div><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" id="no" role="button"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: rgb(38, 175, 64);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: rgb(38, 175, 64);">No</div></div></div></form></div>
     `)
        document.getElementById("yes").onclick = () => {
            fetch('/api/setpassword', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "authorization": triangulet.tokenraw
                },
                body: JSON.stringify({ "newpass": `${document.getElementById("newpass").value}`, "password": `${document.getElementById("password").value}` })
            }).then(response => response.json())
                .then(response => {
                    if (response.error) {
                        $('.arts__modal___VpEAD-camelCase').remove()
                        $("body").append(`
                <div class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase" style="color:#fff"><div style="color:#fff">${response.error}</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" id="okay" role="button"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: rgb(32, 150, 55);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: rgb(32, 150, 55);">Okay</div></div></div></div></form></div>
                `)
                        document.getElementById("okay").onclick = () => {
                            $('.arts__modal___VpEAD-camelCase').remove()
                        }
                    }
                    else {
                        $('.arts__modal___VpEAD-camelCase').remove()
                    }
                })
        }
        document.getElementById("no").onclick = () => {
            $(".arts__modal___VpEAD-camelCase").remove()
        }

    }


})