import React from "react";

const featuresData = [
  {
    icon: "fas fa-rocket",
    title: "Web framework",
    description:
      "Gemdev is a young and popular web framework designed to help users build websites and web apps in half the time it would take without it",
  },
  {
    icon: "fas fa-images",
    title: "Unlimited components",
    description:
      "Browse the enormous component collection and find the right parts for your online project. Cards, lists, image sliders, everything you need",
  },
  {
    icon: "fas fa-download",
    title: "Easy to download",
    description:
      "It's very easy to download Gemdev just login with your credentials and click the green download button. The package will download instantly",
  },
  {
    icon: "fas fa-cog",
    title: "Simple to setup",
    description:
      "With basic coding skills you can configure Gemdev down to the smallest detail. No more tutorials or browsing through knowledge bases",
  },
  {
    icon: "fas fa-file-alt",
    title: "Simple licensing",
    description:
      "We hear your pain and we're offering Gemdev under the MIT license, which means you can use it for any kind of project and for any number of times",
  },
  {
    icon: "fas fa-award",
    title: "Great results",
    description:
      "A lot of users have sent us positive feedback about the framework. That means we are on to something good here so we'll keep improving it",
  },
];

const Features = () => {
  return (
    <div id="features" className="basic-4">
      <div className="container">
        <div className="row">
          {featuresData.slice(0, 3).map((feature, index) => (
            <div className="col-lg-4" key={index}>
              <div className="text-box bg-gray">
                <i className={feature.icon}></i>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {featuresData.slice(3, 6).map((feature, index) => (
            <div className="col-lg-4" key={index + 3}>
              <div className="text-box bg-gray">
                <i className={feature.icon}></i>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
