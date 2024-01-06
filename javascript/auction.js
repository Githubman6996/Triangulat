
startLoading()
$(function reset() {
if (!triangulet) return setTimeout(reset, 1)
stopLoading()
    fetch('/data/auctions', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: null
    })
    .then(response => response.json())
    .then(response => {
        auctions = Object.entries(response.auctions)
        let capsulename
        auctions.forEach(Object => {
            triangulet.trians.forEach(obj => {obj.trians.forEach(capsule => {if (capsule.name === Object[1].trian) { capsulename =  obj.name }})})
                $('#auctionswrapper').append(`
                <div class="styles__auctionContainer___3RwSU-camelCase" id="${Object[0]}" role="button" style="background-image: url(/media/capsules/${capsulename}/media/misc/background.png)">
                     <div class="styles__auctionImgContainer___3NABW-camelCase"><img src="/media/capsules/${capsulename}/trians/${Object[1].trian}.png" class="styles__auctionImg___3to1S-camelCase"></div>
                     <div class="styles__auctionBottom___37drt-camelCase"><img draggable="false" src="/media/misc/token.png" class="styles__auctionPriceImg___1FaDF-camelCase">${Object[1].startingbid}</div>
                     <div class="styles__auctionTop___37drt-camelCase">${Object[1].trian} x${Object[1].amount}</div>
                     </div>
                `)
            
            
            document.getElementById(`${Object[0]}`).onclick = () => {
                let bids = ""
                triangulet.trians.forEach(obj => {
                    obj.trians.forEach(capsule => {
                        if (capsule.name === Object[1].trian) {
                           capsulename = obj.name
                        }
                    });
                });
                Object[1].bids.sort((a, b) => b.bid - a.bid);
                if (Object[1].bids.length === 0) {
                    bids = "none!"
                }
                else {
                    for (let i = 0; i < Object[1].bids.length; i++) {
                        const bid = Object[1].bids[i];
                        bids += `<text style="position:relative;left:50px;">${bid.user}: $${bid.bid}</text><br>`;
                      }
                }
                

                    if (Object[1].payout) {

                
                        $('body').append(`
                        
                        <div class="arts__modal___VpEAD-camelCase">
                        <div id="bid" class="bidbutton">Bid</div>
                        <div class="styles__background___2J-JA-camelCase">
        <div class="styles__blooksBackground___3oQ7Y-camelCase" style="background-image: url(&quot;/media/misc/background.png&quot;);  animation: animatedBackground 9s linear infinite;
        -moz-animation: animatedBackground 9s linear infinite;
        -webkit-animation: animatedBackground 9s linear infinite;
        -ms-animation: animatedBackground 9s linear infinite;
        -o-animation: animatedBackground 9s linear infinite;"></div>
    </div>
        <img src="/media/capsules/${capsulename}/trians/${Object[1].trian}.png" style="width: 500px;position: absolute;height: 500px;left: 50%;top: 50%;transform: translate(-50%, -50%);"><div style="font-size: 150px;color:#fff;top: 10%;left: 50%;position: absolute;transform: translate(-50%, -50%);font-family:'Titan One', sans serif">${Object[1].trian} x${Object[1].amount}</div><div style="font-size: 20px;color: #fff;top: 20%;left: 50%;position: absolute;transform: translate(-50%, -50%);font-family: 'Titan One', sans serif;text-align:center;"><text>${Object[1].user}</text><br><text style="color: transparent;-webkit-background-clip:text;background-image: linear-gradient(to right,#462523 0,#cb9b51 22%, #f6e27a 45%,#f6f2c0 50%,#f6e27a 55%,#cb9b51 78%,#462523 100%);">Payout: $${Object[1].payout}</text></div>
        <div style="background-color: #000;opacity: 0.5;border-radius: 10px;color: #fff;font-family: 'Titan One',sans-serif;position: absolute;width: 450px;height: 300px;left: 50%;top: 85%;transform: translate(-50%, -50%);">
        <text style="position:relative;right:150px;" id="bids"><text style="position:relative;left: 150px;font-size: 50px;">Bids</text><br>${bids}</text>
        </div><text class="cancelx" id="x">X</text>
        </div>
                        `)
                        }
                        else {
                            $('body').append(`
                            <div class="arts__modal___VpEAD-camelCase">
                            <div id="bid" class="bidbutton">Bid</div>
                            <div class="styles__background___2J-JA-camelCase">
        <div class="styles__blooksBackground___3oQ7Y-camelCase" style="background-image: url(&quot;/media/misc/background.png&quot;);  animation: animatedBackground 9s linear infinite;
        -moz-animation: animatedBackground 9s linear infinite;
        -webkit-animation: animatedBackground 9s linear infinite;
        -ms-animation: animatedBackground 9s linear infinite;
        -o-animation: animatedBackground 9s linear infinite;"></div>
    </div>
            <img src="/media/capsules/${capsulename}/trians/${Object[1].trian}.png" style="width: 500px;position: absolute;height: 500px;left: 50%;top: 50%;transform: translate(-50%, -50%);"><div style="font-size: 150px;color:#fff;top: 10%;left: 50%;position: absolute;transform: translate(-50%, -50%);font-family:'Titan One', sans serif">${Object[1].trian} x${Object[1].amount}</div><div style="font-size: 20px;color: #fff;top: 20%;left: 50%;position: absolute;transform: translate(-50%, -50%);font-family: 'Titan One', sans serif;text-align:center;"><text>${Object[1].user}</text></div>
            <div style="background-color: #000;opacity: 0.5;border-radius: 10px;position: absolute;width: 450px;height: 300px;left: 50%;top: 85%;transform: translate(-50%, -50%);">
            <div style="position:relative;right:150px;color: #fff;font-family: 'Titan One',sans-serif;" id="bids"><text style="position:relative;left: 150px;font-size: 50px;">Bids</text><br>${bids}</div>
            </div><text class="cancelx" id="x">X</text>
            </div>
                            `)
                     } 
                     document.getElementById("x").onclick = () => {
                        $('.arts__modal___VpEAD-camelCase').remove()
                     }
                     document.getElementById("bid").onclick = () => {
                        
                        if (Object[1].user === triangulet.userdata.username) {
                            $('body').append(`
<div id="errorprompt" class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase" style="color:#fff"><div style="color:#fff">You cant bid on your own auction.</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" id="okay" role="button"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: rgb(32, 150, 55);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: rgb(32, 150, 55);">Okay</div></div></div></div></form></div>
`)
document.getElementById("okay").onclick = () => {
    $('#errorprompt').remove()
  }
                        }
                        else {

                        $('body').append(`
                        <div id="bidprompt" class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase">Bid on ${Object[1].amount}x ${Object[1].trian}:</div><div class="styles__holder___3CEfN-camelCase"><div class="styles__numRow___xh98F-camelCase"><div class="styles__inputContainer___2Fn7J-camelCase styles__inputFilled___3AmpF-camelCase" style="width: 80px; margin: 0px;"><input class="styles__input___2vJSW-camelCase" type="number" value="${Object[1].startingbid}" id="bidinput" style="width: 60px;"></div></div><div class="styles__buttonContainer___2EaVD-camelCase"><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" id="yes" role="button"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: rgb(32, 150, 55);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: rgb(32, 150, 55);">Yes</div></div><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" id="no" role="button"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: rgb(38, 175, 64);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: rgb(38, 175, 64);">No</div></div></div></div></form></div>
                        `)
                        document.getElementById("no").onclick = () => {
                            $('#bidprompt').remove()
                        }
                        document.getElementById("yes").onclick = () => {
                            let bid = document.getElementById("bidinput").value

                                fetch('/api/bid', {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'authorization': triangulet.tokenraw,
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({ "bid": Number(bid),"auction":`${Object[0]}` })
                                }).then(response => response.json())
                                .then(response => {
                                    if (response.message === "your bid is the same as someone else." || response.message === "not enough tokens") {
                                        $('#bidprompt').remove()
                                        $('body').append(`
<div id="errorprompt" class="arts__modal___VpEAD-camelCase"><form class="styles__container___1BPm9-camelCase"><div class="styles__text___KSL4--camelCase" style="color:#fff"><div style="color:#fff">${response.message}</div></div><div class="styles__holder___3CEfN-camelCase"><div class="styles__buttonContainer___2EaVD-camelCase"><div class="styles__button___1_E-G-camelCase styles__button___3zpwV-camelCase" id="okay" role="button"><div class="styles__shadow___3GMdH-camelCase"></div><div class="styles__edge___3eWfq-camelCase" style="background-color: rgb(32, 150, 55);"></div><div class="styles__front___vcvuy-camelCase styles__buttonInside___39vdp-camelCase" style="background-color: rgb(32, 150, 55);">Okay</div></div></div></div></form></div>
`)
document.getElementById("okay").onclick = () => {
    $('#errorprompt').remove()
  
                                    }
                                }
                                else if (response.message === "Boughtout") {
                                    $('.arts__modal___VpEAD-camelCase').remove()
                                    window.location.href = "/trians"
                                }
                                
                                else {
                                    indexToDelete = Object[1].bids.findIndex(bid => bid.user === triangulet.userdata.username);
    
    
                                    if (indexToDelete >= 0) {
                                      Object[1].bids.splice(indexToDelete, 1);
                                    }
                                    
                                                                auctionsorwhatever = Object[1].bids
                                                                auctionsorwhatever.push({user: `${triangulet.userdata.username}`,bid: Number(bid)});
                                                                auctionsorwhatever.sort((a, b) => b.bid - a.bid);
                                                                let bidss = "";
                                                                for (let i = 0; i < auctionsorwhatever.length; i++) {
                                                                     const bid = auctionsorwhatever[i];
                                                                     bidss += `<text style="position:relative;left:50px;">${bid.user}: $${bid.bid}</text><br>`;
                                                                }
                                                                document.getElementById('bids').innerHTML = ""
                                                                document.getElementById("bids").innerHTML = `<text style="position:relative;left: 150px;font-size: 50px;">Bids</text><br>${bidss}`
                                                                $('#bidprompt').remove()
                                }
                                })
                                
                            
                        }
                        document.getElementById('bidinput').oninput = () => {
                            data = document.getElementById('bidinput')
                            if (data.value < Object[1].startingbid) {
                                data.value = Object[1].startingbid
                            }
                            else if (Number.isInteger(data.value) === false) {
                                data.value = Math.round(data.value)
                            }
                            if (Object[1].payout) {
                                if (data.value > Object[1].payout) {
                                    data.value = Object[1].payout
                                }
                            }
                        }
                    }
                     }
            }
        });
    })
})

const targetTime = new Date();
targetTime.setHours(12);
targetTime.setMinutes(0);
targetTime.setSeconds(0);
const countdownDiv = document.getElementsByClassName('styles__header___153FZ-camelCase')[0]
setInterval(updateCountdown, 1000);
function updateCountdown() {
  const now = new Date();
  let timeRemaining = targetTime.getTime() - now.getTime();
  if (timeRemaining <= 0) {
    targetTime.setDate(targetTime.getDate() + 1);
    targetTime.setHours(12);
    targetTime.setMinutes(0);
    targetTime.setSeconds(0);
    timeRemaining = targetTime.getTime() - now.getTime();
  }
  const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  countdownDiv.innerText = `${hours}h ${minutes}m ${seconds}s`;
}