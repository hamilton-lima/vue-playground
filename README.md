# vue-playground
Experiments using vue.js

- Download the latest static version from: 
https://cdnjs.com/libraries/vue


## starting notes
https://v3.vuejs.org/guide/introduction.html#getting-started

## http server 
```
https://www.npmjs.com/package/live-server
```

# Tests

## Running cypress on WSL 
- Install xming (xserver) https://sourceforge.net/projects/xming/files/latest/download
- Install cypress dependencies https://docs.cypress.io/guides/guides/continuous-integration.html#Advanced-setup
- Run cypress setting the display: `DISPLAY=localhost:0.0 npx cypress open`




export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}'):0


no protocol specified
xauth info

xhost +si:localuser:root