<template>
    <div class="card">
        <div class="card-header">
            <input type="text" placeholder="ESTUDIANTE">
        </div>
        <div class="card-body">
            {{horarios}}
                <template v-for="(day, idx) in days">
                    <v-checkbox
                        v-model="horarios.dias.day"
                        :label="day.dia"
                        :value="day"
                    ></v-checkbox>
                    {{idx}}
<!--                    <input type="text" v-model="horarios.dias[idx]">-->
<!--                    <input type="text" v-model="horarios.dias[idx]">-->
                </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            days: [
                {
                    id: 1,
                    dia: 'Lunes'
                },
                {
                    id: 2,
                    dia: 'Martes'
                },
                {
                    id: 3,
                    dia: 'Miercoles'
                },
                {
                    id: 4,
                    dia: 'Jueves'
                },
                {
                    id: 5,
                    dia: 'Viernes'
                }
            ],
            horarios: {
                estudiante: null,
                dias: {
                    dia: null,
                    entrada: null,
                    salida: null
                }
            },
        }
    },
}
</script>

<style scoped>
.tarjetas {
    display: grid;
    grid-template-columns: repeat(3, auto);
    /*grid-gap: 5px;*/
    /*grid-auto-rows: minmax(60px, 60px);*/
}
</style>
