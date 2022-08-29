<template>
    <button 
        ref="buttonRef" 
        @click="handleClick" 
        :class="className"
    >
        {{ buttonText }}
    </button>
</template>

<script lang="ts">
import { defineComponent, useSlots, onMounted, ref, computed, reactive, toRefs } from 'vue'
import '../../style/common.css'

export default defineComponent({
    name: "cx-button",
    props: {
        type: {
            type: String,
            default: 'text'
        },
        size: {
            type: String,
            default: 'default'
        }
    },
    emits: ["click"],
    setup(props, { emit }) {
        const slots = useSlots()
        const buttonRef = ref(null)
        const state = reactive({
            className: 'btnBlue btn_92_cancel btnText_92'
        })
        const size = computed((): number => {
            switch (props.size) {
                case 'middle': 
                    return 104
                case 'large': 
                    return 168
            }
            return 92
        })
        onMounted(() => {
            if (props.type === 'text') {
                state.className = `btnBlue btnText_${size.value} btn_${size.value}_cancel`
            } else if (props.type === 'primary') {
                state.className = `jb_btn jb_btn_${size.value}`
            }
        })
        const buttonText = computed(() => {
            if (slots.default?.()) {
                return slots.default?.()[0].children
            }
            return false
        })
        const handleClick = () => {
            emit("click")
        }
        return {
            handleClick,
            buttonText,
            ...toRefs(state),
        }
    }
})
</script>