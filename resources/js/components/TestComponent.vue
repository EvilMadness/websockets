<template>
    <v-row>
        <v-col cols="8">
            <v-card>
                <div class="card-header">
                    <v-text-field
                        v-model="horarios.estudiante"
                        label="Estudiante"
                    ></v-text-field>
                </div>
                <div class="card-body">
                    <template v-for="(dia, idx) in dias">
                        <v-row>
                            <v-col>
                                <v-checkbox
                                    v-model="dia.check"
                                    :label="dia.dia"
                                    :value="!dia.check"
                                ></v-checkbox>
                            </v-col>
                                <v-col cols="5">
                                    <v-text-field
                                        :disabled="!dia.check"
                                        type="time"
                                        v-model="dia.entrada"
                                        label="Entrada"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="5">
                                    <v-text-field
                                        :disabled="!dia.check"
                                        type="time"
                                        v-model="dia.salida"
                                        label="Salida"
                                    ></v-text-field>
                                </v-col>
                        </v-row>
                    </template>
                </div>
            </v-card>
        </v-col>
        <v-col cols="4">
            <v-card>
                {{ horarios }} {{ dias }}
            </v-card>
        </v-col>
    </v-row>

</template>

<script>
export default {
    data() {
        return {
            horarios: {
                estudiante: null,
            },
            dias: [
                {id: 1, dia: 'Lunes', entrada: null, salida: null, check: false },
                {id: 2, dia: 'Martes', entrada: null, salida: null, check: false },
                {id: 3, dia: 'Miércoles', entrada: null, salida: null, check: false },
                {id: 4, dia: 'Jueves', entrada: null, salida: null, check: false },
                {id: 5, dia: 'Viernes', entrada: null, salida: null, check: false },
            ],
        }
    },
}
</script>

<style scoped>
</style>
