export type tNavigation = {
  brand: {
    main: tLink & {
      logo: tImage;
    };
    subdomain?: tLink | false;
  };
};
