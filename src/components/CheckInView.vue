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

                            <router-link to="/check/in">
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
                    <h1 class="login-inicio">Registrate</h1>
                    <div class="p-inputgroup flex-1 poner-padding">
                    <span class="p-inputgroup-addon">
                    <i class="pi pi-envelope"></i>
                    </span>
                        <pv-input-text placeholder="Correo" v-model="correo"/>
                    </div>

                    <div class="p-inputgroup flex-1">
                    <span class="p-inputgroup-addon">
                    <i class="pi pi-id-card"></i>
                    </span>
                        <pv-input-text placeholder="Nombre" v-model="nombre"/>
                    </div>

                    <div class="p-inputgroup flex-1">
                    <span class="p-inputgroup-addon">
                    <i class="pi pi-id-card"></i>
                    </span>
                        <pv-input-text placeholder="Apellido" v-model="apellido"/>
                    </div>

                    <div class="p-inputgroup flex-1">
                    <span class="p-inputgroup-addon">
                    <i class="pi pi-map-marker"></i>
                    </span>
                        <pv-input-text placeholder="Direccion" v-model="direccion"/>
                    </div>

                    <div class="p-inputgroup flex-1">
                    <span class="p-inputgroup-addon">
                    <i class="pi pi-map"></i>
                    </span>
                        <pv-input-text placeholder="Departamento" v-model="departamento"/>
                    </div>

                    <div class="p-inputgroup flex-1">
                    <span class="p-inputgroup-addon">
                    <i class="pi pi-map"></i>
                    </span>
                        <pv-input-text placeholder="Distrito" v-model="distrito"/>
                    </div>

                    <div class="p-inputgroup flex-1">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-mobile"></i>
                    </span>
                        <pv-input-text placeholder="Numero telefonico" v-model="telefono"  />
                    </div>


                    <div class="p-inputgroup flex-1">
                    <span class="p-inputgroup-addon">
                    <i class="pi pi-lock"></i>
                    </span>
                        <pv-input-text placeholder="Contraseña" v-model="contrasena" />
                    </div>

                    <div class="p-inputgroup flex-1">
                    <span class="p-inputgroup-addon">
                    <i class="pi pi-check-circle"></i>
                    </span>
                        <pv-input-text placeholder="Repetir contraseña" v-model="repetirContrasena"/>
                    </div>

                    <div class="card flex justify-content-center button-vamos">
                        <pv-button label="Vamos" @click="guardarDatos"/>
                    </div>
                    <div class="contraseña">
                        <router-link to="/check/in">
                                <span >
                                <a class="recuperarcontra">¿No tienes una cuenta? ¡Regístrate ahora!</a>
                                </span>
                        </router-link>

                    </div>
                </form>

            </div>
        </div>
    </div>


</template>

<script>
import { RegistersApiService } from '@/core/services/registers-api.service';

export default {
    data() {
        return {
            correo:'',
            nombre:'',
            apellido:'',
            direccion:'',
            departamento:'',
            distrito:'',
            telefono: '',
            contrasena: '',
            repetirContrasena: '',
        };
    },
    methods: {

        async guardarDatos() {
                const data = {
                    correo: this.correo,
                    nombre: this.nombre,
                    apellido: this.apellido,
                    direccion: this.direccion,
                    departamento: this.departamento,
                    distrito: this.distrito,
                    telefono: this.telefono,
                    contrasena: this.contrasena,
                    repetirContrasena: this.repetirContrasena
                };

                const apiService = new RegistersApiService();

                try {
                    await apiService.create(data);
                    console.log("Datos guardados correctamente en la base de datos");

                    // Limpiar campos después de guardar
                    this.correo = "";
                    this.nombre = "";
                    this.apellido = "";
                    this.direccion = "";
                    this.departamento = "";
                    this.distrito = "";
                    this.telefono = "";
                    this.contrasena = "";
                    this.repetirContrasena = "";
                    this.$router.push('/pay');
                } catch (error) {
                    console.error(error);
                }

        }
    }
};
</script>



<style scoped>


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
    padding-bottom:30px;
    color:white;
    text-decoration:none;
    font-weight: bold;
    font-size:15px;

}
.my-container {
    position: relative;
    height: 150vh;
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
    padding-bottom:0px;
    color:white;
    padding-top:20px;
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
    padding-bottom:0px;
}

/*mayor igual a 768px y menor igual a 1173px*/
@media (min-width: 768px) and (max-width: 1173px) {
    /* Para pantallas pequeñas */
    .form-container {
        width: 40%;
        max-width: 55%;
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
        transform: translate(-100%, 4500%);
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
        transform: translate(-130%, 4500%);
    }
    .form-container .p-inputgroup {
        margin-bottom: 5px; /* Para separar un poco del borde superior */
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
        transform: translate(-80%, 4600%);

    }

}

</style>
