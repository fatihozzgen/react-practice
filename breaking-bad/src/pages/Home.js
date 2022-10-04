import { useEffect } from "react";
import Masonry from "react-masonry-css";
import "./style.css";

import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../redux/charactersSlice";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Link } from "react-router-dom";
function Home() {
  const characters = useSelector((state) => state.characters.items);
  const nexPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div key={character.char_id}>
            <Link to="/">
              <img
                alt={character.name}
                src={character.img}
                className="character"
              />
              <div className="charname">{character.name}</div>
            </Link>
          </div>
        ))}
      </Masonry>
      <div style={{ padding: "20px 0 40px 0", textAlign: "center" }}>
        {isLoading && <Loading />}
        {hasNextPage && !isLoading && (
          <button onClick={() => dispatch(fetchCharacters(nexPage))}>
            Load More ({nexPage})
          </button>
        )}
        {!hasNextPage && <div> There is Nothing More</div>}
      </div>
    </div>
  );
}

export default Home;
