import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import useConstants from "@/composables/useConstants.js";

import useApi from "@/composables/useApi.js";

dayjs.extend(isBetween);

const useLeague = (league = "nfl") => {
  const { request } = useApi();
  const { LEAGUES } = useConstants();

  const getTeams = async () => {
    const { data } = await request(`/${LEAGUES[league]}/${league}/teams`);
    return data.sports[0].leagues[0].teams;
  };

  const getSchedule = async (
    dates = {
      startDate: dayjs(),
      endDate: dayjs(),
    },
    meta
  ) => {
    let response;
    if (league === "nfl" && meta) {
      response = await request(
        `/${LEAGUES[league]}/${league}/scoreboard?limit=1000&dates=${meta.year}&week=${meta.week}`
      );
    } else {
      response = await request(
        `/${
          LEAGUES[league]
        }/${league}/scoreboard?limit=1000&dates=${dates.startDate.format(
          "YYYYMMDD"
        )}-${dates.endDate.format("YYYYMMDD")}`
      );
    }
    return response.data.events;
  };

  return {
    getTeams,
    getSchedule,
  };
};

export default useLeague;
