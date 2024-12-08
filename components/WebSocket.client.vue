<script setup lang="ts">
// In prod: check if secure then use wss://
const { status, data, send, open, close } = useWebSocket(
  `ws://${location.host}/api/websocket`
);

const ownCount = ref(0);
const otherCount = ref(0);

watch(data, (newValue) => {
  const newValueNumber = Number(newValue);
  if (isNaN(newValueNumber)) return;
  otherCount.value = Number(newValue);
});

const onClickHandle = (event: any) => {
  ownCount.value++;
  send(ownCount.value.toString());
};
</script>

<template>
  <div class="flex flex-col justify-center gap-3">
    <div>Own count: {{ ownCount }}</div>
    <div>Opponet count: {{ otherCount }}</div>
    <button
      @click="onClickHandle"
      class="border-amber-600 border-2 px-5 py-2 rounded-sm"
    >
      Click me!
    </button>
  </div>
</template>
