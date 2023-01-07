import { apiCall } from ".";

export const getQuestionsRequest = async () => {
  const { data: questions } = await apiCall.get("/questions");
  return questions;
};
