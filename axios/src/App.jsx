import './App.css';
import axios from "axios";
import { useEffect,useState } from 'react';

function App() {
  const [todos, setTodos] = useState(null);

  const fetchTodos = async () => {
    const {data} = await axios.get('http://localhost:4000/todos');
    console.log('data',data);
    setTodos(data);
  }
  useEffect(()=>{
    fetchTodos();
    // db로부터 값을 가져올 것이다.

  }, []);
  return (
    <>

    {
      todos?.map(item => {
        return (
          <div key={item.id}>
            {item.id} : {item.title}
          </div>
        )
      })
    }

    </>
  );
}

export default App;
