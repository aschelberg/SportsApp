import useConstants from "@/composables/useConstants.js";
import dayjs from "dayjs";

import useApi from "@/composables/useApi.js";
import { ref } from "vue";

const useTeam = (league = "nfl", year) => {
  const { request } = useApi();
  const { LEAGUES } = useConstants();

  const getListTeams = async () => {
    const { data } = await request(
      `/${LEAGUES[league]}/${league}/teams`
    )
    return data
  }

  const getTeamRoster = async (teamId) => {
    const { data } = await request(
      `/${LEAGUES[league]}/${league}/teams/${teamId}?enable=roster,projection,stats`
    );
    return data.team;
  };
  const getTeam = async (teamId) => {
    const response = await request(
      `/${LEAGUES[league]}/${league}/seasons/2023/teams/${teamId}`
    );
    return response.data;
  };

  const getTeamStats = async (teamId) => {
    const response = await request(
      `https://sports.core.api.espn.com/v2/sports/${LEAGUES[league]}/leagues/${league}/seasons/2023/types/2/teams/${teamId}/statistics`
    );
    return response.data;
  }

  return {
    getListTeams,
    getTeamRoster,
    getTeam,
    getTeamStats,
  };
};

export default useTeam;
