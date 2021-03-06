function changeTheme() {
    console.log(localStorage.getItem('theme'))
    if (localStorage.getItem('theme') == 'sombre') {
        document.querySelector("#P1").style.backgroundColor = "#f4edea";
        document.querySelector("#P2").style.backgroundColor = "#F4D1AE";
        document.querySelector("#P2").style.color = "black";
        document.querySelector(".footer").style.backgroundColor = '#c5d8d1';
        document.querySelector("#logoMode").style.backgroundColor = '#0c717e';
        document.querySelector("#menuSlide").style.backgroundColor = '#c5d8d1';
        let z = document.querySelectorAll(".txtLien")
        z.forEach(element => {
            element.style.color = 'black';
        });
        let proj = document.querySelectorAll(".projet")
        proj.forEach(element => {
            element.style.background = 'linear-gradient(to right,#0c717e,#c5d8d1)';
        });
        localStorage.setItem('theme', 'clair');
        animLogo();
        document.getElementById('imgMode').src = 'images/logoLune.png';
    }
    else {
        document.querySelector("#P1").style.backgroundColor = "#f4d1ae";
        document.querySelector("#P2").style.backgroundColor = "#12263a";
        document.querySelector(".footer").style.backgroundColor = '#c5d8d1';
        document.querySelector("#logoMode").style.backgroundColor = 'wheat';
        document.querySelector("#menuSlide").style.backgroundColor = '#12263a';
        let z = document.querySelectorAll(".txtLien")
        z.forEach(element => {
            element.style.color = 'white';
        });
        let proj = document.querySelectorAll(".projet")
        proj.forEach(element => {
            element.style.background = 'linear-gradient(to right,#c5d8d1,#0c717e)';
        });
        localStorage.setItem('theme', 'sombre');
        animLogo();
        document.querySelector(".footer").style.backgroundColor = '#0c717e';
        document.getElementById('imgMode').src = 'images/logoSoleil.png';
    }
}

function animLogo() {
    let rotate360 = [
        { transform: 'rotate(360deg)' }
    ];
    document.querySelector("#imgMode").animate(rotate360,{duration:100,iterations:2});
}