import CreateRoomForm from "./createroomform";
import "./index.css"
import JoinRoomForm from "./joinroomform";

const Forms = () =>{
return (
   <div className="row h-100 pt-5 ">
    <div className="col-md-5 py-3 px-5 mt-5 form-Box border border-primary rounded-2 mx-auto d-flex flex-column align-items-center ">
        <h1 className="text-primary fa-bold">Create Room</h1>
        <CreateRoomForm />
    </div>
    <div className="col-md-5 mt-5 py-3 px-5 form-Box border border-primary rounded-2 mx-auto d-flex flex-column align-items-center">
        <h1 className="text-primary fa-bold">Join Room</h1>
        <JoinRoomForm />
    </div>

   </div>
);
};

export default Forms