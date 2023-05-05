import useFetch  from './useFetch';

const URL = 'https://jsonplaceholder.typicode.com/todos/';

const useFetchTodo = (params = { id: 1}) => {
    //const [todo, setTodo] = useState();

    // const randomNumberFromOneToTwoHundred = Math.floor(Math.random() * 200) + 1;
    
    // const randomURL = URL + randomNumberFromOneToTwoHundred;

    let finalURL = URL + params.id;

    const { response } = useFetch(finalURL);

    

    // useEffect(()=> {
        
    //     fetch(finalURL)
    //         .then(response => response.json())
    //         .then(json => setTodo(json));

    // }, []);

  return {
    todo: response,
  }
};

export default useFetchTodo;
