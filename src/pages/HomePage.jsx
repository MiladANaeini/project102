import { useEffect,useState } from "react"


const HomePage = () => {
const [loading,setLoading] = useState(false);
const [movieNames,setMovieNames] = useState([]);
const [word,setWord] = useState("");

useEffect(()=>{
    
    FetchData();
},[])



 const FetchData= async ()=>{
    setLoading(true)
    try{
        const res = await fetch("http://localhost:3001/movies");
        
        const data = await res.json();
        console.log("data",data);
        setMovieNames(data);
    }catch (error){
        console.log("error",error);
    }finally{
        setLoading(false)
    }
 }
 const postData = async (url, data) => {
    try {
      // Sending a POST request
      const response = await fetch(url, {
        method: 'POST', // Specify POST method
        headers: {
        },
        body: JSON.stringify(data), // Convert JavaScript object to JSON string
      });
  
      // Handle response
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json(); // Parse the response as JSON
      console.log('Success:', result);
      return result; // You can return or use the result here
    } catch (error) {
      console.error('Error:', error); // Handle errors
    }
  };

const handleChange=((e)=>{
setWord(e.target.value);
})
useEffect(()=>{
    console.log("word", word);
},[word])

  return (
    <div className="mt-10 card-box">
        {loading && 
        <div>
        ...Loading
        </div>
        }
      <div>
        <label>
   Movie Name
      <input 
      type="text"
      name="movie"
      className="ms-2"
      value={word}
      onChange={(e)=>handleChange(e)}
      />
      </label>

        </div>
    </div>
  );
};

export default HomePage;
