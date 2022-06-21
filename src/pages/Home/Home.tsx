import React, {
  createRef,
  RefObject,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Card, CardList } from "../../components";
import { Beer } from "../../models/BeerModel";
import { getAll } from "../../services/Api";

function isBottom(ref: RefObject<HTMLDivElement>) {
  if (!ref.current) {
    return false;
  }
  return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
}

const Home = () => {
  const [page, setPage] = useState(1);
  const [beers, setBeers] = useState<Beer[]>([]);
  const contentRef: RefObject<HTMLDivElement> = createRef();

  const getBeers = useCallback(async () => {
    const data = await getAll(page);
    setBeers([...beers, ...data]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    getBeers();
  }, [getBeers]);

  useEffect(() => {
    const onScroll = () => {
      if (isBottom(contentRef)) {
        setPage(page + 1);
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [page, contentRef]);

  return (
    <CardList ref={contentRef}>
      {beers.map((beer) => (
        <Card key={beer.id} beer={beer} />
      ))}
    </CardList>
  );
};

export default Home;
