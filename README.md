# My GIPHY Gallery 🥇

My GIPHY Gallery is a Senior Frontend Engineer take-home coding challenge from PI.EXCHANGE. It is a website build with Vite + TypeScript that utilized GIPHY GIFs APIs to get random GIFs, trending GIFs, search functionality and save to Favorites. You can explore the deployment <a href="https://vite-giphy-2023-nzx93998v-lnta.vercel.app/" target="_blank">HERE!</a>

## Installation, Compilation and Execution

### For cloning

```
cd .../yourFavoriteDirectory
git clone https://github.com/DrewIndeed/vite-giphy-2023.git
```

### For creating `.env.local`

- When done cloning the project, go to your outermost or root directory
- Create `.env.local` with following content:

```
VITE_APP_API_KEY=fzrljXncHJYmpYvAfAOxZC17ZpA4wOUa
VITE_APP_BASE_URL=https://api.giphy.com/v1/gifs
```

### For developing (Local Port: 6969)

```
// for npm users
npm i && npm start

// for yarn users
yarn && yarn start
```

### For building production preview (Local Port: 8888)

```javascript
// for npm users
npm build && npm preview

// for yarn users
yarn build && yarn preview
```

### For changing Local Ports

```
// You can visit this part of the vite.config.ts file and change as you like
...
  server: {
    port: 6969, // dev port
  },
  preview: {
    port: 8888, // build port
  },
...
```

## Known Bugs

### About Infinite Scroll

- Sometimes, the Infinte Scroll gets frozen and does not load more items. This happens due to scrolling too fast so the margin of error when reading the scroll position gets bigger. Thus, it cannot detect the bottom of scrolling correctly.
- This issue has been minimized using throttle.
- If you face this issue, just REFRESH the page. 

## Requirements Checklist

### Functionalities fulfillment summary

- [x] See list of Trending GIFs
- [x] Search for GIFs and see list of results
- [x] Expand a GIF and see details
  - [x] Show at least show username and rating
- [x] See more GIFs when scroll to bottom aka Inifinite Scrolling
- [x] Save GIFs as favorite and see list of Favorites
  - [x] Remove from Favorites list
  - [x] Still have Favorites list when refreshing the page
- [x] Gallery has a mosaic or mansory layout
- [x] Placeholder when GIFs are still loading
- [x] Basic animations
- [x] Theme provider (EXTRA)
- [x] Get a random GIF (EXTRA)
- [x] Custom Loader (EXTRA)
- [x] Notification / Pop ups (EXTRA)

### Other original requirements

- [x] Good UX on desktop devices, min resolution supported is 1280px, max resolution can be 1920px
- [x] Simple, maintainable, clean and well-commented code
- [x] Folder structure as you’re working on a real project, that would be
      easier to scale up later
- [ ] Sort the results by uploaded time and let the user choose if they prefer
      ascending or descending ordering
- [ ] Upload single/multiple GIFs of my own and see it on the website
- [ ] Include tests

## Project Notes

### About using `any` type

- For simplicity, event from listeners, GIF data object, reducer state and action are being assigned with `any` type.

### About Inifite Scrolling in Development Mode

- In React, when the app is runnning in development mode, `useEffect` hook will be run twice to make sure that any unexpected side effects or errors are catched, while in production mode, it will not. This is because of <a href="https://react.dev/reference/react/StrictMode" target="_blank">React Strict Mode</a> wrapper. This will affect Inifite Scrolling by running the function to load more twice, however, I already RESOLVED this case. Thus, to make sure that everything runs correctly, please run using production build or the deployed version of the app.

### About using Context for state or data management

- Due to the small scope of THIS project, I don't want to use a third party library such as Redux or MobX to handle state management to save project size and bundle.
- Instead, I implemented a simple store-reducer-action structure using `useReducer and useContext`, kinda similar to the classic Redux, to handle API calls and global data flow.
- However, if scalability is reqiured, I would make the transition of course.

### About Searching functionality
- Currently, the number of results is fixed as 30 items with no Infinite Scrolling.

### About GIPHY API Beta Key

- According to https://developers.giphy.com/faq/:

```
When you create an app, you will receive a rate limited beta key,
which we advise you to use in development. These beta keys are rate
limited to a maximum of 42 search requests an hour and 1000 search
requests a day. When your app is ready to go live with higher traffic,
we highly recommend that you upgrade your beta key to production.
```

- Therefore, the current data of the app is limited by this. So when you use it, be mindful about your requests.
- I also requested for the production API key, following this:

```
Please follow the steps below:
Verify your integration (see “How do I verify my integration”)
Apply for production access (see “How do I upgrade my beta key”)
```

- But I will have to wait for 5 business days to get a response. Therefore, Beta API key for now.

## Project Q&A

1. How long did you spend on the coding challenge?

- 4 days (9 - 12 May 2023)

2. What would you add to your solution if you had more time?

- I would implement theme changing functionality
- I would add authentication to have multiple users with different favorite list
- I would add functionality to share on social media or send to a friend
- I would add sorting functionalities by a few attributes such as uploaded time, title, ...
- I would add upload functionalities
- I would add scroll to top functionalities

## License

[MIT](https://choosealicense.com/licenses/mit/)
