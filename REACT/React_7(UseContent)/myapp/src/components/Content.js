import { useContext } from "react";
import {Context} from './context/Context'
import Block from "./Block";

function Content() {
  const {reverseState} = useContext(Context)
  return (
    <div>
      Content
      <button onClick={reverseState}>reverse</button>
      <Block/>
    </div>
  );
}

export default Content;