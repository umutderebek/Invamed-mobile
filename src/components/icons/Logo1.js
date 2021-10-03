import * as React from 'react';
import Svg, {Image} from 'react-native-svg';

function SvgLogo1(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={391}
      height={55}
      className=""
      {...props}>
      <Image
        xlinkHref="data:image/png;base64,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"
        width={293.25}
        height={41.25}
        transform="scale(1.33333)"
      />
    </Svg>
  );
}

export default SvgLogo1;