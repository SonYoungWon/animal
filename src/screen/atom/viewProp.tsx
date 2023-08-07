import {LOTTIE} from '../lottie';

export interface SvgProp {
  Image: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  size?: number;
}

export interface LottieProp {
  type: LOTTIE;
  width: number;
  height?: number;
  autoPlay?: boolean;
  speed?: number;
  loop?: boolean;
  autoSize?: boolean;
  style?: {};
}
