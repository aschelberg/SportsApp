import useConstants from "@/composables/useConstants.js";

import useApi from "@/composables/useApi.js";

const usePlayer = (league = "nfl") => {
  const { request } = useApi();
  const { LEAGUES } = useConstants();

  const getAllPlayers = async () => {
    const { data } = await request(
      `https://sports.core.api.espn.com/v3/sports/${LEAGUES[league]}/${league}/athletes`
    )
    return data;
  }

  // Bio information
  const getPlayerInfo = async (playerId) => {
    const { data } = await request(
      `https://sports.core.api.espn.com/v2/sports/${LEAGUES[league]}/leagues/${league}/athletes/${playerId}`
    );

    return data;
  };

  // Stat Split
  const getPlayerSplit = async (playerId) => {
    const { data } = await request(
      `https://site.web.api.espn.com/apis/common/v3/sports/${LEAGUES[league]}/${league}/athletes/${playerId}/stats`
    );
    return data;
  };

  return {
    getAllPlayers,
    getPlayerInfo,
    getPlayerSplit,
  };
};

export default usePlayer;
