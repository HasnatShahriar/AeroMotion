
import { useEffect, useState } from "react";
const useBikes = () => {
  const [bike, setBike] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('bike.json')
      .then(res => res.json())
      .then(data => {
        setBike(data);
        setLoading(false);
      })

  }, [])
  return [bike,loading]
};

export default useBikes;
