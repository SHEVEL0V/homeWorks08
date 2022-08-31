/** @format */

import React, { useState } from "react";

interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

type Data = {
  data: IContact;
};

type State = string;

const Item: React.FC<Data> = ({ data }) => {
  const { phone, email } = data;
  const [value, setValue] = useState<State>(phone);
  const [inpValue, setInpValue] = useState<State>("");

  const onPhone = () => {
    setValue(phone);
  };
  const onEmail = () => {
    setValue(email);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInpValue(e.target.value);
  };

  return (
    <li>
      <b>{data.name}</b>
      <h3>-{value}-</h3>

      <button onClick={onPhone}>phone</button>
      <button onClick={onEmail}>email</button>
      <input onChange={onChange} value={inpValue}></input>
    </li>
  );
};

export default Item;
