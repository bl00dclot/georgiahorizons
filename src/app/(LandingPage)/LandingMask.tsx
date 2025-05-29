// components/SvgMaskDefinitions.tsx
import React from 'react';

const MaskDef: React.FC = () => (
  <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }}>
    <defs>
      {/* Previous mask examples (circle, star, etc.) can remain here */}
      <mask id="circleMask" maskContentUnits="objectBoundingBox">
        <circle cx="0.5" cy="0.5" r="0.5" fill="white" />
      </mask>
      <mask id="landingShapeMask" maskContentUnits="objectBoundingBox">
        <svg
          viewBox="0 0 338.66666 190.5" // Original viewBox from your LandingMask
          x="0" // Relative to objectBoundingBox (0 to 1)
          y="0" // Relative to objectBoundingBox (0 to 1)
          width="1" // Fills 100% width of the objectBoundingBox
          height="1" // Fills 100% height of the objectBoundingBox
          preserveAspectRatio="none" // Stretches to fill, or choose another like "xMidYMid meet"
        >
          <path
            style={{ fill: 'white', fillOpacity: 1, fillRule: 'evenodd' }} // strokeWidth might not be needed for a mask fill
            d="M 0,169.14331 V 190.5 H 46.460213 C 20.731063,190.49887 0.01675584,180.97551 0,169.14331 Z m 338.66666,0.006 c -0.0237,11.82945 -20.73589,21.34947 -46.46073,21.3506 h 46.46073 z"
          />
        </svg>
      </mask>
      <mask id="landingShapeMask2" maskContentUnits="objectBoundingBox">
        <svg
          viewBox="0 0 338.66666 190.5" // Original viewBox from your LandingMask
          x="0" // Relative to objectBoundingBox (0 to 1)
          y="0" // Relative to objectBoundingBox (0 to 1)
          width="1" // Fills 100% width of the objectBoundingBox
          height="1" // Fills 100% height of the objectBoundingBox
          preserveAspectRatio="none" // Stretches to fill, or choose another like "xMidYMid meet"
        >
          <path
            style={{ fill: 'white', fillOpacity: 1, fillRule: 'evenodd' }} // strokeWidth might not be needed for a mask fill
            d="M 0 0 L 0 169.14316 C 0.01675584 180.97536 20.731063 190.49887 46.460213 190.5 L 292.20593 190.5 C 317.92956 190.49887 338.64101 180.97959 338.66666 169.15091 L 338.66666 0 L 0 0 z "
          />
        </svg>
      </mask>
    </defs>
  </svg>
);

export default MaskDef;


