import NewsPost from "../Components/NewsPost";
import { useContext } from "react";
import { NewsContext } from "../Contexts/NewsContext";

export default function News() {
  const news = useContext(NewsContext);
  return (
    <div className="container mt-4">
      <div className="row">
        {news.map((item) => (
          <div className="col-12 col-sm-6 col-lg-4 mb-4" key={item.id}>
            <NewsPost title={item.title} text={item.text} />
          </div>
        ))}
      </div>
    </div>
  );
}
