import { useEffect,useState } from "react"
import { Actors } from "./Actors";
import { MyForm } from "./MyForm";

const HomePage = () => {
const [loading,setLoading] = useState(false);
const [movieNames,setMovieNames] = useState([]);
const [actors,setActors]= useState("");

const [formData,setFormData] = useState({
    name:"",
    email:"",
    pass:"",
})
useEffect(()=>{
    fetchData();
},[])

 const fetchData = async ()=>{
    try{
        const res = await fetch('http://localhost:3001/movies');
        const data = await res.json();
        setMovieNames(data)
        findActors(data)
        findNew(data)
    }catch (error){
        console.log(error)
    }finally{
        setLoading(false)
    }
  }


 const findActors = (data)=>{
    let actors = []
   for( let i = 0; i < data.length ; i++){
    actors.push(data[i].actors)
   }
   setActors(actors);
  }
const findNew = (data)=>{
  const newmovies = data.filter((element)=> element.year > 1999)
  console.log("newmovies",newmovies)
}

const sendPost = async (id,data)=>{
    setLoading(true)
    const body = {
        name:data,
    }
   try{
    const response = await fetch(`http://localhost:3001/movies/${id}`,{
        method: "POST",
        headers:{},
        body: JSON.stringify(body)
    })
    const result = await response.json()
   }catch(error){
    console.log(error)
   }finally{
    setLoading(false)
   }
}


   const handleChange= (e)=>{
    const {name, value} = e.target
    setFormData((prev)=>({
        ...prev,
    [name] : value
    }))
   }



const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
}


  return (
    <div className="mt-10 card-box">
        {loading && 
        <div>
        ...Loading
        </div>
        }
      <div>
        </div>
        <div>
            {movieNames.map((item,index)=>(
                <div key={item.title}>
               {index + 1}. {item.title} - {item.year}
                </div>
            ))}
        </div>
        <Actors actors={actors}/>
        <div>
            <MyForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />
        </div>
    </div>
  );
};

export default HomePage;
