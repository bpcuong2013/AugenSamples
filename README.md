# ReactRedux with dotnetcore Template

## My project
- My project was located under the `AspnetCoreSPA` folder.

- Folder structure:

    +actions => I used reduxsauce, It is a tool for custom redux actions. 
    +components => It contains app's components
    +config   => It contains app configurations
    +images => it contains images...
    +reducer => It contains reducers. If we have multiple reducers. They will be merged into reducer/index.js
    +sagas => It will contain sagas operators, If we have multiple sagas. They will be merged into sage/index.js
    +services => APIs will be called here
    +store  => it is store of app. We also configure midleware in here
    +styles => stylesheet

## My tools for development:
- Visual Studio for Mac, version 7.8 Preview (7.8 build 1471)
- Source tree

## Project configuration:
- To run project as development, open `Solution.sln` file with Visual Studio for Mac, version 7.8 Preview and run project in debug mode. It will start API and SPA project.

- As default, It will start project at port 5001, You can find that configuration at `launchSettings.json`. => I create some client configuraion at this file `ReactRedux/ClientApp/src/config`. This folder holds configuration files for different environments.

- You can use it to provide your app with different settings based on the current environment, e.g. to configure different API base urls depending on whether your setup runs in dev mode or is built for distribution.

## Evaluation Process

Preparation: 1 hour
- Coding: 6 hours 
- Styling 30 minutes
- Building and testing 30 minutes


### For the candidate
a. Assumptions
- I researched webpack configuration and put them into `ClientApp\conf\webpack` but I have not used them much. But I think that I can do it easy.

b. Additional tools or notes made on this exercise
-I used reactredux template for this SPA, you can create it by the command `dotnet new reactredux`. Then I used following tools to make it easier with redux:

+ https://www.npmjs.com/package/apisauce  It is wrapper for axios http client library
+ https://www.npmjs.com/package/reduxsauce It is custom reducers. It help redux code easy to read and better
+ https://www.npmjs.com/package/redux-saga It used it to replace for thunk in the middleware. It provide a better way for side effect.

+ react-js-pagination for pagination
+ react-bootstrap for something...

c. Design decisions should also be commented on
- My project is using basic concept of react and redux for managing app state
- There are some ways for structuring a rectredux app, such as: 
+ Follow component: that mean each component will have particular action, reducer, saga 
+ Follow folder type: that mean we will structure files with same type into 1 folder. This project was structured like that. It  is also simple but It can adapt much requirements.

d. Additional nice to haves or features that you might suggest but do not have time to complete.

- I did not wrote much css for it, such as make it run good on mobile or make multiple themes because I think this test focusing on reactjs. but If you want to verify my skill. You can view my old project here https://www.knowdigital.com.au/portfolio . I worked on 80% of these projects.
- For UI, I can apply much reactjs libs  such as:

+ https://react.semantic-ui.com
+ https://react.semantic-ui.com
+ https://redux-form.com/8.1.0/

- I can write sass, scss  but I have no time to put into this project. 
- When I start this excercise, I found good template with redux and typescript 4, I checked to see that it is really good If I have a chance, I will apply it for my project `Redux 4 + TypeScript` in feature. https://resir014.xyz/posts/2018/07/06/redux-4-plus-typescript/
 
### Deployment

Check some images from Deployment folder and follow this URL:

https://neelbhatt.com/2018/01/30/deploy-net-core-application-to-iis-step-by-step-guide/
https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?view=aspnetcore-2.2

