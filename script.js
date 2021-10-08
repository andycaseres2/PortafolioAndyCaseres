$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  // var typed = new Typed(".typing", {
  //   strings: ["Developer", "Freelancer"],
  //   typeSpeed: 100,
  //   backSpeed: 60,
  //   loop: true,
  // });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

//succes//
function Validar() {
  let nombre = document.querySelector(".nombre");
  let telefono = document.querySelector(".telefono");
  let correo = document.querySelector(".correo");
  let mensaje = document.querySelector(".mensaje");
  let buttonEnviar = document.querySelector(".enviar");

  buttonEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      nombre.value == "" ||
      telefono.value == "" ||
      correo.value == "" ||
      mensaje.value == ""
    ) {
      ops();
    } else {
      sendmail(nombre.value, telefono.value, correo.value, mensaje.value);
      success();
    }
  });
}
Validar();

function limpiarForm() {
  document.getElementById("form").reset();
}
function sendmail(nombre, telefono, correo, mensaje) {
  emailjs.send("service_xsk24xo", "template_bn1xudg", {
    nombre: nombre,
    telefono: telefono,
    correo: correo,
    mensaje: mensaje,
  });
}

function success() {
  swal({
    title: "Excelente!",
    text: "Te Contactare lo antes posible!",
    icon: "success",
    button: "Ok!",
  });
  limpiarForm();
}

function error() {
  swal({
    title: "Error!",
    text: "Hubo un Error!",
    icon: "error",
    button: "Ok!",
  });
}

function ops() {
  swal({
    title: "Oops!",
    text: "Algo Salio Mal!",
    icon: "error",
    button: "Ok!",
  });
}
