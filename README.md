# testCRNA
Example project for using caver-js with react native. This is a project to briefly introduce how caver-js can be used in the react native project.

## clone project
git clone https://github.com/jimni1222/testCRNA.git

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
1. remove `build` directory in testCRNA/ios if existed. 
2. `cd ios`
3. `pod install`
4. `cd ..`
5. `sudo react-native run-ios`

#### sometimes `npm run postinstall` can fix


<img width="483" alt="스크린샷 2020-04-20 오전 11 18 45" src="https://user-images.githubusercontent.com/32922423/79707935-0294df80-82f9-11ea-88b0-80e27d19282e.png">

## reference
https://github.com/expo/create-react-native-app

https://gist.github.com/dougbacelar/29e60920d8fa1982535247563eb63766

https://github.com/tradle/rn-nodeify
