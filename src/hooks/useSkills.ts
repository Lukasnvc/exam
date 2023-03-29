import { QueryKey, useMutation, useQuery } from "@tanstack/react-query";
import { fetchContent, postContent } from "../api/contentApi";

import { Skill } from "../api/userTypes";

const CONTENT = 'CONTENT_DATA' as unknown as QueryKey;

export const useGetContent = (token: string) => {
  return useQuery([CONTENT], () => {
    return fetchContent(token)
  })
}

export const UsePostContent = (token: string, skill: Skill) => {
  return useMutation([CONTENT], () => postContent( skill, token))
}