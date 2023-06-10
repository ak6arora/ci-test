import { gql } from "@apollo/client";

export const GET_GREETING = gql`
  query GetGreeting {
    greeting
  }
`;

export const GET_JOBS = gql`
  query GetJobs {
    jobs {
      id
      title
      description
      company {
        name
      }
    }
  }
`;
