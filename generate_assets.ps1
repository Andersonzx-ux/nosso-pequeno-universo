# Script to generate elegant aesthetic SVG illustrations
$imagesDir = "C:\Users\Anderson\.gemini\antigravity-ide\scratch\nosso-pequeno-universo\assets\images"

function Save-Svg($name, $content) {
    $path = Join-Path $imagesDir $name
    [System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
}

# Memory 2: Sunset / Park
Save-Svg "placeholder-memory-2.svg" @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <defs>
    <linearGradient id="sunsetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#F7D9C4"/>
      <stop offset="50%" stop-color="#F2B5B8"/>
      <stop offset="100%" stop-color="#6B2D38"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="url(#sunsetGrad)" rx="16"/>
  <!-- Sun -->
  <circle cx="200" cy="140" r="50" fill="#FFF275" opacity="0.9"/>
  <!-- Gentle hills -->
  <path d="M0,230 Q100,180 200,210 Q300,240 400,200 L400,300 L0,300 Z" fill="#4A1521" opacity="0.8"/>
  <path d="M0,250 Q150,220 280,240 Q350,250 400,240 L400,300 L0,300 Z" fill="#2D1117"/>
  <!-- Couple silhouette sitting -->
  <circle cx="193" cy="192" r="7" fill="#FDF8F5"/>
  <path d="M188,199 Q193,215 190,225" stroke="#FDF8F5" stroke-width="6" stroke-linecap="round"/>
  <circle cx="207" cy="194" r="6.5" fill="#FDF8F5"/>
  <path d="M212,200 Q207,215 210,225" stroke="#FDF8F5" stroke-width="5" stroke-linecap="round"/>
  <!-- Golden sparkle -->
  <polygon points="120,70 124,78 132,82 124,86 120,94 116,86 108,82 116,78" fill="#FFF9A6"/>
  <polygon points="280,60 283,67 290,70 283,73 280,80 277,73 270,70 277,67" fill="#FFF9A6"/>
  <text x="200" y="275" font-family="'Playfair Display', Georgia, serif" font-size="15" fill="#FDF8F5" text-anchor="middle">O Nosso Pôr do Sol</text>
</svg>
"@

# Memory 3: Rain & Umbrella
Save-Svg "placeholder-memory-3.svg" @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <defs>
    <linearGradient id="rainBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E9ECEF"/>
      <stop offset="100%" stop-color="#CED4DA"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="url(#rainBg)" rx="16"/>
  <!-- Raindrops -->
  <g stroke="#843B47" stroke-width="1.5" stroke-linecap="round" opacity="0.4">
    <line x1="80" y1="40" x2="60" y2="90"/>
    <line x1="140" y1="20" x2="120" y2="70"/>
    <line x1="280" y1="30" x2="260" y2="80"/>
    <line x1="330" y1="60" x2="310" y2="110"/>
    <line x1="100" y1="180" x2="80" y2="230"/>
    <line x1="320" y1="170" x2="300" y2="220"/>
  </g>
  <!-- Umbrella -->
  <path d="M120,130 Q200,60 280,130 Q250,120 220,130 Q200,120 180,130 Q150,120 120,130 Z" fill="#843B47"/>
  <path d="M200,60 L200,175 C200,185 190,188 185,183" fill="none" stroke="#52202A" stroke-width="5" stroke-linecap="round"/>
  <!-- Mini hearts under umbrella -->
  <path d="M190,135 C186,130 180,133 182,138 L190,146 L198,138 C200,133 194,130 190,135 Z" fill="#D49A9E"/>
  <path d="M210,140 C206,135 200,138 202,143 L210,151 L218,143 C220,138 214,135 210,140 Z" fill="#B33951"/>
  <text x="200" y="240" font-family="'Playfair Display', Georgia, serif" font-size="16" fill="#4A1521" text-anchor="middle">A Chuva Que Nos Uniu</text>
  <text x="200" y="265" font-family="sans-serif" font-size="12" fill="#6B4D57" text-anchor="middle">Rindo debaixo do temporal</text>
</svg>
"@

# Memory 4: Roadtrip / Starry horizon
Save-Svg "placeholder-memory-4.svg" @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <defs>
    <linearGradient id="nightSky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1B2038"/>
      <stop offset="60%" stop-color="#2B1B3D"/>
      <stop offset="100%" stop-color="#6B2D38"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="url(#nightSky)" rx="16"/>
  <!-- Stars -->
  <circle cx="60" cy="50" r="1.5" fill="#FFF"/>
  <circle cx="120" cy="30" r="2" fill="#FFEAA7"/>
  <circle cx="180" cy="65" r="1.5" fill="#FFF"/>
  <circle cx="270" cy="40" r="2.5" fill="#FFF"/>
  <circle cx="340" cy="70" r="1.5" fill="#FFEAA7"/>
  <circle cx="220" cy="20" r="2" fill="#FFF"/>
  <!-- Crescent Moon -->
  <path d="M310,35 A22,22 0 1 0 332,57 A18,18 0 1 1 310,35 Z" fill="#F6D887"/>
  <!-- Mountains -->
  <polygon points="40,210 140,140 230,220" fill="#20112A" opacity="0.9"/>
  <polygon points="180,220 290,130 380,220" fill="#14091A" opacity="0.9"/>
  <!-- Road winding -->
  <path d="M200,210 Q210,240 230,300 L170,300 Q190,240 200,210 Z" fill="#C5A059" opacity="0.8"/>
  <text x="200" y="270" font-family="'Playfair Display', Georgia, serif" font-size="15" fill="#FDF8F5" text-anchor="middle">Nossa Primeira Viagem</text>
</svg>
"@

# Recipes 1, 2, 3
for ($i=1; $i -le 3; $i++) {
    Save-Svg "placeholder-recipe-$i.svg" @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <rect width="400" height="300" fill="#FAF6F0" rx="16"/>
  <rect x="25" y="25" width="350" height="250" fill="#FFFDF9" stroke="#E8B4B8" stroke-width="2" rx="12"/>
  <circle cx="200" cy="115" r="55" fill="#F7EDE2"/>
  <g transform="translate(170, 85)" fill="#843B47">
    <path d="M12,25 C12,45 28,55 42,55 C56,55 72,45 72,25 Z"/>
    <rect x="25" y="55" width="34" height="6" rx="3"/>
    <path d="M40,5 Q42,15 38,25" stroke="#C5A059" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M48,8 Q50,18 46,25" stroke="#C5A059" stroke-width="3" fill="none" stroke-linecap="round"/>
  </g>
  <text x="200" y="205" font-family="'Playfair Display', Georgia, serif" font-size="16" fill="#6B2D38" text-anchor="middle" font-weight="600">Caderno de Receitas Afetivas</text>
  <text x="200" y="230" font-family="sans-serif" font-size="12" fill="#A89F91" text-anchor="middle">Amor, risadas e cafuné em doses generosas</text>
</svg>
"@
}

# Movies 1, 2, 3
for ($i=1; $i -le 3; $i++) {
    Save-Svg "placeholder-movie-$i.svg" @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 450" width="100%" height="100%">
  <defs>
    <linearGradient id="movBg$i" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2B1B3D"/>
      <stop offset="100%" stop-color="#0E1324"/>
    </linearGradient>
  </defs>
  <rect width="300" height="450" fill="url(#movBg$i)" rx="14"/>
  <rect x="15" y="15" width="270" height="420" fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-dasharray="6,4" rx="10"/>
  <!-- Film tape / Ticket star -->
  <circle cx="150" cy="160" r="60" fill="#6B2D38" opacity="0.6"/>
  <polygon points="150,120 159,145 186,145 164,162 172,188 150,172 128,188 136,162 114,145 141,145" fill="#D4AF37"/>
  <text x="150" y="270" font-family="'Playfair Display', Georgia, serif" font-size="18" fill="#FFFDF9" text-anchor="middle" font-weight="bold">CINE CASAL</text>
  <text x="150" y="300" font-family="sans-serif" font-size="13" fill="#E8B4B8" text-anchor="middle">Sessão Exclusiva a Dois</text>
  <text x="150" y="340" font-family="sans-serif" font-size="11" fill="#C5A059" text-anchor="middle">★★★★★ Obra Prima do Coração</text>
  <rect x="70" y="370" width="160" height="28" rx="14" fill="#6B2D38"/>
  <text x="150" y="388" font-family="sans-serif" font-size="11" fill="#FFFDF9" text-anchor="middle" font-weight="bold">ENTRADA VIP LIBERADA</text>
</svg>
"@
}

# Letters 1, 2, 3, 4
for ($i=1; $i -le 4; $i++) {
    Save-Svg "placeholder-letter-$i.svg" @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <rect width="400" height="300" fill="#FAF6F0" rx="14"/>
  <rect x="40" y="40" width="320" height="220" fill="#FFFDF9" stroke="#E8B4B8" stroke-width="1.5" rx="8"/>
  <!-- Envelope flap lines -->
  <polygon points="40,40 200,160 360,40" fill="#FDF6F7" stroke="#D49A9E" stroke-width="1.5"/>
  <!-- Wax seal -->
  <circle cx="200" cy="160" r="26" fill="#843B47"/>
  <circle cx="200" cy="160" r="22" fill="#6B2D38"/>
  <path d="M200,150 C197,146 191,146 188,150 C185,154 185,158 188,162 L200,172 L212,162 C215,158 215,154 212,150 C209,146 203,146 200,150 Z" fill="#D4AF37"/>
  <text x="200" y="235" font-family="'Playfair Display', Georgia, serif" font-size="15" fill="#6B2D38" text-anchor="middle">Carta Feita com Carinho</text>
</svg>
"@
}

# Capsules 1, 2
for ($i=1; $i -le 2; $i++) {
    Save-Svg "placeholder-capsule-$i.svg" @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <defs>
    <linearGradient id="capBg$i" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1B2038"/>
      <stop offset="100%" stop-color="#4A6B82"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="url(#capBg$i)" rx="14"/>
  <!-- Capsule body -->
  <rect x="130" y="80" width="140" height="130" rx="70" fill="none" stroke="#C5A059" stroke-width="4"/>
  <path d="M130,145 L270,145" stroke="#C5A059" stroke-width="3" stroke-dasharray="4,4"/>
  <circle cx="200" cy="115" r="20" fill="#C5A059" opacity="0.3"/>
  <!-- Padlock -->
  <rect x="190" y="140" width="20" height="18" rx="3" fill="#D4AF37"/>
  <path d="M194,140 L194,133 C194,129 206,129 206,133 L206,140" fill="none" stroke="#D4AF37" stroke-width="3"/>
  <text x="200" y="245" font-family="'Playfair Display', Georgia, serif" font-size="16" fill="#FDF8F5" text-anchor="middle">Cápsula do Futuro</text>
  <text x="200" y="268" font-family="sans-serif" font-size="12" fill="#D4AF37" text-anchor="middle">Aguardando a data perfeita</text>
</svg>
"@
}

# Museum 1, 2, 3, 4
for ($i=1; $i -le 4; $i++) {
    Save-Svg "placeholder-museum-$i.svg" @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <rect width="400" height="300" fill="#F5EFEB" rx="14"/>
  <!-- Ornate Golden Frame -->
  <rect x="50" y="30" width="300" height="200" fill="#FFFDF9" stroke="#C5A059" stroke-width="10" rx="4"/>
  <rect x="60" y="40" width="280" height="180" fill="#FBF5F2" stroke="#843B47" stroke-width="2"/>
  <!-- Museum art content -->
  <circle cx="200" cy="120" r="45" fill="#E8B4B8" opacity="0.8"/>
  <polygon points="200,90 206,108 225,108 210,120 216,138 200,126 184,138 190,120 175,108 194,108" fill="#6B2D38"/>
  <!-- Brass Plaque below -->
  <rect x="120" y="245" width="160" height="30" rx="4" fill="#D4AF37" stroke="#A67C1E" stroke-width="1.5"/>
  <text x="200" y="265" font-family="'Playfair Display', Georgia, serif" font-size="12" fill="#2B1B3D" text-anchor="middle" font-weight="bold">OBRA DE ARTE #$i</text>
</svg>
"@
}

# Stars 1, 2, 3, 4, 5
for ($i=1; $i -le 5; $i++) {
    Save-Svg "placeholder-star-$i.svg" @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%">
  <rect width="300" height="300" fill="#0E1324" rx="14"/>
  <circle cx="150" cy="150" r="90" fill="#2B1B3D" opacity="0.5"/>
  <circle cx="150" cy="150" r="60" fill="#6B2D38" opacity="0.4"/>
  <!-- Glowing star -->
  <polygon points="150,70 160,130 220,150 160,170 150,230 140,170 80,150 140,130" fill="#FFFDF9"/>
  <circle cx="150" cy="150" r="14" fill="#D4AF37"/>
  <text x="150" y="265" font-family="'Playfair Display', Georgia, serif" font-size="15" fill="#F4D6D8" text-anchor="middle">Estrela da Memória</text>
</svg>
"@
}

Write-Output "SVG assets generated successfully!"
