/* ------------darkStyle----------- */

var checkbox = document.getElementById('checkbox');
var stylesheet = document.getElementById('stylesheet');
var cvpicture = document.getElementById('cv__img');

checkbox.addEventListener('click', function() {
    if(checkbox.checked) {
        stylesheet.href = 'styles_dark.css';
        cvpicture.src = 'img/foto cv light.png';

    } else {
        stylesheet.href = 'styles.css';
        document.getElementById('cv__img').src = 'img/foto cv.png';
    }
});

/* ------------sliderBegins----------- */

const slides = document.querySelectorAll('.cv__slide');
const arrowNext = document.getElementById('btn_next');
const arrowPrev = document.getElementById('btn_prev');
let value;

arrowNext.addEventListener('click', ()=>changePosition(1));
arrowPrev.addEventListener('click', ()=>changePosition(-1));

function changePosition(change){
    const currentElement = Number(document.querySelector('.cv__slide--show').dataset.id);
    
    value = currentElement;
    value+= change;

    if(value === 0 || value == slides.length+1) {
        value = value === 0 ? slides.length : 1;
    } 

    slides[currentElement-1].classList.toggle('cv__slide--show');
    slides[value-1].classList.toggle('cv__slide--show');
}

/* ------------languageChange----------- */

const btn_en = document.getElementById("btn_en");
const btn_es = document.getElementById("btn_es");

btn_es.addEventListener('click', ()=>changeLanguageEs());
btn_en.addEventListener('click', ()=>changeLanguageEn());

var cvLanguages = document.querySelector(".cv__languages");
const slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");

function changeLanguageEs(){
    cvLanguages.innerHTML = `<i class="language_icon"><img src="img/icon_arg.png" alt="Argentina Icon"></i><p><span class="highlighted">Español</span class="highlighted"> <br> Nativo</p><i class="language_icon"><img src="img/icon_uk.png" alt="UK Icon"></i><p><span class="highlighted">Inglés</span class="highlighted"> <br> Fluido</p><i class="language_icon"><img src="img/icon_bra.png" alt="Brasil Icon"></i><p><span class="highlighted">Portugués</span class="highlighted"> <br> Intermedio</p>`;
    slide1.innerHTML = `<div class="cv__about"><h2 class="cv__about__title">Perfil</h2><p class="cv__about__description">Responsable, autodidacta y apasionado, con una gran capacidad de aprendizaje e <span class="highlighted">inglés</span class="highlighted"> fluido. Actualmente me encuentro en Bootcamp de desarrollo web Full Stack.</p></div><h3 class="cv__services__title">Lo que hago</h3><div class="cv__services"><div class="cv__services__box"><img src="img/static.svg"><div class="cv__services__description" id="service1"><p>Trabajo tu página web con lenguajes <span class="highlighted">HTML</span class="highlighted">, <span class="highlighted">CSS</span class="highlighted"> y <span class="highlighted">Javascript</span class="highlighted"></p></div></div><div class="cv__services__box"><img src="img/responsive.svg" alt=""><div class="cv__services__description" id="service2"><p>Tu propia página web responsive, adaptable o first mobile</p></div></div><div class="cv__services__box last"><img src="img/wordpress.svg" class="cv__services" alt=""><div class="cv__services__description" id="service3"><p>También manejo otras herramientas como Wordpress</p></div></div></div>`;
    slide2.innerHTML = `<div class="cv__more"><h2>Acerca de mí</h2><br><p>Soy una persona que siempre esta aprendiendo algo nuevo. Comencé estudiando por mi cuenta y actualmente estoy con mis primeros proyectos. También he realizado un curso de coaching de vida y tengo inglés fluido.</p></div><div class="cv__knowledge"><h3 class="cv__knowledge__title">Conocimientos</h3> <div class="cv__knowledge__box"><i class="fa-brands fa-html5" id="html_icon"></i>HTML<span>Bueno</span></div><div class="cv__knowledge__box"><i class="fa-brands fa-css3-alt" id="css_icon"></i>CSS<span>Bueno</span></div><div class="cv__knowledge__box"><i class="fa-brands fa-js" id="js_icon"></i>Javascript<span>Intermedio</span></div><div class="cv__knowledge__box"><i class="fa-brands fa-git-alt" id="git_icon"></i>Git <span>Intermedio</span></div><div class="cv__knowledge__box"><i class="devicon-photoshop-plain"></i>Photoshop <span>Bueno</span></div>`;
    slide3.innerHTML = `<h2 class="cv__projects__title">Proyectos</h2><p class="cv__projects__description">Me encuentro trabajando sobre el bootcamp y un proyecto en particular de landing page para un hostel. El presente porfolio lo he construido con puro <span class="highlighted">HTML</span class="highlighted">, <span class="highlighted">CSS</span class="highlighted"> y algo de <span class="highlighted">Javascript</span class="highlighted">, sin atajos, sin librerias, todo hecho a mano =). Estaré actualizando esta sección en breve, ¡mantente al tanto!</p><img src="img/onconstruction.svg" alt="on construction" class="cv__projects__img">`;
}

