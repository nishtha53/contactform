import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { addUser } from "./contactSlice"

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: ''
  });

  const handleAddUser = () => {
    setValues({ name: '', email: '' });
    dispatch(addUser({
      id: uuidv4(),
      name: values.name,
      email: values.email
    }));
    navigate('/');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="First Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Nishtha' }}
      />
      <br />
      <TextField
        label="Last Name"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Thakkar' }}
      />
      <Button onClick={handleAddUser}>Save Contact</Button>
    </div>
  )
}

export default AddUser