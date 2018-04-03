# COMEM+ Citizen Engagement Ionic Starter Project

This project was created following these [setup instructions](https://github.com/MediaComem/comem-citizen-engagement-ionic-setup).



## Installation

Clone this project, then:

```bash
git clone git@github.com:cottas/citizen_engagement_appMob.git
cd citizen_engagement_appMob
npm install
```

You must also put the configuration file in place the first time:

```bash
cp src/app/config.sample.ts src/app/config.ts
```

Fill in appropriate values in `src/app/config.ts`.



## Usage

Run in development mode in the browser with:

```bash
cd citizen_engagement_appMob
ionic serve
```

Or deploy the app to your smartphone with either:

```bash
cd citizen_engagement_appMob
ionic cordova run android --device
```
for android devices,

or:

```bash
cd citizen_engagement_appMob
ionic cordova run ios --device
```
for iOS devices.



## Login & Sign Up

When starting the application, ...
