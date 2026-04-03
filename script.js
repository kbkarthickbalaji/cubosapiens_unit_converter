// ===== UNIT DATA =====
const categories = {
  length: {
    title: "Length Converter",
    desc: "Convert between metric and imperial length units",
    units: [
      { name: "Kilometre",   abbr: "km",   factor: 1000 },
      { name: "Metre",       abbr: "m",    factor: 1 },
      { name: "Centimetre",  abbr: "cm",   factor: 0.01 },
      { name: "Millimetre",  abbr: "mm",   factor: 0.001 },
      { name: "Micrometre",  abbr: "µm",   factor: 1e-6 },
      { name: "Nanometre",   abbr: "nm",   factor: 1e-9 },
      { name: "Mile",        abbr: "mi",   factor: 1609.344 },
      { name: "Yard",        abbr: "yd",   factor: 0.9144 },
      { name: "Foot",        abbr: "ft",   factor: 0.3048 },
      { name: "Inch",        abbr: "in",   factor: 0.0254 },
      { name: "Nautical Mile", abbr: "nmi", factor: 1852 },
      { name: "Light Year",  abbr: "ly",   factor: 9.461e15 },
    ],
    refs: [
      ["1 km", "=", "1,000 m"],
      ["1 m", "=", "100 cm"],
      ["1 cm", "=", "10 mm"],
      ["1 mile", "=", "1.60934 km"],
      ["1 yard", "=", "3 feet"],
      ["1 foot", "=", "12 inches"],
      ["1 inch", "=", "2.54 cm"],
    ]
  },

  weight: {
    title: "Weight Converter",
    desc: "Convert between different weight and force units",
    units: [
      { name: "Tonne (metric)", abbr: "t",   factor: 1000000 },
      { name: "Kilogram",  abbr: "kg",  factor: 1000 },
      { name: "Gram",      abbr: "g",   factor: 1 },
      { name: "Milligram", abbr: "mg",  factor: 0.001 },
      { name: "Microgram", abbr: "µg",  factor: 1e-6 },
      { name: "Pound",     abbr: "lb",  factor: 453.592 },
      { name: "Ounce",     abbr: "oz",  factor: 28.3495 },
      { name: "Stone",     abbr: "st",  factor: 6350.29 },
      { name: "US Ton",    abbr: "ton", factor: 907185 },
      { name: "Imperial Ton", abbr: "LT", factor: 1016050 },
      { name: "Carat",     abbr: "ct",  factor: 0.2 },
    ],
    refs: [
      ["1 kg", "=", "1,000 g"],
      ["1 g", "=", "1,000 mg"],
      ["1 tonne", "=", "1,000 kg"],
      ["1 pound", "=", "16 ounces"],
      ["1 stone", "=", "14 pounds"],
      ["1 kg", "=", "2.20462 lbs"],
      ["1 US ton", "=", "2,000 lbs"],
    ]
  },

  mass: {
    title: "Mass Converter",
    desc: "Scientific mass unit conversions",
    units: [
      { name: "Kilogram",    abbr: "kg",  factor: 1 },
      { name: "Gram",        abbr: "g",   factor: 0.001 },
      { name: "Milligram",   abbr: "mg",  factor: 1e-6 },
      { name: "Microgram",   abbr: "µg",  factor: 1e-9 },
      { name: "Tonne",       abbr: "t",   factor: 1000 },
      { name: "Atomic mass unit", abbr: "u", factor: 1.66054e-27 },
      { name: "Electron mass", abbr: "mₑ", factor: 9.10938e-31 },
      { name: "Slug",        abbr: "slug", factor: 14.5939 },
      { name: "Pound-mass",  abbr: "lbm", factor: 0.453592 },
    ],
    refs: [
      ["1 kg", "=", "1,000 g"],
      ["1 g", "=", "1,000 mg"],
      ["1 tonne", "=", "1,000 kg"],
      ["1 kg", "=", "2.20462 lbm"],
      ["1 slug", "=", "14.5939 kg"],
      ["1 u (amu)", "=", "1.66054 × 10⁻²⁷ kg"],
    ]
  },

  temperature: {
    title: "Temperature Converter",
    desc: "Convert between Celsius, Fahrenheit, Kelvin and more",
    units: [
      { name: "Celsius",    abbr: "°C" },
      { name: "Fahrenheit", abbr: "°F" },
      { name: "Kelvin",     abbr: "K"  },
      { name: "Rankine",    abbr: "°R" },
      { name: "Delisle",    abbr: "°De"},
      { name: "Newton",     abbr: "°N" },
      { name: "Réaumur",    abbr: "°Ré"},
      { name: "Rømer",      abbr: "°Rø"},
    ],
    refs: [
      ["0 °C", "=", "32 °F"],
      ["100 °C", "=", "212 °F"],
      ["0 °C", "=", "273.15 K"],
      ["°F", "=", "(°C × 9/5) + 32"],
      ["K", "=", "°C + 273.15"],
      ["-40 °C", "=", "-40 °F"],
    ]
  },

  volume: {
    title: "Volume Converter",
    desc: "Convert between litres, gallons, cubic units and more",
    units: [
      { name: "Cubic metre",    abbr: "m³",  factor: 1000 },
      { name: "Litre",          abbr: "L",   factor: 1 },
      { name: "Millilitre",     abbr: "mL",  factor: 0.001 },
      { name: "Cubic centimetre", abbr: "cm³", factor: 0.001 },
      { name: "Cubic inch",     abbr: "in³", factor: 0.0163871 },
      { name: "Cubic foot",     abbr: "ft³", factor: 28.3168 },
      { name: "Cubic yard",     abbr: "yd³", factor: 764.555 },
      { name: "US Gallon",      abbr: "gal", factor: 3.78541 },
      { name: "US Quart",       abbr: "qt",  factor: 0.946353 },
      { name: "US Pint",        abbr: "pt",  factor: 0.473176 },
      { name: "US Cup",         abbr: "cup", factor: 0.24 },
      { name: "US Fluid Ounce", abbr: "fl oz", factor: 0.0295735 },
      { name: "US Tablespoon",  abbr: "tbsp", factor: 0.0147868 },
      { name: "US Teaspoon",    abbr: "tsp", factor: 0.00492892 },
      { name: "Imperial Gallon", abbr: "imp gal", factor: 4.54609 },
      { name: "Imperial Pint",  abbr: "imp pt", factor: 0.568261 },
    ],
    refs: [
      ["1 L", "=", "1,000 mL"],
      ["1 m³", "=", "1,000 L"],
      ["1 US Gallon", "=", "4 Quarts"],
      ["1 Quart", "=", "2 Pints"],
      ["1 Pint", "=", "2 Cups"],
      ["1 Cup", "=", "8 fl oz"],
      ["1 Imp Gallon", "=", "1.201 US Gallons"],
    ]
  },

  area: {
    title: "Area Converter",
    desc: "Convert between square metres, acres, hectares and more",
    units: [
      { name: "Square kilometre", abbr: "km²",  factor: 1e6 },
      { name: "Hectare",          abbr: "ha",   factor: 10000 },
      { name: "Square metre",     abbr: "m²",   factor: 1 },
      { name: "Square decimetre", abbr: "dm²",  factor: 0.01 },
      { name: "Square centimetre", abbr: "cm²", factor: 0.0001 },
      { name: "Square millimetre", abbr: "mm²", factor: 1e-6 },
      { name: "Square mile",      abbr: "mi²",  factor: 2.59e6 },
      { name: "Acre",             abbr: "ac",   factor: 4046.86 },
      { name: "Square yard",      abbr: "yd²",  factor: 0.836127 },
      { name: "Square foot",      abbr: "ft²",  factor: 0.092903 },
      { name: "Square inch",      abbr: "in²",  factor: 0.00064516 },
    ],
    refs: [
      ["1 km²", "=", "1,000,000 m²"],
      ["1 ha", "=", "10,000 m²"],
      ["1 acre", "=", "4,046.86 m²"],
      ["1 mi²", "=", "640 acres"],
      ["1 m²", "=", "10.7639 ft²"],
      ["1 yd²", "=", "9 ft²"],
      ["1 ft²", "=", "144 in²"],
    ]
  },

  speed: {
    title: "Speed Converter",
    desc: "Convert between km/h, mph, knots, m/s and more",
    units: [
      { name: "Metre/second",     abbr: "m/s",  factor: 1 },
      { name: "Kilometre/hour",   abbr: "km/h", factor: 1/3.6 },
      { name: "Mile/hour",        abbr: "mph",  factor: 0.44704 },
      { name: "Foot/second",      abbr: "ft/s", factor: 0.3048 },
      { name: "Knot",             abbr: "kn",   factor: 0.514444 },
      { name: "Mach (sea level)", abbr: "Ma",   factor: 340.29 },
      { name: "Speed of Light",   abbr: "c",    factor: 299792458 },
      { name: "Kilometre/second", abbr: "km/s", factor: 1000 },
    ],
    refs: [
      ["1 km/h", "=", "0.62137 mph"],
      ["1 mph", "=", "1.60934 km/h"],
      ["1 knot", "=", "1.852 km/h"],
      ["1 m/s", "=", "3.6 km/h"],
      ["Mach 1", "≈", "340.29 m/s"],
      ["Speed of light", "=", "299,792 km/s"],
    ]
  },

  time: {
    title: "Time Converter",
    desc: "Convert between seconds, minutes, hours, days and more",
    units: [
      { name: "Second",      abbr: "s",   factor: 1 },
      { name: "Millisecond", abbr: "ms",  factor: 0.001 },
      { name: "Microsecond", abbr: "µs",  factor: 1e-6 },
      { name: "Nanosecond",  abbr: "ns",  factor: 1e-9 },
      { name: "Minute",      abbr: "min", factor: 60 },
      { name: "Hour",        abbr: "h",   factor: 3600 },
      { name: "Day",         abbr: "d",   factor: 86400 },
      { name: "Week",        abbr: "wk",  factor: 604800 },
      { name: "Month (avg)", abbr: "mo",  factor: 2629800 },
      { name: "Year",        abbr: "yr",  factor: 31557600 },
      { name: "Decade",      abbr: "dec", factor: 315576000 },
      { name: "Century",     abbr: "cen", factor: 3155760000 },
    ],
    refs: [
      ["1 min", "=", "60 seconds"],
      ["1 hour", "=", "60 minutes"],
      ["1 day", "=", "24 hours"],
      ["1 week", "=", "7 days"],
      ["1 year", "=", "365.25 days"],
      ["1 year", "=", "52 weeks"],
      ["1 decade", "=", "10 years"],
    ]
  },

  data: {
    title: "Data Storage Converter",
    desc: "Convert between bytes, kilobytes, megabytes, gigabytes and more",
    units: [
      { name: "Bit",       abbr: "b",   factor: 1/8 },
      { name: "Byte",      abbr: "B",   factor: 1 },
      { name: "Kilobyte",  abbr: "KB",  factor: 1024 },
      { name: "Megabyte",  abbr: "MB",  factor: 1048576 },
      { name: "Gigabyte",  abbr: "GB",  factor: 1073741824 },
      { name: "Terabyte",  abbr: "TB",  factor: 1.0995e12 },
      { name: "Petabyte",  abbr: "PB",  factor: 1.1259e15 },
      { name: "Exabyte",   abbr: "EB",  factor: 1.1529e18 },
      { name: "Kibibyte",  abbr: "KiB", factor: 1024 },
      { name: "Mebibyte",  abbr: "MiB", factor: 1048576 },
      { name: "Gibibyte",  abbr: "GiB", factor: 1073741824 },
      { name: "Tebibyte",  abbr: "TiB", factor: 1.0995e12 },
    ],
    refs: [
      ["1 KB", "=", "1,024 Bytes"],
      ["1 MB", "=", "1,024 KB"],
      ["1 GB", "=", "1,024 MB"],
      ["1 TB", "=", "1,024 GB"],
      ["1 Byte", "=", "8 Bits"],
      ["1 PB", "=", "1,024 TB"],
    ]
  },

  pressure: {
    title: "Pressure Converter",
    desc: "Convert between Pascal, bar, psi, atm and more",
    units: [
      { name: "Pascal",         abbr: "Pa",   factor: 1 },
      { name: "Kilopascal",     abbr: "kPa",  factor: 1000 },
      { name: "Megapascal",     abbr: "MPa",  factor: 1e6 },
      { name: "Bar",            abbr: "bar",  factor: 100000 },
      { name: "Millibar",       abbr: "mbar", factor: 100 },
      { name: "Atmosphere",     abbr: "atm",  factor: 101325 },
      { name: "PSI",            abbr: "psi",  factor: 6894.76 },
      { name: "Torr / mmHg",   abbr: "Torr", factor: 133.322 },
      { name: "Inch of Hg",    abbr: "inHg", factor: 3386.39 },
    ],
    refs: [
      ["1 atm", "=", "101,325 Pa"],
      ["1 bar", "=", "100,000 Pa"],
      ["1 psi", "=", "6,894.76 Pa"],
      ["1 atm", "=", "14.696 psi"],
      ["1 atm", "=", "760 Torr"],
      ["1 bar", "=", "0.9869 atm"],
    ]
  },

  energy: {
    title: "Energy Converter",
    desc: "Convert between joules, calories, kWh, BTU and more",
    units: [
      { name: "Joule",           abbr: "J",    factor: 1 },
      { name: "Kilojoule",       abbr: "kJ",   factor: 1000 },
      { name: "Megajoule",       abbr: "MJ",   factor: 1e6 },
      { name: "Calorie (small)", abbr: "cal",  factor: 4.184 },
      { name: "Kilocalorie",     abbr: "kcal", factor: 4184 },
      { name: "Watt-hour",       abbr: "Wh",   factor: 3600 },
      { name: "Kilowatt-hour",   abbr: "kWh",  factor: 3600000 },
      { name: "Megawatt-hour",   abbr: "MWh",  factor: 3.6e9 },
      { name: "BTU",             abbr: "BTU",  factor: 1055.06 },
      { name: "Electronvolt",    abbr: "eV",   factor: 1.60218e-19 },
      { name: "Foot-pound",      abbr: "ft·lbf", factor: 1.35582 },
      { name: "Therm",           abbr: "thm",  factor: 1.05506e8 },
    ],
    refs: [
      ["1 kJ", "=", "1,000 J"],
      ["1 kcal", "=", "4,184 J"],
      ["1 kWh", "=", "3,600,000 J"],
      ["1 BTU", "=", "1,055.06 J"],
      ["1 kcal", "=", "1,000 cal"],
      ["1 kWh", "=", "3,412 BTU"],
    ]
  },

  frequency: {
    title: "Frequency Converter",
    desc: "Convert between Hz, kHz, MHz, GHz and more",
    units: [
      { name: "Hertz",      abbr: "Hz",  factor: 1 },
      { name: "Kilohertz",  abbr: "kHz", factor: 1e3 },
      { name: "Megahertz",  abbr: "MHz", factor: 1e6 },
      { name: "Gigahertz",  abbr: "GHz", factor: 1e9 },
      { name: "Terahertz",  abbr: "THz", factor: 1e12 },
      { name: "RPM",        abbr: "rpm", factor: 1/60 },
      { name: "Radians/sec", abbr: "rad/s", factor: 1/(2*Math.PI) },
      { name: "Cycles/min", abbr: "cpm", factor: 1/60 },
    ],
    refs: [
      ["1 kHz", "=", "1,000 Hz"],
      ["1 MHz", "=", "1,000 kHz"],
      ["1 GHz", "=", "1,000 MHz"],
      ["1 THz", "=", "1,000 GHz"],
      ["60 RPM", "=", "1 Hz"],
      ["1 Hz", "=", "2π rad/s"],
    ]
  }
};

