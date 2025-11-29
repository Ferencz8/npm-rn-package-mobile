# Example of how to create an npm package and reuse it in a react native app
Commands for npm package:

   ```bash
   npm run build
   npm pack
   ```
This will create a tar.gz file. 

Move to the demo-app path and in there run

   ```bash
    npm install ../common/common-0.1.5.tgz 
   ```
###Note
For every change in the npm package make sure to update the version in package.json and rerun the commands above!

##Usefull commands

To create an apk file with path \demo-app\android\app\build\outputs\apk\debug\app-debug.apk
```bash
npx expo run:android
```
To create release apk
```bash
./gradlew.bat assembleRelease
```
## Structure
- common - package

- demo-app - react native app