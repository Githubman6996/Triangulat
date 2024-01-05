startLoading()
$(function reset() {
  if (!triangulet) return setTimeout(reset, 1)
  stopLoading()
  triangulet.trians.forEach(Object => {
    const parentDiv = document.createElement("div");
    parentDiv.className = "styles__setHolder___rVq3Z-camelCase";
    const topDiv = document.createElement("div");
    topDiv.className = "styles__setTop___wIaVS-camelCase";
    parentDiv.appendChild(topDiv);
    const iconDiv = document.createElement("div")
    iconDiv.classList.add("styles__setTopBackground___342Wr-camelCase")
    iconDiv.style.backgroundImage = `url(${window.origin}/media/capsules/${Object.name}/icon.png)`
    topDiv.appendChild(iconDiv)
    const textDiv = document.createElement("div");
    textDiv.className = "styles__setText___1PQLQ-camelCase";
    textDiv.innerHTML = Object.name;
    topDiv.appendChild(textDiv);
    const dividerDiv = document.createElement('div')
    dividerDiv.className = "styles__setDivider___3da0c-camelCase";
    topDiv.appendChild(dividerDiv);
    const triansDiv = document.createElement("div");
    triansDiv.className = "styles__setBlooks___3xamH-camelCase";
    parentDiv.appendChild(triansDiv);
    Object.trians.forEach((trian) => {
      const trianContainer = document.createElement("div");
      trianContainer.className = "styles__blookContainer___3JrKb-camelCase";
      trianContainer.setAttribute("role", "button");
      trianContainer.onclick = function () {
        writeTrian(trian.name, Object.name)
      }
      trianContainer.setAttribute("tabindex", "0");
      triansDiv.appendChild(trianContainer);
      const Trian = document.createElement("div");
      if (triangulet.userdata.trians.find(train => train.trian === trian.name)) {
        Trian.className = "styles__blookContainer___36LK2-camelCase styles__blook___bNr_t-camelCase";
        Trian.id = trian.name
        trianContainer.appendChild(Trian);
        const triannumcircle = document.createElement("div")
        triannumcircle.classList.add("styles__blookText___3AMdK-camelCase")
        triannumcircle.id = `triannumcircle${trian.name}`
        triannumcircle.innerText = triangulet.userdata.trians.find(train => train.trian === trian.name).quantity
        if (trian.rarity === "Uncommon") {
          triannumcircle.style.backgroundColor = "#4bc22e"
        } else if (trian.rarity === "Rare") {
          triannumcircle.style.backgroundColor = "#0a14fa"
        } else if (trian.rarity === "Epic") {
          triannumcircle.style.backgroundColor = "#be0000"
        } else if (trian.rarity === "Legendary") {
          triannumcircle.style.backgroundColor = "#ff910f"
        } else if (trian.rarity === "Chroma") {
          triannumcircle.style.backgroundColor = "#00ccff"
        } else if (trian.rarity === "Mystical") {
          triannumcircle.style.backgroundColor = "#a335ee"
        }
        trianContainer.appendChild(triannumcircle);
      } else {
        Trian.className = "styles__blookContainer___36LK2-camelCase styles__blook___bNr_t-camelCase styles__lockedBlook___3oGaX-camelCase"
        trianContainer.appendChild(Trian)
        const lockIcon = document.createElement("i")
        lockIcon.className = "fas fa-lock styles__blookLock___3Kgua-camelCase"
        trianContainer.style.cursor = "auto"
        trianContainer.appendChild(lockIcon)
      }
      const trianImg = document.createElement("img")
      trianImg.draggable = false
      trianImg.src = `/media/capsules/${Object.name}/trians/${trian.name}.png`
      trianImg.className = "styles__blook___1R6So-camelCase"
      Trian.appendChild(trianImg)

    })
    const triansHolder = document.getElementById("trianscontainer")
    triansHolder.appendChild(parentDiv)
  })
})

