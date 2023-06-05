import Image from "next/image";
import "./blogSection.scss";
import AIRBNB from "../../../public/assets/images/blogSection/airbnb.jpg";
import MISTAKES from "../../../public/assets/images/blogSection/mistakes.jpg";
import AIRPORTS from "../../../public/assets/images/blogSection/airports.jpg";

const BLOG_CARDS = [
  {
    image: AIRBNB,
    title: "14 Airbnb Tips for Hosts - How to Become an Airbnb SuperHost",
    desc: "How to become a super host? There are simple and expert tips you can follow to become one. Here we go through some of the tips for hosts to list their property in...",
    date: "2 days ago",
  },
  {
    image: MISTAKES,
    title: "The Biggest Travel Mistakes in 2023 and How to Avoid It",
    desc: "Sometimes you just can’t find out everything about the destination you are traveling to, or sometimes you might overlook things or forget items to carry...",
    date: "2 days ago",
  },
  {
    image: AIRPORTS,
    title: "12 Largest and Busiest Airports in Europe - With Images",
    desc: "There are many big airports in Europe, and they tend to get very busy, as they are very well connected to all destinations all over the world. Here is the list of Europe's...",
    date: "2 days ago",
  },
];

export const BlogSection: React.FC = () => (
  <section className="blogSection">
    <div className="blogContainer">
      <h2 className="blogSectionTitle">From travel insiders to our blog</h2>
      <p className="blogSectionSubTitle">
        RatePunk blog is where you find TOP lists of perfect destinations and
        hotels. We aim to show you the ways to save money and time while
        planning a trip, so you will see many useful hacks to try.
      </p>
      <div className="blogCards">
        {BLOG_CARDS.map(({ image, title, desc, date }, index) => (
          <div className="blogCard" key={index}>
            <div>
              <Image src={image} className="blogImage" alt="airbnb tips" />
              <p className="cardDate">{date}</p>
              <h3 className="cardTitle">{title}</h3>
              <p className="cardDesc">{desc}</p>
            </div>
            <div className="ctaRow">
              <button className="readMoreButton">Read More</button>
            </div>
          </div>
        ))}
      </div>
      <button className="viewMoreButton">View More</button>
    </div>
  </section>
);
