import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>CMS College Events & News</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/8747/2018/8/20/CMS_College_Kottayam01.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Nature"
              path="/"
            />
            <CardItem
              src="https://i.imgur.com/RTR7rbH.jpg"
              text="CMS College wins MG university Inter collegiate Cricket match for the second time  held at Marthoma College,  Thiruvalla,  CMS College defeated St Paul's Kalamassery. In t"
              label="News"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="http://cmscollege.ac.in/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-14-at-1.51.57-PM.jpeg"
              text="NSS Unit CMS College Kottayam (Autonomous) organizes inauguration of ഒപ്പം A project for the holistic health, well- being and"
              label="Event"
              path="/"
            />
            <CardItem
              src="https://www.joonsquare.com/usermanage/image/business/cms-college-kottayam-14989/cms-college-kottayam-cms-college-3.jpeg"
              text="Onam celebrations in CMS college"
              label="Event"
              path="/"
            />
            <CardItem
              src="https://journeynorth.org/sites/default/files/styles/updates_teaser/public/2018-08/1526358458.full_.jpg?itok=KXfYRS4A"
              text="വിദ്യാര്‍ഥികളില്ലാത്ത കോട്ടയം സിഎംഎസ് കോളജിലേക്ക് വിരുന്ന് വന്ന് ഒരുകൂട്ടം ചിത്രശലഭങ്ങള്‍"
              label="News"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
