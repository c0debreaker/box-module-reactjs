This is an example of a box, a section, or however you may want to call it written in ReactJS

### Installation
```
git clone git@github.com:c0debreaker/box-module-reactjs.git
```

```
npm install
```

### Starting the application as a standalone
```
npm start
```

### As a plain component

```
// In package.json, add the code inside dependencies

"box-module-reactjs": "git+ssh://git@github.com:c0debreaker/box-module-reactjs.git"


// In your jsx where you want to use the component

import BoxSection from 'box-module-reactjs/app/box.jsx';

ReactDOM.render(
  <BoxSection/>
  document.getElementById('app')
);

```

### Overriding the box component

```
// In package.json, add the code inside dependencies

"box-module-reactjs": "git+ssh://git@github.com:c0debreaker/box-module-reactjs.git"


// In your jsx where you want to use the component

import BoxSection from 'box-module-reactjs/app/box.jsx';

let boxProperties = {
  boxStyles : {
    backgroundColor: 'black',
    color: 'white'
  },
  boxText : 'New text message'
}

ReactDOM.render(
  <BoxSection style={boxProperties.boxStyles} PrimaryText={boxProperties.boxText}/>
  document.getElementById('app')
);

```
