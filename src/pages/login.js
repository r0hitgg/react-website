import { Person } from "react-bootstrap-icons";

export default function LogIn() {

    function onFormSubmit(e) {
        e.preventDefault();
        const target = e.target;
        console.log(e,'.onFormSubmit',target.email.value,target.password.value)
    }

    return (
            <div className={"container pt-5"}>
            <h3>
                <Person/> Log In
            </h3>
            <div>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group col-md-6 m-auto">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group col-md-6 m-auto">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Password"/>
                    </div>
                    <div className="form-group col-md-6 m-auto pt-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}