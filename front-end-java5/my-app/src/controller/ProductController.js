import axios from "axios";
import React, { useEffect, useState } from "react";

class ProductController {

  getProductList = async () => {
    return await axios.get("http://localhost:8088/product").then((res) => {
      return res.data;
    });
  };

  addProduct = async ( images,name , categoryId, price) => {
    return await axios
      .post("http://localhost:8088/product", {images,name, categoryId, price})
      .then((res) => {
        return res.data;
      });
  };

   onRemove = async (id) => {
    return await axios.delete(`http://localhost:8088/product/${id}`).then((res) => {
      return res.data;
     });
  }

  update = async (id, images,name , categoryId, price) => {
    return await axios
      .post("http://localhost:8088/product", {id,images,name, categoryId, price})
      .then((res) => {
        return res.data;
      });
  };

  getDetail = async (id) => {
    return await axios.get(`http://localhost:8088/product/${id}`).then((res) => {
      return res.data;
     });
  }

  search = async (name) => {
    return await axios.get(`http://localhost:8088/product/search/${name}`).then((res) => {
      return res.data;
     });
  }


}

export const productController = new ProductController();
