import React, { useEffect }  from 'react'
import Carousel from "react-material-ui-carousel";
import ProductCard from '../Products/ProductCard';
import "./Home.css"
import  {useDispatch, useSelector} from "react-redux"
import { clearErrors,getProduct } from "../../actions/ProductActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import MetaData from '../../more/Metadata';
import Footer from '../../Footer';

const Home = () => {
  const dispatch = useDispatch();
  const { products,error} = useSelector(
    (state) => state.products
  );
  
  useEffect(() => {
    if(error){ 
      alert.error(error);
      dispatch(clearErrors);
 }
  dispatch(getProduct());
   }, [dispatch,error])

  return (
    <>
    <MetaData title="HOME"/>
    <Header/>
        {/* Carousel */}
        
        <div className="banner">
               <Carousel>
                 <img src="https://img.freepik.com/premium-photo/colored-spice-background-top-view-collection-indian-seasoning-cups_84485-407.jpg?size=626&ext=jpg&ga=GA1.2.2130258770.1665654378" className="bgImg" alt=""/>
                 <img src="https://img.freepik.com/free-psd/organic-food-concept-banner-template_23-2148722730.jpg?size=626&ext=jpg&ga=GA1.2.2130258770.1665654378" alt="" className="bgImg"/>
                 <img src="https://img.freepik.com/premium-photo/dried-sumac-bowl-top-view-isolated-white-background-organic-spice_84485-31.jpg?size=626&ext=jpg&ga=GA1.2.2130258770.1665654378" className="bgImg" alt=""/>
               </Carousel> 
             <div className="home__content">
               <div style={{
                 display:"flex",
                 alignItems:"center",
               }}>
               <h2 style={{
                 fontFamily: "Urbanist",
                 fontSize: "3em",
                 fontWeight:"800"
               }}></h2>
               <span style={{
                 padding:"10px",
                 backgroundColor:"#fff",
                 margin:"0px 10px",
                 textAlign:"center",
                 width:"150px",
                 height:"40px",
                 color: "black",
                 fontFamily: "Urbanist",
                 fontSize: "2.4em",
                 display:"flex",
                 justifyContent:"center",
                 lineHeight:".7",
                 alignItems:"center"
               }}>100%</span>
               </div>
               <div>
                 <h2 style={{
                   fontSize:"4.5em",
                   fontFamily:"Urbanist",
                   color:"#fff",
                 }}>Organic Essentials</h2>
               </div>
               <div>
                 <h2 style={{
                   fontSize:"4.5em",
                   fontWeight:"400",
                   fontFamily:"Urbanist",
                   color:"#fff",
                   lineHeight:".7"
                 }}>Collection</h2>
               </div>
               <div>
                 <h2
                 style={{
                   fontWeight:"400",
                   fontFamily:"Urbanist",
                   color:"#fff",
                   fontSize:"24px",
                   paddingTop:"10px"
                 }}
                 >
                <p>Your one stop shop for all things organic!</p>
                 </h2>
               </div>
               <div>
                 <a href="#container">
                 <button type="submit" style={{
                   width:"170px",
                   height:"50px",
                   border:"none",
                   background:"#3BB77E",
                   margin:"10px 0",
                   fontSize:"1.2vmax",
                   color:"#fff",
                   cursor:"pointer"
                 }}
                 className="Home__button"
                 >SHOP NOW</button>
                 </a>
               </div>
             </div>
         </div>
         <h2  style={{fontFamily:"Urbanist"}}className="homeHeading">Featured Products</h2>
         <div className="container" id="container">
          {products && products.map((product) =>(
            <ProductCard key={product.id} product={product}/>
          ))}
         </div>
         <Footer/>
      </>    
)};
export default Home
