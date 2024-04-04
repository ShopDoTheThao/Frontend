import { useEffect } from "react";
import $ from 'jquery';
function Cart() {
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
                            <h1>Shopping Cart</h1>
                            <nav className="d-flex align-items-center">
                                <a href="index.html">
                                    Home
                                    <span className="lnr lnr-arrow-right" />
                                </a>
                                <a href="category.html">Cart</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Banner Area */}
            {/*================Cart Area =================*/}
            <section className="cart_area">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src="img/cart.jpg" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <p>Minimalistic shop for multipurpose use</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$360.00</h5>
                                        </td>
                                        <td>
                                            <div className="product_count">
                                                <input
                                                    type="text"
                                                    name="qty"
                                                    id="sst"
                                                    maxLength={12}
                                                    defaultValue={1}
                                                    title="Quantity:"
                                                    className="input-text qty"
                                                />
                                                <button
                                                    onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                                    className="increase items-count"
                                                    type="button"
                                                >
                                                    <i className="lnr lnr-chevron-up" />
                                                </button>
                                                <button
                                                    onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) && sst > 0 ) result.value--;return false;"
                                                    className="reduced items-count"
                                                    type="button"
                                                >
                                                    <i className="lnr lnr-chevron-down" />
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$720.00</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src="img/cart.jpg" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <p>Minimalistic shop for multipurpose use</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$360.00</h5>
                                        </td>
                                        <td>
                                            <div className="product_count">
                                                <input
                                                    type="text"
                                                    name="qty"
                                                    id="sst"
                                                    maxLength={12}
                                                    defaultValue={1}
                                                    title="Quantity:"
                                                    className="input-text qty"
                                                />
                                                <button
                                                    onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                                    className="increase items-count"
                                                    type="button"
                                                >
                                                    <i className="lnr lnr-chevron-up" />
                                                </button>
                                                <button
                                                    onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) && sst > 0 ) result.value--;return false;"
                                                    className="reduced items-count"
                                                    type="button"
                                                >
                                                    <i className="lnr lnr-chevron-down" />
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$720.00</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src="img/cart.jpg" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <p>Minimalistic shop for multipurpose use</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$360.00</h5>
                                        </td>
                                        <td>
                                            <div className="product_count">
                                                <input
                                                    type="text"
                                                    name="qty"
                                                    id="sst"
                                                    maxLength={12}
                                                    defaultValue={1}
                                                    title="Quantity:"
                                                    className="input-text qty"
                                                />
                                                <button
                                                    onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                                    className="increase items-count"
                                                    type="button"
                                                >
                                                    <i className="lnr lnr-chevron-up" />
                                                </button>
                                                <button
                                                    onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) && sst > 0 ) result.value--;return false;"
                                                    className="reduced items-count"
                                                    type="button"
                                                >
                                                    <i className="lnr lnr-chevron-down" />
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$720.00</h5>
                                        </td>
                                    </tr>
                                    <tr className="bottom_button">
                                        <td>
                                            <a className="gray_btn" href="#">
                                                Update Cart
                                            </a>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <div className="cupon_text d-flex align-items-center">
                                                <input type="text" placeholder="Coupon Code" />
                                                <a className="primary-btn" href="#">
                                                    Apply
                                                </a>
                                                <a className="gray_btn" href="#">
                                                    Close Coupon
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <h5>Subtotal</h5>
                                        </td>
                                        <td>
                                            <h5>$2160.00</h5>
                                        </td>
                                    </tr>
                                    <tr className="shipping_area">
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <h5>Shipping</h5>
                                        </td>
                                        <td>
                                            <div className="shipping_box">
                                                <ul className="list">
                                                    <li>
                                                        <a href="#">Flat Rate: $5.00</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Free Shipping</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Flat Rate: $10.00</a>
                                                    </li>
                                                    <li className="active">
                                                        <a href="#">Local Delivery: $2.00</a>
                                                    </li>
                                                </ul>
                                                <h6>
                                                    Calculate Shipping{" "}
                                                    <i className="fa fa-caret-down" aria-hidden="true" />
                                                </h6>
                                                <select className="shipping_select">
                                                    <option value={1}>Bangladesh</option>
                                                    <option value={2}>India</option>
                                                    <option value={4}>Pakistan</option>
                                                </select>
                                                <select className="shipping_select">
                                                    <option value={1}>Select a State</option>
                                                    <option value={2}>Select a State</option>
                                                    <option value={4}>Select a State</option>
                                                </select>
                                                <input type="text" placeholder="Postcode/Zipcode" />
                                                <a className="gray_btn" href="#">
                                                    Update Details
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="out_button_area">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <div className="checkout_btn_inner d-flex align-items-center">
                                                <a className="gray_btn" href="#">
                                                    Continue Shopping
                                                </a>
                                                <a className="primary-btn" href="#">
                                                    Proceed to checkout
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            {/*================End Cart Area =================*/}
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

export default Cart;