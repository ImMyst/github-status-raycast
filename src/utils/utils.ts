import { Color, Icon, Image } from "@raycast/api";
import { useFetch } from "@raycast/utils";

import { TGithubBlock, TStatus } from "./types";

export const useGithubStatus = () => useFetch<TGithubBlock>("https://www.githubstatus.com/api/v2/components.json");

export const githubFilteredList = (data?: TGithubBlock) =>
  data?.components.filter((component) => component.description);

export const listItemIcon = (componentStatus: TStatus): Image.ImageLike => {
  switch (componentStatus) {
    case "operational":
      return { source: Icon.Checkmark, tintColor: Color.Green };
    case "partial_outage":
      return { source: Icon.CircleProgress50, tintColor: Color.Yellow };
    case "major_outage":
      return { source: Icon.CircleProgress100, tintColor: Color.Red };
    default:
      return { source: Icon.CircleEllipsis, tintColor: Color.Green };
  }
};
