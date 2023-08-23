import { Route, Routes } from "react-router-dom";
import AddContact from "./features/users/AddContact";
import EditContact from "./features/users/EditContact";
import ContactList from "./features/users/ContactList";
import Chart from "./features/users/Chart";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/add-contact" element={<AddContact />} />
        <Route path="/edit-contact/:id" element={<EditContact />} />
        <Route path="/charts-maps" element={<Chart />} />
      </Routes>
    </div>
  );
}

export default App;
