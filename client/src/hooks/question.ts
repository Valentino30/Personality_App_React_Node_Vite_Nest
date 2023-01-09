import { toast } from "react-toastify";
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
      select: (data) => {
        return { ...data.questions[0], total: data.total };
      },
      onError: () => {
        toast.error("Could not fetch questions 😞");
      },
    }
  );
};
