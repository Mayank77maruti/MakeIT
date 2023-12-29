const CreateRoomForm = () => {
    return <form className="form col-md-12 mt-5">

        <div className="form-group border bg-gray">
        <input type="text" className="form-control my-2" 
            placeholder="Enter Your Name"
            />
            <div className="Input-group d-flex align-center justify-content-center">
                <input 
                 type="text"
                 className="form-control my-2 border-0"
                 disabled
                 placeholder="Generate Room Code"
                 />
                 <div className="input-group-append">
                    <button className="btn btn-primary btn-sm me-1 " type="button">Generate</button>
                    <button className="btn btn-outline-danger btn-sm me-1" type="button">copy</button>
                 </div>
            </div>
        </div>
    </form>
};

export default CreateRoomForm;