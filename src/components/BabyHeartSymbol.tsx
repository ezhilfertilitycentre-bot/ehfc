import React from 'react';

interface BabyHeartSymbolProps {
  /** px size — width and height are equal (default 48) */
  size?: number;
  className?: string;
  /** Optional aria label override */
  ariaLabel?: string;
}

/**
 * Original SVG illustration — sleeping newborn baby cradled in a cupped hand,
 * with a heart symbol above, enclosed in a clean circular outline.
 *
 * Inspired by the client's reference image. 100 % original vector paths —
 * no watermarks, no raster images, transparent background.
 *
 * Brand colours: magenta #B51B83 (fill accents) · royal-blue #1538B8 (strokes)
 */
export const BabyHeartSymbol: React.FC<BabyHeartSymbolProps> = ({
  size = 48,
  className = '',
  ariaLabel = 'Ezhil Hospital — caring for new life',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label={ariaLabel}
    role="img"
    className={className}
    style={{ display: 'block' }}
  >
    {/* ── Outer circle border ── */}
    <circle
      cx="50"
      cy="50"
      r="46"
      stroke="#1538B8"
      strokeWidth="3"
      fill="none"
      opacity="0.18"
    />
    <circle
      cx="50"
      cy="50"
      r="43"
      stroke="#B51B83"
      strokeWidth="1.5"
      fill="none"
      opacity="0.14"
    />

    {/* ── Soft background fill (very light pink tint) ── */}
    <circle cx="50" cy="50" r="43" fill="#FDF0F7" opacity="0.55" />

    {/* ══════════════════════════════════════════
        HEART  (top-centre, above baby)
        Two bezier lobes forming a classic heart,
        partially open at bottom like the reference.
        ══════════════════════════════════════════ */}
    <path
      d="M50 35
         C50 35 42 27 37 31
         C33 34.5 34 41 38 44
         C42 47 50 52 50 52
         C50 52 58 47 62 44
         C66 41 67 34.5 63 31
         C58 27 50 35 50 35Z"
      fill="#B51B83"
      opacity="0.85"
    />
    {/* Heart inner sheen */}
    <ellipse cx="44" cy="34" rx="3" ry="2" fill="white" opacity="0.35" transform="rotate(-20 44 34)" />

    {/* ══════════════════════════════════════════
        CUPPED HAND  (centre-lower)
        A gentle curved palm cradling the baby.
        ══════════════════════════════════════════ */}

    {/* Palm / cup base */}
    <path
      d="M26 68
         C26 61 29 57 36 55
         C40 54 60 54 64 55
         C71 57 74 61 74 68
         C74 68 60 73 50 73
         C40 73 26 68 26 68Z"
      fill="#1538B8"
      opacity="0.13"
      stroke="#1538B8"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />

    {/* Left finger arc */}
    <path
      d="M26 68 C22 62 22 54 28 51"
      stroke="#1538B8"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      opacity="0.7"
    />

    {/* Right finger arc */}
    <path
      d="M74 68 C78 62 78 54 72 51"
      stroke="#1538B8"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      opacity="0.7"
    />

    {/* Wrist / lower palm curve */}
    <path
      d="M30 72 C35 77 65 77 70 72"
      stroke="#1538B8"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      opacity="0.55"
    />

    {/* ══════════════════════════════════════════
        SLEEPING BABY  (lying inside the hand)
        Head (circle) + body curve + arm + tiny ear
        ══════════════════════════════════════════ */}

    {/* Baby body — curled fetal pose */}
    <path
      d="M37 64
         C37 60 40 57 44 57
         C52 57 63 59 64 63
         C65 66 62 69 56 69
         C48 70 37 68 37 64Z"
      fill="#FDE8F4"
      stroke="#B51B83"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />

    {/* Baby head */}
    <circle
      cx="36"
      cy="61"
      r="7"
      fill="#FDE8F4"
      stroke="#B51B83"
      strokeWidth="1.6"
    />

    {/* Baby ear */}
    <path
      d="M36 55 C38 53 41 54 41 56"
      stroke="#B51B83"
      strokeWidth="1.2"
      strokeLinecap="round"
      fill="none"
    />

    {/* Closed sleeping eye — peaceful line */}
    <path
      d="M32 60 C33.5 58.5 35.5 58.5 37 60"
      stroke="#B51B83"
      strokeWidth="1.4"
      strokeLinecap="round"
      fill="none"
    />

    {/* Tiny nose dot */}
    <circle cx="34.5" cy="62.5" r="0.8" fill="#B51B83" opacity="0.7" />

    {/* Soft smile */}
    <path
      d="M33 64.5 C34.2 66 36 66 37 64.5"
      stroke="#B51B83"
      strokeWidth="1.2"
      strokeLinecap="round"
      fill="none"
    />

    {/* Baby arm / fist tucked under cheek */}
    <path
      d="M40 60 C43 58 48 58 50 60 C52 62 50 65 47 65"
      stroke="#B51B83"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Baby blanket / swaddle hint */}
    <path
      d="M44 68 C48 70 56 70 62 67"
      stroke="#1538B8"
      strokeWidth="1.4"
      strokeLinecap="round"
      fill="none"
      opacity="0.45"
    />

    {/* ── Subtle decorative sparkle dots ── */}
    <circle cx="78" cy="34" r="1.6" fill="#B51B83" opacity="0.4" />
    <circle cx="81" cy="39" r="1" fill="#1538B8" opacity="0.3" />
    <circle cx="22" cy="38" r="1.6" fill="#B51B83" opacity="0.4" />
    <circle cx="19" cy="43" r="1" fill="#1538B8" opacity="0.3" />
  </svg>
);

export default BabyHeartSymbol;
