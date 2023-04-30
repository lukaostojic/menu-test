# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### ToDos
* Write unit tests
* Add types for Vuex and Vee-validate

### Additional Notes
* I figured out writing Jest tests would take too much time, since I'm not really used to writing tests, and don't have that skill at my fingertips.. and it really is time consuming. There is a test for one method tho', but I guess that doesn't count as a bonus point. ::smiley-face::
* Out of the box Typescript support for Vuex is a dissaster. I focused on some, in my opinion, more important things, rather than writing lots of boilerplate code just so I could assign a type to .state (which is by default already well 'protected').
* Installing Vee-validate 4 into Vue 3 project and using an Options API - not a good idea.. but it works. I should've investigate this before starting the project. Types are missing here as well.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).