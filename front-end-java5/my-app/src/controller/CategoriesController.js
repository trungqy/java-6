import axios from "axios";
import React, { useEffect, useState } from "react";

class CategoriesController {


  

  getCategories = async () => {
    return await axios
      .get("http://localhost:8088/category")
      .then((res) => {
        return res.data;
      });
  };

  addCategories = async (nameCate) => {
    return await axios
      .post("http://localhost:8088/category", {nameCate})
      .then((res) => {
        return res.data;
      });
  };
  upDateCategories = async (id, nameCate) => {
    return await axios
      .post(`http://localhost:8088/category`, { id, nameCate })
      .then((res) => {
        return res.data;
      });
  };
 removeCategories = async (id) => {
    return await axios
      .delete(`http://localhost:8088/category/${id}`)
      .then((res) => {
        return res.data;
      });
  };


}

export const categoriesController = new CategoriesController();
