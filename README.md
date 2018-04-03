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



### Login & Sign Up

When starting the application, you will either have to login or sign up to the application, which will log you in automatically once you have signed up successfully.
To sign up you will have to enter the following data:
* Username
* Password
* Firstname
* Lastname
* Phone


### The Map & Issue Details

After the login, the application takes you to the map that shows you the reported issues in your area. By clicking on an issue, a page is going to pop up, showing the issue's details including a picture (optionally), the date of report, the authors name, the description and comments. Click "CLOSE" in the top right corner to close the page.


### Filtering

By clicking on the Filter icon in the top right corner of the map screen, the application is going to show you the list with all the issues in your area. You can then filter the issues by the following categories:
* All
* New
* In Progress
* Rejected
* Resolved

When clicking on an issue, again, you can see the issues details. Hit the back-arrow in the top left corner to get back to the map.


### Logout

To logout, simply hit the Logout icon in the top right corner on the map screen.

