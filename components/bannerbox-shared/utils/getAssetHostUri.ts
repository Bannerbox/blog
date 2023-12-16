const LOCAL_API_HOST = 'https://localhost:8080/assets';
const PROD_API_HOST = 'https://assets.bannerbox.io';

const getAssetHostUri = (): string => {
  if (window?.location.host.split('.')[0] === 'localdb') {
    return LOCAL_API_HOST;
  }

  const cookies = new URLSearchParams(document?.cookie.replaceAll('; ', '&'));
  const useLocalAssets = cookies.get('use-local-assets');
  return useLocalAssets ? LOCAL_API_HOST : PROD_API_HOST;
};

export default getAssetHostUri;
