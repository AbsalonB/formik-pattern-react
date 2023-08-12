import Form from "./components/Form";

const App = () => { 
  const onSubmit = (values)=>{
    console.log(values)
  }
  return(
    <div>
      <Form onSubmit={onSubmit} initialState={{text:"desde app",email:"test@test.com"}}>
       { ({values, handleChange,handleSubmit})=>(
          <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="text" 
            value={values.text} 
            onChange={handleChange}
            name="text"
            />
             <input type="email" 
            placeholder="email" 
            value={values.email} 
            onChange={handleChange}
            name="text"
            />
            <button type="submit">Submit</button>
          </form>
        )
      } 
      </Form>
    </div>
  )
}

export default App;