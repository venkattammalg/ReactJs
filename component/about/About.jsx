import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../Footer";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/Metadata";
import "./About.css";


const About = () => {
    const { loading } = useSelector(
        (state) => state.profile
      );
  return (
    <>
    {loading ? <Loading /> : 
    <>
    <MetaData title="About" />
    <div>
    <Header />
    <div
      style={{
        width: "90%",
        margin: "0px auto",
        fontFamily:"Urbanist"
      }}
    >
      <div className="about__page">
        {/* 1st verse */}
        <div className="row flex">
          <div className="col__2">
            <img styel={{width:"500"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-sqlHi8nbADFiqjJkI9k6wKg_xu_6RcEsg&usqp=CAU.jpg" />
          </div>
          <div className="col__2">
            <div className="meta">
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  fontFamily:"Urbanist",
                  marginLeft:"25px"
                }}
              >
                Welcome to Yamuna organic products
              </span>
              <p style={{fontFamily:"Urbanist", marginLeft:"25px"}}>
              “The Yamuna Food Industry” is renowned for its organic food items at pattukottai was established in the year 1996.The proprietor has over 26 years of expertise in this field and has created a brand name through hard work and customer obsession.
              . It is known to provide top services in the following categories such as flours, different types of rice and spices.
              “Yamuna Food Industry” commitment towards their business ethics has earned enormous trust from their customers.
              </p>
              <p style={{fontFamily:"Urbanist", marginLeft:"25px",color:"#7E7E7E"}}>
                           Why Us ? 
                </p>
              <p style={{fontFamily:"Urbanist", marginLeft:"25px"}}>
                  <li style={{fontFamily:"Urbanist", marginLeft:"25px",color:"#7E7E7E"}}>Brand You Can Trust</li>
                  <li style={{fontFamily:"Urbanist", marginLeft:"25px",color:"#7E7E7E"}}>3 decades of expertise</li>
                  <li style={{fontFamily:"Urbanist", marginLeft:"25px",color:"#7E7E7E"}}>Health & Safety is our priority</li>
                  <li style={{fontFamily:"Urbanist", marginLeft:"25px",color:"#7E7E7E"}}>Ethical Practices</li>
              </p>
            </div>
          </div>
        </div>

        {/* 2nd verse */}
        <div className="second">
          <div className="heading">
            <h2 style={{fontFamily:"Urbanist"}}>What We Provide?</h2>
          </div>
          <div className="row flex">
            <div className="col__3">
                <div style={{
                    padding:"10px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" />
                </div>
              <span style={{fontFamily:"Urbanist"}}>Best Prices & Offers</span>
              <p style={{fontFamily:"Urbanist"}}>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form
              </p>
              </div>
            </div>
            <div className="col__3">
                <div style={{
                    padding:"10px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px",
                    fontFamily:"Urbanist"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg" />
                </div>
              <span style={{fontFamily:"Urbanist"}}>Best For Trust & Quality</span>
              <p style={{fontFamily:"Urbanist"}}>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form
              </p>
              </div>
            </div>
            <div className="col__3">
                <div style={{
                    padding:"15px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px",
                    fontFamily:"Urbanist"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg" />
                </div>
              <span style={{fontFamily:"Urbanist"}}>Fast Delivery System</span>
              <p style={{fontFamily:"Urbanist"}}>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form
              </p>
              </div>
            </div>


            <div className="col__3">
                <div style={{
                    padding:"15px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px",
                    fontFamily:"Urbanist"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg" />
                </div>
              <span style={{fontFamily:"Urbanist"}}>Easy Returns Service</span>
              <p style={{fontFamily:"Urbanist"}}>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form
              </p>
              </div>
            </div>

            <div className="col__3">
                <div style={{
                    padding:"15px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px",
                    fontFamily:"Urbanist"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg" />
                </div>
              <span style={{fontFamily:"Urbanist"}}>100% satisfication</span>
              <p style={{fontFamily:"Urbanist"}}>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form
              </p>
              </div>
            </div>
            
            <div className="col__3">
                <div style={{
                    padding:"15px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px",
                    fontFamily:"Urbanist"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg" />
                </div>
              <span style={{fontFamily:"Urbanist"}}>Great Daily Deal</span>
              <p style={{fontFamily:"Urbanist"}}>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form
              </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
 
  </>
    }
    </>
  );
};

export default About;