// ===== TEMPERATURE CONVERSIONS =====
function toC(val, unit) {
  switch (unit) {
    case "°C":  return val;
    case "°F":  return (val - 32) * 5/9;
    case "K":   return val - 273.15;
    case "°R":  return (val - 491.67) * 5/9;
    case "°De": return 100 - val * 2/3;
    case "°N":  return val * 100/33;
    case "°Ré": return val * 5/4;
    case "°Rø": return (val - 7.5) * 40/21;
    default: return val;
  }
}

function fromC(celsius, unit) {
  switch (unit) {
    case "°C":  return celsius;
    case "°F":  return celsius * 9/5 + 32;
    case "K":   return celsius + 273.15;
    case "°R":  return (celsius + 273.15) * 9/5;
    case "°De": return (100 - celsius) * 3/2;
    case "°N":  return celsius * 33/100;
    case "°Ré": return celsius * 4/5;
    case "°Rø": return celsius * 21/40 + 7.5;
    default: return celsius;
  }
}

// ===== STATE =====
let currentCat = "length";

// ===== DOM =====
const categoryNav    = document.getElementById("categoryNav");
const converterTitle = document.getElementById("converterTitle");
const converterDesc  = document.getElementById("converterDesc");
const fromValue      = document.getElementById("fromValue");
const toValue        = document.getElementById("toValue");
const fromUnit       = document.getElementById("fromUnit");
const toUnit         = document.getElementById("toUnit");
const swapBtn        = document.getElementById("swapBtn");
const resetBtn       = document.getElementById("resetBtn");
const copyBtn        = document.getElementById("copyBtn");
const resultText     = document.getElementById("resultText");
const refTable       = document.getElementById("refTable");
const unitsGrid      = document.getElementById("unitsGrid");
const themeToggle    = document.getElementById("themeToggle");
const themeIcon      = document.getElementById("themeIcon");

