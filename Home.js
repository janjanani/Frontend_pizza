import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // axios
    //   .get("http://localhost:8080/addStudent")
    //   .then((response) => {
    //     setUsers(response.data);
    //   })
    loadUsers().catch((error) => {
      console.error(error);
    });
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/getall");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/deletestudent/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              {/* <th scope="col">mark</th> */}

              <th scope="col">name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((student, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                {/* <td>{student.mark}</td> */}

                <td>{student.name}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/getstudentbyid/${student.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to="/updatestudent"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
