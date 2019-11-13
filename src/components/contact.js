import React, { Component } from 'react'
import { EMAIL, MOBILE_NUMBER } from '../constants'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-contact" data-section="contact">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">Get in Touch</span>
							<h2 className="colorlib-heading">Liên hệ</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-mail"></i>
								</div>
								<div className="colorlib-text">
                                    <p><a href={'mailto:' + EMAIL}>{EMAIL}</a></p>
								</div>
							</div>

							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-phone"></i>
								</div>
								<div className="colorlib-text">
									<p><a href={"tel://" + MOBILE_NUMBER}>{MOBILE_NUMBER}</a></p>
								</div>
							</div>
						</div>
						<div className="col-md-6">
                        <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-calendar3"></i>
								</div>
								<div className="colorlib-text">
									<p>03/04/1986</p>
								</div>
							</div>

							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-map"></i>
								</div>
								<div className="colorlib-text">
									<p>Số 30 LK 31, Khu đô thị mới Vân Canh, Hoài Đức, Hà Nội</p>
								</div>
							</div>
						</div>
					</div>
                    <div className="row" style={{height: 200}}></div>
				</div>
			</section>
      </div>
    )
  }
}
