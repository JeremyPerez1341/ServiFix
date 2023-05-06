<template>
    <!DOCTYPE html>
    <html lang="en">
   <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ServiFix</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="style.css">
  

</head>
<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand" href="#"><img class="logo" src="../assets/images/logo.png" alt="logo"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#miLista" aria-controls="miLista" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse w-100 flex-nowrap" id="miLista">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mb-3">
                            <a class="nav-link text-white" href="#">Principal</a>
                        </li>
                        <li class="nav-item mb-3">
                            <a class="nav-link text-white" href="#row-cursos">Te ofrecemos</a>
                        </li>
                        <li class="nav-item mb-3">
                            <a class="nav-link text-white" href="#row-nosotros">Nosotros</a>
                        </li>
                        <li class="nav-item mb-3">
                            <a class="nav-link text-white" href="#row-servicios">Servicios</a>
                        </li>
                        <li class="nav-item mb-3">
                            <a class="nav-link text-white" href="#row-contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="title font-weight-bold">
                Soluciona tus problemas en casa con un solo click<br>registrate ahora<br>

                <router-link to="/login">
                    <button class="btn mt-3">Registrate ahora</button>
                </router-link>
            </div>
        </div>
    </header>
    <main>
        <div class="row text-white" id="row-cursos">
           <div class="container text-center">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <h1 class="font-weight-bold">Te ofrecemos</h1>
                    <h5>Soluciones domesticas rapidas y hechas por expertos</h5>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col">
                    <img src="../assets/images/gasfitero.jpg" alt="gasfitero">
                    <h4 class="font-weight-bold mt-4">Gasfiteros </h4>
                    <p>Amplia experiencia en el rubro</p>
                </div>
                <div class="col">
                    <img src="../assets/images/electricista.jpg" alt="electricista">
                    <h4 class="font-weight-bold mt-4">Electricistas </h4>
                    <p>Tecnicos que solucionaran tus problemas</p>
                </div>
                <div class="col">
                    <img src="../assets/images/pintor.jpg" alt="pintor">
                    <h4 class="font-weight-bold mt-4">Expertos</h4>
                    <p>Desde pintores, armadores de mueblos, sastres, etc.</p>
                </div>
            </div>  
           </div>
        </div>
        <div class="row py-5" id="row-nosotros">
            <div class="container">
                    <div class="row">
                        <div class="col-sm text-center">
                            <img src="../assets/images/nosotros.png" alt="nosotros">
                        </div>
                        <div class="col-sm mt-4">
                            <h1 class="font-weight-bold title-color mb-3">Sobre nosotros</h1>
                            <p>DevGroup es una compañía fundada el 1 de abril del 2023 por alumnos de la UPC. El objetivo principal de la startup es hacer evolucionar el mercado de reparación de productos del hogar o problemas domésticos.  </p>
                            <p>DevGroup es una StartUp que se dedica al desarrollo de software enfocado en resolver problemas domésticos. Hacen uso de metodologías ágiles lo que genera servicios de mejor calidad para sus usuarios. Utiliza el Desing Thinking para detectar los problemas domésticos a los que se le busca dar solución. Incluso mediante el uso de Design Sprint daremos solución a los problemas repentinos que se puedan presentar.</p>
                        </div>
                    </div>
            </div>
        </div>
        <div class="row" id="row-datos">
            <div class="container">
                <div class="row text-center">
                    <div class="col">
                        <div class="mx-auto circulo d-flex justify-content-center align-items-center">
                            <h1 class="font-weight-bold title-color">1</h1>
                        </div>
                        <h5 class="font-weight-bold mt-3 text-white">SOLA PAGINA</h5>
                    </div>
                    <div class="col">
                        <div class="mx-auto circulo d-flex justify-content-center align-items-center">
                            <h1 class="font-weight-bold title-color">+100</h1>
                        </div>
                        <h5 class="font-weight-bold mt-3 text-white">EXPERTOS EN EL AREA</h5>
                    </div>
                    <div class="col">
                        <div class="mx-auto circulo d-flex justify-content-center align-items-center">
                            <h1 class="font-weight-bold title-color">24</h1>
                        </div>
                        <h5 class="font-weight-bold mt-3 text-white">HORAS AL DIA</h5>
                    </div>
                    <div class="col">
                        <div class="mx-auto circulo d-flex justify-content-center align-items-center">
                            <h1 class="font-weight-bold title-color">7</h1>
                        </div>
                        <h5 class="font-weight-bold mt-3 text-white">DIAS A LA SEMANA</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" id="row-servicios">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-sm text-center">
                        <img src="../assets/images/servicios.jpg" alt="servicio">
                    </div>
                    <div class="col-sm mt-4">
                        <h1 class="font-weight-bold title-color mb-3">Nuestro Servicios</h1>
                        <p>ServiFix es una plataforma en línea que ofrece servicios de reparación y mantenimiento doméstico a través de una aplicación web. Enfocándose en el segmento B2C, la empresa ofrece servicios de reparación o mantenimiento para aquellos clientes que experimenten algún problema en los servicios básicos de su hogar, como electricidad, agua, alcantarillado y amoblado, entre otros.</p>
                        <p>Nuestra aplicación permite a los clientes publicar sus solicitudes de reparación en línea, estableciendo un precio base y describiendo el trabajo que se debe realizar. Los técnicos especializados pueden ofertar por el trabajo, ofreciendo sus servicios al mejor precio, y los clientes pueden seleccionar al técnico adecuado basándose en las recomendaciones y calificaciones de otros usuarios, así como en la información y experiencia proporcionada por el técnico.</p>
                    </div>
                </div>
        </div>
        </div>
        <div class="row" id="row-frase">
            <div class="container text-center">
                <h3 class="text-white">“El único modo de hacer un gran trabajo es AMAR lo que HACES.”</h3>
                <h3 class="text-white mt-4 font-weight-bold">Steve Jobs</h3>
            </div>
        </div>
        <div class="row" id="row-contacto">
            <div class="container text-center">
                <div class="col-md-6 mx-auto">
                    <h1 class="title-color font-weight-bold">Contacto</h1>
                    <h5 class="mt-4">Para garantizar la calidad de los servicios ofrecidos, buscamos personas calificadas para ofrecer un servicio experto, si deseas trabajar con nosotros dejanos tu correo, nos pondremos en contacto contigo</h5>
                    <div class="input-group mt-5">
                        <input class="form-control" type="text" placeholder="Email">
                        <button class="btn">Enviar</button>
                </div>
                </div>
            </div>
        </div>
    </main>

    <footer>
        <div class="row text-white">
           <div class="container">
            <div class="row gy-5">
                <div class="col-lg-4 px-5">
                    <h4 class="font-weight-bold mb-4">NOSOTROS</h4>
                    <p>ServiFix es una plataforma en línea que ofrece servicios de reparación y mantenimiento doméstico a través de una aplicación web.</p>
                </div>
                <div class="col-lg-4 px-5">
                    <h4 class="font-weight-bold mb-4">CREDITOS</h4>
                    <a>Agradecemos al Profesor Tinoco por sus enseñanzas y a la UPC</a>
                </div>
                <div class="col-lg-4 px-5">
                    <h4 class="font-weight-bold mb-4">CONTACTANOS</h4>
                    <div class="d-flex">
                        <span class="material-symbols-outlined">
                            call
                        </span>
                        <p class="ml-3">(+51)999999999</p>
                    </div>
                    <div class="d-flex">
                        <span class="material-symbols-outlined">
                            home
                        </span>
                        <p class="ml-3">Av. La Marina 777</p>
                    </div>
                    <div class="d-flex">
                        <span class="material-symbols-outlined">
                            mail
                        </span>
                        <p class="ml-3">servifix@gmail.com</p>
                    </div>
                </div>
            </div>
           </div>
        </div>
    </footer>

    </body>
    </html>
