(() => {
  if (window.__STATUS_BADGES_INITIALIZED__) return;
  window.__STATUS_BADGES_INITIALIZED__ = true;
  const CONFIG = {
    ALLOWED_DOMAINS: ["grouvex.com", "ecosistema-de-grouvex-studios.github.io", "grouvex-github-io.pages.dev"],
  };

  // 0. Guardián de dominio configurable
  const hostActual = (window.location.hostname || "").toLowerCase();
  const esDominioAutorizado = CONFIG.ALLOWED_DOMAINS.some(
    (dominio) => hostActual === dominio || hostActual.endsWith(`.${dominio}`)
  );
  if (!esDominioAutorizado) return;
  // ==========================================================================
  // 1. ÚNICA FUENTE DE VERDAD (STATUS_CONFIG)
  // ==========================================================================
  const STATUS_CONFIG = {
	"warning": {
      label: "Advertencia",
      live: true,
      bg: "linear-gradient(135deg, #f59e0b 0%, #d97706 55%, #92400e 100%)",
      color: "#111827",
      borderColor: "rgba(254, 240, 138, 0.85)",
      shadow: "0 0 12px rgba(245, 158, 11, 0.55)",
      iconColor: "#111827",
      iconPath: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
      iconAnim: "iconPulse 1.8s infinite ease-in-out"
    },
    "important": {
      label: "Importante",
      live: true,
      bg: "linear-gradient(135deg, #ef4444 0%, #b91c1c 60%, #7f1d1d 100%)",
      borderColor: "rgba(254, 202, 202, 0.8)",
      shadow: "0 0 14px rgba(239, 68, 68, 0.65)",
      animation: "pulseSubtle 2.2s infinite ease-in-out",
      iconColor: "#fef2f2",
      iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
    },
    "new": {
      label: "Nuevo",
      bg: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)",
      shadow: "0 0 14px rgba(34, 197, 94, 0.5)",
      iconColor: "#dcfce7",
      iconPath: "M12 1L14.8 9.2L23 12L14.8 14.8L12 23L9.2 14.8L1 12L9.2 9.2L12 1Z",
      iconAnim: "iconPulse 1.8s infinite ease-in-out"
    },
    "free": {
      label: "Gratis",
      bg: "linear-gradient(135deg, #10b981 0%, #065f46 100%)",
      shadow: "0 0 12px rgba(16, 185, 129, 0.45)",
      iconPath: "M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"
    },
    "verified": {
      label: "Verificado",
      bg: "linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)",
      shadow: "0 0 12px rgba(6, 182, 212, 0.5)",
      iconColor: "#cffafe",
      iconPath: "M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"
    },
    "official": {
      label: "Oficial",
      bg: "linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)",
      borderColor: "rgba(147, 197, 253, 0.65)",
      shadow: "0 0 14px rgba(37, 99, 235, 0.55)",
      iconColor: "#dbeafe",
      iconPath: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm3.08 14.5L12 13.65 8.92 15.5l.82-3.51-2.72-2.36 3.59-.31L12 6l1.39 3.32 3.59.31-2.72 2.36.82 3.51z"
    },
    "unauthorized": {
      label: "Solo Agentes",
      bg: "linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)",
      borderColor: "rgba(252, 165, 165, 0.6)",
      shadow: "0 0 12px rgba(220, 38, 38, 0.55)",
      iconColor: "#fee2e2",
      iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 0 1 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0 1 20 12c0 4.42-3.58 8-8 8z"
    },
    "maintenance": {
      label: "En mantenimiento",
      live: true,
      bg: "repeating-linear-gradient(-45deg, #ea580c, #ea580c 8px, #c2410c 8px, #c2410c 16px)",
      borderColor: "rgba(253, 186, 116, 0.6)",
      textShadow: "0 1px 2px rgba(0, 0, 0, 0.7)",
      iconPath: "M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"
    },
    "updating": {
      label: "Actualizando",
      live: true,
      bg: "linear-gradient(90deg, #1e40af, #3b82f6, #06b6d4, #1e40af)",
      bgSize: "300% 100%",
      animation: "gradientFlow 3.5s linear infinite",
      shadow: "0 0 12px rgba(59, 130, 246, 0.5)",
      iconPath: "M12 2c4.2 2 5 7.2 4.3 13.5-.2 1.6-.7 3.2-1.1 4.5H8.8c-.4-1.3-.9-2.9-1.1-4.5C7 9.2 7.8 4 12 2zm0 5.8L8.5 11.3h2.2V16h2.6v-4.7h2.2L12 7.8zM6.4 13.8l-1.6 1.1c-.5.3-.8.9-.8 1.5v3.1l2.8-1.1c-.2-1.5-.3-3.1-.4-4.6zm11.2 0c-.1 1.5-.2 3.1-.4 4.6l2.8 1.1v-3.1c0-.6-.3-1.2-.8-1.5l-1.6-1.1z",
      iconAnim: "iconPulse 1.6s infinite ease-in-out"
    },
    "version": {
      label: "Versión",
      bg: "linear-gradient(135deg, rgb(99 102 241) 0%, rgb(217 70 239) 100%)",
      border: "1px solid rgba(125, 211, 252, 0.9)",
	  shadow: "inset 0 0 6px rgba(125, 211, 252, 0.45), 0 0 12px rgba(14, 165, 233, 0.55)",
      iconPath: "M12 1.5L2.5 7v10L12 22.5l9.5-5.5V7L12 1.5zM8.6 15.2L5.4 12l3.2-3.2 1.3 1.3L8 12l1.9 1.9-1.3 1.3zm2.5 1l-1.5-.5 2.3-7.9 1.5.5-2.3 7.9zm4.3-1l-1.3-1.3L16 12l-1.9-1.9 1.3-1.3 3.2 3.2-3.2 3.2z"
    },
    "early-access": {
      label: "Acceso anticipado",
      bg: "linear-gradient(135deg, #f59e0b 0%, #92400e 100%)",
      shadow: "0 0 12px rgba(245, 158, 11, 0.45)",
      iconPath: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
    },
    "upcoming": {
      label: "Próximamente",
      bg: "linear-gradient(135deg, #fef08a 0%, #eab308 100%)",
      color: "#111827",
      borderColor: "rgba(255, 255, 255, 0.7)",
      iconPath: "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"
    },
    "pre-order": {
      label: "Preventa",
      bg: "linear-gradient(135deg, #fde047 0%, #b45309 100%)",
      color: "#111827",
      shadow: "0 0 12px rgba(234, 179, 8, 0.55)",
      iconPath: "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-8.47-2.83l-2.83-2.83 1.41-1.41 1.42 1.42 4.24-4.24 1.41 1.41-5.65 5.65z"
    },
    "exclusive": {
      label: "Exclusivo",
      bg: "linear-gradient(135deg, #1e1b4b 0%, #581c87 50%, #1e1b4b 100%)",
      borderColor: "#e9d5ff",
      shadow: "0 0 14px rgba(192, 132, 252, 0.65)",
      animation: "pulseSubtle 2.8s infinite ease-in-out",
      shimmer: true,
      iconColor: "#f0abfc",
      iconPath: "M19 3H5L2 9l10 12L22 9l-3-6zM9.62 8l1.5-3h1.76l1.5 3H9.62zM11 10v6.68L5.44 10H11zm2 0h5.56L13 16.68V10zm6.26-2h-2.65l-1.5-3h2.65l1.5 3zM6.24 5h2.65l-1.5 3H4.74l1.5-3z"
    },
    "popular": {
      label: "Popular",
      bgColor: "#090d16",
      bg: `radial-gradient(1.5px 1.5px at 20% 30%, #ffffff, transparent),
           radial-gradient(1px 1px at 45% 70%, #fde047, transparent),
           radial-gradient(1.5px 1.5px at 75% 25%, #ffffff, transparent),
           radial-gradient(1px 1px at 85% 75%, #93c5fd, transparent),
           radial-gradient(1px 1px at 30% 80%, #ffffff, transparent),
           linear-gradient(135deg, #1e1b4b 0%, #7f1d1d 50%, #0f172a 100%)`,
      bgSize: "120% 120%",
      animation: "spaceDrift 6s ease-in-out infinite alternate",
      borderColor: "rgba(248, 113, 113, 0.75)",
      shadow: "0 0 14px rgba(239, 68, 68, 0.65)",
      textShadow: "0 1px 4px rgba(0, 0, 0, 0.95)",
      iconBg: "linear-gradient(180deg, #fef08a 0%, #f97316 60%, #ef4444 100%)",
      iconPath: "M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z",
      iconAnim: "flameFlicker 1.4s infinite alternate ease-in-out"
    },
    "recommended": {
      label: "Recomendado",
      bg: "linear-gradient(135deg, #2dd4bf 0%, #0f766e 100%)",
      shadow: "0 0 12px rgba(20, 184, 166, 0.45)",
      iconColor: "#ccfbf1",
      iconPath: "M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"
    },
    "limited-edition": {
      label: "Edición limitada",
      bg: "linear-gradient(135deg, #fef9c3 0%, #facc15 35%, #ca8a04 70%, #fef08a 100%)",
      color: "#111827",
      borderColor: "#ffffff",
      shadow: "0 0 16px rgba(250, 204, 21, 0.75)",
      shimmer: true,
      iconPath: "M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"
    },
    "on-sale": {
      label: "En oferta",
      bg: "linear-gradient(135deg, #f43f5e 0%, #be123c 100%)",
      shadow: "0 0 14px rgba(244, 63, 94, 0.65)",
      animation: "pulseSubtle 2s infinite ease-in-out",
      iconPath: "M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"
    },
    "classic": {
      label: "Clásico",
      bg: "linear-gradient(135deg, #cbd5e1 0%, #64748b 50%, #334155 100%)",
      borderColor: "rgba(255, 255, 255, 0.45)",
      textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
      iconPath: "M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"
    },
    "out-of-stock": {
      label: "Agotado",
      live: true,
      bg: "linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%)",
      color: "#fecaca",
      borderColor: "rgba(248, 113, 113, 0.3)",
      shadow: "none",
      iconPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3.59 11L14 15.41l-2-2-2 2L8.59 14l2-2-2-2L10 8.59l2 2 2-2L15.41 10l-2 2 2 2z"
    },
    "unavailable": {
      label: "No disponible",
      bg: "linear-gradient(135deg, #4b5563 0%, #1f2937 100%)",
      color: "#9ca3af",
      borderColor: "rgba(156, 163, 175, 0.25)",
      shadow: "none",
      iconPath: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
    },
    "deprecated": {
      label: "Obsoleto",
      bg: "#111827",
      color: "#6b7280",
      border: "1px solid #374151",
      shadow: "none",
      textDecoration: "line-through",
      iconPath: "M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"
    }
  };

  // ==========================================================================
  // 2. GENERADOR DINÁMICO DE CSS DESDE STATUS_CONFIG
  // ==========================================================================
  const BASE_CSS = `
    :root {
      --badge-radius: 50px;
      --badge-font-size: 0.65rem;
      --badge-padding: 4px 12px;
      --badge-gap: 6px;
      --badge-icon-size: 12px;
      --badge-glass-border: rgba(255, 255, 255, 0.28);
      --badge-inner-highlight: inset 0 1px 1px rgba(255, 255, 255, 0.45);
      --badge-drop-shadow: 0 3px 8px rgba(0, 0, 0, 0.28);
    }

    [data-status]:not([data-status-ready]) {
      visibility: hidden;
    }

    .status {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--badge-gap);
      padding: var(--badge-padding);
      margin-left: 10px;
      border-radius: var(--badge-radius);
      color: #ffffff;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: var(--badge-font-size);
      font-weight: 700;
      /* text-transform: uppercase; */
      letter-spacing: 0.7px;
      line-height: 1;
      white-space: nowrap;
      vertical-align: middle;
      position: relative;
      overflow: hidden;
      user-select: none;
      border: 1px solid var(--badge-glass-border);
      box-shadow: var(--badge-inner-highlight), var(--badge-drop-shadow);
      transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.2s ease;
    }

    .status-text {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .status font {
      display: inline !important;
      background: transparent !important;
      box-shadow: none !important;
      color: inherit !important;
      font: inherit !important;
      letter-spacing: inherit !important;
      text-transform: inherit !important;
      text-decoration: inherit !important;
      line-height: inherit !important;
      vertical-align: baseline !important;
      padding: 0 !important;
      margin: 0 !important;
    }

    .status[data-size="sm"] {
      --badge-font-size: 0.58rem;
      --badge-padding: 3px 9px;
      --badge-gap: 4px;
      --badge-icon-size: 10px;
    }
    .status[data-size="lg"] {
      --badge-font-size: 0.75rem;
      --badge-padding: 6px 15px;
      --badge-gap: 7px;
      --badge-icon-size: 14px;
    }

    .status[data-mode="icon-only"] {
      padding: 5px;
      gap: 0;
    }

    .status:hover {
      transform: translateY(-2px) scale(1.03);
      filter: brightness(1.08);
    }

    .status::before {
      content: "";
      width: var(--badge-icon-size);
      height: var(--badge-icon-size);
      flex-shrink: 0;
      background-color: currentColor;
      -webkit-mask-size: contain;
      mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-position: center;
      mask-position: center;
    }

    @keyframes iconPulse {
      0%, 100% { transform: scale(0.9); opacity: 0.75; }
      50% { transform: scale(1.2); opacity: 1; }
    }
    @keyframes flameFlicker {
      0% { transform: scale(0.95) translateY(0.5px); filter: brightness(0.95); }
      100% { transform: scale(1.12) translateY(-0.5px); filter: brightness(1.2); }
    }
    @keyframes pulseSubtle {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.04); }
    }
    @keyframes gradientFlow {
      0% { background-position: 0% 50%; }
      100% { background-position: 300% 50%; }
    }
    @keyframes shimmer {
      0% { left: -120%; }
      30%, 100% { left: 220%; }
    }
    @keyframes spaceDrift {
      0% { background-position: 0% 0%; }
      100% { background-position: 100% 100%; }
    }
    @media (prefers-reduced-motion: reduce) {
      .status, .status::before, .status::after {
        animation: none !important;
        transition: none !important;
      }
    }
  `;

  function buildDynamicCSS() {
    let css = BASE_CSS;
    const shimmerSelectors = [];

    for (const [key, cfg] of Object.entries(STATUS_CONFIG)) {
      const rules = [];
      if (cfg.bgColor)        rules.push(`background-color: ${cfg.bgColor};`);
      if (cfg.bg)             rules.push(`background-image: ${cfg.bg};`);
      if (cfg.bgSize)         rules.push(`background-size: ${cfg.bgSize};`);
      if (cfg.color)          rules.push(`color: ${cfg.color};`);
      if (cfg.border)         rules.push(`border: ${cfg.border};`);
      if (cfg.borderColor)    rules.push(`border-color: ${cfg.borderColor};`);
      if (cfg.textShadow)     rules.push(`text-shadow: ${cfg.textShadow};`);
      if (cfg.textDecoration) rules.push(`text-decoration: ${cfg.textDecoration};`);
      if (cfg.animation)      rules.push(`animation: ${cfg.animation};`);

      if (cfg.shadow === "none") {
        rules.push("box-shadow: none;");
      } else if (cfg.shadow) {
        rules.push(`box-shadow: var(--badge-inner-highlight), ${cfg.shadow};`);
      }

      if (rules.length) {
        css += `.status.${key} { ${rules.join(" ")} }\n`;
      }

      if (cfg.iconPath) {
        const svgUrl = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='${cfg.iconPath}'/%3E%3C/svg%3E")`;
        const iconRules = [
          `-webkit-mask-image: ${svgUrl};`,
          `mask-image: ${svgUrl};`
        ];
        if (cfg.iconColor) iconRules.push(`background-color: ${cfg.iconColor};`);
        if (cfg.iconBg)    iconRules.push(`background: ${cfg.iconBg};`);
        if (cfg.iconAnim)  iconRules.push(`animation: ${cfg.iconAnim};`);

        css += `.status.${key}::before { ${iconRules.join(" ")} }\n`;
      }

      if (cfg.shimmer) {
        shimmerSelectors.push(`.status.${key}::after`);
      }
    }

    if (shimmerSelectors.length) {
      css += `
        ${shimmerSelectors.join(", ")} {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 55%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.65), transparent);
          transform: skewX(-25deg);
          animation: shimmer 4s infinite;
          pointer-events: none;
        }
      `;
    }

    return css;
  }

  function injectStyles() {
    let styleEl = document.getElementById("status-badges-styles");
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = "status-badges-styles";
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = buildDynamicCSS();
  }

  // ==========================================================================
  // 3. RENDERIZADO Y ESCUCHA CONDICIONAL POR data-rendered-mode
  // ==========================================================================
  const processedElements = new WeakMap();

  function renderBadge(el, forceUpdate = false) {
    const statusKey = (el.dataset.status || "").trim();

    if (!statusKey) {
      el.classList.remove("status", ...Object.keys(STATUS_CONFIG));
      delete el.dataset.statusReady;
      el.removeAttribute("role");
      processedElements.delete(el);
      return;
    }

    const config = STATUS_CONFIG[statusKey];
    if (!config) {
      console.warn(`[StatusBadges] Estado desconocido: "${statusKey}"`, el);
      return;
    }

    const mode = (el.dataset.mode || "").trim();
    const prev = processedElements.get(el);

    // Si ya fue renderizado y no se está forzando una actualización dinámica, no se vuelve a tocar
    if (prev && !forceUpdate) {
      return;
    }

    // Si ya tiene el mismo estado y modo, tampoco tocamos el DOM interno
    if (prev && prev.status === statusKey && prev.mode === mode && el.querySelector(".status-text")) {
      return;
    }

    // Solo leemos el texto inicial en el primer renderizado
    const customText = prev ? prev.customText : el.textContent.trim();

    el.classList.remove(...Object.keys(STATUS_CONFIG));
    el.classList.add("status", statusKey);

    el.textContent = "";

    if (mode === "icon-only") {
      const a11yText = customText || config.label;
      el.setAttribute("aria-label", a11yText);
      if (!el.hasAttribute("title")) el.setAttribute("title", a11yText);
    } else {
      el.removeAttribute("aria-label");
      const wrapper = document.createElement("span");
      wrapper.className = "status-text";

      const baseSpan = document.createElement("span");
      baseSpan.textContent = config.label;

      if (!customText) {
        wrapper.appendChild(baseSpan);
      } else if (mode === "replace") {
        const customSpan = document.createElement("span");
        customSpan.textContent = customText;
        wrapper.appendChild(customSpan);
      } else if (mode === "prepend") {
        const customSpan = document.createElement("span");
        customSpan.textContent = customText;
        wrapper.append(customSpan, baseSpan);
      } else {
        // Por defecto (append)
        const customSpan = document.createElement("span");
        customSpan.textContent = customText;
        wrapper.append(baseSpan, customSpan);
      }

      el.appendChild(wrapper);
    }

    if (config.live) {
      el.setAttribute("role", "status");
    } else {
      el.removeAttribute("role");
    }

    processedElements.set(el, { status: statusKey, mode, customText });
    el.dataset.statusReady = "true";
  }

  function initBadges(root = document) {
    if (root.nodeType === Node.ELEMENT_NODE && root.hasAttribute("data-status")) {
      renderBadge(root, false);
    }
    root.querySelectorAll?.("[data-status]").forEach((el) => renderBadge(el, false));
  }

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        // Solo inicializa badges recién añadidos al DOM
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== "FONT") {
            initBadges(node);
          }
        });
      } else if (mutation.type === "attributes") {
        // SOLO lee y aplica cambios posteriores si el elemento tiene data-rendered-mode
        if (mutation.target.hasAttribute("data-rendered-mode")) {
          renderBadge(mutation.target, true);
        }
      }
    }
  });

  function start() {
    injectStyles();
    initBadges();
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-status", "data-mode"]
    });
  }

  injectStyles();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }

  // API pública
  window.StatusBadges = {
    refresh: initBadges,
    config: STATUS_CONFIG,
    setText(el, newText) {
      const prev = processedElements.get(el);
      if (prev) {
        prev.customText = (newText || "").trim();
        prev.status = null;
      }
      renderBadge(el, true);
    },
    register(key, definition) {
      STATUS_CONFIG[key] = definition;
      injectStyles();
      initBadges();
    },
    unregister(key) {
      delete STATUS_CONFIG[key];
      injectStyles();
      initBadges();
    }
  };
})();

