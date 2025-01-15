import { SVGAttributes } from "react";

export {};
declare global {
  type tSVGFile = {
    attributes?: SVGAttributes<SVGElement>;
  };
}
