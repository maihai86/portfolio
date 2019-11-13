import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-education" data-section="education">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Education</span>
                        <h2 className="colorlib-heading animate-box">Học vấn</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        <div className="fancy-collapse-panel">
                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingTwo">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">Kỹ sư Công nghệ thông tin
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo" aria-expanded="true"> 
                                        <div className="panel-body">
                                            <p>Tôi tốt nghiệp hệ chính quy trường Đại học Bách Khoa Hà Nội.</p>
                                                <ul>
                                                    <li>Chuyên ngành <strong>Kỹ thuật máy tính</strong>.</li>
                                                    <li>Khoa <strong>Công nghệ thông tin và Truyền thông</strong>.</li>
                                                </ul>
                                            <p>Đề tài Đồ án tốt nghiệp: Tìm hiểu và ứng dụng cách thức giao tiếp chia sẻ ngang hàng peer-to-peer bằng giọng nói sử dụng giao thức SIP.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
  }
}
