
<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 p-0">
                <div class="my-container">

                    <pv-toolbar class="toolbar">
                        <template #start>
                            <router-link to="/">
                                <span>
                                    <a class="botonservi">ServiFix</a>
                                </span>
                            </router-link>
                            <span class="cliente">Cliente</span>

                            <router-link to="/login">
                                <span >
                                <a class="tecnico">¿Eres un tecnico? Da click aqui</a>
                                </span>
                            </router-link>

                        </template>

                    </pv-toolbar>
                        <img src="../assets/images/fondo.jpg" alt="fondo" class="fondo">


                </div>

            </div>


            <div class="col-md-6 d-flex align-items-center form-container mx-auto ">
                <form class="w-100 text-center">
                    <h1 class="login-inicio">Login</h1>
                    <div class="p-inputgroup flex-1 poner-padding">
                     <span class="p-inputgroup-addon">
                      <i class="pi pi-user"></i>
                     </span>
                        <pv-input-text v-model="value.correo" placeholder="Usuario" />
                      </div>

                      <div class="p-inputgroup flex-1">
                       <span class="p-inputgroup-addon">
                        <i class="pi pi-lock"></i>
                        </span>
                          <pv-password v-model="value.contrasena" toggleMask :feedback="false" placeholder="Contraseña" />
                    </div>

                    <div class="contraseña">
                        <router-link to="/recover/password">
                                <span >
                                <a class="recuperarcontra">¿Olvidastte tu contraseña?</a>
                                </span>
                        </router-link>
                    </div>
                    <div class="card flex justify-content-center button-vamos">
                        <router-link to="/add/publication"> <pv-button @click="verificarCredenciales" label="Vamos" /></router-link>
                       
                    </div>
                    <div class="contraseña">
                        <router-link to="/check/in">
                                <span >
                                <a class="recuperarcontra">¿No tienes una cuenta? ¡Regístrate ahora!</a>
                                </span>
                        </router-link>
                        <hr class="linea-horizontal">

                        <router-link to="/login">
                                <span >
                                <a class="recuperarcontra">Acerca de nosotros | Contáctanos</a>
                                </span>
                        </router-link>
                    </div>
                </form>

            </div>
        </div>
    </div>


</template>
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import data from '@/server/db.json';

export default {
    setup() {
        const value = ref({
            correo: '',
            contrasena: '',
        });

        const router = useRouter();

        const verificarCredenciales = () => {
            // Buscar el usuario en la lista de registros
            const usuario = data.registers.find((registro) => registro.correo === value.value.correo && registro.contrasena === value.value.contrasena);

            // Verificar si se encontró el usuario
            if (usuario) {
                // Redirigir a la página de destino usando router.push
                alert('Inicio de sesion correctamente');
                router.push('/landing');
            } else {
                // Mostrar mensaje de error si las credenciales son incorrectas
                alert('Credenciales incorrectas');
            }
        };

        return { value, verificarCredenciales };
    },
};
</script>

<style scoped>
.linea-horizontal {
    color:#959595;
    width: 100%;
    max-width: 500px;
    height: 5px;
    background-color: black;
    margin: 20px auto;
}


.card {
    width: 100%;
    max-width: 100px; /* máximo ancho de la tarjeta */
    margin: 0 auto; /* centrar horizontalmente */
    text-align: center;
}

.button-vamos {
    display: flex;
    justify-content: center;
    margin-top: 20px; /* agregar un margen superior para separar del contenido anterior */
}

@media (max-width: 767px) {
    /* ajustar el ancho de la tarjeta en pantallas más pequeñas */
    .card {
        max-width: 100%;
        max-width: 100px;
    }
}

.contraseña{

    padding-top:30px;
    padding-bottom:10px;
}
.recuperarcontra{
    color:white;
    text-decoration:none;
    font-weight: bold;
    font-size:15px;

}
.my-container {
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;

}
.toolbar {
    text-align: left;
    position: relative;
    z-index: 1;
    background-color: transparent;
}

.toolbar .botonservi{
    text-decoration: none;
    font-size: 4rem;
    font-weight: bold;
    color: #5689C0;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.toolbar .cliente {
    font-size: 4rem;
    font-weight: bold;
    color: #5689C0;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.toolbar .tecnico {
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: bold;
    position: absolute;
    color: #5689C0;
    text-align: center;
    top: 10%;
    left: 30%;
    transform: translate(-50%, -5000%);
}

.toolbar span {
    font-weight: bold;
    color: #5689C0;
    text-align: left;

}



.fondo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}




.login-inicio{
    font-weight:bold;
    padding-bottom:50px;
    color:white;
}


.row {
    background-color:#5689C0;
    align-items: center; /* Para centrar verticalmente */
    position: relative; /* Para que el .p-inputgroup tenga posición absoluta relativa a este elemento */
}

.form-container {
    max-width: 500px; /* Para limitar el ancho del formulario */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.form-container .p-inputgroup {
    display: flex; /* Para centrar vertical y horizontalmente */
    justify-content: center;
}
.poner-padding{
    padding-bottom:15px;
}

/*mayor igual a 768px y menor igual a 1173px*/
@media (min-width: 768px) and (max-width: 1173px) {
    /* Para pantallas pequeñas */
    .form-container {
        max-width: 100%; /* Para ocupar todo el ancho */
        position: static; /* Para que no tenga posición absoluta en pantallas pequeñas */
        transform: none; /* Para que no tenga transformaciones en pantallas pequeñas */
    }

    .form-container .p-inputgroup {
        margin-top: 20px; /* Para separar un poco del borde superior */
    }

    .toolbar .botonservi {
        transform: translate(-100%, 10%);

        font-size: 3rem;
    }

    .toolbar .cliente {
        font-size: 1.5rem;
        top: 30%;
        left: 50%;
        transform: translate(-230%, 50%);
        margin-top: 60px;
    }
    .toolbar .tecnico {
        text-decoration: none;
        font-size: 0.8rem;
        font-weight: bold;
        color: #5689C0;
        text-align: center;
        top: 10%;
        left: 50%;
        transform: translate(-100%, 2900%);
    }

}

/*menor igual a 767px*/
@media (max-width: 767px) {
    /* Para pantallas pequeñas */
    .toolbar .botonservi {
        transform: translate(-130%, 10%);

        font-size: 3rem;
    }

    .toolbar .cliente {
        font-size: 1.5rem;
        top: 30%;
        left: 50%;
        transform: translate(-300%, 50%);
        margin-top: 60px;
    }
    .toolbar .tecnico {
        text-decoration: none;
        font-size: 0.8rem;
        font-weight: bold;
        color: #5689C0;
        text-align: center;
        top: 10%;
        left: 50%;
        transform: translate(-130%, 2900%);
    }

}

/*mayor igual a 1174*/
@media (min-width: 1174px) {
    .form-container {
        max-width: 100%; /* Para ocupar todo el ancho */
        position: static; /* Para que no tenga posición absoluta en pantallas pequeñas */
        transform: none; /* Para que no tenga transformaciones en pantallas pequeñas */
    }

    .form-container .p-inputgroup {
        margin-top: 20px; /* Para separar un poco del borde superior */
    }


    .toolbar .botonservi {
        font-size: 4rem;
        transform: translate(-120%, 10%);

    }

    .toolbar .cliente {
        font-size: 2rem;
        transform: translate(-275%, 180%);

    }
    .toolbar .tecnico {
        font-size: 0.8rem;
        transform: translate(-80%, 3000%);

    }

}

</style>