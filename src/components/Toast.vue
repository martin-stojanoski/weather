<template>
    <div class="toast-container" v-if="message.length > 0">
        <div class="toast">
            <p>{{ message }}</p>
        </div>
        <div>
            <button class="toast-button" @click="closeToast()">Zapri</button>
        </div>
    </div>
</template>

<style scoped>
.toast-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 2px solid #ccc;
    background-color: #ffffff;
    border-radius: 15px;
    padding: 1rem;
    transition: all 0.3s;
}

.toast-container:hover {
    box-shadow: 0 0 10px 0 #ccc;
    border-color: #929292;
}

.toast-button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #ccc;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
}

.toast-button:hover {
    background-color: #929292;
}
</style>

<script>
export default {
    name: 'ToastMessage',
    emits: ['opened', 'closed'],
    methods: {
        closeToast() {
            this.$emit('closed')
        }
    },
    computed: {
        message() {
            return this.$store.state.errorMessage
        },
    },
    watch: {
        message() {
            if (this.message.length > 0) {
                this.$emit('opened')
            }
        }
    }
}
</script>