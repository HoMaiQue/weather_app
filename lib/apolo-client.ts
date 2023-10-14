import {
    from,
    ApolloClient,
    ApolloLink,
    HttpLink,
    InMemoryCache,
} from "@apollo/client";

const httpLink = new HttpLink({
    uri: process.env.API_URL,
});

const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            Authorization: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
        },
    });

    return forward(operation);
});

const cache = new InMemoryCache({
    // possibleTypes: generatedTypes.possibleTypes,
    // typePolicies: {
    //     Query: {
    //         fields: {
    //             repo: {
    //                 read() {
    //                     return repoState();
    //                 },
    //             },
    //         },
    //     },
    // },
});

export const client = new ApolloClient({
    link: from([authLink, httpLink]),
    cache,
});
