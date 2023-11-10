# [DIVE SDK](https://www.npmjs.com/package/@idscan/divesdk-plugin) Demo for Ionic

The sample application demonstrates work with DIVE SDK for Ionic Capacitor
Includes DIVE SDK iOS and DIVE Online SDK

1. First download  all the app's dependencies

```bash
npm install
```

2. Next download the latest version of the IDscan.net web library

```bash
npm install @idscan/divesdk-plugin@latest
```

3. Replace keys in configuration file `src/configuration.ts` (`<PublicToken>` `<IntegrationID>` `<DIVE SDK License Key>`)
   [Example License key](https://docs.idscan.net/dive/native-sdks/ios.html) for bundle id `net.IDScan.DIVESDK.DemoApp` 

4. Next build the application

```bash
npm run build
npx cap sync ios    
```

5. Run on iOS

```bash
npx cap open ios  
```

