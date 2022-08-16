import axios from "axios";
import React, { useEffect, useState } from "react";

class UsersController {


  getUser = async () => {
    return await axios.get("http://localhost:8088/account").then((res) => {
      return res.data;
    });
  };

  update = async (id,userName,password,email,role) => {
    return await axios.post(`http://localhost:8088/account/update/${id}`,{userName,password,email,role}).then((res) => {
      return res.data;
    });
  };

  onRemove = async (id) => {
    return await axios.delete(`http://localhost:8088/account/${id}`,).then((res) => {
      return res.data;
    });
  };

  login = async (email,password) => {
    return await axios.post("http://localhost:8088/account/login", {email, password })
      .then((res) => {
        return res.data;
      });
  };

  register = async (userName, password, email) => {
    const role = "user";
    return await axios
      .post("http://localhost:8088/account", {
        userName,
        password,
        email,
        role,
      })
      .then((res) => {
        return res.data;
      });
  };
  forgot = async (email) => {
    return await axios.get(`http://localhost:8088/account/forgot`,{email} )
      .then((res) => {
        return res.data;
      });
  };


}

export const usersController = new UsersController();
