import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllQuotes,
  quotesSelector,
  statusSelector,
  errorSelector,
} from "../redux/quotesSlice";

import Error from "../components/Error";
import Loading from "../components/Loading";
import Item from "./Item";

function Quotes() {
  const dispatch = useDispatch();
  const data = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch, status]);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div>
      <h1> Quotes</h1>
      {status === "loading" && <Loading />}

      {status === "succedeed" &&
        data.map((item) => (
          <div>
            <Item key={item.quote_id} item={item} />
          </div>
        ))}

      {status === "succedeed" && <div>{data.length} quotes.</div>}
    </div>
  );
}
export default Quotes;
