/* eslint-disable react/prop-types */

export const Actors = ({actors})=>{


    return(
        <>
        {actors && <div>
            
            {actors.map((item,index)=>(
                <div key={index}>
                    {item.map((act,i)=>(
                        <span key={act} className="me-1">
                       {i+1}.{act}
                        </span>
                    ))}
                    </div>
            ))}
            </div>}
        </>
    )
}