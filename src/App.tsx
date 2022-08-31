/** @format */
import Item from "./components/item";
import data from "./data/contacts.json";

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {data.map((el) => (
          <Item key={el.id} data={el} />
        ))}
      </ul>
    </div>
  );
};

export default App;
