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

## component types

|    a stateless functional component     |       a stateful class component       |
| :-------------------------------------: | :------------------------------------: |
|              JS Functions               |       Class extending component        |
| use Func Components as much as possible |              More Feature              |
|        Absence of 'this' Keyword        | Maintain their own private data- state |
|      Solution without using State       |            Complex UI Logic            |
|        Mainly responsible for UI        |        Provide Lifecycle hooks         |
|   Stateless or Dumb or Presentational   |     stateFul or Smart or Container     |

### `functional component`

```
function Welcome(props) {
    return <h1> Hello {props.name}</h1>;
}
```

<div align="center">

![image](https://user-images.githubusercontent.com/42722816/92294144-7262da00-ef29-11ea-9adf-3c5a0c97898f.png)

</div>

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
