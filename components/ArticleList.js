import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = (props) => {
  const { articleList } = props;
  return (
    <div className={articleStyles.grid}>
      {articleList.map((article, index) => (
        <ArticleItem article={article} key={index} />
      ))}
    </div>
  );
};

export default ArticleList;
