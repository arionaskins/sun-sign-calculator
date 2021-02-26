# Final Documentation <br>
Written and compiled in JS and React by me :) <br><br>
[App Link, here!](https://team-central-services.herokuapp.com/)

## App Motivation
[Astrology](https://www.astrology.com/us/home.aspx) has been a tool that I have been interested in for a while now, and it is becoming mainstream within numerous social outlets/platforms. Personally, astrology can help me gain insight on challenges by applying interpretation methods to aspects and placements within my natal [birth chart](https://www.allure.com/story/astrology-birth-chart-reading). <br> 

The [sun](https://www.astrology.com/astrology-101/planets/sun) represents the ego and personality of one, and the sign it is in during birth can influence the engergies one displays. I wanted to create a simple app that can allow someone beginnging to learn astrology to be able to know their sun sign, one of the most influential placements within a [birth chart](https://www.allure.com/story/astrology-birth-chart-reading).<br> 
<br>
I began instructing myself in developing web apps in React recently before starting this, and to test my learning I wanted to create an app that not only served an interesting purpose, but also speaks on something I am passionate about. <br>
<br>

## Technical Strategies &/or Decisions Rationale

While I chose not to do my first individual project in React on a data-heavy topic, I utilized the React Components library in serving the app's designed function. In addition to this, there were a few technical decisions made based on my progress at the time:
* Including images as assets within the source code instead of using href webpage source links
I wanted to keep network traffic low and the size of the application as a whole is not large. Keeping these images internal to the app's filesystem will hopefully aid in quick performance runtimes. 
* Deploy using Heroku PaaS
I have use Heroku services in the past for previous web development projects and I wanted to continue to expand my portfolio with the platform. I have recently been learning GCP services and deliberating in utilizing offered Google App Engine, but as stated previously, I wanted to advance and expand what I already had. <br>

## Challenges Faced and Impact on Final Design
* __Developing the entire app in React.js:__
While I enjoy learning to develop useful web tools in React, it's component structure can be tricky in relation to the root DOM element. I wanted to tackle approaching this application head on to "learn as i go", and I feel as if I gained valuable knowledge and a few tips on developing in React.
  * __App folder/properties structure:__
   Functional Component inheritance and composition issues emerged when handling different states of the app. The change of state component addition caused complications in primarily flexbox styling, granted these have been solved for large screen viewports. 
* __Repository deployment issues:__
After using the `create-react-app` terminal command to create the intial app, I installed dependencies to the local app subfolder in `/src`, so when I tried to deploy originally with Heroku the build failed due to webpack errors. After initializing a new repository and pulling necessary files (within the subdirectory), I was successfully able to deploy my first React app! :clap:

## Next Steps
- [x] responsive UI for large viewports
  - [ ] small viewport UI
- [ ] markdown docs (readme.md/final.md)
- [ ] brainstorm and develop user login UI and functionality 



[Back to the readme, please!](https://github.com/arionaskins/sun-sign-calculator/blob/master/docs/README.md)
