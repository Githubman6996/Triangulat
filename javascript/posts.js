startLoading()
$(function reset() {
if (!triangulet) return setTimeout(reset, 1)
setTimeout(function(){
    fetch('/data/allposts', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: null
    })
    .then(response => response.json())
    .then(response => printres(response))
},700)

function printres(response) {
    let postarray = Object.entries(response.posts)
    for (let i = postarray.length - 1; i >= 0; i--) {
        const object = postarray[i][1];
        fetch('/api/finduser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'authorization': triangulet.tokenraw,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "id": `${object.user}` })
        }).then(response => response.json())
        .then(response => {
            if (object.likes.includes(triangulet.userdata.id)) {
                colorheart = "red"
            }
            else {
                colorheart = "white"
            }
            likecount = object.likes.length
            const has = object.title.includes('<')
const has2 = object.body.includes('<')
        const element = document.createElement('div');
        element.style.color = "#fff"
        element.innerHTML =  `<h1>${has ? '' : object.title}</h1><text class="usertextpost">Author: <a style="color:#CAE4F1" href="/stats?id=${object.user}">${response.username}</a></text><br><i id="${postarray[i][0]}1" style="color: ${colorheart};font-size:25px" onclick="like('${postarray[i][0]}')" class="fas fa-heart"></i><text class="${postarray[i][0]}" style="font-size:25px"> ${likecount}</text><p>${has2 ? '' : object.body}</p>`;
        element.classList.add('postbackground')
        element.id = postarray[i][0]
        let explaination = document.getElementsByClassName("explaination")
        explaination[0].appendChild(element);
        if (i == 0) {
            stopLoading()
        }
        })
      }
}

})

function like(postid) {
    fetch('/api/like', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "authorization": triangulet.tokenraw
        },
        body: JSON.stringify({"postid": postid})
    }).then(response => response.json())
    .then(response => changecolor(response,postid))
   
}
function changecolor(response,postid) {
    if (response.error) {
        return;
    }
    else {
        if (document.getElementById(`${postid}1`).style.color == "white") {
            document.getElementById(`${postid}1`).style.color = "red"
            document.getElementsByClassName(postid)[0].innerText = ` ${Number(document.getElementsByClassName(postid)[0].innerText) + 1}`
        }
        else if (document.getElementById(`${postid}1`).style.color == "red") {
            document.getElementById(`${postid}1`).style.color = "white"
            document.getElementsByClassName(postid)[0].innerText = ` ${Number(document.getElementsByClassName(postid)[0].innerText) - 1}`
        }
    }
}