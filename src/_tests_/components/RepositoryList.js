import React from 'react';
import { render } from '@testing-library/react-native';

import { RepositoryListContainer } from '../../components/RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor: "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
                  fullName: 'jaredpalmer/formik',
                  description: 'Build forms in React, without the tears',
                  language: 'TypeScript',
                  forksCount: 1589,
                  stargazersCount: 21553,
                  ratingAverage: 88,
                  reviewCount: 4,
                  ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
               id: 'rails.rails',
                  fullName: 'rails/rails',
                  description: 'Ruby on Rails',
                  language: 'Ruby',
                  forksCount: 18349,
                  stargazersCount: 45377,
                  ratingAverage: 100,
                  reviewCount: 2,
                  ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
            },
            cursor: "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
          {
                      node: {
                         id: 'rails.rails',
                            fullName: 'rails/rails',
                            description: 'Ruby on Rails',
                            language: 'Ruby',
                            forksCount: 18349,
                            stargazersCount: 45377,
                            ratingAverage: 100,
                            reviewCount: 2,
                            ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
                         },
                      cursor: "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
           },
           {
                                 node: {
                                    id: 'django.django',
                                        fullName: 'django/django',
                                        description: 'The Web framework for perfectionists with deadlines.',
                                        language: 'Python',
                                        forksCount: 21015,
                                        stargazersCount: 48496,
                                        ratingAverage: 73,
                                        reviewCount: 5,
                                        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
                                    },
                                    }
                                 cursor: "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
                                 {
                                 node:{
                                 id: 'reduxjs.redux',
                                     fullName: 'reduxjs/redux',
                                     description: 'Predictable state container for JavaScript apps',
                                     language: 'TypeScript',
                                     forksCount: 13902,
                                     stargazersCount: 52869,
                                     ratingAverage: 0,
                                     reviewCount: 0,
                                     ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
                                     }
                      },
        ],
      };

      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

      const items = getAllByTestId("repositoryItem");
      const counters = getAllByTestId("counterItem");

      expect(items).toHaveLength(2);
      expect(counters).toHaveLength(8);

      expect(items[0]).toHaveTextContent("jaredpalmer/formik");
      expect(items[0]).toHaveTextContent("Build forms in React, without the tears");
      expect(items[0]).toHaveTextContent("TypeScript");
      expect(counters[0]).toHaveTextContent("21,9k");
      expect(counters[1]).toHaveTextContent("1,6k");
      expect(counters[2]).toHaveTextContent("3");
      expect(counters[3]).toHaveTextContent("88");

      expect(items[1]).toHaveTextContent("async-library/react-async");
      expect(items[1]).toHaveTextContent("Flexible promise-based React data loader");
      expect(items[1]).toHaveTextContent("JavaScript");
      expect(counters[4]).toHaveTextContent("1,8k");
      expect(counters[5]).toHaveTextContent("69");
      expect(counters[6]).toHaveTextContent("3");
      expect(counters[7]).toHaveTextContent("72");
    });
  });
});