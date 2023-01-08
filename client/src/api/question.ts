import { apiCall } from ".";
import { PaginationQueryType } from "../types/api";

export const getPaginatedQuestionsRequest = async ({
  offset,
  limit,
}: PaginationQueryType) => {
  const { data: questions } = await apiCall.get(
    "/questions",
    `offset=${offset}&limit=${limit}`
  );
  return questions;
};
