export type TStatus = "operational" | "partial_outage" | "major_outage";

export type TGithubBlock = {
  components: [
    {
      id: string;
      name: string;
      status: TStatus;
      created_at: string;
      updated_at: string;
      position: number;
      description?: string;
      showcase: boolean;
      start_date?: string;
      group_id: any;
      page_id: string;
      group: boolean;
      only_show_if_degraded: boolean;
    }
  ];
};
