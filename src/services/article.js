//@ts-nocheck
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { rapidApiKey } from './../key';

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', rapidApiKey);
      headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

      return headers;
    }
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    })
  })
});

export const { useLazyGetSummaryQuery } = articleApi;
