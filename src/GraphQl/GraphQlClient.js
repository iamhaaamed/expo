import { GraphQLClient } from 'graphql-request';
import Config from 'react-native-config';
const GraphQlClient = new GraphQLClient(Config.API_URL);

export default GraphQlClient;
