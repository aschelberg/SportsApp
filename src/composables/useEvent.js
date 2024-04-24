import useConstants from "@/composables/useConstants.js";
import useApi from "@/composables/useApi.js";

const useEvent = (eventId, league) => {
  const { request } = useApi();
  const { LEAGUES } = useConstants();

  const getEventMatchup = async () => {
    const { data } = await request(
      `/${LEAGUES[league]}/${league}/summary?event=${eventId}`
    );
    return data
  };

  return {
    getEventMatchup,
  };

};

export default useEvent;