const useConstants = () => {
  const LEAGUES = {
    nfl: 'football',
    mlb: 'baseball',
    nhl: 'hockey',
    nba: 'basketball',
  };

  return { 
    LEAGUES,
  }
}

export default useConstants;