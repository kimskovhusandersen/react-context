import React, { useState } from "react";

// first we will make a new context
const MyContext = React.createContext();

// Then create a provider Component
const MyProvider = props => {
  const [age, setAge] = useState(100);

  return (
    <MyContext.Provider
      value={{
        age,
        growAYearOlder: () => setAge(age + 1)
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

const Family = props => (
  <div className="family">
    <Person />
  </div>
);

const Person = () => {
  return (
    <div className="person">
      <MyContext.Consumer>
        {context => (
          <React.Fragment>
            <p>Age: {context.age}</p>
            <button onClick={context.growAYearOlder}>🍰🍥🎂</button>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    </div>
  );
};

const App = () => {
  return (
    <MyProvider>
      <div>
        <p>I am the app</p>
        <Family />
      </div>
    </MyProvider>
  );
};

export default App;
