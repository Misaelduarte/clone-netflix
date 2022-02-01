import { MovieLineProps } from '../../types';

import styles from './MovieLine.module.scss';

const MovieLine = ({ title, items }: MovieLineProps) => {
  return (
    <div className={styles.movieLine}>
      <h2>{title}</h2>
      <div className={styles.listArea}>
        <div className={styles.list}>
          {items.results.length > 0 && items.results.map((item, key) => (
            <div key={key} className={styles.item}>
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieLine;