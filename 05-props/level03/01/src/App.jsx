import { useState, useEffect } from 'react';

function App() {
  const [randomColors, setRandomColors] = useState([]);

  useEffect(() => {
    setRandomColors([]);
    for (let i = 0; i < 6; i++) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      const color = '#' + randomColor;
      console.log('color:', color);
      setRandomColors(prevColors => {
        return [...prevColors, { color: color }];
      });
    }

    // return () => {
    //   second;
    // };
  }, []);

  return (
    <div className="container">
      {randomColors.map(item => {
        return (
          <div
            key={item.color}
            style={{
              textAlign: 'center',
              width: '350px',
              backgroundColor: `${item.color}`,
            }}
          >
            {item.color}
          </div>
        );
      })}
    </div>
  );
}

export default App;
