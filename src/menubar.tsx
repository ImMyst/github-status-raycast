import { MenuBarExtra, open } from "@raycast/api";

import { GITHUB_STATUS_URL } from "./constants";
import { githubFilteredList, listItemIcon, useGithubStatus } from "./utils";

export default function MenuCommand(): JSX.Element {
  const { data, isLoading } = useGithubStatus();

  return (
    <MenuBarExtra isLoading={isLoading} icon={"icon.png"}>
      {githubFilteredList(data)?.map((component) => (
        <MenuBarExtra.Item
          key={component.id}
          title={component.name}
          icon={listItemIcon(component.status)}
          onAction={() => open(GITHUB_STATUS_URL)}
        />
      ))}
    </MenuBarExtra>
  );
}
