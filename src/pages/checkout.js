import { useEffect } from "react";
import $ from 'jquery';

function Checkout() {
    useEffect(() => {
        // Search Toggle
        $("#search_input_box").hide();
        $("#search").on("click", function () {
            $("#search_input_box").slideToggle();
            // $("#search_input").focus();
        });
        $("#close_search").on("click", function () {
            $('#search_input_box').slideUp(500);
        });
    }, []);
    return (
        <>
            {/* Start Header Area */}
          
            {/* End Header Area */}
            {/* Start Banner Area */}
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Checkout</h1>
                            <nav className="d-flex align-items-center">
                                <a href="index.html">
                                    Home
                                    <span className="lnr lnr-arrow-right" />
                                </a>
                                <a href="single-product.html">Checkout</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Banner Area */}
            {/*================Checkout Area =================*/}
            <section className="checkout_area section_gap">
                <div className="container">
                    <div className="returning_customer">
                        <div className="check_title">
                            <h2>
                                Returning Customer? <a href="#">Click here to login</a>
                            </h2>
                        </div>
                        <p>
                            If you have shopped with us before, please enter your details in the
                            boxes below. If you are a new customer, please proceed to the Billing
                            &amp; Shipping section.
                        </p>
                        <form
                            className="row contact_form"
                            action="#"
                            method="post"
                            noValidate="novalidate"
                        >
                            <div className="col-md-6 form-group p_star">
                                <input type="text" className="form-control" id="name" name="name" />
                                <span
                                    className="placeholder"
                                    data-placeholder="Username or Email"
                                />
                            </div>
                            <div className="col-md-6 form-group p_star">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                />
                                <span className="placeholder" data-placeholder="Password" />
                            </div>
                            <div className="col-md-12 form-group">
                                <button type="submit" value="submit" className="primary-btn">
                                    login
                                </button>
                                <div className="creat_account">
                                    <input type="checkbox" id="f-option" name="selector" />
                                    <label htmlFor="f-option">Remember me</label>
                                </div>
                                <a className="lost_pass" href="#">
                                    Lost your password?
                                </a>
                            </div>
                        </form>
                    </div>
                    <div className="cupon_area">
                        <div className="check_title">
                            <h2>
                                Have a coupon? <a href="#">Click here to enter your code</a>
                            </h2>
                        </div>
                        <input type="text" placeholder="Enter coupon code" />
                        <a className="tp_btn" href="#">
                            Apply Coupon
                        </a>
                    </div>
                    <div className="billing_details">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3>Billing Details</h3>
                                <form
                                    className="row contact_form"
                                    action="#"
                                    method="post"
                                    noValidate="novalidate"
                                >
                                    <div className="col-md-6 form-group p_star">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="first"
                                            name="name"
                                        />
                                        <span className="placeholder" data-placeholder="First name" />
                                    </div>
                                    <div className="col-md-6 form-group p_star">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="last"
                                            name="name"
                                        />
                                        <span className="placeholder" data-placeholder="Last name" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="company"
                                            name="company"
                                            placeholder="Company name"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group p_star">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="number"
                                            name="number"
                                        />
                                        <span className="placeholder" data-placeholder="Phone number" />
                                    </div>
                                    <div className="col-md-6 form-group p_star">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            name="compemailany"
                                        />
                                        <span
                                            className="placeholder"
                                            data-placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="col-md-12 form-group p_star">
                                        <select className="country_select">
                                            <option value={1}>Country</option>
                                            <option value={2}>Country</option>
                                            <option value={4}>Country</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12 form-group p_star">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="add1"
                                            name="add1"
                                        />
                                        <span
                                            className="placeholder"
                                            data-placeholder="Address line 01"
                                        />
                                    </div>
                                    <div className="col-md-12 form-group p_star">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="add2"
                                            name="add2"
                                        />
                                        <span
                                            className="placeholder"
                                            data-placeholder="Address line 02"
                                        />
                                    </div>
                                    <div className="col-md-12 form-group p_star">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            name="city"
                                        />
                                        <span className="placeholder" data-placeholder="Town/City" />
                                    </div>
                                    <div className="col-md-12 form-group p_star">
                                        <select className="country_select">
                                            <option value={1}>District</option>
                                            <option value={2}>District</option>
                                            <option value={4}>District</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="zip"
                                            name="zip"
                                            placeholder="Postcode/ZIP"
                                        />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <div className="creat_account">
                                            <input type="checkbox" id="f-option2" name="selector" />
                                            <label htmlFor="f-option2">Create an account?</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <div className="creat_account">
                                            <h3>Shipping Details</h3>
                                            <input type="checkbox" id="f-option3" name="selector" />
                                            <label htmlFor="f-option3">
                                                Ship to a different address?
                                            </label>
                                        </div>
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            id="message"
                                            rows={1}
                                            placeholder="Order Notes"
                                            defaultValue={""}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-4">
                                <div className="order_box">
                                    <h2>Your Order</h2>
                                    <ul className="list">
                                        <li>
                                            <a href="#">
                                                Product <span>Total</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Fresh Blackberry <span className="middle">x 02</span>{" "}
                                                <span className="last">$720.00</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Fresh Tomatoes <span className="middle">x 02</span>{" "}
                                                <span className="last">$720.00</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Fresh Brocoli <span className="middle">x 02</span>{" "}
                                                <span className="last">$720.00</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="list list_2">
                                        <li>
                                            <a href="#">
                                                Subtotal <span>$2160.00</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Shipping <span>Flat rate: $50.00</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Total <span>$2210.00</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="payment_item">
                                        <div className="radion_btn">
                                            <input type="radio" id="f-option5" name="selector" />
                                            <label htmlFor="f-option5">Check payments</label>
                                            <div className="check" />
                                        </div>
                                        <p>
                                            Please send a check to Store Name, Store Street, Store Town,
                                            Store State / County, Store Postcode.
                                        </p>
                                    </div>
                                    <div className="payment_item active">
                                        <div className="radion_btn">
                                            <input type="radio" id="f-option6" name="selector" />
                                            <label htmlFor="f-option6">Paypal </label>
                                            <img src="img/product/card.jpg" alt="" />
                                            <div className="check" />
                                        </div>
                                        <p>
                                            Pay via PayPal; you can pay with your credit card if you don’t
                                            have a PayPal account.
                                        </p>
                                    </div>
                                    <div className="creat_account">
                                        <input type="checkbox" id="f-option4" name="selector" />
                                        <label htmlFor="f-option4">I’ve read and accept the </label>
                                        <a href="#">terms &amp; conditions*</a>
                                    </div>
                                    <a className="primary-btn" href="#">
                                        Proceed to Paypal
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================End Checkout Area =================*/}
            {/* start footer Area */}
            <footer className="footer-area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6>About Us</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6>Newsletter</h6>
                                <p>Stay update with our latest</p>
                                <div className="" id="mc_embed_signup">
                                    <form
                                        target="_blank"
                                        noValidate="true"
                                        action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                                        method="get"
                                        className="form-inline"
                                    >
                                        <div className="d-flex flex-row">
                                            <input
                                                className="form-control"
                                                name="EMAIL"
                                                placeholder="Enter Email"
                                                onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Enter Email '"
                                                required=""
                                                type="email"
                                            />
                                            <button className="click-btn btn btn-default">
                                                <i className="fa fa-long-arrow-right" aria-hidden="true" />
                                            </button>
                                            <div style={{ position: "absolute", left: "-5000px" }}>
                                                <input
                                                    name="b_36c4fd991d266f23781ded980_aefe40901a"
                                                    tabIndex={-1}
                                                    defaultValue=""
                                                    type="text"
                                                />
                                            </div>
                                            {/* <div class="col-lg-4 col-md-4">
													<button class="bb-btn btn"><span class="lnr lnr-arrow-right"></span></button>
												</div>  */}
                                        </div>
                                        <div className="info" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3  col-md-6 col-sm-6">
                            <div className="single-footer-widget mail-chimp">
                                <h6 className="mb-20">Instragram Feed</h6>
                                <ul className="instafeed d-flex flex-wrap">
                                    <li>
                                        <img src="img/i1.jpg" alt="" />
                                    </li>
                                    <li>
                                        <img src="img/i2.jpg" alt="" />
                                    </li>
                                    <li>
                                        <img src="img/i3.jpg" alt="" />
                                    </li>
                                    <li>
                                        <img src="img/i4.jpg" alt="" />
                                    </li>
                                    <li>
                                        <img src="img/i5.jpg" alt="" />
                                    </li>
                                    <li>
                                        <img src="img/i6.jpg" alt="" />
                                    </li>
                                    <li>
                                        <img src="img/i7.jpg" alt="" />
                                    </li>
                                    <li>
                                        <img src="img/i8.jpg" alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6>Follow Us</h6>
                                <p>Let us be social</p>
                                <div className="footer-social d-flex align-items-center">
                                    <a href="#">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-dribbble" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-behance" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
                        <p className="footer-text m-0">
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            Copyright © All rights reserved | This template is made with{" "}
                            <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                            <a href="https://colorlib.com" target="_blank">
                                Colorlib
                            </a>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        </p>
                    </div>
                </div>
            </footer>
            {/* End footer Area */}
            {/*gmaps Js*/}
        </>

    );
}

export default Checkout;