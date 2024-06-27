import Header from './components/header.js';
import Platos from './components/platos.js';
import Servicios from './services/api.js';

var app = new Vue({
    el: '#app',
    data: {
        ingredientes: [],
        selectedIngredientes: [],
        recetas: [],
        platillo: null
    },
    components: {
        Platos,
        Header
    },
    mounted() {
        fetch('json/ingredientes.json')
            .then(response => response.json())
            .then(data => {
                this.ingredientes = data.ingredientes;
                this.recetas = data.recetas;
            });
    },
    methods: {
        updatePlatillo(nuevoPlatillo) {
            this.platillo = nuevoPlatillo;
        }
    },
    template: `
        <div>
            <Header />
            <Platos 
                :ingredientes="ingredientes" 
                :selectedIngredientes="selectedIngredientes" 
                :recetas="recetas" 
                :platillo="platillo"
                @update-platillo="updatePlatillo"
            />
        </div>
    `
});
