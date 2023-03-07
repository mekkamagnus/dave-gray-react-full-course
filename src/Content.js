import { useState } from 'react';
export default function Content() {
  const [name, setName] = useState('Otis');

  const handleNameChange = () => {
    const names = ['Bob', 'Al', 'Ahmed', 'Lamar'];
    const int = Math.floor(Math.random() * 4);
    setName(names[int]);
  };

  function handleClick() {
    console.log('You clicked it');
  }
  function handleClickTwo(name) {
    console.log(`${name} was clicked`);
  }

  function handleClickThree(event) {
    console.log(event.target.innerText);
  }
  return (
    <main>
      <img
        src="https://images.pexels.com/photos/2080383/pexels-photo-2080383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg"
        width="300"
        alt="CEO"
      />
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={() => handleClickTwo('Mekael')}>Click It Two</button>
      <button onClick={event => handleClickThree(event)}>Click It Three</button>
    </main>
  );
}
