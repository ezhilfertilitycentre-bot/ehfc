import React from 'react';

interface BabyHeartSymbolProps {
  size?: number;
  className?: string;
  ariaLabel?: string;
}

/**
 * Original SVG illustration — sleeping newborn baby cradled in a cupped hand,
 * with a heart symbol above, enclosed in a clean circular outline.
 *
 * Inspired by the client's reference image. 100% original vector paths —
 * no watermarks, no raster images, transparent background.
 *
 * Brand colours: magenta #B51B83 (fills & accents) · royal-blue #1538B8 (strokes)
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
    {/* ── Soft background wash ── */}
    <circle cx="50" cy="50" r="46" fill="#FFF0F8" opacity="0.7" />

    {/* ── Outer circle — main border ── */}
    <circle
      cx="50" cy="50" r="45"
      stroke="#B51B83"
      strokeWidth="2.2"
      fill="none"
      opacity="0.55"
    />
    {/* Inner ring — subtle royal blue */}
    <circle
      cx="50" cy="50" r="41"
      stroke="#1538B8"
      strokeWidth="1"
      fill="none"
      opacity="0.12"
    />

    {/* ══════════════════════════════════════════
        HEART  (top-centre)
        Classic double-lobe heart in magenta fill
        ══════════════════════════════════════════ */}
    <path
      d="M50 36
         C50 36 41.5 27.5 36.5 31.5
         C32 35 33 42 37.5 45
         C42 48 50 53.5 50 53.5
         C50 53.5 58 48 62.5 45
         C67 42 68 35 63.5 31.5
         C58.5 27.5 50 36 50 36Z"
      fill="#B51B83"
      opacity="0.88"
    />
    {/* Sheen highlight on heart */}
    <ellipse
      cx="43.5" cy="35"
      rx="3.5" ry="2.2"
      fill="white"
      opacity="0.32"
      transform="rotate(-25 43.5 35)"
    />

    {/* ══════════════════════════════════════════
        CUPPED HAND  (lower half)
        Gentle open palm cradling the baby
        ══════════════════════════════════════════ */}

    {/* Palm body fill */}
    <path
      d="M24 70
         C24 62 28 57.5 36 55.5
         C41 54.5 59 54.5 64 55.5
         C72 57.5 76 62 76 70
         C76 70 62 75 50 75
         C38 75 24 70 24 70Z"
      fill="#EBF0FF"
      opacity="0.7"
      stroke="#1538B8"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />

    {/* Left cupped finger */}
    <path
      d="M24 70 C19.5 63 20 54 27 50.5"
      stroke="#1538B8"
      strokeWidth="2.2"
      strokeLinecap="round"
      fill="none"
      opacity="0.72"
    />

    {/* Right cupped finger */}
    <path
      d="M76 70 C80.5 63 80 54 73 50.5"
      stroke="#1538B8"
      strokeWidth="2.2"
      strokeLinecap="round"
      fill="none"
      opacity="0.72"
    />

    {/* Wrist curve */}
    <path
      d="M29 74.5 C36 79.5 64 79.5 71 74.5"
      stroke="#1538B8"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
      opacity="0.5"
    />

    {/* ══════════════════════════════════════════
        SLEEPING BABY  (curled inside the hand)
        Head + body + closed eye + tiny smile
        ══════════════════════════════════════════ */}

    {/* Baby body — curled fetal pose */}
    <path
      d="M36 65
         C36 61 39.5 57.5 44 57.5
         C53 57.5 65 60 65 64.5
         C65 67.5 61 70.5 54 70.5
         C46 71 36 69 36 65Z"
      fill="#FDE8F4"
      stroke="#B51B83"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />

    {/* Baby head */}
    <circle
      cx="34.5" cy="62"
      r="7.5"
      fill="#FDE8F4"
      stroke="#B51B83"
      strokeWidth="1.7"
    />

    {/* Tiny ear */}
    <path
      d="M34.5 55 C37 53 40.5 54.5 40.5 57"
      stroke="#B51B83"
      strokeWidth="1.3"
      strokeLinecap="round"
      fill="none"
    />

    {/* Closed sleeping eye */}
    <path
      d="M30.5 61 C32 59.2 35 59.2 36.5 61"
      stroke="#B51B83"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Tiny nose */}
    <circle cx="33" cy="63.5" r="0.9" fill="#B51B83" opacity="0.65" />

    {/* Tiny peaceful smile */}
    <path
      d="M31.5 65.5 C32.8 67.2 35 67.2 36.2 65.5"
      stroke="#B51B83"
      strokeWidth="1.3"
      strokeLinecap="round"
      fill="none"
    />

    {/* Baby arm / little fist */}
    <path
      d="M40 61 C44 58.5 50 59 52 61.5 C53.5 63.5 51 66.5 48 66.5"
      stroke="#B51B83"
      strokeWidth="1.6"
      strokeLinecap="round"
      fill="none"
    />

    {/* Swaddle / blanket line */}
    <path
      d="M44 69.5 C49 71.5 57 71.5 63 68"
      stroke="#1538B8"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.38"
    />

    {/* ── Sparkle accents ── */}
    <circle cx="79" cy="33" r="1.8" fill="#B51B83" opacity="0.38" />
    <circle cx="83" cy="39" r="1.1" fill="#1538B8" opacity="0.28" />
    <circle cx="21" cy="37" r="1.8" fill="#B51B83" opacity="0.38" />
    <circle cx="17" cy="43" r="1.1" fill="#1538B8" opacity="0.28" />
  </svg>
);

export default BabyHeartSymbol;
