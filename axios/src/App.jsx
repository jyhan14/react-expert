import './App.css';
import axios from "axios";
import { useEffect,useState } from 'react';

function App() {
  const [todos, setTodos] = useState(null);
  const [inputValue, setInputValue] = useState({
    title :'',
  })

  const fetchTodos = async () => {
    const {data} = await axios.get('http://localhost:4000/todos');
    setTodos(data);
  };

  const onSubmitHandler = async () =>{
    axios.post('http://localhost:4000/todos', inputValue);
    setTodos([...todos, inputValue]);
  }
  useEffect(()=>{
    fetchTodos();
    // db로부터 값을 가져올 것이다.

  }, []);
  return (
    <>
    <div>
      {/*input영역 */}
      <form onSubmit={(e) =>{
        e.preventDefault();

        //버튼 클릭 시, input에 들어있는 값(state)을 이용하여 DB에 저장(post 요청)
        onSubmitHandler();
      }}>
        <input type='text'
        value={inputValue.title}
        onChange={(e)=>{
          setInputValue({
            title:e.target.value,
          });
        }}
        />
        <button>추가</button>
      </form>
    </div>
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
