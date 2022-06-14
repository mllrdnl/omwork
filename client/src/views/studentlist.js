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
           
            <table class="table">
            <thead>
                <tr>
                
                <th scope="col">Student's Name</th>
                <th scope="col">Age</th>
                <th scope="col">Parent's First Name</th>
                <th scope="col">Parent's Last Name</th>
                <th scope="col">Username</th>
                </tr>
            </thead>
            
            <tbody>
            {listOfUsers.map((user) => {
            return ( 
                <>    
                <tr>
                {/* <th scope="row">1</th> */}
                <td>{user.childname}</td>
                <td>{user.age}</td>
                <td>{user.parentonefirst}</td>
                <td>{user.parentonelast}</td>
                <td>{user.username}</td>
                </tr>
                </>
            )})}
            </tbody>
            </table>
           
        </div>

      );


}