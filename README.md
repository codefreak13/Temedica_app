## TEMEDICA DRUG INFORMATION APP

An app that provides users with information on drugs.

## Overview
The app was built using React Native and Typescript and the data set used in the app was provided by the Temedica team but it was used directly in the app without any backend.

## Setup

### Cloning The App Repo

Open this link([Setup React Native CLI](https://reactnative.dev/docs/environment-setup)) on your computer browser tab.   
Select your operating system(OS) type as the Development OS and iOS as your target OS.   
Follow the instructions to properly setup your local machine for React Native Development.

 When you have successfully completed the setup, you can proceed to clone the app.


*Before cloning the app, specify the directory/folder to clone the app to with the command line prompt*.

*For example, to clone into the Desktop folder, enter the command below into your command line*.

>```$ cd Desktop```

##

To clone the application, copy and paste any of the commands below to your machine command line, according to your git setup, then press enter

#### If your Git is setup for:

##### HTTPS

>```$ git clone https://github.com/codefreak13/Temedica_app.git```

##### SSH

>```$ git clone git@github.com:codefreak13/Temedica_app.git```
##

### Running The App
After cloning the app, open the app folder with your favourite IDE or code editor and install node modules with the command below


>```$ yarn install```
##

All is set!
You can now build the app by running the following command on your IDE terminal

>```$ yarn ios```

This command will also spin up the simulator and run the app

## Testing the App
Testing in the app was setup using Jest for snapshot and Detox for end to end testing.

### Snapshot Test
To run snapshot tests

>```$ yarn test```

### e2e Test
To run the e2e test, first the build the test using
>```$ yarn e2e:ios:build```

And then, run the test
>```$ yarn e2e:ios:test```

## Improvements
- Currently, with the way the app was built, if data has to change in the app, a new version has to be built which is not ideal. The ideal solution would be to move data to the backend and make API calls for data, in order to make flow of data dynamic. 
