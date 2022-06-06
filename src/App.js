import { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Route from './components/Route';
import Header from './components/Header';

function App() {
  const items = [
    {
      title : "what is react?",
      content: "react is a js library"
    },
    {
      title : "why use react?",
      content: "react used to show contwnt to users and handle events"
    },
    {
      title : "how do you use react?",
      content: "use react by creating components"
    },
  ]

  const options = [
    {
      label: 'The color red',
      value: 'red',
    },
    {
      label: 'The color green',
      value: 'green',
    },
    {
      label: 'The color blue',
      value: 'blue',
    },
  ]

  const [selected,setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items}/>
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
      <Route path='/dropdown'>
        <Dropdown label="select a color" selected={selected} onSelectedChange={setSelected} options={options} />
        <p style={{color:`${selected.value}`,fontWeight:'bold',textAlign:'center'}}>My name is Omnia</p>
      </Route>
    </div>
  );
}

export default App;
