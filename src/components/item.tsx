/** @format */

import { useState } from "React";

interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

type Data = {
  data: IContact;
};

const Item: React.FC<Data> = ({ data }) => {
  // const [number, setNumber] = useState(1);

  // const increment = () => {
  //   setNumber(2);
  // };
  // const decrement = () => {
  //   setNumber(1);
  // };

  return (
    <li>
      <b>{data.name}</b>
      <h3>-{data.phone}-</h3>

      {/* <button onClick={decrement}>On -</button>
      <button onClick={increment}>On +</button> */}
    </li>
  );
};

export default Item;
