import axios from "axios";
import { useEffect, useState } from "react";


interface AppType {
  _id : number
  name: "string"
}

const App = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<AppType[]>([])
  const [value, setValue]  = useState('')
  const getData = async () => {
    try {
      const {data} =  await axios.get(
        "https://api-v2.elchocrud.pro/api/v1/fb8fa51539bca7a87cc74b13fdeca82a/product"
      );

      setData(data)
      console.log(data);
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false)
    }

 
  };

  const postData = async() => {
    try {
      const {data} = await axios.post("https://api-v2.elchocrud.pro/api/v1/fb8fa51539bca7a87cc74b13fdeca82a/product", {name : value})
      console.log(data);
      getData()
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=> {
    getData()
   }, [])
  return <div>{
    isLoading ? (
      <h1>Loading</h1>
    ): (
     <div>
      {
        data.map((el)=> (
          <h1 key={el._id}>{el.name}</h1>
        ))
      }

      <div>
        <input type="text" value={value}  onChange={(e)=> setValue(e.target.value)}/>
        <button onClick={()=> postData()}>click</button>
      </div>
     </div>
    )
    }</div>;
};

export default App;
