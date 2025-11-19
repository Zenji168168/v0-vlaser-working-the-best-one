import React from "react"

export default function VlaserLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vlaser Logo"
    >
      {/* Circular White Background */}
      <circle cx="250" cy="250" r="240" fill="white" />

      {/* Circular Border */}
      <circle cx="250" cy="250" r="235" stroke="#8B3A3A" strokeWidth="6" fill="none" />

      {/* Dotted Sphere Pattern - Left Side */}
      <g fill="#8B3A3A">
        {/* Row 1 (Top) */}
        <circle cx="180" cy="80" r="8" />
        <circle cx="210" cy="75" r="9" />
        <circle cx="240" cy="75" r="8" />

        {/* Row 2 */}
        <circle cx="150" cy="100" r="9" />
        <circle cx="185" cy="100" r="11" />
        <circle cx="220" cy="98" r="12" />
        <circle cx="255" cy="100" r="10" />

        {/* Row 3 */}
        <circle cx="125" cy="125" r="10" />
        <circle cx="160" cy="125" r="13" />
        <circle cx="195" cy="125" r="14" />
        <circle cx="230" cy="125" r="14" />
        <circle cx="265" cy="128" r="12" />

        {/* Row 4 */}
        <circle cx="105" cy="155" r="11" />
        <circle cx="140" cy="155" r="14" />
        <circle cx="175" cy="155" r="16" />
        <circle cx="210" cy="155" r="16" />
        <circle cx="245" cy="158" r="14" />

        {/* Row 5 (Middle) */}
        <circle cx="90" cy="185" r="12" />
        <circle cx="125" cy="185" r="15" />
        <circle cx="160" cy="185" r="17" />
        <circle cx="195" cy="185" r="17" />
        <circle cx="230" cy="188" r="15" />

        {/* Row 6 */}
        <circle cx="80" cy="215" r="12" />
        <circle cx="115" cy="215" r="15" />
        <circle cx="150" cy="215" r="17" />
        <circle cx="185" cy="215" r="17" />
        <circle cx="220" cy="218" r="15" />

        {/* Row 7 */}
        <circle cx="75" cy="245" r="12" />
        <circle cx="110" cy="245" r="15" />
        <circle cx="145" cy="245" r="17" />
        <circle cx="180" cy="245" r="17" />
        <circle cx="215" cy="248" r="15" />

        {/* Row 8 */}
        <circle cx="75" cy="275" r="12" />
        <circle cx="110" cy="275" r="15" />
        <circle cx="145" cy="275" r="17" />
        <circle cx="180" cy="275" r="17" />
        <circle cx="215" cy="278" r="15" />

        {/* Row 9 */}
        <circle cx="80" cy="305" r="12" />
        <circle cx="115" cy="305" r="15" />
        <circle cx="150" cy="305" r="17" />
        <circle cx="185" cy="305" r="17" />
        <circle cx="220" cy="308" r="15" />

        {/* Row 10 */}
        <circle cx="90" cy="335" r="11" />
        <circle cx="125" cy="335" r="14" />
        <circle cx="160" cy="335" r="16" />
        <circle cx="195" cy="335" r="16" />
        <circle cx="230" cy="338" r="14" />

        {/* Row 11 */}
        <circle cx="105" cy="365" r="10" />
        <circle cx="140" cy="365" r="13" />
        <circle cx="175" cy="365" r="14" />
        <circle cx="210" cy="365" r="14" />
        <circle cx="245" cy="365" r="12" />

        {/* Row 12 */}
        <circle cx="125" cy="395" r="9" />
        <circle cx="160" cy="395" r="11" />
        <circle cx="195" cy="395" r="12" />
        <circle cx="230" cy="395" r="10" />

        {/* Row 13 (Bottom) */}
        <circle cx="150" cy="420" r="8" />
        <circle cx="185" cy="420" r="9" />
        <circle cx="220" cy="420" r="8" />
      </g>

      {/* Logo Text Group */}
      <g transform="translate(160, 170)">
        {/* The Vertical Bar of V (Grey) */}
        <path d="M0 0 L35 0 L35 130 L0 130 Z" fill="#4A4A4A" stroke="#C5A059" strokeWidth="3" />

        {/* The Diagonal Part of V + Underline (Black) */}
        <path
          d="M65 0 L100 0 L55 110 L300 110 L300 130 L35 130 L35 110 L65 0 Z"
          fill="black"
          stroke="#C5A059"
          strokeWidth="3"
        />

        {/* ASER Text */}
        <text
          x="85"
          y="95"
          fontFamily="Arial, sans-serif"
          fontWeight="900"
          fontSize="75"
          fill="black"
          stroke="#C5A059"
          strokeWidth="1.5"
        >
          ASER
        </text>

        {/* Subtitle */}
        <text x="55" y="160" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="24" textAnchor="start">
          <tspan fill="#0099CC">Technology </tspan>
          <tspan fill="#C5A059">Service </tspan>
          <tspan fill="#FF6699">Provider</tspan>
        </text>
      </g>
    </svg>
  )
}
