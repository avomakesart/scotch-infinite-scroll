import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useFetch(url, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setData([]);
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios
      .get(url, {
        params: { page: pageNumber },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setData((prevData) => {
          return [...new Set([...prevData, res.data])];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return e;
        setError(true);
      });
    return () => cancel();
  }, [pageNumber, url]);
  return { loading, error, data, hasMore };
}
