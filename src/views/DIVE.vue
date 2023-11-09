<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>DIVE SDK</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">DIVE SDK</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-button @click="scan()">Start Scan</ion-button>
      <div v-if="resultReady">
        <h1>Scan Results</h1>
        <b>documentType:</b> {{ documentType[resultData.documentType] }}
        <h2>Front Image</h2>
        <IonImg :src="srcBase64(resultData.frontImageBase64)"></IonImg>
        <h2>Back/Second Image</h2>
        <IonImg :src="srcBase64(resultData.backOrSecondImageBase64)"></IonImg>
        <h2>Face Image</h2>
        <IonImg :src="srcBase64(resultData.faceImageBase64)"></IonImg>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonImg} from '@ionic/vue';
import { divesdk } from '@idscan/divesdk-plugin'
import { ref } from 'vue'
import { DIVEconfiguration } from '../configuration'
import documentType from '../documentTypes'

const resultData = ref<any>();;
const resultReady = ref<boolean>();
const message = ref<string>();
const scan = async () => {
  resultReady.value = false;
  divesdk.configure({
    configuration: JSON.stringify(DIVEconfiguration)
  }).then(()=>{
    message.value = ""
    divesdk.start().then((result) => {
      resultReady.value = true;
      resultData.value = result;
      message.value = ""
    }).catch((error)=>{
      message.value = error;
    });
  }).catch((error)=>{
    message.value = error;
  });
};

const srcBase64 = (src: string) => {
  return src && (src.length > 0) ? "data:image/jpeg;base64," + src : '';
}
</script>
