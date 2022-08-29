<template>
    <div>
        spuer-ui库
        <br>
        <br>
        <br>
        <cx-button @click="onOK">确定</cx-button>
        <br>
        <br>
        <br>
        <cx-button @click="onOK" size="middle">确定</cx-button>
        <br>
        <br>
        <br>
        <cx-button @click="onOK" size="large">确定</cx-button>
        <br>
        <br>
        <br>
        <cx-button @click="onOK" type="primary" size="middle">确定</cx-button>
        <br>
        <br>
        <br>
        <cx-button @click="onOK" type="primary" size="large">确定</cx-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "App",
    setup() {
        const onOK = () => {
            console.log("I am Be Clicked");
        }
        return {
            onOK
        }
    }
 })
</script>