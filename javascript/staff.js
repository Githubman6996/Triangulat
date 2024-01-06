startLoading()
$(function reset() {
  if (!triangulet) return setTimeout(reset, 1)
  stopLoading()

  if (triangulet.userdata.role === "Normal" || triangulet.userdata.role === "Artist" || triangulet.userdata.role === "Booster") {
    window.location.href = `${window.location.origin}/stats`
  } else {
    if (triangulet.userdata.role === "Helper") {
      $(".arts__profileBody___eNPbH-camelCase").append(`
        ben
        `)
    } else if (triangulet.userdata.role === "Mod") {

    } else if (triangulet.userdata.role === "Admin") {

    } else if (triangulet.userdata.role === "Owner") {

    }
  }
})