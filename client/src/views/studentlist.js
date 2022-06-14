import { useState, useEffect } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export const StudentList = () => {

    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/getUsers").then((response) => {
          setListOfUsers(response.data)
        })
      }, [])

    return(
        <div className="container">
           <div className="row">
            <h3>Student List</h3>
           </div>
            <table class="table">
            <thead>
                <tr>
                
                <th scope="col">Student's Name</th>
                <th scope="col">Last Name</th>
                <th scope="col-2">Homework</th>
                </tr>
            </thead>
            
            <tbody>
            {listOfUsers.map((user) => {
            return ( 
                <>    
                <tr>
                {/* <th scope="row">1</th> */}
                <td>{user.childname}</td>
                <td>{user.parentonelast}</td>
                <td><button type="button" class="btn btn-success">Assign</button></td>
                <td><button type="button" class="btn btn-outline-success">Edit</button></td>
                </tr>
                </>
            )})}
            </tbody>
            </table>
           
        </div>

      );


}