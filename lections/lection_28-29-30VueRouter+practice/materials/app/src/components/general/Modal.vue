<template>
    <div class="modal">
        <div class="modal__backdrop modal__backdrop--vert-align">
            <div class="modal__container modal__container--shadow">
                <header>
                    <slot name="header"></slot>
                </header>

                <div class="content">
                    <slot name="content"></slot>
                </div>

                <footer class="modal__footer">
                    <slot name="footer"></slot>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'Modal',
    data() {
        return {}
    },

}
</script>

<style lang="scss">
    .modal {
        position: fixed;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        z-index: 999;

        &__backdrop {
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0, .5);
        }

        &__backdrop--vert-align {
            display: flex;
            align-items: center;
        }

        &__container {
            width: 50%;
            min-height: 50vh;
            margin: 0 auto;

            background-color: white;
            border-radius: 3px;
            position: relative;
        }

        &__container--shadow {
            box-shadow: 0px 1px 6px 1px #0000007a;
        }

        &__footer {
            position: absolute;
            bottom: 0px;
            width: 100%;
            text-align: center;
        }

    }
</style>
