To run this project u have to clone repo, open folder which includes package.json and write in terminal

- npm install
- then npm run start

TO-DO List:

1. Initial setup. (Done)
2. Background gradient. (Done)

   - First try was to develop gradient by using linear-gradient css property, (the color breakpoints are so hard to develop )

   - then i tried a vector graphic gradient, by using SVG, created x1,y1 and x2,y2 points for background but still the efect was not as good as exprected.

   - then i imported the background as jpg file from figma and centered it, the quality of jpg might not be the best but with this solution the background is looking way better than svg and linear-gradient try,

3. Creating basic layout template, developing mobile first. (Done)
4. Creating Header component. (Done)
5. Checking api response and mocking mission data as js file.
6. Creating MissionDetailsSection component.
7. Creating ShipCard component.
8. Creating ShipSection component.
9. Checking 320 width app view for smallest mobile device.
10. Creating Desktop view.
11. Checking how website looks on higher resolutions. (4k)
12. Creating basic tablet view.
13. Creating api request by using axios or RTQ query.
14. Creating change mission feature.
    Posible solutions:
    - i could create the router and after clicking the arrow i could fetch single mission data. It means every time user navigates to another mission, data will be fetched.
    - i could create redux store, and by using RTK query the data will be fetched only 1 time, for example for 5 missions, then the data will be stored in redux store and user could check mission data even if his internet connetion has dropped. Maybe after navigating for 5th mission rtk query will fetch another 5 missions, not sure yet.
15. Checking the website on another browsers than firefox.
16. Creating error catching for api request.
17. Writing some unit and integration tests by using testing-library.
18. Depends on time left, might try to create basic static server using express/fastify to serve static files and create custom 404 page / or try to improve gradient background by using css or svg.
