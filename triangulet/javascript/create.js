startLoading()
$(function reset() {
if (!triangulet) return setTimeout(reset, 1)
stopLoading()

document.getElementById('postbtn').onclick = (event) => {
    if ($(".styles__errorContainer___1LbDZ-camelCase").length > 0) $(".styles__errorContainer___1LbDZ-camelCase").remove();
    event.preventDefault()
    let title =  document.getElementById('title').value
    let body = document.getElementById('body').value
fetch('/api/post', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'authorization': triangulet.tokenraw,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "title": title,"body":body })
})
.then(response => response.json())
.then(response => checkreq(response))
}

function checkreq(response) {
  if (response.message === "post added"){
      window.location.href = `${window.location.origin}/posts`
  }
  else {
      $(".center-square-create").append(`<div class="styles__errorContainer___1LbDZ-camelCase"><i class="styles__errorIcon___3JrS4-camelCase fas fa-times-circle" aria-hidden="true"></i><div class="styles__errorText___3OuU1-camelCase">${response.message}</div></div>`)
  }
}

})