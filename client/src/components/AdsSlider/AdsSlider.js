import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './AdsSlider.module.css';
// import BookList from "../BookList/BookList";
import '../UI/Arrow.css';
// import Container from "../UI/Container";
import Ads from "./Ads/Ads";
import Adss from "./Adss/Adss";

const PrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;
  
    return (
      <div {...props} className="custom-prevArrow" onClick={onClick}>
        <span aria-label="Previous" style={{fontSize:"3.5rem"}}>‹</span>
      </div>
    );
  };
  const NextArrow = ({ currentSlide, slideCount, ...props }) => {
    const {onClick } = props;
  
    return (
      <div {...props} className="custom-nextArrow" onClick={onClick}>
        <span aria-label="Next" style={{fontSize:"3.5rem"}}>›</span>
      </div>
    );
  };

  let flag = true;

export default class AdsSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    // console.log(this.props);

    const adsss = this.props.items.map(item => (
        <Ads key={item.id} image={item.image}/>
    ))

    const adsss2 = this.props.items.map(item => (
        <Adss key={item.id} title={item.title} image={item.image}/>
    ))

    console.log(Object.keys(adsss).length);
    console.log("HIIIII");
    console.log(Object.keys(adsss2).length);

    if(Object.keys(adsss2).length === 14 && Object.keys(adsss).length === 14){
        flag = true;
    }
    else{
        flag = false;
    }

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
    //   nextArrow: <NextArrow />,
    //   prevArrow: <PrevArrow />
    };

    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
    if(flag === true){
        return(
            <React.Fragment>
                <div className={classes.list} style={{textAlign: "center", marginLeft: "auto", marginRight: 'auto',border: '2px solid lightgrey', width: '100%', paddingRight: '20px', paddingLeft: '20px'}}>
                    <Slider {...settings2} style={{marginBottom: '0px', marginTop: '15px'}}>
                        {adsss2}
                    </Slider>
                </div> 
            </React.Fragment>
        );
    }
    else{
        return (
            <React.Fragment>
            <div className={classes.list} style={{ textAlign: "center", marginTop: "0px", border: '1px solid lightgray' }}>
              <h2 style={{textAlign: 'center', marginLeft: '20px'}}>Our Best Fiction Books</h2>
              <Slider {...settings} style={{marginBottom: '20px'}}>
                {adsss}
              </Slider>
              {/* <Slider {...settings2} style={{marginBottom: '20px'}}>
                {adsss2}
              </Slider> */}
              </div> 
          </React.Fragment>
                /* <React.Fragment>
                <Container>
                <div>
                <h2>Previous and Next methods</h2>
                <Slider ref={c => (this.slider = c)} {...settings}>
                <div key={1}>
                    <h3 style={{border: "2px solid black"}}>1</h3>
                </div>
                <div key={2}>
                    <h3 style={{border: "2px solid black"}}>2</h3>
                </div>
                <div key={3}>
                    <h3 style={{border: "2px solid black"}}>3</h3>
                </div>
                <div key={4}>
                    <h3 style={{border: "2px solid black"}}>4</h3>
                </div>
                <div key={5}>
                    <h3 style={{border: "2px solid black"}}>5</h3>
                </div>
                <div key={6}>
                    <h3 style={{border: "2px solid black"}}>6</h3>
                </div>
                </Slider>
                <div style={{ textAlign: "center", marginTop: "100px" }}>
                <button className="button" onClick={this.previous}>
                    Previous
                </button>
                <button className="button" onClick={this.next}>
                    Next
                </button>
                </div>
            </div>
                </Container>
            </React.Fragment> */
        );
    };
    
  }
}


