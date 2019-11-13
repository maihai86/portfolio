import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Giới thiệu</h2>
                    <p>Tôi ưa thích việc xây dựng các hệ thống có hiệu năng tốt và độ ổn định cao.</p>
                    <p>Tôi tự tin mình có thể tạo hệ thống bảo mật, mềm dẻo, tích hợp dễ dàng và khả năng mở rộng rất tốt.</p>
                    <p>Hiện tại tôi đang là <strong>Technical Leader</strong> tại <a href="https://velacorp.vn/">VELA Corp</a>.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Chuyên môn</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Software Engineer</h3>
                    <p>Tôi có kinh nghiệm xây dựng: RESTful API sử dụng Java, Spring; Ứng dụng mobile sử dụng Android native; Ứng dụng hybrid sử dụng Flutter; Website sử dụng Spring MVC, React.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Technical Leader</h3>
                    <p>Tôi có thể xây dựng hệ thống Enterprise, có khả năng mở rộng tốt, hiệu năng cao, dễ bảo trì, luôn cập nhật theo xu thế mới nhất. Tôi còn giải quyết các vấn đề về mặt kỹ thuật.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Solution Consultant</h3>
                    <p>Tôi có thể tư vấn và thiết kế giải pháp để giải quyết các bài toán nghiệp vụ. Các lĩnh vực tôi đã từng thực hiện: VAS, Viễn thông, Tài chính, Bảo hiểm, Ngân hàng, POS, Quản lý kho.</p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
