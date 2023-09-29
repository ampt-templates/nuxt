<template>
  <div>
    <div class="header">
      <div style="flex-direction: column; display: flex">
        <h1>
          Welcome to Nuxt on
          <img src="https://getampt.com/images/ampt.svg" class="logo" />
        </h1>
        <div class="status">
          <div class="icon-container">
            <Icon
              name="iconoir:check-circle"
              color="green"
              size="30"
              v-if="data?.healthcheck === 'OK'"
            />
            <Icon name="iconoir:warning-circle" color="red" size="30" v-else />
          </div>
          <div class="text-container">
            <p class="status-text">{{ statusText }}</p>
          </div>
        </div>
      </div>
      <div class="tip-container">
        <p style="text-align: center">
          Run <code>dev</code> in the Ampt shell to start a local server
        </p>
        <p style="text-align: center">
          Run <code>build</code> to sync your changes your sandbox
        </p>
        <p style="text-align: center">
          Run <code>deploy $stage</code> to deploy to a permanent environment
        </p>
      </div>
    </div>
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/healthcheck");
const statusText = data
  ? `API Status: ${data.value?.healthcheck}`
  : "API Status: Unknown";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap");

.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 150px;
  background: linear-gradient(-45deg, #b367ff, #f952ff, #22b9b7);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  font-family: "Mulish", sans-serif;
}

h1 {
  display: flex;
  font-weight: bold;
  font-size: 36px;
  color: white;
  text-align: center;
}

.status {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tip-container {
  margin-left: 50px;
  display: flex;
  align-content: flex-end;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  background-color: white;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.status-text {
  font-family: "Mulish", sans-serif;
  color: white;
  font-size: 24px;
  margin-left: 10px;
}

.logo {
  display: flex;
  align-self: center;
  margin-top: 3px;
  height: 56px;
  margin-left: 10px;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
