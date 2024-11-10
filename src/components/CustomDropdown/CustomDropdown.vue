<template>
    <div class="custom-dropdown">
        <div class="custom-dropdown-header">
            <p>{{ value ?? placeholder }}</p>
            <img src="../../assets/images/chevron-down.png" />
        </div>
        <div class="custom-dropdown-list" :style="{ height: 'auto' }">
            <button v-for="item in list">{{ item.label }}</button>
        </div>
    </div>
</template>
<script lang="ts">
    import { defineComponent, ref } from 'vue'
    import { ListItem } from './types.ts'

    export default defineComponent({
        name: 'CustomDropdown',
        props: {
            value: {
                type: String
            },
            placeholder: {
                type: String,
                default: "Select..."
            },
            onValueChange: {
                type: Function as () => void
            },
            list: {
                type: Array as () => ListItem[],
                required: true
            }
        },
        setup() {
            const isOpen = ref<boolean>(false);

            const handleToggle = () => {
                isOpen.value = !isOpen.value
            }

            return {
                isOpen,
                handleToggle
            }
        }
    });

</script>
<style scoped>
    .custom-dropdown {
        border: 1px solid #D9DADD;
        border-radius: 8px;
        position: relative;
    }
    .custom-dropdown-header {
        height: 42px;
    }
    .custom-dropdown-list {
        position: absolute;
        top: 45px;
    }
</style>