import { useQuery } from "react-query";

import { QueryTokens } from "./tokens";
import { PaginationQueryType } from "../types/api";
import { getPaginatedQuestionsRequest } from "../api/question";

export const useGetPaginatedQuestions = ({
  offset,
  limit,
}: PaginationQueryType) => {
  return useQuery(
    [QueryTokens.questions, offset],
    () => getPaginatedQuestionsRequest({ offset, limit }),
    {
      onError: () => {
        alert("Could not fetch questions 😞");
      },
    }
  );
};
