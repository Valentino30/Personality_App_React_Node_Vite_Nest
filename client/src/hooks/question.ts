import { useQuery } from "react-query";

import { QueryTokens } from "./tokens";
import { getQuestionsRequest } from "../api/question";

export const useGetQuestions = () => {
  return useQuery(QueryTokens.questions, getQuestionsRequest, {
    onError: () => {
      alert("Could not fetch todos 😞");
    },
  });
};