</template>

<script>

</script>

<style scoped>
.container{
    max-width: 1100px;
}
header{
    background-image: url('../assets/images/Fondo1.jpeg');
    height: 550px;
    background-size: cover;
    position: relative;
}

.title-color{
    color:#01013F;
}

.title{
    color:#9385E6;
    font-size: 45px;
    font-weight: bold;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.btn{
    background-color:#01013F;
    border-radius: 20px;
    color: white;
    font-weight: bold;
    padding-left: 20px;
    padding-right: 20px;
}

.logo{
    width: 121px;
}

#row-cursos{
    background-color:#01013F ;
    background-size: cover;
    padding-top: 50px !important;
    padding-bottom: 50px !important;
}

.row{
    margin: 0;
}

#row-cursos img{
    border-radius: 50%;
    width: 300px;
}
#row-nosotros{
    background-color: #9385E6;
    background-size: cover;
}

#row-nosotros img{
    border-radius: 100%;
    width: 400px;
    margin-top: 15%;
    margin-right: 50%;
}

#row-nosotros p{
    font-size: 14;
}

#row-datos{
    background-color: #01013F;
    padding-top: 100px !important;
    padding-bottom: 100px !important;
}
.circulo{
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-color: #9385E6;
}
#row-servicios{
    background-color: #9385E6;
    background-size: cover;
}

#row-servicios img{
    border-radius: 100%;
    width: 400px;
    margin-top: 15%;
    margin-right: 50%;
}

#row-servicios p{
    font-size: 14px;
}

#row-frase{
    background-color: #01013F;
    background-size: cover;
    background-position: center;
    padding-top: 200px !important;
    padding-bottom: 200px !important;
}
#row-contacto{
    background-color: #9385E6;
    padding-top: 100px !important;
    padding-bottom: 100px !important;
}

.form-control{
    border-radius: 50px;
}

footer{
    background-color: black;
    padding-top: 100px !important;
    padding-bottom: 100px !important;
}

@media(max-width: 992px){
    .navbar-nav{
        background-color: #9385E6;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        padding-left: 20px;
    }
}

nav{
    z-index: 100;
}

body {
    overflow-x: hidden;
  }
</style>