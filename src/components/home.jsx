import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

//import Bimage from '../../public/img/Good-shot-to-use.jpg';

class Banner extends Component {
  render() {
    var bg = require("../img/Good-shot-to-use.jpg");
    return (
      <section
        className="banner-sec"
        style={{ backgroundImage: "url(" + bg + ")" }}
      >
        <Container>
          <Row>
            <Col lg={8}>
              <h1>
                Powerful Environmental Risk And Return Insight to keep you
                Informed
              </h1>
              <div className="link mt-5">
                <a className="btn-simple" href="javascript:void(0);">
                  Login
                </a>
                <a
                  className="btn-simple bg-blue request-demo"
                  href="javascript:void(0);"
                >
                  Request a demo
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

class Headings extends Component {
  render() {
    return (
      <div className="headings">
        {this.props.title ? (
          <h3 className="entry-title">{this.props.title}</h3>
        ) : (
          ""
        )}
        {this.props.subtext ? (
          <p className="elabo">{this.props.subtext}</p>
        ) : (
          ""
        )}
      </div>
    );
  }
}
class IconBx extends Component {
  render() {
    return (
      <div className="icon-bx">
        <div className="img maw-150 mx-auto">
          <img src={this.props.iconImage} alt="Icon" />
        </div>
        <p>{this.props.iconText}</p>
      </div>
    );
  }
}
class IconBxFlex extends Component {
  render() {
    return (
      <div class="icon-bx d-flex align-items-center">
        <div class="img">
          <img src={this.props.iconImage} alt="Icon" />
        </div>
        <div class="txt">
          <p>{this.props.iconText}</p>
        </div>
      </div>
    );
  }
}
class ImageBx extends Component {
  render() {
    return (
      <div class="image-bx box-shadow-hover">
        <h4>{this.props.title}</h4>
        <div class="img">
          <img src={this.props.iconImage} alt="Icon" />
        </div>
        <div class="txt">
          <p>{this.props.iconText}</p>
        </div>
      </div>
    );
  }
}

class OurEnvironment extends Component {
  render() {
    const OurEnv = [
      ["img/Layer-2-1.png", "Brand"],
      ["img/Layer-4.png", "Investors"],
      ["img/Layer-2-1.png", "Insurers"],
      ["img/Layer-4.png", "Land Owners"],
      ["img/Layer-2-1.png", "Government"],
      ["img/Layer-4.png", "Business"]
    ];
    const newOurEnv = OurEnv.map((env, i) => {
      return (
        <Col lg={2} md={3}>
          <IconBx iconImage={env[0]} iconText={env[1]} />
        </Col>
      );
    });
    return (
      <section className="common-sec our-environment-sec text-center">
        <Container>
          <Headings
            title={"Our Environment - Past, Present, Future"}
            subtext={
              "New Zealand’s natural environment is rapidly changing. Land owners are challenged by environmental events including floods, erosion, droughts and earthquakes. Climate change is affecting land viability and usage. Ecological factors including pests, water pollution and biodiversity influence production capability. Regulatory and compliance obligations are increasingly costly and complex."
            }
          />

          <Row>{newOurEnv}</Row>

          <div class="link mt-4">
            <a class="txt-orange" href="javascript:void(0);">
              All exposed to New Zealand’s changing environmental risks and
              opportunities.
            </a>
          </div>
        </Container>
      </section>
    );
  }
}

class RiskAndOpportunity extends Component {
  render() {
    return (
      <section className="common-sec risk-opportunity-sec text-center bg-gray">
        <Container>
          <Headings
            title={"Transforming Natural Asset Risk And Opportunity"}
            subtext={
              "LANDx is New Zealand’s first geo-spatial, natural asset, environmental analysis tool. It delivers a complete picture of natural assets, environmental risks and potential opportunities."
            }
          />

          <Row>
            <Col lg={2}>
              <IconBx
                iconImage={"img/Layer-2-1.png"}
                iconText="What are the natural assets on this land and how can they be used?"
              />
            </Col>
            <Col lg={2}>
              <IconBx
                iconImage={"img/Layer-2-1.png"}
                iconText="What are the compliance and regulatory risks on this land?"
              />
            </Col>
            <Col lg={2}>
              <IconBx
                iconImage={"img/Layer-2-1.png"}
                iconText="What are the current or potential environmental pressures?"
              />
            </Col>
            <Col lg={2}>
              <IconBx
                iconImage={"img/Layer-2-1.png"}
                iconText="Has a natural disaster affected the lands revenue potential?"
              />
            </Col>
            <Col lg={2}>
              <IconBx
                iconImage={"img/Layer-2-1.png"}
                iconText="What is the optimal agricultural possibility of this land?"
              />
            </Col>
            <Col lg={2}>
              <IconBx
                iconImage={"img/Layer-2-1.png"}
                iconText="What is the carbon potential of this land?"
              />
            </Col>
          </Row>

          <div class="link mt-4">
            <a class="txt-orange" href="javascript:void(0);">
              Spanning across every New Zealand land parcel, catchment and
              region, LANDx insights inform business and investment decisions.
            </a>
          </div>
        </Container>
      </section>
    );
  }
}

class SmarterInsight extends Component {
  render() {
    return (
      <section className="common-sec artificial_intelligence_sec">
        <Container>
          <Headings
            title={
              "Harnessing Geospatial And Artificial Intelligence For Smarter Insight"
            }
          />

          <Row>
            <Col lg={6}>
              <div className="entry-txt">
                <p>
                  LANDx harnesses world-leading machine learning, Artificial
                  Intelligence (AI) and computer vision to analyse high
                  resolution satellite data imagery delivering a complete land
                  parcel picture.
                </p>
                <p>
                  LANDx collates over 70 diverse public and proprietary data
                  sources. It overlays environmental and ecological algorithms,
                  validated by New Zealand’s leading environmental economists
                  and ecologists, to deliver near real-time land asset insight.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="img">
                <img src="img/waikato_2.png" alt="Icon" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

class DecisionMaking extends Component {
  render() {
    return (
      <section className="common-sec bg-gray decision_making_sec">
        <Container>
          <Headings title={"Intuitive And Informative Decision Making Tools"} />
          <Row>
            <Col md={6} className="mt-5">
              <IconBxFlex
                iconImage={"img/Capa-1-1.png"}
                iconText={
                  "Land parcel compliance metrics including regulatory and regional catchment requirements"
                }
              />
            </Col>
            <Col md={6} className="mt-5">
              <IconBxFlex
                iconImage={"img/Capa-1-1.png"}
                iconText={
                  "Carbon Offset Calculations for existing and potential analysis (by land parcel or catchment including recommendation)"
                }
              />
            </Col>
            <Col md={6} className="mt-5">
              <IconBxFlex
                iconImage={"img/Capa-1-1.png"}
                iconText={
                  "Land Scenerio Modelling for management decision making and forecasting"
                }
              />
            </Col>
            <Col md={6} className="mt-5">
              <IconBxFlex
                iconImage={"img/Capa-1-1.png"}
                iconText={
                  "High Risk ecological, compliance or consent metric alerts"
                }
              />
            </Col>
            <Col md={6} className="mt-5">
              <IconBxFlex
                iconImage={"img/Capa-1-1.png"}
                iconText={
                  "Natural Asset Inventory Modelling (Baseline, Current and future Potential) modelling capability to demonstrate how land improvements could affect ecoystem viability."
                }
              />
            </Col>
            <Col md={6} className="mt-5">
              <IconBxFlex
                iconImage={"img/Capa-1-1.png"}
                iconText={
                  "Alternative Land Production Usage Comparison tool for modelling existing agricultural production system risks, costs and potential returns against recommended potential land use production system diversification options."
                }
              />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

class TrackOfEnvironmental extends Component {
  render() {
    return (
      <section className="common-sec better_decision_sec text-center">
        <Container>
          <Headings title={"Keep Track Of Environmental"} />

          <Row className="justify-content-center">
            <Col lg={4} md={6} className="mt-5">
              <ImageBx
                title={"Customise your portfolio"}
                iconImage={"img/12-Landx-Portfolio.png"}
                iconText={
                  "Build your land parcel portfolio through simple and intuitive LANDx dashboards."
                }
              />
            </Col>
            <Col lg={4} md={6} className="mt-5">
              <ImageBx
                title={"Simple and intuitive"}
                iconImage={"img/12-Landx-Portfolio.png"}
                iconText={
                  "Simple metrics, charts and tables that show clear actionable insights in a single view."
                }
              />
            </Col>
            <Col lg={4} md={6} className="mt-5">
              <ImageBx
                title={"Scenario and forecasting tools"}
                iconImage={"img/12-Landx-Portfolio.png"}
                iconText={
                  "Identify opportunities to improve the ecological well being of a land parcel. Calculate current and potential carbon units."
                }
              />
            </Col>
            <Col lg={4} md={6} className="mt-5">
              <ImageBx
                title={"Automated alerts"}
                iconImage={"img/12-Landx-Portfolio.png"}
                iconText={
                  "Automated risk alerts about enviornmental events, regulatory and compliance changes."
                }
              />
            </Col>
            <Col lg={4} md={6} className="mt-5">
              <ImageBx
                title={"Comparison and benchmarking"}
                iconImage={"img/12-Landx-Portfolio.png"}
                iconText={
                  "Compare land parcels, catchments and regions enviornmental metrics for existing and potential land usage oppurtunities"
                }
              />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

class LandxResources extends Component {
  render() {
    return (
      <section className="common-sec bg-gray landx_resources_sec text-center">
        <Container>
          <Headings title={"LANDx Resources"} />

          <Row>
            <Col lg={3} md={4} sm={6} className="mt-5">
              <IconBx
                iconImage={"img/L0001-4.png"}
                iconText={"Capturing Natural Capital"}
              />
            </Col>
            <Col lg={3} md={4} sm={6} className="mt-5">
              <IconBx
                iconImage={"img/L0001-4.png"}
                iconText={"Ecosystem based management"}
              />
            </Col>
            <Col lg={3} md={4} sm={6} className="mt-5">
              <IconBx
                iconImage={"img/L0001-4.png"}
                iconText={"Measuring Changes in Natural Capital"}
              />
            </Col>
            <Col lg={3} md={4} sm={6} className="mt-5">
              <IconBx
                iconImage={"img/L0001-4.png"}
                iconText={"MFE_Environment Aotearoa-2019"}
              />
            </Col>
            <Col lg={3} md={4} sm={6} className="mt-5">
              <IconBx
                iconImage={"img/L0001-4.png"}
                iconText={"Natural Capital Accounting"}
              />
            </Col>
            <Col lg={3} md={4} sm={6} className="mt-5">
              <IconBx
                iconImage={"img/L0001-4.png"}
                iconText={"Sustainable Development Goals"}
              />
            </Col>
            <Col lg={3} md={4} sm={6} className="mt-5">
              <IconBx
                iconImage={"img/L0001-4.png"}
                iconText={"The Value of the World's Ecosystem Services"}
              />
            </Col>
            <Col lg={3} md={4} sm={6} className="mt-5">
              <IconBx
                iconImage={"img/L0001-4.png"}
                iconText={"UN 2030 Agenda for Sustainable Development"}
              />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <main className="main-sec">
        <Banner />
        <OurEnvironment />
        <RiskAndOpportunity />
        <SmarterInsight />
        <DecisionMaking />
        <TrackOfEnvironmental />
        <LandxResources />
      </main>
    );
  }
}

export default Home;
