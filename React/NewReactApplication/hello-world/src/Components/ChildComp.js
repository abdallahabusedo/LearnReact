import React from "react";

function ChildComp(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("Child")}>Create Parent</button>
    </div>
  );
}

export default ChildComp;
