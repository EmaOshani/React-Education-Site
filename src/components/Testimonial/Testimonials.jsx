/* import React from 'react'
import Slider from 'react-slick'
import { Container, Row, Col} from 'reactstrap'

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {

    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
      };

  return (

   <section>
    <Container>
        <Row>
            <Col lg='10' className="m-auto">
                <div className="testimonial__wrapper d-flex justify-content-between align-items-center">

                    <div className="testimonial__img w-50">
                        <img src={img} alt="" className="w-100"/>
                    </div>

                    <div className="testimonial__content w-50">
                        <h2 className="mb-2 fw-bold">Our Student Voice</h2>

                        <Slider {...settings}>
                          
                          <div>
                          <div className="single__testimonial">
                                <h6 className="mb-3 fw-bold">Excellent course</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur porro quaerat dolores 
                                    reiciendis error ipsam veniam magni, quas repellat neque architecto, nisi eos delectus unde numquam 
                                    cupiditate animi sint praesentium.</p>        

                                    <div className="student__info mt-4">
                                        <h6 className="fw-bold">Jhon Doe</h6>
                                        <p>california, unite state</p>
                                        </div>                   
                                     </div>
                          </div>

                               
                        </Slider>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Testimonials

 */