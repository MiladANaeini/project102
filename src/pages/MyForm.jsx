/* eslint-disable react/prop-types */

export const MyForm = ({handleChange,handleSubmit,formData})=>{


    return(
        <div>
         <form onSubmit={handleSubmit}>
            <div>
            <label>
                Name
        <input
        name="name"
        type="text"
        value={formData.name}
        onChange={(e)=>handleChange(e)}
        />
        </label>
        </div>
        <div>
        <label>
        Email
        <input
        name="email"
        type="email"
        value={formData.email}
        onChange={(e)=>handleChange(e)}
        />
        </label>
        </div>
        <div>
        <label>
        Password
        <input
        name="pass"
        type="password"
        value={formData.pass}
        onChange={(e)=>handleChange(e)}
        />
        </label>
        </div>
        <button type="submit">Submit</button>
        </form>
        </div>
    )
}