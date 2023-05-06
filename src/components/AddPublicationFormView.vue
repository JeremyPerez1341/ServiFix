<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-sm-5">
                <div class="menu sidebar">
                    <div class="logo">
                        <router-link to="/add/publication">
                            <a href="">
                                <img src="../assets/images/logo1.png" style="max-width: 200px; height: auto;">
                            </a>
                        </router-link>
                    </div>
                    <div>
                        <nav>
                            <ul class="options">
                                <li>
                                    <img src="../assets/images/house-icon.png" alt="house-icon">
                                    <a href="#">Página Principal</a>
                                </li>
                                <li>
                                    <img src="../assets/images/list-icon.png" alt="list-icon">
                                    <a href="#">Bandeja de Entrada</a>
                                </li>
                                <li>
                                    <img src="../assets/images/email-icon.png" alt="email-icon">
                                    <a href="#">Registro</a>
                                </li>
                                <li>
                                    <img src="../assets/images/user-icon.png" alt="user-icon">
                                    <router-link to="/view/profile">
                                        <a >Perfil</a>
                                    </router-link>
                                </li>
                                <li>
                                    <img src="../assets/images/close-sesion-icon.png" alt="close-sesion-icon">
                                    <router-link to="/login">
                                        <a href="#">Cerrar Sesión</a>

                                    </router-link>                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div class="col-md-6 d-flex align-items-center form-container mx-auto ">
                <form class="w-100">
                    <div class="text-center"><img src="../assets/images/licuadora.jpeg" height="200" width="200" class="align-items-center"/>
                        <p class="text-center">Imagen del problema</p>
                    </div>

                    <span>Nombre de publicación (requerido)</span>
                    <div class="p-inputgroup flex-1 poner-padding">
                        <pv-input-text v-model="nombre"/>
                    </div>

                    <br>

                    <span>Por favor, describa el problema (requerido)</span>
                    <div class="p-inputgroup flex-1">
                        <pv-input-text v-model="descripcion"/>
                    </div>

                    <br>

                    <span>Precio de referencia (opcional)</span>
                    <div class="p-inputgroup flex-1">
                        <pv-input-text v-model="precio"/>
                    </div>

                    <br>

                    <span>Departamento (requerido)</span>
                    <div class="p-inputgroup flex-1">
                        <pv-input-text v-model="departamento"/>
                    </div>

                    <br>

                    <span>Distrito (requerido)</span>
                    <div class="p-inputgroup flex-1">
                        <pv-input-text v-model="distrito"/>
                    </div>

                    <br>

                    <span>Fecha y hora para solucionar el problema  (requerido)</span>
                    <div class="p-inputgroup flex-1">
                        <pv-input-text v-model="fechayhora"/>
                    </div>

                    <br>

                    <router-link to="/add/publication">
                        <div class="card flex justify-content-center button-vamos">
                            <pv-button label="Publicar" @click="guardarDatos1"/>
                        </div>
                    </router-link>


                    <br>
                </form>

            </div>
        </div>
    </div>
</template>

<style scoped>

ul {
    list-style: none;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
}
li {
    display: flex;
    align-items: center;
    padding: 10px;
}
li:hover {
    background-color: skyblue;
}
a {
    text-decoration: none;
    margin: 5%;
    color: #ffffff;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 29px;
}

.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
    }
}

.row {
    background-color: #ffffff;
    align-items: center; /* Para centrar verticalmente */
    position: relative; /* Para que el .p-inputgroup tenga posición absoluta relativa a este elemento */
}
.menu {
    background-color:#5689C0;
}
.sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #5689C0;
    overflow-y: auto; /* Permite desplazamiento vertical si el contenido es demasiado grande */
}
.logo{
    text-align: center;
}
.options li:last-child {
    position: absolute;
    bottom: 0;
    left: 0;
}


h1 {
    margin: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 29px;
    text-align: center;
}

.square-button i {
    line-height: 1;
}

.material-symbols-outlined {
    font-size: 200px;
}
</style>

<script>
import {PublicationApiService} from '@/core/services/publication-api.service';

export default {
    data() {
        return {
            nombre:'',
            descripcion:'',
            precio:'',
            departamento:'',
            distrito:'',
            fechayhora: '',
        };
    },
    methods: {

        async guardarDatos1() {
            const data = {

                nombre: this.nombre,
                descripcion: this.descripcion,
                precio: this.precio,
                departamento: this.departamento,
                distrito: this.distrito,
                fechayhora: this.fechayhora
            };

            const apiService = new PublicationApiService();

            try {
                await apiService.nuevaPubli(data);
                console.log("Datos guardados correctamente en la base de datos");

                // Limpiar campos después de guardar
                this.nombre="";
                this.descripcion="";
                this.precio="";
                this.departamento="";
                this.distrito="";
                this.fechayhora="";

            } catch (error) {
                console.error(error);
            }

        }
    }
};
</script>
