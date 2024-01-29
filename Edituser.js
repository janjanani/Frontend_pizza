import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const [student, setUser] = useState({
    id: "",
    mark: "",
    name: "",
  });

  const { id, mark, name } = student;

  const onInputChange = (e) => {
    setUser({ ...student, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put("http://localhost:8080/updatestudent", student);
    navigate("/");
  };
  // const loadUser = async () => {
  //   const result = await axios.get(
  //     `http://localhost:8080/getstudentbyid/${id}`
  //   );
  //   setUser(result.data);
  // };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                id
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter your Id"
                name="id"
                value={id}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                mark
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter your Mark"
                name="mark"
                value={mark}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
