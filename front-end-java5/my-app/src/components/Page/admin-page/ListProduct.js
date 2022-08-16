import React, { useEffect, useState } from "react";
import "../../css/admin-css/ListProduct.css";

import AddProduct from "./AddProduct";
import { productController } from "../../../controller/ProductController";
import ProductAdmin from "./ProductAdmin";
import { categoriesController } from "../../../controller/CategoriesController";
import { toast } from "react-toastify";
import CategoryData from "../category/CategoryData";



function ListProduct() {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState({
    name: "",
    price: "",
    categoryId:0,
    images: "",
    id: "",
  });

  const onSetdata = (name, price, categoryId, images, id) => {
    console.log(name, price, categoryId, images, id);
    setSelectedProduct({ name, price, categoryId, images, id });
  };
  

  console.log(selectedProduct);

  useEffect(() => {
    getProductListItem();
    getCategories()
  }, []);



  const getProductListItem = () => {
    productController.getProductList().then((res) => {
      setData(res);
    });
  };

  const onAdd = (img, name, categoryId, price, id) => {
    
    if (id === "") {
      productController.addProduct(img, name, categoryId, price).then((res) => {
        getProductListItem();
      });
      toast.success('thêm thành công', {
        position: 'bottom-left',
        autoClose: 3000
    })
    } else {
      productController.update(id ,img, name, categoryId, price).then((res) => {
        getProductListItem();
      });
      toast.success('sửa thành công', {
        position: 'bottom-left',
        autoClose: 3000
    })
    }
    setSelectedProduct({
      name: "",
      price: "",
      categoryId: categoryId,
      images: "",
      id: "",
    });
  };



const getCategories = () => {
  categoriesController.getCategories().then((res) => {
    setSelectedCategory(res);
    setSelectedProduct({
      name: "",
      price: "",
      categoryId: res[0].id,
      images: "",
      id: "",
    });
  
  });
};


  const onRemove = (id) => {
    productController.onRemove(id).then((res) => {
      getProductListItem();
    });
    toast.success('xáo thành công', {
      position: 'bottom-left',
      autoClose: 3000
  })
  };

  return (
    <div className="editDesign">
      <div className="container-left">
        <AddProduct
          names={selectedProduct.name}
          id={selectedProduct.id}
          prices={selectedProduct.price}
          categoryIds={selectedProduct.categoryId}
          imagess={selectedProduct.images}
          key={Date.now()}
          onAdd={onAdd}
          listCate={selectedCategory}
        />
      </div>
      <div className="container-right">
        <div id="dssp">
          {data.map((item) => (
            <ProductAdmin
              name={item.name}
              images={item.images}
              price={item.price}
              nameCate={item.nameCate} 
              categoryId={item.category && item.category.nameCate}
              id={item.id}
              onRemove={onRemove}
              onSetdata={onSetdata}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