function changeLanguageEn(){
    cvLanguages.innerHTML = `<i class="language_icon"><img src="img/icon_arg.png" alt="Argentina Icon"></i><p><span class="highlighted">Spanish</span class="highlighted"> <br> Native</p><i class="language_icon"><img src="img/icon_uk.png" alt="UK Icon"></i><p><span class="highlighted">English</span class="highlighted"> <br> Fluent</p><i class="language_icon"><img src="img/icon_bra.png" alt="Brasil Icon"></i><p><span class="highlighted">Portuguese</span class="highlighted"> <br> Intermediate</p>`;
    slide1.innerHTML = `<div class="cv__about"><h2 class="cv__about__title">Profile</h2><p class="cv__about__description">Responsible, self taught, passionate with a great learning ability and fluent <span class="highlighted">english</span class="highlighted">. At this moment, I'm currently on a Full Stack developer Bootcamp.</p></div><h3 class="cv__services__title">What I do</h3><div class="cv__services"><div class="cv__services__box"><img src="img/static.svg"><div class="cv__services__description" id="service1"><p>I do your website with <span class="highlighted">HTML</span class="highlighted">, <span class="highlighted">CSS</span class="highlighted"> y <span class="highlighted">Javascript</span class="highlighted"></p></div></div><div class="cv__services__box"><img src="img/responsive.svg" alt=""><div class="cv__services__description" id="service2"><p>Your own responsive web site, adaptable or mobile first</p></div></div><div class="cv__services__box last"><img src="img/wordpress.svg" class="cv__services" alt=""><div class="cv__services__description" id="service3"><p>I can also work with other tools like Wordpress</p></div></div></div>`;
    slide2.innerHTML = `<div class="cv__more"><h2>About me</h2><br><p>I'm a person who is always learning something new. I've started studying on my own and at the moment I'm working on my first projects. Also, I count with a life coach certification and fluent english.</p></div><div class="cv__knowledge"><h3 class="cv__knowledge__title">Knowledge</h3> <div class="cv__knowledge__box"><i class="fa-brands fa-html5" id="html_icon"></i>HTML<span>Good</span></div><div class="cv__knowledge__box"><i class="fa-brands fa-css3-alt" id="css_icon"></i>CSS<span>Good</span></div><div class="cv__knowledge__box"><i class="fa-brands fa-js" id="js_icon"></i>Javascript<span>Intermediate</span></div><div class="cv__knowledge__box"><i class="fa-brands fa-git-alt" id="git_icon"></i>Git <span>Intermediate</span></div><div class="cv__knowledge__box"><i class="devicon-photoshop-plain"></i>Photoshop <span>Good</span></div>`;
    slide3.innerHTML = `<h2 class="cv__projects__title">Projects</h2><p class="cv__projects__description">At this time, my work is focused on the full stack bootcamp and a landing page for a hostel. The portfolio you are watching now was built with pure <span class="highlighted">HTML</span class="highlighted">, <span class="highlighted">CSS</span class="highlighted"> and <span class="highlighted">Javascript</span class="highlighted">. No shortcuts or libraries =). I'll be updating this section very soon, ¡stay tuned!</p><img src="img/onconstruction.svg" alt="on construction" class="cv__projects__img">`;
}