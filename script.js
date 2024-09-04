    /* Criando script de frase */

    
    function mostrarFrase() {
    
        let descTecnologias = document.querySelectorAll('.desc-text');
        let iconTecnologias = document.querySelectorAll('.item-programa');
        let inst = document.querySelector('#instrucao');
        
        for (let a = 0; a < iconTecnologias.length; a++) {
    
            iconTecnologias[a].addEventListener('mouseover', () => {
            descTecnologias[a].classList.remove('hide');
            inst.classList.add('hide');
    
            })
        
            iconTecnologias[a].addEventListener('mouseout', () => {
            descTecnologias[a].classList.add('hide');
            inst.classList.remove('hide');
    
            })
        }
    }
    
    mostrarFrase();
    
    /* Criando script do clique do botão */
    var togglebtn=document.querySelector(".togglebtn");
    var nav=document.querySelector(".navlinks");
    var links=document.querySelector(".navlinks li");

    togglebtn.addEventListener("click", function(){
        this.classList.toggle("click");
        nav.classList.toggle("open");
    })

    var typed=new Typed(".input",{
        strings:["Software Developer", "Java Developer", "Cloud Analyst", "NOC Monitorament"],
        typedSpeed:70,
        backSpeed:55,
        loop:true
    })

    /* Scroll Reveal */

    window.sr = ScrollReveal({reset : true,
        origin: 'top',
        distance: '60px'
    });
    
    sr.reveal('.programas');
    sr.reveal('.h2skill');
    sr.reveal('.container');
    sr.reveal('.seta');

    /* Scroll Auto */

    $('.nav a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset - 100
        }, 500);
    });

/* Botão de retorno 
// pegar botão
var mybutton = document.getElementById("myBtn");

// quando rolar a página 20px do topo para baixo, o botão será exibido
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// // quando clicar no botão, a página rola para o topo do documento
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
*/