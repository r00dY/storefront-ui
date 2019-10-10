import { useQuery } from "@apollo/react-hooks";
import getCollections from "../queries/getCollections";
import mapCollection from "../../helpers/mapCollection";

const useGetCollections = (amount = 30) => {
  const { data, loading } = useQuery(getCollections, { variables: { amount } });

  if (!data) {
    return [[], loading];
  }

  const { collections = { edges: [] } } = data;

  return [collections.edges.map(el => mapCollection(el.node)), loading];
};

export default useGetCollections;