/*
  ==========================================================================
  GUÍA DE USO: ETIQUETAS, MODOS Y TAMAÑOS
  ==========================================================================

  1. MODO POR DEFECTO (etiqueta vacía)
     Muestra únicamente el texto predefinido en STATUS_CONFIG.
     <span data-status="on-sale"></span>
     -> Resultado: [Icono] EN OFERTA

  2. MODO AÑADIR AL FINAL (escribiendo texto dentro, con o sin data-mode="append")
     Mantiene el texto predefinido y le suma el texto escrito dentro.
     <span data-status="on-sale">-50%</span>
     <span data-status="on-sale" data-mode="append">-50%</span>
     -> Resultado: [Icono] EN OFERTA -50%

  3. MODO PREFIJO (data-mode="prepend")
     Coloca el texto interno delante del texto predefinido.
     <span data-status="on-sale" data-mode="prepend">Últimas horas ·</span>
     -> Resultado: [Icono] ÚLTIMAS HORAS · EN OFERTA

  4. MODO SUSTITUIR (data-mode="replace")
     Reemplaza por completo el texto predefinido por el texto interno.
     <span data-status="on-sale" data-mode="replace">Oferta Flash</span>
     -> Resultado: [Icono] OFERTA FLASH

  5. MODO SOLO ICONO (data-mode="icon-only")
     Muestra únicamente el icono con aria-label y tooltip accesibles.
     <span data-status="verified" data-mode="icon-only"></span>

  6. TAMAÑOS OPCIONALES (data-size="sm" | "lg")
     <span data-status="new" data-size="sm"></span>
     <span data-status="new" data-size="lg"></span>

  --------------------------------------------------------------------------
  LISTADO COMPLETO DE ESTADOS DISPONIBLES:
  --------------------------------------------------------------------------
  <span data-status="new"></span>
  <span data-status="maintenance"></span>
  <span data-status="updating"></span>
  <span data-status="popular"></span>
  <span data-status="upcoming"></span>
  <span data-status="exclusive"></span>
  <span data-status="recommended"></span>
  <span data-status="classic"></span>
  <span data-status="on-sale"></span>
  <span data-status="limited-edition"></span>
  <span data-status="pre-order"></span>
  <span data-status="out-of-stock"></span>
  <span data-status="unavailable"></span>
  <span data-status="version"></span>
  <span data-status="early-access"></span>
  <span data-status="deprecated"></span>
  <span data-status="free"></span>
  <span data-status="verified"></span>
  <span data-status="official"></span>
  <span data-status="unauthorized"></span>
  <span data-status="warning"></span>
  <span data-status="important"></span>
*/
