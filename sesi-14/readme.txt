create react native app using expo cli :
---------------------------------------

reference : 
https://docs.expo.dev/
https://reactnative.dev/
https://snack.expo.dev/


create expo web : (reference : https://docs.expo.dev/workflow/web/)
npx expo install react-dom react-native-web @expo/webpack-config
npx expo start --web

install expo :
npm install --global expo-cli eas-cli 
or >>
npm install -g expo-cli
npm install -g eas-cli
npx create-expo-app my-app

install generate image :
npm install -g sharp-cli

perintah expo :
expo init HelloReact (migrate to using)
cd HelloReact

using npm :
npm start / expo start

using yarn :
yarn android
yarn ios
yarn web

running ios :
open -a Simulator >> open simulator ios
expo start -c  >> clear the metro bundler cache

using local cli :
npx expo start
npx expo run:android --no-build-cache
npx expo run:ios

using macports : 
sudo port install android

running avd without android studio :
~/Library/Android/sdk/tools/emulator -list-avds >> cek list avd
~/Library/Android/sdk/tools/emulator -avd Pixel_3a_API_31_arm64-v8a
cd ~/Library/Android/Sdk/tools
./emulator -avd Pixel_3a_API_31_arm64-v8a

show developer mennu expo :
press Ctrl + m for Android
press Cmd ⌘ + m for iOS
adb shell input keyevent 82

mode production :
npx expo start --no-dev --minify

config sdk :
create local.properties di sesi-14/HelloReact/android/
lalu isi sdk berikut : 
mac >> sdk.dir=/Users/arif/Library/Android/sdk
windows >> C:/Users/arif/AppData/Local/Android/sdk

perintah adb :
---
cd ~/Library/Android/sdk/platform-tools
./adb version

adb version
adb devices
adb start-server

expo cli :
---
expo login >> masukan username dan password
expo whoami >> cek login
eas build:configure >> eas configure

reference : 
setup build >> https://docs.expo.dev/build/setup/
configure eas json >> https://docs.expo.dev/build/eas-json/

eas build --platform android >> build android
eas build --platform ios >> build ios
eas build --platform all >> all platform
eas build:list >> waiting for the build complete
eas build -p android --profile preview >> build preview

expo build:status >> cek status build

reference : 
Expo akan segera dihentikan "expo build" dan telah mendorong penggunaan eas build,
yang dibangun ke bundel aplikasi secara default. 

Untuk membangun ke apk, ubah eas.jsonfile sesuai seperti 
yang diberikan di sini di expo docs
Jangan lupa untuk menginstal eas secara terpisah 
karena tidak dibundel dengan expo-cli.


how to install navigation : 
reference navigation : https://reactnative.dev/docs/navigation
npm install @react-navigation/native @react-navigation/native-stack
expo install react-native-screens react-native-safe-area-context

m1 users :
sudo arch -x86_64 gem install ffi
arch -x86_64 pod install

jika terjadi error : [!] No `Podfile' found in the project directory.
sudo gem install cocoapods