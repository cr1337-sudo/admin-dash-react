import { Visibility } from "@material-ui/icons";
import "./widgetSm.css";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmItem">
          <img
            className="widgetSmImg"
            src="https://fotografias.antena3.com/clipping/cmsimages01/2021/05/02/26E03450-C5FB-4D16-BC9B-B282AE784352/57.jpg"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna</span>
            <span className="widgetSmUserTitle">Backend</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
