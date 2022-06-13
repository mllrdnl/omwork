import { useState, useEffect } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function AddStudent() {

    const [listOfUsers, setListOfUsers] = useState([]);
    const [childName, setChildName] = useState("");
    const [age, setAge] = useState(0);
    const [username, setUsername] = useState("");
    const [parentOneFirst, setParentOneFirst] = useState("");
    const [parentOneLast, setParentOneLast] = useState("");
    const [parentOneEmail, setParentOneEmail] = useState("");
  
    useEffect(() => {
      Axios.get("http://localhost:3001/getUsers").then((response) => {
        setListOfUsers(response.data)
      })
    }, [])
  
    const createUser = () => {
      Axios.post("http://localhost:3001/createUser", {
        childname: childName, 
        age: age, 
        username: username,
        parentonefirst: parentOneFirst,
        parentonelast: parentOneLast,
        parentoneemail: parentOneEmail,
      }).then((response) => {
        setListOfUsers([...listOfUsers, {childname: childName, 
          age: age, 
          username: username,
          parentonefirst: parentOneFirst,
          parentonelast: parentOneLast,
          parentoneemail: parentOneEmail,}], alert("Student Created"))
      });
    };
  
    return (
      <div className="container">
          <div className="row">
              <div className="col">
                
                  
                  
              </div>
              <div className="col">
              <label
                for="childname"
                className="form-label">Student's Name
                      
                </label>
                  <input
                  type="text"
                  className="form-control"
                  id="childname"
                  onChange={(event) => {
                    setChildName(event.target.value);
                  }}
                  />
              </div>
              <div className="col">
              <label
                for="parentonefirst"
                className="form-label">First Name
                      
                </label>
                  <input
                  type="text"
                  className="form-control"
                  id="parentonefirst"
                  onChange={(event) => {
                    setParentOneFirst(event.target.value);
                  }}
                  />
              </div>
              <div className="col">
              <label
                for="parentonelast"
                className="form-label">Last Name
                      
                </label>
                  <input
                  type="text"
                  className="form-control"
                  id="parentonelast"
                  onChange={(event) => {
                    setParentOneLast(event.target.value);
                  }}
                  />
              </div>
              <div className="col"></div>
          </div>

          <div className="row">
              <div className="col"></div>
              <div className="col">
              <label
                for="age"
                className="form-label">Student's Age
                      
                </label>
                  <input
                  type="text"
                  className="form-control"
                  id="age"
                  onChange={(event) => {
                    setAge(event.target.value);
                  }}
                  />
              </div>
              <div className="col">
              <label
                for="parentOneEmail"
                className="form-label">Parent's Email
                      
                </label>
                  <input
                  type="text"
                  className="form-control"
                  id="parentOneEmail"
                  onChange={(event) => {
                    setParentOneEmail(event.target.value);
                  }}
                  />
              </div>
              <div className="col">
              <label
                for="username"
                className="form-label">Parent's Username
                      
                </label>
                  <input
                  type="text"
                  className="form-control"
                  id="username"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  />
              </div>
              <div className="col"></div>

              <button type="button" className="btn btn-primary" onClick={createUser}> Create User </button>
          </div>

  
        
          {/* 
          <div><input 
          type="text" 
          placeholder="Name..." 
          onChange={(event) => {
            setName(event.target.value);
          }}
          /> */}
          {/* <input 
          type="number" 
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }} 
          />
          <input 
          type="text" 
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }} 
          />
        
  
          </div>  
          
           </div>
           */}


          <div className="usersDispaly">
          {listOfUsers.map((user) => {
            return (
            <div> 
              <h1>Student's Name: {user.childname}</h1>
              <p>Age: {user.age}</p>
              <p>Username: {user.username}</p>
              <p>Parent First Name: {user.parentonefirst}</p>
              <p>Parent Last Name: {user.parentonelast}</p>
            </div>
            )
          })}
        </div>
  
  </div>
     
    );
  }
  
  export default AddStudent;
  