function writeTrian(trianname, Objectname) {
  if (triangulet.userdata.trians.find(train => train.trian === trianname)) {
    let trian = triangulet.userdata.trians.find(train => train.trian === trianname)
    document.getElementById("trianname").innerText = trianname;
    document.getElementById("trianquantity").innerText = `${trian.quantity} Owned`
    document.getElementById("trianbackground").src = `/media/capsules/${Objectname}/background.png`
    document.getElementById("trianimg").src = `/media/capsules/${Objectname}/trians/${trianname}.png`
    let capsule = triangulet.trians.find(obj => obj.name === Objectname);
    let trianincapsule = capsule.trians.find(item => item.name === trianname)
    document.getElementById("trianrarity").innerText = trianincapsule.rarity
    if (trianincapsule.rarity === "Uncommon") {
      document.getElementById("trianrarity").style.color = "#4bc22e"
    } else if (trianincapsule.rarity === "Rare") {
      document.getElementById("trianrarity").style.color = "#0a14fa"
    } else if (trianincapsule.rarity === "Epic") {
      document.getElementById("trianrarity").style.color = "#be0000"
    } else if (trianincapsule.rarity === "Legendary") {
      document.getElementById("trianrarity").style.color = "#ff910f"
    } else if (trianincapsule.rarity === "Chroma") {
      document.getElementById("trianrarity").style.color = "#00ccff"
    } else if (trianincapsule.rarity === "Mystical") {
      document.getElementById("trianrarity").style.color = "#a335ee"
    }
    document.getElementById("selltrian").onclick = () => {
      let artsContainer = $('<div>').addClass('arts__modal___VpEAD-camelCase')
      let formContainer = $('<form>').addClass('styles__container___1BPm9-camelCase');
      let textContainer = $('<div>').addClass('styles__text___KSL4--camelCase').text(`Sell ${trianname} Trians for ${trianincapsule.sell} tokens each:`);
      let holderContainer = $('<div>').addClass('styles__holder___3CEfN-camelCase');
      let numRowContainer = $('<div>').addClass('styles__numRow___xh98F-camelCase');
      let inputContainer = $('<div>').addClass('styles__inputContainer___2Fn7J-camelCase styles__inputFilled___3AmpF-camelCase').css('width', '80px').css('margin', '0px');
      let input = $('<input>').addClass('styles__input___2vJSW-camelCase').attr('type', 'number').attr("id", "sellinput").attr('oninput', 'checksellinput(this)').css('width', '60px');
      let numTotalContainer = $('<div>').addClass('styles__numTotal___3LQaw-camelCase').text(`/ ${trian.quantity}`);
      let buttonContainer = $('<div>').addClass('styles__buttonContainer___2EaVD-camelCase');
      let yesButton = $('<div>').addClass('styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase').attr('id', 'sellyes').attr('role', 'button')
      let yesShadow = $('<div>').addClass('styles__shadow___3GMdH-camelCase');
      let yesEdge = $('<div>').addClass('styles__edge___3eWfq-camelCase').css('background-color', '#209637');
      let yesFront = $('<div>').addClass('styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase').css('background-color', '#209637').text('Yes');
      let noButton = $('<div>').addClass('styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase').attr('id', 'sellno').attr('role', 'button')
      let noShadow = $('<div>').addClass('styles__shadow___3GMdH-camelCase');
      let noEdge = $('<div>').addClass('styles__edge___3eWfq-camelCase').css('background-color', '#26af40');
      let noFront = $('<div>').addClass('styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase').css('background-color', '#26af40').text('No');

      inputContainer.append(input);
      yesButton.append(yesShadow);
      yesButton.append(yesEdge);
      yesButton.append(yesFront);
      noButton.append(noShadow);
      noButton.append(noEdge);
      noButton.append(noFront);
      numRowContainer.append(inputContainer);
      numRowContainer.append(numTotalContainer);
      buttonContainer.append(yesButton);
      buttonContainer.append(noButton);
      holderContainer.append(numRowContainer);
      holderContainer.append(buttonContainer);
      formContainer.append(textContainer);
      formContainer.append(holderContainer);
      artsContainer.append(formContainer)
      $('body').append(artsContainer);
      document.getElementById("sellno").onclick = () => {
        artsContainer.remove()
      }
      document.getElementById("sellyes").onclick = () => {
        let amount = Number(document.getElementById("sellinput").value)
        fetch('/api/sell', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'authorization': triangulet.tokenraw,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "trian": trianname,
            "quantity": amount
          })
        })
        if (trian.quantity - amount === 0) {
          let trianDiv = document.getElementById(`${trianname}`)
          trianDiv.append('<i class="fas fa-lock styles__blookLock___3Kgua-camelCase"></i>')
          trianDiv.classList.add("styles__lockedBlook___3oGaX-camelCase")
        }
        let triansamount = trian.quantity - amount
        document.getElementById("trianquantity").innerText = `${triansamount} Owned`
        document.getElementById(`triannumcircle${trianname}`).innerText = triansamount

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
        artsContainer.remove()
      }
    }
    /*document.getElementById("auctiontrian").onclick = () => {
      $('body').append(`
          <div class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase">
<div class="styles__text___KSL4--camelCase">Auction ${trianname} Trians:</div><div class="styles__text___KSL4--camelCase" style="font-size: 20px;">Startingbid, Amount, Payout(optional)</div><div class="styles__holder___3CEfN-camelCase"><div class="styles__numRow___xh98F-camelCase">
<div class="styles__inputContainer___2Fn7J-camelCase styles__inputFilled___3AmpF-camelCase" style="width: 80px; margin: 0px;"><input class="styles__input___2vJSW-camelCase" type="number" value="1" id="auctionstart" style="width: 60px;"></div><div class="styles__inputContainer___2Fn7J-camelCase styles__inputFilled___3AmpF-camelCase" style="width: 80px; margin: 0px;"><input class="styles__input___2vJSW-camelCase" type="number" value="1" id="auctionamount" style="width: 60px;" ></div><div class="styles__inputContainer___2Fn7J-camelCase styles__inputFilled___3AmpF-camelCase" style="width: 80px; margin: 0px;"><input class="styles__input___2vJSW-camelCase" type="number" value="0" id="auctionpayout" style="width: 60px;"></div></div><div class="styles__buttonContainer___2EaVD-camelCase"><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" id="auctionyes" role="button"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: rgb(32, 150, 55);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: rgb(32, 150, 55);">Yes</div></div><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" id="auctionno" role="button"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: rgb(38, 175, 64);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: rgb(38, 175, 64);">No</div></div></div></div></form></div>
          `)

      document.getElementById('auctionstart').oninput = () => {
        let input = document.getElementById('auctionstart')
        let payout = document.getElementById("auctionpayout").value
        if (payout === '0') {
          if (input.value > 9999999) {
            input.value = 9999999
          } else if (input.value < 1) {
            input.value = 1
          } else if (Number.isInteger(input.value) === false) {
            input.value = Math.round(input.value)
          }
        } else {
          if (input.value < 1) {
            input.value = 1
          } else if (Number(input.value) > Number(payout) || Number(input.value) == Number(payout)) {
            input.value = payout - 1
          } else if (Number.isInteger(input.value) === false) {
            input.value = Math.round(input.value)
          }
        }
      }
      document.getElementById('auctionpayout').oninput = () => {
        let startbid = document.getElementById("auctionstart")
        let input = document.getElementById('auctionpayout')
        if (input.value === '1') {
          input.value = 2
          startbid.value = 1
        } else if (Number(input.value) < 2) {
          input.value = 2
        } else if (Number(startbid.value) > Number(input.value) || Number(startbid.value) == Number(input.value)) {
          startbid.value = input.value - 1
        } else if (Number.isInteger(input.value) === false) {
          input.value = Math.round(input.value)
        }

      }
      document.getElementById("auctionamount").oninput = () => {
        input = document.getElementById("auctionamount")
        if (Number(input.value) > Number(trian.quantity)) {
          input.value = trian.quantity
        } else if (input.value < 1) {
          input.value = 1
        } else if (Number.isInteger(input.value) === false) {
          input.value = Math.round(input.value)
        }

      }
      document.getElementById("auctionno").onclick = () => {
        $(".arts__modal___VpEAD-camelCase").remove()
      }
      document.getElementById('auctionyes').onclick = () => {
        let startbid = document.getElementById("auctionstart").value
        let payout = document.getElementById('auctionpayout').value
        let amount = document.getElementById("auctionamount").value
        if (payout === '0') {
          fetch('/api/addauction', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'authorization': triangulet.tokenraw,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "trian": trianname,
              "startbid": Number(startbid),
              "amount": Number(amount)
            })
          }).then(response => console.log(response.json()))
          if (trian.quantity - amount === 0) {
            let trianDiv = document.getElementById(`${trianname}`)
            trianDiv.classList.add("styles__lockedBlook___3oGaX-camelCase")
            $(`#${trianname}`).append(`<i class="fas fa-lock styles__blookLock___3Kgua-camelCase"></i>`)
          }
          let triansamount = trian.quantity - amount
          document.getElementById("trianquantity").innerText = `${triansamount} Owned`

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
          $(".arts__modal___VpEAD-camelCase").remove()
        } else {
          fetch('/api/addauction', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'authorization': triangulet.tokenraw,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "trian": trianname,
              "startbid": Number(startbid),
              "amount": Number(amount),
              "payout": Number(payout)
            })
          }).then(response => console.log(response.json()))
          if (trian.quantity - amount === 0) {
            let trianDiv = document.getElementById(`${trianname}`)
            trianDiv.classList.add("styles__lockedBlook___3oGaX-camelCase")
            $(`#${trianname}`).append(`<i class="fas fa-lock styles__blookLock___3Kgua-camelCase"></i>`)
          }
          let triansamount = trian.quantity - amount
          document.getElementById("trianquantity").innerText = `${triansamount} Owned`

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
          $(".arts__modal___VpEAD-camelCase").remove()
        }

      }
    } */
  } else {
    return;
  }
}

function checksellinput(sender) {
  if (sender.value > triangulet.userdata.trians.find(train => train.trian === document.getElementById("trianname").innerText).quantity) {
    sender.value = triangulet.userdata.trians.find(train => train.trian === document.getElementById("trianname").innerText).quantity
  } else if (sender.value < 0) {
    sender.value = 0
  } else if (Number.isInteger(sender.value) === false) {
    sender.value = Math.round(sender.value)
  } else {
    return;
  }
}