# A2A Dummy
Example project for using Klip A2A APIs with react native.

## clone project
git clone https://github.com/jeonghonah/a2a-dummy.git

## install
`npm install`

## run
`npm run start`
or
`npm run ios`
or
`npm run android`

## trouble shooting
#### error Failed to build iOS project. We ran "xcodebuild" command but it exited with error code 65.
1. remove `build` directory in a2a-dummy/ios if existed. 
2. `cd ios`
3. `pod install`
4. `cd ..`
5. `sudo react-native run-ios`

#### sometimes `npm run postinstall` can fix
