import React, { Component} from "react";
import classes from "./SingleItemSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import BookItem from "../BookList/BookItem/BookItem";
// import BookQuickView from "../BookList/BookQuickView";
import SingleAds from "./SingleAds/SingleAds";
// import Container from "../UI/Container";
import "../UI/Ads.css";

// const PrevArrows = ({ currentSlide, slideCount, ...props }) => {
//   const { onClick } = props;

//   return (
//     <div {...props} className="custom-prevArrow" onClick={onClick}>
//       <span aria-label="Previous" style={{ fontSize: "3.5rem" }}>
//         ‹
//       </span>
//     </div>
//   );
// };

// const NextArrows = ({ currentSlide, slideCOunt, ...props }) => {
//   const { onClick } = props;

//   return (
//     <div {...props} className="custom-nextArrow" onClick={onClick}>
//       <span aria-label="Next" style={{ fontSize: "3.5rem" }}>
//         ›
//       </span>
//     </div>
//   );
// };

// const SingleItemSlider = (props) => {

//   const adss = props.items.map((item) => (
//     <SingleAds key={item.id} image={item.image} />
//   ));

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     autoplay: true,
//     NextArrow: <NextArrows />,
//     PrevArrow: <PrevArrows />,
//   };
//   return (
//     <React.Fragment>
//       <Container>
//         <Slider {...settings}>{adss}</Slider>
//       </Container>
//     </React.Fragment>
//   );
// };
// export default SingleItemSlider;


export default class SingleItemSlider extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
      this.slider.slickNext().style({display: 'block', marginLeft: '100px', zIndex: '100'});
    }
    previous() {
      this.slider.slickPrev();
    }
    
    render() {
      const adss = this.props.items.map((item) => (
        <SingleAds key={item.id} image={item.image} />
      ));

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        slickNext: true,
        slickPrev: true
        // NextArrow: <NextArrows />,
        // PrevArrow: <PrevArrows />,
      };
      return (
        <React.Fragment>
          <div className={classes.list} style={{ textAlign: "center", marginBottom: "10px" }}>
            <Slider {...settings}>
            
              {/* <button className="button" onClick={this.previous}>
                Previous
              </button> */}
              {adss}
              {/* <button className="button" onClick={this.next}>
                Next
              </button> */}
            
              
            </Slider>
            </div> 
        </React.Fragment>
      );
    }
  }