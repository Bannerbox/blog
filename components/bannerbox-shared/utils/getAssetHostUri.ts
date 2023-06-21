const LOCAL_API_HOST = 'https://localhost:8080/assets';
const PROD_API_HOST = 'https://assets.bannerbox.io';

const getAssetHostUri = (): string => {
  const urlParams = new URLSearchParams(window.location.search);
  const useLocalAssets = urlParams.get('use-local-assets');

  if (process.env.NODE_ENV === 'development' || useLocalAssets) {
    return LOCAL_API_HOST;
  } else {
    return PROD_API_HOST;
  }
};

export default getAssetHostUri;
