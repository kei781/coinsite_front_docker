import AntockNews from "../../components/home/AntockNews";
import Community from "../../components/home/Community";
import ProReport from "../../components/home/ProReport";
import "./Home.scss";
import CommunityHot from "../../components/home/ComuunityHot";

const Home = () => {
  return (
    <div className="Home">
      <div className="AnTokNews">
        <div className="News">AnTok News</div>
        <div className="Newslist">
          <AntockNews />
        </div>
      </div>
      <div className="Homemiddr">
        <div className="Homemiddrtitle">
          <div className="Homemiddrss">실시간 인기글</div>
          <CommunityHot />
        </div>

        <div className="Homemiddrmddle">
          <div className="Homemiddrmddless">유머&잡담</div>
          <Community lcategory={"community"} mcategory={"fb"} />
        </div>
      </div>
      <div className="Homestock">
        <div className="Homestocktitle">
          <div className="Homestockss">한국 증시</div>
          <Community lcategory={"stock"} mcategory={"dsi"} />
        </div>

        <div className="Homecoin">
          <div className="Homecoinss">코인</div>
          <Community lcategory={"coin"} mcategory={"ci"} />
        </div>
      </div>

      <div className="Homelist">
        <div className="Homelisttitle">
          <div className="Homelistss">전문 리포트</div>
          <ProReport />
        </div>
      </div>
      <div className="Homebooton"></div>
    </div>
  );
};

export default Home;
