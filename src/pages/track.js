import { Layout, QueryResult } from '../components';
import { gql, useQuery } from '@apollo/client';
import TrackDetail from './../components/track-detail';

const TRACK = gql`
query Track($trackId: ID!) {
  track(id: $trackId) {
    id
    title
    thumbnail
    length
    modulesCount
    description
    numberOfViews
    author {
      id
      name
      photo
    }
    modules {
      id
      title
      length
    }
  }
}
`;

const Track = ({trackId}) => {
    const { loading, error, data } = useQuery(TRACK, { 
        variables: { trackId }
    });

    return (<Layout>
        <QueryResult error={error} loading={loading} data={data}>
            <TrackDetail track={data?.track} />
        </QueryResult>
    </Layout>)
}

export default Track;