// ===== THEME =====
let isDark = true;
themeToggle.addEventListener("click", () => {
  isDark = !isDark;
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  themeIcon.textContent = isDark ? "☀" : "☾";
});

// ===== POPULATE SELECTS =====
function populateSelects(cat) {
  const units = categories[cat].units;
  fromUnit.innerHTML = "";
  toUnit.innerHTML   = "";
  units.forEach((u, i) => {
    const optF = new Option(`${u.name} (${u.abbr})`, u.abbr);
    const optT = new Option(`${u.name} (${u.abbr})`, u.abbr);
    fromUnit.add(optF);
    toUnit.add(optT);
  });
  // Default: first and second
  fromUnit.selectedIndex = 0;
  toUnit.selectedIndex   = 1;
}

// ===== CONVERT =====
function convert() {
  const cat = categories[currentCat];
  const val = parseFloat(fromValue.value);
  const fAbbr = fromUnit.value;
  const tAbbr = toUnit.value;

  if (isNaN(val)) {
    toValue.value = "";
    resultText.textContent = "Enter a value to convert";
    return;
  }

  let result;
  if (currentCat === "temperature") {
    const celsius = toC(val, fAbbr);
    result = fromC(celsius, tAbbr);
  } else {
    const fromFactor = cat.units.find(u => u.abbr === fAbbr).factor;
    const toFactor   = cat.units.find(u => u.abbr === tAbbr).factor;
    result = (val * fromFactor) / toFactor;
  }

  const formatted = formatResult(result);
  toValue.value = formatted;
  resultText.textContent = `${val} ${fAbbr} = ${formatted} ${tAbbr}`;
}

