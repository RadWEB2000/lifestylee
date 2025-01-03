export type tBrand = {
  brand: {
    main: tLink & {
      logo: tImage;
    };
    subdomain?: (tLink & { color: string }) | false;
  };
};
