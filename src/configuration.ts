// API tokens from https://diveonline.idscan.net/tokens
export const DIVEOnlinePublicToken = "<PublicToken>"
// Bundle token from https://diveonline.idscan.net/bundles 
export const DIVEOnlineIntegrationID = "<IntegrationID>"
// licenseKey - Request a DIVE SDK license key by reaching out to our team at support@idscan.net share your application's bundle id
// example license for bundle id "net.IDScan.DIVESDK.DemoApp" https://docs.idscan.net/dive/native-sdks/ios.html
export const DIVEconfiguration = {
  "resizeUploadedImage":-1,
  "autoContinue":true,
  "realFaceMode":"auto",
  "documentTypes":[
      {
          "isActive":true,
          "type":"ID",
          "steps":[
              {
                  "type":"front",
                  "name":"Document Front",
                  "mode":{
                      "uploader":true,
                      "video":true
                  }
              },
              {
                  "type":"pdf",
                  "name":"Document PDF417 Barcode",
                  "mode":{
                      "uploader":true,
                      "video":true
                  }
              },
              {
                  "type":"face",
                  "name":"Face",
                  "mode":{
                      "uploader":true,
                      "video":true
                  }
              }
          ]
      },
      {
          "isActive":true,
          "type":"Passport",
          "steps":[
              {
                  "type":"front",
                  "name":"Document Front",
                  "mode":{
                      "uploader":true,
                      "video":true
                  }
              },
              {
                  "type":"mrz",
                  "name":"Document MRZ Barcode",
                  "mode":{
                      "uploader":true,
                      "video":true
                  }
              },
              {
                  "type":"face",
                  "name":"Face",
                  "mode":{
                      "uploader":true,
                      "video":true
                  }
              }
          ]
      },
      {
          "isActive":true,
          "type":"PassportCard",
          "steps":[
              {
                  "type":"front",
                  "name":"Document Front",
                  "mode":{
                      "uploader":true,
                      "video":true
                  }
              },
              {
                  "type":"mrz",
                  "name":"Document MRZ Barcode",
                  "mode":{
                      "uploader":true,
                      "video":true
                  }
              },
              {
                  "type":"face",
                  "name":"Face",
                  "mode":{
                      "uploader":true,
                      "video":true
                  }
              }
          ]
      },
      {
          "isActive":true,
          "type":"GreenCard",
          "steps":[
              {
                  "type":"front",
                  "name":"Document Front",
                  "mode":{
                      "uploader":true,
                      "video":true
                  }
              },
              {
                  "type":"mrz",
                  "name":"Document MRZ Barcode",
                  "mode":{
                      "uploader":true,
                      "video":true
                  }
              },
              {
                  "type":"face",
                  "name":"Face",
                  "mode":{
                      "uploader":true,
                      "video":true
                  }
              }
          ]
      },
      {
          "isActive":true,
          "type":"InternationalId",
          "steps":[
              {
                  "type":"front",
                  "name":"Document Front",
                  "mode":{
                      "uploader":true,
                      "video":true
                  }
              },
              {
                  "type":"mrz",
                  "name":"Document MRZ Barcode",
                  "mode":{
                      "uploader":true,
                      "video":true
                  }
              },
              {
                  "type":"face",
                  "name":"Face",
                  "mode":{
                      "uploader":true,
                      "video":true
                  }
              }
          ]
      }
  ],
  "licenseKey":"<DIVE SDK License Key>",
}