function formatResult(n) {
  if (n === 0) return "0";
  const abs = Math.abs(n);
  if (abs >= 1e15 || (abs < 1e-6 && abs > 0)) {
    return n.toExponential(6);
  }
  if (abs >= 1000) return parseFloat(n.toPrecision(10)).toLocaleString();
  return parseFloat(n.toPrecision(10)).toString();
}

// ===== QUICK REF TABLE =====
function buildRefTable(cat) {
  const refs = categories[cat].refs;
  refTable.innerHTML = `
    <thead>
      <tr>
        <th>Unit</th>
        <th style="text-align:center">Relation</th>
        <th>Equivalent</th>
      </tr>
    </thead>
    <tbody>
      ${refs.map(r => `<tr><td>${r[0]}</td><td style="text-align:center;color:var(--text-muted)">${r[1]}</td><td>${r[2]}</td></tr>`).join("")}
    </tbody>
  `;
}

// ===== UNITS GRID =====
function buildUnitsGrid(cat) {
  const units = categories[cat].units;
  unitsGrid.innerHTML = units.map((u, i) => `
    <div class="unit-pill" data-index="${i}" title="Click to set as From unit">
      <span class="unit-pill-name">${u.name}</span>
      <span class="unit-pill-abbr">${u.abbr}</span>
    </div>
  `).join("");

  unitsGrid.querySelectorAll(".unit-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const abbr = categories[cat].units[+pill.dataset.index].abbr;
      fromUnit.value = abbr;
      convert();
      fromValue.focus();
    });
  });
}

