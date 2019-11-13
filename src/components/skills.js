import React, { Component } from 'react'

export default class S extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-skills" data-section="skills">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">My Specialty</span>
                        <h2 className="colorlib-heading animate-box">Các Skills của tôi</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        <p>Với {this.dayDiff(Date.parse('01 August 2009 00:00:00 GMT'), Date.now())} năm kinh nghiệm, tôi có thể làm việc tốt với:</p>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div className="progress-wrap">
                            <h3>Microservices</h3>
                            <div className="progress">
                                <div className="progress-bar color-1" role="progressbar" aria-valuenow="100"
                                    aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}>
                                <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                        <div className="progress-wrap">
                            <h3>Java</h3>
                            <div className="progress">
                                <div className="progress-bar color-2" role="progressbar" aria-valuenow="100"
                                aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}>
                                <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div className="progress-wrap">
                            <h3>Spring framework</h3>
                            <div className="progress">
                                <div className="progress-bar color-3" role="progressbar" aria-valuenow="100"
                                aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}>
                                <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                        <div className="progress-wrap">
                            <h3>Android</h3>
                            <div className="progress">
                                <div className="progress-bar color-4" role="progressbar" aria-valuenow="100"
                                aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}>
                                <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div className="progress-wrap">
                            <h3>Flutter</h3>
                            <div className="progress">
                                <div className="progress-bar color-5" role="progressbar" aria-valuenow="100"
                                aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}>
                                <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                        <div className="progress-wrap">
                            <h3>SQL</h3>
                            <div className="progress">
                                <div className="progress-bar color-6" role="progressbar" aria-valuenow="100"
                                aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}>
                                <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div className="progress-wrap">
                            <h3>HTML</h3>
                            <div className="progress">
                                <div className="progress-bar color-7" role="progressbar" aria-valuenow="100"
                                aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}>
                                <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                        <div className="progress-wrap">
                            <h3>Javascript</h3>
                            <div className="progress">
                                <div className="progress-bar color-8" role="progressbar" aria-valuenow="100"
                                aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}>
                                <span></span>
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

  dayDiff(d1, d2) {
    return Number((d2 - d1) / 31536000000).toFixed(0);
  }
}
