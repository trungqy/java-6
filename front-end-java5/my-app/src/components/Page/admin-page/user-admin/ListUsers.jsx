import { ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { usersController } from "../../../../controller/UsersController";
import AddUsers from "./AddUsers";
import UserData from "./UsersData";
// import "../../css/admin-css/ListProduct.css";

export default function ListUsers() {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    userName: "",
    password: "",
    email: "",
    role: "",
  });

  const onSetdata = (id, userName, password, email, role) => {
    setSelectedUser({ id, userName, password, email, role });
    console.log(id, userName, password, email, role );
  };

  console.log(selectedUser);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    usersController.getUser().then((res) => {
      setData(res);
    });
  };

  const onAdd = (userName, password, email, role, id) => {
    console.log("id" + id);
    if (selectedUser.id == "") {
      console.log(userName, password, email, role);
      usersController
    
        .register(userName, password, email)
        .then((res) => {
          getUsers();
          
        });
        setSelectedUser({
          id: "",
          userName: "",
          password: "",
          email: "",
          role: "",
        });

        toast.success('thêm thành công', {
          position: 'bottom-left',
          autoClose: 3000
      })
    } else {
      usersController
        .update(id, userName, password, email, role)
        .then((res) => {
          getUsers();
          setSelectedUser({
            id: "",
            userName: "",
            password: "",
            email: "",
            role: "",
          });
        });
        toast.success('sửa thành công', {
          position: 'bottom-left',
          autoClose: 3000
      })
    }
  };

  const onRemove = (id) => {
    console.log(id);
    usersController.onRemove(id).then((res) => {
      console.log(id);
      getUsers();
    });

    toast.success('xoá thành công', {
      position: 'bottom-left',
      autoClose: 3000
  })
  };

  return (
    <div className="editDesign">
      <div className="container-left">
        <AddUsers
          id={selectedUser.id}
          userName={selectedUser.userName}
          passWord={selectedUser.password}
          email={selectedUser.email}
          role={selectedUser.role}
          key={Date.now()}
          onAdd={onAdd}
        />
      </div>
      <div className="container-right">
        <div id="dssp">
          <UserData onRemove={onRemove} data={data} onSetdata={onSetdata} />
        </div>
      </div>
    </div>
  );
}
