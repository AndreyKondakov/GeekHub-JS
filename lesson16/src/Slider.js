import React, { Component } from 'react';
import './Slider.css';
import PageSlider from "./PageSlider";

const sliderDB = [
  {
    "id": "1",
    "img": "https://images.wallpaperscraft.ru/image/need_for_speed_zhazhda_skorosti_ford_mustang_shelby_gt500_94943_1920x1080.jpg",
    "title": "Slider title #1 - Need for Speed"
  },
  {
    "id": "2",
    "img": "https://images.wallpaperscraft.ru/image/forsazh_7_furious_7_2015_brajan_okonnor_pol_uoker_101510_1920x1080.jpg",
    "title": "Slider title #2 - Fast and Furious"
  },
  {
    "id": "3",
    "img": "https://images.wallpaperscraft.ru/image/skandinavskij_forsazh_borning_2014_mustang_103541_1920x1080.jpg",
    "title": "Slider title #3 - Skandinavskij forsazh"
  },
  {
    "id": "4",
    "img": "https://images.wallpaperscraft.ru/image/wall_e_eva_roboty_para_104159_1920x1080.jpg",
    "title": "Slider title #4 - Wall-e"
  },
  {
    "id": "5",
    "img": "https://images.wallpaperscraft.ru/image/varkraft_warcraft_2016_voin_bronya_108524_1920x1080.jpg",
    "title": "Slider title #5 - Warcraft"
  },
  {
    "id": "6",
    "img": "https://images.wallpaperscraft.ru/image/transformers_transformery_bumblebee_robot_93734_1920x1080.jpg",
    "title": "Slider title #6 - Transformers"
  },
  {
    "id": "7",
    "img": "",
    "title": ""
  }
];


class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { slide: this.props.start };
  }

  tick() {
    this.setState(state => ({
      slide: state.slide + 1
    }));
    if (this.state.slide === this.props.end +1) {
      this.setState({
        slide: this.props.start
      });
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), this.props.timeout * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="slider">
        {/*Seconds: {this.state.slide}*/}
        {
          <PageSlider
            image={sliderDB[this.state.slide].img}
            title={sliderDB[this.state.slide].title}
          />
        }
      </div>
    )
  }
}

export default Slider;