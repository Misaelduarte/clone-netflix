import { useEffect, useState } from "react";
import Tmdb from "./Tmbd";
import MovieLine from "./components/Movies/MovieLine";
import FeaturedMovie from "./components/Movies/FeaturedMovie";

import { movieListProps } from "./types";
import './App.scss'
import Header from "./components/Header";

function App() {
  const [movieList, setMovieList] = useState<movieListProps[]>([]);
  const [featuredData, setFeaturedData] = useState(null as any);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list)

      let originals = list.filter(i => i.slug === 'originals')
      let randomChosenMovie = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosenMovie = originals[0].items.results[randomChosenMovie];
      let chosenInfo = await Tmdb.getMovieInfo(chosenMovie.id, 'tv')
      setFeaturedData(chosenInfo)
    }

    loadAll();
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener); 

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }       
  }, [])

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieLine
            key={key}
            title={item.title}
            items={item.items}
          />
        ))}
      </section>

      <footer>
        Feito com <span role="img" aria-label="coração">❤️</span> por Misael Duarte <br/>
        Direitos de imagem para Netflix<br />
        Dados pegos do site Themoviedb.org
      </footer>
    </div>
  )
}

export default App
