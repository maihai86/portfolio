import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Work Progress</span>
                <h2 className="colorlib-heading animate-box">Quá trình công tác</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Technical Leader/Development Team Leader tại VELA Corp <br/><span>2019-present</span></h2>
                        <p>Công việc chính: Tiếp nhận yêu cầu, Phân tích nghiệp vụ, Xây dựng khung hệ thống, Quản lý development team, Tư vấn giải pháp chung, Giải quyết các vấn đề kỹ thuật.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Senior Specialist tại Ngân hàng Kỹ thương Việt Nam (Techcombank) <br/><span>2018-2019</span></h2>
                        <p>Công việc chính: Tiếp nhận và Phân tích yêu cầu, Xây dựng, Hỗ trợ triển khai hệ thống bảo hiểm nhân thọ tích hợp ứng dụng F@st Mobile.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Specialist tại Công ty Bảo hiểm Nhân thọ Aviva Việt Nam <br/><span>2016-2018</span></h2>
                        <p>Công việc chính: Bảo trì, Tiếp nhận và phân tích yêu cầu, Xây dựng tính năng mới cho hệ thống nội bộ của công ty.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-8">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer/Mobile Developer/Team Leader tại Yotel JSC. <br/><span>2014-2016</span></h2>
                        <p>Công việc chính: Phân tích yêu cầu, Thiết kế nghiệp vụ, Xây dựng hệ thống website CMS và ứng dụng Android.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-7">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer tại FPT Information System <br/><span>2011-2014</span></h2>
                        <p>Công việc chính: Phân tích yêu cầu, Thiết kế nghiệp vụ, Xây dựng và Bảo trì hệ thống về Viễn thông, sử dụng framework nội bộ của công ty.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6" style={{background: ""}}>
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer tại µVision JSC. <br/><span>2009-2011</span></h2>
                        <p>Công việc chính: Phát triển, Kiểm thử framework xem phim trực tuyến peer-to-peer.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
