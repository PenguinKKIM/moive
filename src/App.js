import {useEffect, useState} from "react" ;
import './App.css';
import Movie from "./Movie";
import { PropTypes } from "prop-types";

function App() {
  const [loding, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async()=>{
    const json = await (await fetch( `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();
    setMovies(json.data.movies);
    setLoding(false);
  }
  useEffect(()=>{
    getMovies(); 
  },[]);

console.log(movies);

  return (
    <div>
      {loding ? <h3>Loding</h3> : movies.map(movie=> <Movie 
      key={movie.id}
      coverImg={movie.medium_cover_image}
      title={movie.title} 
      summary={movie.summary} 
      genres={movie.genres} />)}
    </div>
  );
}
Movie.PropTypes={
  coverImg : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  summary :PropTypes.string.isRequired,
  genres :PropTypes.arrayOf(PropTypes.string).isRequired
}
export default App;
