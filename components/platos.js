export default {
    template: `
        <div class="container">
            <div class="ingredientes">
                <h2>Ingredientes</h2>
                <div v-for="ingrediente in ingredientes" :key="ingrediente.id">
                    <input type="checkbox" :id="ingrediente.id" :value="ingrediente.id" v-model="selectedIngredientes">
                    <label :for="ingrediente.id">{{ ingrediente.id }} : {{ ingrediente.nombre }}</label>
                </div>
                <button @click="cocinar">Cocinar</button>
            </div>

            <div class="resultado" v-if="platillo">
                <h2>FELICIDADES HAS CONSEGUIDO COCINAR: 
                {{ platillo.nombre }}</h2>
                <h3>LOS INGREDIENTES SON: </h3>
                <ul>
                    <li v-for="ingrediente in platillo.ingredientes" :key="ingrediente">{{ getIngredienteNombre(ingrediente) }}</li>
                </ul>
                <img :src="platillo.imagen" alt="Imagen del platillo">
            </div>

            <div class="resultado" v-else>
                <h2 class="resultado-texto">!NO HAY RESULTADOS¡</h2>
            </div>
        </div>
    `,
    props: {
        ingredientes: {
            type: Array,
            required: true
        },
        selectedIngredientes: {
            type: Array,
            required: true
        },
        recetas: {
            type: Array,
            required: true
        },
        platillo: {
            type: Object,
            required: false
        }
    },
    methods: {
        cocinar() {
            const recetaEncontrada = this.recetas.find(receta => 
                receta.ingredientes.every(ingrediente => 
                    this.selectedIngredientes.includes(ingrediente)
                )
            );

            if (recetaEncontrada) {
                this.$emit('update-platillo', recetaEncontrada);
            } else {
                this.$emit('update-platillo', null);
            }
        },
        getIngredienteNombre(id) {
            const ingrediente = this.ingredientes.find(ing => ing.id === id);
            return ingrediente ? ingrediente.nombre : '';
        }
    },
    name: 'Platos'
}
