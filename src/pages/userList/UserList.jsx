import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Delete } from "@material-ui/icons";
import { userRows } from "../../DummyData";
import { Link } from "react-router-dom";
import {useState} from "react";

const UserList = () => {
  const [data, setData] = useState(userRows)

  const handleDelete = (id)=>{
    setData(data.filter(user=> user.id !== id))
  }
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Username",
      width: 150,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 180,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <Delete className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
