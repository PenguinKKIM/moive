function Movie({title,coverImg,summary,genres}) {
    return(
        <div>
            <h3>{title}</h3>
            <img src={coverImg} alt="포스터 이미지"/>
            <p>{summary}</p>
            <ul>
            {/* map을 쓸때는 key 값이 있어야한다 */}
                {genres.map((genre) =>(
                <li key={genre}>{genre}</li>
                ))}
            </ul>
        </div>);
}

export default Movie;