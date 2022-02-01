import styles from './FeaturedMovie.module.scss';

interface FeaturedMovieProps {
  item: {
    id: string;
    backdrop_path: string;
    original_name: string;
    vote_average: string;
    number_of_seasons: number;
    overview: string;
    first_air_date: string;
    genres: {
      name: string;
    }[];
  };
}

const FeaturedMovie = ({ item }: FeaturedMovieProps) => {

  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name)
  }

  return (
    <section className={styles.featuredMovie} style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className={styles.featuredMovieVertical}>
        <div className={styles.featuredMovieHorizontal}>
          <div className={styles.featuredMovieName}>{item.original_name}</div>
          <div className={styles.featuredMovieInfo}>
            <div className={styles.featuredMoviePoints}>{item.vote_average} pontos</div>
            <div className={styles.featuredMovieYear}>{firstDate.getFullYear()}</div>
            <div className={styles.featuredMovieSeasons}>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
          </div>

          <div className={styles.featuredMovieDescription}>{item.overview}</div>
          <div className={styles.featuredMovieButtons}>
            <a className={styles.featuredMovieWatchBtn} href={`/watch/${item.id}`}>▶ Assistir</a>
            <a className={styles.featuredMovieMyList} href={`/list/add/${item.id}`}>+ Minha Lista</a>
          </div>

          <div className={styles.featuredMovieGenres}>
            <strong>Gêneros: </strong> {genres.join(', ')}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedMovie;