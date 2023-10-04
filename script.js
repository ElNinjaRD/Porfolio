let visibleMenu = false;

function showHideMenu(){
    if(visibleMenu){
        document.getElementById("nav").classList = "";
        visibleMenu = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        visibleMenu = true;
    }
}

function select(){
    document.getElementById("nav").classList = "";
    visibleMenu = false;
}


//skills animations
function skillsEfectts(){
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight -skills.getBoundingClientRect().top;
    if(distance_skills >= 300){
        let skill = document.getElementsByClassName("progress")
        skill[0].classList.add("javascript");
        skill[1].classList.add("htmlcss");
        skill[2].classList.add("react");
        skill[3].classList.add("node");
        skill[4].classList.add("express");
        skill[5].classList.add("mongo");
        skill[6].classList.add("firebase");
        skill[7].classList.add("communication");
        skill[8].classList.add("creativity");
        skill[9].classList.add("teamwork");
        skill[10].classList.add("proyect");
        skill[11].classList.add("innovative");
    }
}

window.onscroll = function(){
    skillsEfectts();
}