import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteUser } from "./contactSlice";
import SideBar from "../../components/SideBar";


const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);

  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  }

  const renderCard = () => users.map(user => (
    <div className="bg-gray-300 p-5 flex items-center justify-between" key={user.id}>
      <div>
        <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
        <span className="font-normal text-gray-600">{user.email}</span>
      </div>
      <div className="flex gap-4">
        <Link to={`edit-contact/${user.id}`}>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </Link>
        <button
          onClick={() => handleRemoveUser(user.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  ))

  return (
    
    <div className="flex flex-col md:flex-row">
      <SideBar />


      <div className="md:w-2/3 p-5">
        <Link to="/add-contact">
          <Button>Create Contact</Button>
        </Link>

        <div className="grid gap-5 md:grid-cols-2 mt-5">
          {users.length ? (
            renderCard()
          ) : (
            <p className="col-span-2 text-center text-gray-700 font-semibold">
              No Contacts found! Please add contacts using the Create Contact button.
            </p>
          )}
        
        </div>
      </div>
    </div>
  )
}

export default UserList