# MyTravelApp

## Demo

https://mytravelapp1.netlify.app/

## Issues with invalid hook call

See this issue: https://stackoverflow.com/a/57422196

1. In Your Application:

```
   cd node_modules/react
   yarn link

  cd ../react-dom
  yarn link
```

2. In Your Library

```
  yarn link react
  yarn link react-dom
```
