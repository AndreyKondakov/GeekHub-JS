import React, { Component } from 'react';
import './Slider.css';
import './PageSlider';
import PageSlider from "./PageSlider";

var sliderDB = [
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
    "img": "https://wallpaperscraft.ru/download/skandinavskij_forsazh_borning_2014_mustang_103541/1920x1080",
    "title": "Slider title #3 - Skandinavskij forsazh"
  },
  {
    "id": "4",
    "img": "https://wallpaperscraft.ru/download/wall_e_eva_roboty_para_104159/1920x1080",
    "title": "Slider title #4 - Wall-e"
  },
  {
    "id": "5",
    "img": "https://wallpaperscraft.ru/download/varkraft_warcraft_2016_voin_bronya_108524/1920x1080",
    "title": "Slider title #5 - Warcraft"
  },
  {
    "id": "6",
    "img": "https://wallpaperscraft.ru/download/transformers_transformery_bumblebee_robot_93734/1920x1080",
    "title": "Slider title #6 - Transformers"
  }
];


class Slider extends Component {

  render() {
    // {
    //   this.state.sliderPage(function (el) {
    //     return <PageSlider
    //       key={el.id}
    //       image={el.img}
    //       title={el.title}
    //     />;
    //   })
    // }




    return (
      <div className="slider">
        <p>{this.props.start}</p>
        <p>Slider:</p>
        {
          sliderDB.map(function (el) {
            return <PageSlider
              key={el.id}
              image={el.img}
              title={el.title}
            />
          })
        }
      </div>
    );
  }
}

export default Slider;