import Image from "next/image";
import en from "../../../public/assets/svg/rankingSection/en.svg";
import pl from "../../../public/assets/svg/rankingSection/pl.svg";
import gb from "../../../public/assets/svg/rankingSection/gb.svg";
import it from "../../../public/assets/svg/rankingSection/it.svg";
import lt from "../../../public/assets/svg/rankingSection/lt.svg";
import "./rankingSection.scss";
import { DownloadBtn } from "@/components/buttons/downloadBtn/DownloadBtn";
import { TriangleBackground } from "@/components/triangleBackground/TriangleBackground";

const RANKING_LIST = [
  { title: "Poland", flagIcon: pl, usersPerc: 5, rank: 5, place: "fifth" },
  { title: "Italy", flagIcon: it, usersPerc: 6, rank: 4, place: "fourth" },
  { title: "Lithuania", flagIcon: lt, usersPerc: 7, rank: 3, place: "third" },
  {
    title: "United States",
    flagIcon: en,
    usersPerc: 7,
    rank: 2,
    place: "second",
  },
  {
    title: "United Kingdom",
    flagIcon: gb,
    usersPerc: 9,
    rank: 1,
    place: "first",
  },
];

interface RankingSectionProps {
  browser: string;
}

export const RankingSection: React.FC<RankingSectionProps> = ({ browser }) => (
  <section className="rankingSection">
    <div className="rankingSectionContainer">
      <div className="rankingContent">
        <h2 className="rankingTitle">
          Ratepunk is a <span>TOP extension</span> all over the world
        </h2>
        <p className="description">
          Only a few years in the market and Ratepunk has been featured in the
          <strong>TOP charts in the travel category</strong> already.
        </p>
        <DownloadBtn browser={browser} size="medium">
          It&apos;s Free - Add to {browser}
        </DownloadBtn>
      </div>
      <div className="rankingChart">
        {RANKING_LIST.map(
          ({ title, flagIcon, usersPerc, rank, place }, index) => (
            <div key={index} className={`chartColumn ${place}`}>
              <div className="chartLabel">
                <p className="countryTitle">
                  <strong>{title}</strong>
                </p>
                <p className="userScore">{usersPerc}% users</p>
                <div className="iconWrapper">
                  <Image
                    className="flagIcon"
                    src={flagIcon}
                    alt={`${title} flag`}
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
    <TriangleBackground position="left" color="lightBlue" />
  </section>
);
