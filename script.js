/* LOGIN SYSTEM */
function login() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    if (u === "admin" && p === "1234") {
        document.getElementById("login-page").classList.add("hidden");
        document.getElementById("home-page").classList.remove("hidden");
    } else {
        alert("Wrong username or password!");
    }
}

function logout() {
    document.getElementById("home-page").classList.add("hidden");
    document.getElementById("login-page").classList.remove("hidden");
}

/* PAGE SWITCH */
function showPage(page) {
    document.querySelectorAll(".section").forEach(sec =>
        sec.classList.add("hidden")
    );
    document.getElementById(page).classList.remove("hidden");
}

/* SOUND CONTROLS */
let music = document.getElementById("bgMusic");
let isPlaying = false;

function toggleSound() {
    if (isPlaying) {
        music.pause();
        isPlaying = false;
    } else {
        music.play();
        isPlaying = true;
    }
}