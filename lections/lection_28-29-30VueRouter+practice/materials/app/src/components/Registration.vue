<template>
    <div class="registration">
        <registration-modal v-show="GET_REGISTRATION_MODAL_VISIBILITY">
            <template v-slot:header>
                <div class="registration__header">
                    Registration
                </div>
            </template>

            <template v-slot:content>
                <div class="registration__content">
                    <label v-for="(value, key) in requestValue">
                        {{key}}
                        <input type="text"
                               v-model="requestValue[key]"
                               :name="key"
                               :class="['registration__field', `registration__field-${key}`]">
                    </label>
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
import  {mapGetters, mapMutations, mapActions} from 'vuex';

export default  {
    data() {
      return {
          requestValue: {
              login: '',
              password: '',
              age: '',
              gender: ''
          }
      }
    },
    components: {
        RegistrationModal
    },
    computed: {
        ...mapGetters(['GET_REGISTRATION_MODAL_VISIBILITY'])
    },
    methods: {
        save() {
            this.asyncRegistrationNewUser(this.requestValue)
        },
        close() {
            this.SET_REGISTRATION_MODAL_VISIBILITY(false);
        },
        ...mapMutations(['SET_REGISTRATION_MODAL_VISIBILITY']),
        ...mapActions(['asyncRegistrationNewUser'])
    }
}
</script>


<style lang="scss">
    .registration {
        &__header {
            font-size: 25px;
        }

        &__content {
            display: flex;
            flex-direction: column;
        }
    }

</style>