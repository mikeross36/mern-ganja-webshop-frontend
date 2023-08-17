import { content } from "./data";
import Button from "../../components/Button";

const Home = () => {
  return (
    <section className="home">
      <div className="home__container container">
        <div className="home__img-background">
          <img src="/images/home.png" alt="home pic" className="home__img" />
        </div>
        <article className="home__data">
          <h2 className="home__title">welcome</h2>
          <p className="home__content">
            <em>{content}</em>
          </p>
          <div className="home__btn">
            <a
              href="https://www.drugs.com/illicit/cannabis.html"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <Button className="button button--mid" text="explore" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Home;
