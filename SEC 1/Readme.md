# SEC 1

## -={😇 Hello World}=-

## How to Create a React App

open the Vs code Terminal and Write each line of these

```
npx create-react-app my-app
cd my-app
npm start
```

create React application with no configurations

```
npx create-react-app <project-name>
```

then the cd this is a command that make the terminal navigate inside the my-app folder

```
cd <project-name>
```

```
npm start
```

this command start the application

# BUT HOLD ON What is NPX and NPM

NPX is a NPM Package runner which gets installed when you install NODEJS
and that how we are directly able to run without have to install it

NPM Package manager

So After We Run you will find Page Similar to this

<div align="center">

![image](https://user-images.githubusercontent.com/42722816/92280970-e639be00-eefa-11ea-95f6-d20d3f053418.png)

</div>

<hr>

## Folder Structure

> lets Talk about package.json this file Contains the dependencies and the scripts for the Project

> manifest.json in the Public folder is connected with progressive web app which is out of scope our discussion

> index.html is the only Html File in your application , the most important part in the file is the root div

> in the index.js we see :

```
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

this means that App Component will render in the root div

<hr>

## Components

> component represents a part of the user interface going back to the example from the earlier

<div align="center">

![image](https://user-images.githubusercontent.com/42722816/92278326-4b8ab080-eef5-11ea-89a1-795d4a69476f.png)

</div>

> you can say that our application has five components one for header one for side nav one for the main content one for the footer and finally one component to contain every other component the containing component is the root component and is usually named as app

<hr>

## component types

|    a stateless functional component     |       a stateful class component       |
| :-------------------------------------: | :------------------------------------: |
|              JS Functions               |       Class extending component        |
| use Func Components as much as possible |              More Feature              |
|        Absence of 'this' Keyword        | Maintain their own private data- state |
|      Solution without using State       |            Complex UI Logic            |
|        Mainly responsible for UI        |        Provide Lifecycle hooks         |
|   Stateless or Dumb or Presentational   |     stateFul or Smart or Container     |

<hr>

### `functional component`

```
function Welcome(props) {
    return <h1> Hello {props.name}</h1>;
}
```

<div align="center">

![image](https://user-images.githubusercontent.com/42722816/92294144-7262da00-ef29-11ea-9adf-3c5a0c97898f.png)

</div>

<hr>

### `class component`

```
class Welcome extends Component{
    render(){
        return<h1>Hello {this.props.name}</h1>;
    }
}
```

<div align="center">

![image](https://user-images.githubusercontent.com/42722816/92294375-f4540280-ef2b-11ea-895c-e199c082f333.png)

</div>

<hr>

## JSX

JavaScript XML (JSX) : `EXtension to the JS language syntax`

- JSX tags have a name , attribute and children
- JSX is not a necessity to write React application
- JSx makes your react code simpler and elegant
- JSX ultimately transpile to pure JS which is understood by the browsers

```
const Hello = () =>{
  return React.createElement(
    'div',
    {id: "hello" , className: "dummyClass"},
    React.createElement('h1', null, 'hello abdallah)
  )
}
```

is the same to

```
const Hello = () =>{
  return (
    <div className="dummyClass">
    <h1>hello abdallah</h1>
    </div>
  )
}
```

## JSX differences

class ==> className
for ==> htmlFor
onclick ==> onClick
and more ...

<hr>

## Props

- Props are arguments passed into React components.
- Props are passed to components via HTML attributes.

### props in the Functional component

--- App.js ---

```
  <Greet name="Abdallah" heroName="ironMan" />
  <Greet name="Sara" heroName="superMan" />
  <Greet name="Kareem" heroName="spiderMan" />
```

here we send a props as an attribute to the Greet component
so we go the Greet component and use it like this

```
const Greet = (props) => {
  console.log(props);
  return (
    <h1>
      Hello {props.name} aka {props.heroName}
    </h1>
  );
};
```

we use `props.theNameOfProps` to access it

### props in the Class component

```
<GreetClass name="Samer" heroName="Flash" />
<GreetClass name="Ahmed" heroName="Hulk" />
<GreetClass name="Kenzy" heroName="Wonder Woman" />
```

here we send a props as an attribute to the GreetClass component
so we go the GreetClass component and use it like this

```
export default class GreetClass extends Component {
  render() {
    return (
      <h1>
        Hello {this.props.name} aka {this.props.heroName}
      </h1>
    );
  }
}
```

we use here the `this` keyword to access the props

<hr>

## State

|                           props                            |                 State                  |
| :--------------------------------------------------------: | :------------------------------------: |
|             props get passed to the component              | state is managed within the component  |
|                    function parameters                     | variable declared in the function body |
|                props are immutable means :                 |          State can be Changed          |
| parent own the props and cannot be changed by the children |                  ---                   |
|               props ==> Functional Component               | useState Hook ==> Functional Component |
|               this.props ==> Class component               |     this.state ==> Class component     |

lets make a new component called Massage and we want to make a state that
hold the massage text and we will make a button to change the text

```
import React, { Component } from "react";

class Massage extends Component {
  render() {
    return (
      <div>
        <div>{this.state.massage}</div>
        <button onClick={() => this.changeMassage()}>Change the Text</button>
      </div>
    );
  }
}

export default Massage;

```

this is the normal structure

now we want to make a state

```
import React, { Component } from "react";

class Massage extends Component {
  constructor() {
    super();
    this.state = {
      massage: " welcome abdallah",
    };
  }

  changeMassage = () => {
    this.setState({ massage: "text changed" });
  };
  render() {
    return (
      <div>
        <div>{this.state.massage}</div>
        <button onClick={() => this.changeMassage()}>Change the Text</button>
      </div>
    );
  }
}

export default Massage;

```

- we put the state inside the constructor
- state is an object
- onClick we call the function `onClick={() => this.changeMassage()}` as an attribute
- the function use the useState to change the state by passing object with the same name in the state

now we will explain the useState

<hr>

## setState

open `SEC 1/newReactApplication/hello-world/src/Counter.js` to see the example

> setState() schedules an update to a component’s state object. When state changes, the component responds by re-rendering.

<hr>

## Destructuring props and state

### Destructuring props in the Functional component

2 ways to do it

- 1st way

```
const Greet = ({ name, heroName }) => {
  return (
    <h1>
      Hello {name} aka {heroName}
    </h1>
  );
};
```

or

```
const Greet = (props) =>{
  const { name, heroName} = props
  return (
    <h1>
      Hello {name} aka {heroName}
    </h1>
  );
};
```

### Destructuring props in the Class component

```
export default class GreetClass extends Component {
  render() {
    const { name, heroName } = this.props;
    return (
      <h1>
        Hello {name} aka {heroName}
      </h1>
    );
  }
}
```
