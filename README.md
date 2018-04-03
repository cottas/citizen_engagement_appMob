<a name="top"></a>
# COMEM+ Citizen Engagement Mobile Application

Welcome to the Citizen Engagement Mobile Application! This applicaiton offers the citizens the possibility to report issues in order to help the government to keep track of any damages in public areas and eventually take care of them.



## Index

[Installation](#installation)
[Usage](#usage)
[Login & Signup](#login)
[The Map & Issue Details](#map)
[Filtering](#filtering)
[Commenting Issues](#commenting)
[Creating Issues](#creating)
[Filtering](#logout)



<a name="installation"></a>
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



<a name="usage"></a>
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



<a name="login"></a>
### Login & Sign Up

When starting the application, you will either have to login or sign up to the application, which will log you in automatically once you have signed up successfully.
To sign up you will have to enter the following data:
* Username
* Password
* Firstname
* Lastname
* Phone


<a name="map"></a>
### The Map & Issue Details

After the login, the application takes you to the map that shows you the reported issues in your area. By clicking on an issue, a page is going to pop up, showing the issue's details including a picture (optionally), the date of report, the authors name, the description and comments. Click "CLOSE" in the top right corner to close the page.


<a name="filtering"></a>
### Filtering

By clicking on the Filter icon in the top right corner of the map screen, the application is going to show you the list with all the issues in your area. You can then filter the issues by the following categories:
* All
* New
* In Progress
* Rejected
* Resolved

When clicking on an issue, again, you can see the issues details. Hit the back-arrow in the top left corner to get back to the map.


<a name="commenting"></a>
### Commenting Issues

In order to post a comment on an issue you will have to open the details page of the issue and start writing your comment in the textbox. After that click send, simple as that!


<a name="creating"></a>
### Creating Issues

In order to report an issue, click on the "Create an issue" button on the map page. On the CreateIssue page, fill in the following gaps:
* Description
* Tags
* Issue Type

You can optionally take a picture of the issue to report.

Report the issue by clicking on the "Create issue" button, well done!


<a name="logout"></a>
### Logout

To logout, simply hit the Logout icon in the top right corner on the map screen.


<a href="#top">To the top!</a>

