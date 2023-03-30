import { ActionPanel, List, Action } from "@raycast/api";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { githubFilteredList, listItemIcon, useGithubStatus } from "./utils";
import { GITHUB_STATUS_URL } from "./constants";

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

export default function GithubStatusList() {
  const { data, isLoading } = useGithubStatus();

  return (
    <List isLoading={isLoading}>
      {githubFilteredList(data)?.map((component) => (
        <List.Item
          key={component.id}
          title={component.name}
          icon={listItemIcon(component.status)}
          subtitle={component.description}
          accessories={[
            {
              text: dayjs(component.updated_at).fromNow(),
              tooltip: `Updated at: ${dayjs(component.updated_at).tz("Europe/Paris")}`,
            },
          ]}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser url={GITHUB_STATUS_URL} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
