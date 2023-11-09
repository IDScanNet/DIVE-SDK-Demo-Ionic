<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>DIVE SDK Online</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">DIVE SDK Online</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-button @click="loadConfiguration()">Load Configuration</ion-button>
      <ion-button @click="scan()" v-if="configReady">Start Scan</ion-button>
      <h2>{{ message }}</h2>
      <h3 v-if="loading">Loading...</h3>
      <div v-if="resultReady">
        <h1>Results</h1>
        <ion-list>
          <ion-item v-if="documentType[resultData.documentType]">
            <b>documentType:</b> {{ documentType[resultData.documentType] }}
          </ion-item>
          <template v-for="(value, key) in resultData" v-bind:key="key">
            <ion-item v-if="value != null && (typeof value) == 'boolean'">
              <b>{{ key }}:</b> {{ value ? "true":"false" }}
            </ion-item>
            <ion-item v-else-if="value != null && (typeof value) == 'object'">
              <h2>{{ key }}</h2>
            </ion-item>
            <template v-if="value != null && (typeof value) == 'object'" v-for="(value2, key2) in value" v-bind:key="key2">
              <ion-item v-if="value2 != null && value2.length > 0">
                <b>{{ key2 }}:</b> {{ value2 }}
              </ion-item>
            </template>
            <ion-item v-else-if="value != null">
              <b>{{ key }}:</b> {{ value }}
            </ion-item>
          </template>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLoading, IonList, IonItem } from '@ionic/vue';
import { divesdk } from '@idscan/divesdk-plugin';
import { ref } from 'vue'
import { DIVEOnlinePublicToken, DIVEOnlineIntegrationID } from '../configuration'
import documentType from '../documentTypes'
var imageSrc: string = "";
const resultData = ref<any>();;
const resultReady = ref<boolean>();
const configReady = ref<boolean>();
const loading = ref<boolean>();
const message = ref<string>();
// applicantID you can create in DIVE control panel https://diveonline.idscan.net/validationRequest
// or by API https://docs.idscan.net/dive/dive-online/swagger.html
// POST request /api/v2/private/Applicants use secret key 
const applicantID = '395c03fc-7239-48fe-b437-d7204812fa15';
const loadConfiguration = async () => {
  loading.value = true;
  divesdk.configureDIVEOnline({
    applicantID: applicantID,
    publicToken: DIVEOnlinePublicToken,
    integrationID: DIVEOnlineIntegrationID,
    sendLocation: false
  }).then(() => {
    configReady.value = true;
    message.value = "Configuration Loaded"
    loading.value = false;
  }).catch((error) => {
    message.value = error;
    configReady.value = false;
    loading.value = false;
  })
}
const scan = async () => {
  loading.value = true;
  resultReady.value = false;
  divesdk.startDIVEOnline().then((result) => {
    resultReady.value = true;
    message.value = "Configuration Loaded"
    resultData.value = result;
    loading.value = false;
  }).catch((error) => {
    message.value = error;
    configReady.value = false;
    loading.value = false;
  });
};
</script>
