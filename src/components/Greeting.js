import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState();
  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello world!</h2>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={changeTextHandler}>changedText</button>
    </div>
  );
};
export default Greeting;
