import React from "react"
import './App.css';
import {useFormik} from 'formik'

function App() {

  const formik = useFormik({
    initialValues: {
      name: "",
      age: 0
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  //State to hold the form data
  // const [formData, setFormData] = React.useState({
  //   name: "",
  //   age: 0
  // })

  //handleChange function to handle input
  // const handleChange = (event) => {
  //   setFormData({...formData, [event.target.name]: event.target.value})
  // }

  //handleSubmit function for when you submit
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log(formData)
  // }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange}/>
        <input type="number" name="age" value={formik.values.age} onChange={formik.handleChange}/>
        <input type="submit" name="click me"/>
      </form>

    </>
  );
}

export default App;
