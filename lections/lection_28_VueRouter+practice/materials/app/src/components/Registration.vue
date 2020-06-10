<template>
    <div>
        <registration-modal>
            <template v-slot:header>
                <div class="registration__header">
                    Registration
                </div>
            </template>

            <template v-slot:content>
                <div>
                    <input type="text">
                </div>
            </template>

            <template v-slot:footer>
                <div class="registration__buttons">
                    <button @click="save">save</button>
                    <button  @click="close"> close</button>
                </div>
            </template>
        </registration-modal>
    </div>
</template>


<script>
import RegistrationModal from '@/components/general/Modal';

export default  {
    components: {
        RegistrationModal
    },
    methods: {
        save() {

        },
        close() {

        }
    }
}
</script>