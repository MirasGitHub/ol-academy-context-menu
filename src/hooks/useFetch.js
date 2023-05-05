import { useEffect, useState } from 'react'

const useFetch = (URL) => {
    const [response, setResponse] = useState([]);


    useEffect(()=> {
        fetch(URL)
            .then((response) => response.json())
            .then((json) => setResponse(json));

    }, []);

    return { response };

}

export default useFetch;