// ===== LOAD CATEGORY =====
function loadCategory(cat) {
  currentCat = cat;
  const data = categories[cat];
  converterTitle.textContent = data.title;
  converterDesc.textContent  = data.desc;
  populateSelects(cat);
  fromValue.value = "";
  toValue.value   = "";
  resultText.textContent = "Enter a value to convert";
  buildRefTable(cat);
  buildUnitsGrid(cat);
}

// ===== EVENTS =====
categoryNav.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    categoryNav.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    loadCategory(btn.dataset.cat);
  });
});

fromValue.addEventListener("input", convert);
fromUnit.addEventListener("change", convert);
toUnit.addEventListener("change", convert);

swapBtn.addEventListener("click", () => {
  const tmp = fromUnit.value;
  fromUnit.value = toUnit.value;
  toUnit.value = tmp;
  // Also swap values
  const tmpVal = fromValue.value;
  fromValue.value = toValue.value;
  convert();
});

resetBtn.addEventListener("click", () => {
  fromValue.value = "";
  toValue.value   = "";
  fromUnit.selectedIndex = 0;
  toUnit.selectedIndex   = 1;
  resultText.textContent = "Enter a value to convert";
});

copyBtn.addEventListener("click", () => {
  const text = resultText.textContent;
  if (text === "Enter a value to convert") return;
  navigator.clipboard.writeText(text).then(() => {
    copyBtn.classList.add("copied");
    copyBtn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
    setTimeout(() => {
      copyBtn.classList.remove("copied");
      copyBtn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy`;
    }, 2000);
  });
});

// Also convert when typing in result field is attempted (readonly, but for UX)
toValue.addEventListener("focus", () => toValue.blur());

// ===== INIT =====
loadCategory("length");
