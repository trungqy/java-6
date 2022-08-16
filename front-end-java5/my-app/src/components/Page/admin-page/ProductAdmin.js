import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { MdEditOff } from "react-icons/md";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Product({name, images,nameCate, categoryId, price ,id ,onRemove,update, onSetdata}) {
  
  const navigate = useNavigate();
  

  React.useEffect(()=>{
    console.log();
    if(localStorage.getItem("userInfo") != null ? JSON.parse(localStorage.getItem("userInfo")).role=="user":''){
      navigate("/")
    }

   
  },[])
  return (


    // <div className="san-pham">
    //       <div className="hinh-anh">
    //         <Link to={"/detailProduct"}  >
    //           <img
    //             src={images}
    //             alt=""
    //           />
    //        </Link>
    //       </div>
    //       <p className="ten">
    //           {name}
    //       </p>
    //       <p className="hang">{nameCate}</p>
    //       <p className="gia">{price}</p>
    //       <AiOutlineDelete onClick={()=>onRemove(id)} />
    //       <MdEditOff onClick={()=>onSetdata(name,price,categoryId,images,id)}  />
    //     </div>
    <Card sx={{ maxWidth: 270 , float:"left" , marginRight:"20px"}}>
    <CardMedia
      component="img"
      height="200px"
      image={images}
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography sx={{color:"gray"}}  gutterBottom variant="h6" component="div">
        {categoryId}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {price}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small"><AiOutlineDelete onClick={()=>onRemove(id)} /></Button>
      <Button size="small"><MdEditOff onClick={()=>onSetdata(name,price,categoryId,images,id)}  /></Button>
    </CardActions>
  </Card>

  

  )
}
