/* Sirko Dev Studio — one-page non-profit web studio site */
const {
  useState,
  useEffect,
  useRef
} = React;

/* ───────────────────────── Design tokens ───────────────────────── */
const PALETTES = {
  Ginger: {
    accent: '#D8843E',
    accentDeep: '#B8662A',
    light: {
      paper: '#FBF6EE',
      surface: '#FFFDF9',
      ink: '#2B231A',
      muted: '#6E6253',
      line: '#E7DCCB'
    },
    dark: {
      paper: '#1B1711',
      surface: '#241F18',
      ink: '#F3E9DA',
      muted: '#A99885',
      line: '#37302A'
    }
  },
  Toffee: {
    accent: '#BE7B43',
    accentDeep: '#97602F',
    light: {
      paper: '#F7EFE3',
      surface: '#FFFBF3',
      ink: '#2A2018',
      muted: '#6B5E4D',
      line: '#E4D6C2'
    },
    dark: {
      paper: '#1A1510',
      surface: '#241E16',
      ink: '#F1E7D7',
      muted: '#A6927C',
      line: '#332B20'
    }
  },
  Clay: {
    accent: '#CB6F4E',
    accentDeep: '#A95536',
    light: {
      paper: '#FAF2EA',
      surface: '#FFFCF6',
      ink: '#2C211B',
      muted: '#6E5C50',
      line: '#E8D8C9'
    },
    dark: {
      paper: '#1C1611',
      surface: '#271D17',
      ink: '#F4E8DD',
      muted: '#AC9384',
      line: '#352820'
    }
  }
};
const FONTS = {
  Editorial: {
    head: "'Newsreader', serif",
    body: "'Mulish', sans-serif",
    label: 'Newsreader · Mulish'
  },
  Modern: {
    head: "'Bricolage Grotesque', sans-serif",
    body: "'Hanken Grotesk', sans-serif",
    label: 'Bricolage · Hanken'
  },
  Classic: {
    head: "'Libre Baskerville', serif",
    body: "'Work Sans', sans-serif",
    label: 'Baskerville · Work Sans'
  }
};

/* ───────────────────────── Real photo ───────────────────────── */
function Photo({
  src,
  alt,
  ratio = '4 / 3',
  radius = 18,
  round = false,
  pos = 'center',
  zoom = 1,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: round ? '1 / 1' : ratio,
      borderRadius: round ? '50%' : radius,
      overflow: 'hidden',
      background: 'color-mix(in oklab, var(--accent) 10%, var(--surface))',
      border: '1px solid color-mix(in oklab, var(--accent) 16%, var(--line))',
      boxShadow: '0 18px 44px color-mix(in oklab, var(--ink) 16%, transparent)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: pos,
      transform: zoom !== 1 ? `scale(${zoom})` : undefined,
      transformOrigin: pos,
      display: 'block'
    }
  }));
}

/* ───────────────────────── Image placeholder ───────────────────────── */
function Placeholder({
  label,
  ratio = '4 / 3',
  radius = 18,
  round = false,
  style = {}
}) {
  const stripe = 'var(--accent)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: round ? '1 / 1' : ratio,
      borderRadius: round ? '50%' : radius,
      overflow: 'hidden',
      background: `repeating-linear-gradient(135deg, color-mix(in oklab, var(--accent) 9%, var(--surface)) 0 14px, color-mix(in oklab, var(--accent) 15%, var(--surface)) 14px 28px)`,
      border: '1px solid color-mix(in oklab, var(--accent) 22%, var(--line))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
      fontSize: 11.5,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--accent-deep)',
      background: 'color-mix(in oklab, var(--surface) 80%, transparent)',
      padding: '5px 10px',
      borderRadius: 999,
      border: '1px solid color-mix(in oklab, var(--accent) 25%, transparent)'
    }
  }, label));
}

/* ───────────────────────── Nav ───────────────────────── */
function Nav() {
  const link = {
    textDecoration: 'none',
    color: 'var(--ink)',
    fontSize: 15,
    fontWeight: 500,
    opacity: .82
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'color-mix(in oklab, var(--paper) 82%, transparent)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw)',
      margin: '0 auto',
      padding: '0 28px',
      height: 70,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      textDecoration: 'none',
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 9,
      background: 'var(--accent)',
      display: 'grid',
      placeItems: 'center',
      boxShadow: '0 2px 8px color-mix(in oklab, var(--accent) 45%, transparent)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: '#fff',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      position: 'absolute',
      top: -3,
      left: -1,
      width: 5,
      height: 7,
      background: '#fff',
      borderRadius: '60% 60% 0 0',
      transform: 'rotate(-22deg)'
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      position: 'absolute',
      top: -3,
      right: -1,
      width: 5,
      height: 7,
      background: '#fff',
      borderRadius: '60% 60% 0 0',
      transform: 'rotate(22deg)'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-head)',
      fontSize: 19,
      fontWeight: 600,
      letterSpacing: '-.01em'
    }
  }, "Sirko Dev Studio")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#portfolio",
    style: link,
    className: "navlink"
  }, "Portfolio"), /*#__PURE__*/React.createElement("a", {
    href: "#story",
    style: link,
    className: "navlink"
  }, "Our Story"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    style: {
      ...link,
      opacity: 1,
      padding: '9px 18px',
      borderRadius: 999,
      background: 'var(--accent)',
      color: '#fff',
      fontWeight: 600,
      boxShadow: '0 2px 10px color-mix(in oklab, var(--accent) 40%, transparent)'
    }
  }, "Start a project"))));
}

/* ───────────────────────── Hero ───────────────────────── */
function Kicker() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--accent-deep)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--accent)'
    }
  }), "A non-profit web studio");
}
function HeroCTAs() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    style: {
      textDecoration: 'none',
      background: 'var(--accent)',
      color: '#fff',
      fontWeight: 600,
      fontSize: 16,
      padding: '14px 26px',
      borderRadius: 999,
      boxShadow: '0 4px 16px color-mix(in oklab, var(--accent) 40%, transparent)'
    }
  }, "Get a free website"), /*#__PURE__*/React.createElement("a", {
    href: "#portfolio",
    style: {
      textDecoration: 'none',
      color: 'var(--ink)',
      fontWeight: 600,
      fontSize: 16,
      padding: '14px 26px',
      borderRadius: 999,
      border: '1px solid var(--line)',
      background: 'var(--surface)'
    }
  }, "See our work"));
}
function Hero({
  variant,
  tagline
}) {
  const headline = /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-head)',
      fontWeight: 600,
      letterSpacing: '-.02em',
      lineHeight: 1.04,
      margin: 0,
      fontSize: 'clamp(40px, 5.6vw, 74px)',
      textWrap: 'balance'
    }
  }, "Honest websites for the", /*#__PURE__*/React.createElement("br", null), "non\u2011profits doing the ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent-deep)'
    }
  }, "real work"), ".");
  const sub = /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(17px, 1.5vw, 20px)',
      lineHeight: 1.55,
      color: 'var(--muted)',
      maxWidth: 540,
      margin: '22px 0 0',
      textWrap: 'pretty'
    }
  }, tagline);
  if (variant === 'split') {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 'var(--maxw)',
        margin: '0 auto',
        padding: 'clamp(48px,7vw,96px) 28px clamp(40px,5vw,72px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.05fr .95fr',
        gap: 'clamp(32px,5vw,72px)',
        alignItems: 'center'
      },
      className: "hero-split"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, null), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, headline), sub, /*#__PURE__*/React.createElement(HeroCTAs, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      src: "assets/sirko-hero-wide.jpg",
      alt: "Sirko the corgi smiling in the grass",
      ratio: "4 / 5",
      radius: 24,
      pos: "center 56%"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: -16,
        left: -16,
        background: 'var(--surface)',
        border: '1px solid var(--line)',
        borderRadius: 14,
        padding: '12px 16px',
        boxShadow: '0 10px 30px color-mix(in oklab, var(--ink) 12%, transparent)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--muted)'
      }
    }, "Chief Morale Officer"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-head)',
        fontWeight: 600,
        fontSize: 17
      }
    }, "Sirko \uD83D\uDC3E")))));
  }
  if (variant === 'spotlight') {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        maxWidth: 920,
        margin: '0 auto',
        padding: 'clamp(56px,8vw,110px) 28px clamp(40px,5vw,72px)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 30
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 'clamp(180px,26vw,260px)'
      }
    }, /*#__PURE__*/React.createElement(Photo, {
      src: "assets/sirko-round.jpg",
      alt: "Sirko the corgi",
      round: true,
      pos: "center 36%"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(Kicker, null)), headline, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center'
      }
    }, sub), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(HeroCTAs, null)));
  }

  /* centered (default — matches the sketch) */
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 980,
      margin: '0 auto',
      padding: 'clamp(48px,7vw,92px) 28px clamp(40px,5vw,64px)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Kicker, null)), headline, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(HeroCTAs, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(40px,5vw,64px)'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: "assets/sirko-hero-wide.jpg",
    alt: "Sirko the corgi smiling in the grass",
    ratio: "16 / 9",
    radius: 24,
    pos: "center 56%"
  })));
}

/* ───────────────────────── Who we help ───────────────────────── */
const HELP = [{
  icon: '♥',
  title: 'Non‑profits & community groups',
  body: 'Food banks, shelters, rescues, youth programs — the people doing good who shouldn\u2019t have to choose between a website and their mission.'
}, {
  icon: '◇',
  title: 'Small businesses on a tight budget',
  body: 'The corner shop, the new freelancer, the family café. If a professional site is out of reach right now, that\u2019s exactly who we\u2019re here for.'
}];
function WhoWeHelp() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface)',
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw)',
      margin: '0 auto',
      padding: 'clamp(48px,6vw,84px) 28px'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Who we help",
    title: "A good website shouldn't be a luxury.",
    intro: "We work with the people who'd benefit most from being online \u2014 and can least afford it."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 24,
      marginTop: 40
    }
  }, HELP.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'flex-start',
      background: 'var(--paper)',
      border: '1px solid var(--line)',
      borderRadius: 18,
      padding: '26px 26px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 46,
      height: 46,
      borderRadius: 12,
      background: 'color-mix(in oklab, var(--accent) 16%, var(--surface))',
      color: 'var(--accent-deep)',
      display: 'grid',
      placeItems: 'center',
      fontSize: 21
    }
  }, h.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-head)',
      fontWeight: 600,
      fontSize: 20,
      margin: 0,
      letterSpacing: '-.01em'
    }
  }, h.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--muted)',
      margin: '9px 0 0',
      textWrap: 'pretty'
    }
  }, h.body)))))));
}

/* ───────────────────────── Portfolio ───────────────────────── */
const PROJECTS = [{
  name: 'Riverside Food Bank',
  tag: 'Community · 2025',
  blurb: 'A clear, mobile-first site so families can find meal hours and volunteers can sign up in seconds.'
}, {
  name: 'Kyiv Animal Rescue',
  tag: 'Animal welfare · 2025',
  blurb: 'Adoption listings, donation links, and foster forms — rebuilt to load fast on any connection.'
}, {
  name: 'Maple Street Bakery',
  tag: 'Small business · 2024',
  blurb: 'A warm one-pager for a family café — menu, hours, and directions, finally off a social-media-only presence.'
}];
function SectionHead({
  kicker,
  title,
  intro
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--accent-deep)'
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-head)',
      fontWeight: 600,
      letterSpacing: '-.02em',
      fontSize: 'clamp(30px,3.6vw,46px)',
      lineHeight: 1.08,
      margin: '14px 0 0',
      textWrap: 'balance'
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--muted)',
      margin: '16px 0 0',
      textWrap: 'pretty'
    }
  }, intro));
}
function Portfolio() {
  const [hover, setHover] = useState(-1);
  return /*#__PURE__*/React.createElement("section", {
    id: "portfolio",
    style: {
      maxWidth: 'var(--maxw)',
      margin: '0 auto',
      padding: 'clamp(56px,7vw,96px) 28px'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Portfolio",
    title: "Sites we've built, given freely.",
    intro: "A few of the non-profits and small businesses we've helped get online. Every site is fast, accessible, and theirs to keep."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 24,
      marginTop: 44
    }
  }, PROJECTS.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#contact",
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(-1),
    style: {
      textDecoration: 'none',
      color: 'var(--ink)',
      background: 'var(--surface)',
      border: '1px solid var(--line)',
      borderRadius: 20,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s',
      transform: hover === i ? 'translateY(-4px)' : 'none',
      boxShadow: hover === i ? '0 16px 40px color-mix(in oklab, var(--ink) 14%, transparent)' : '0 1px 2px color-mix(in oklab, var(--ink) 5%, transparent)',
      borderColor: hover === i ? 'color-mix(in oklab, var(--accent) 40%, var(--line))' : 'var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: `project ${i + 1} screenshot`,
    ratio: "16 / 11",
    radius: 12
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 22px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'var(--accent-deep)'
    }
  }, p.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-head)',
      fontWeight: 600,
      fontSize: 22,
      margin: '8px 0 0',
      letterSpacing: '-.01em'
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--muted)',
      margin: '10px 0 0'
    }
  }, p.blurb), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      marginTop: 16,
      fontSize: 14.5,
      fontWeight: 600,
      color: hover === i ? 'var(--accent-deep)' : 'var(--ink)',
      transition: 'color .2s'
    }
  }, "View case ", /*#__PURE__*/React.createElement("span", {
    style: {
      transform: hover === i ? 'translateX(3px)' : 'none',
      transition: 'transform .2s'
    }
  }, "\u2192")))))));
}

/* ───────────────────────── Story ───────────────────────── */
function Story() {
  return /*#__PURE__*/React.createElement("section", {
    id: "story",
    style: {
      background: 'var(--surface)',
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw)',
      margin: '0 auto',
      padding: 'clamp(56px,7vw,100px) 28px',
      display: 'grid',
      gridTemplateColumns: '.9fr 1.1fr',
      gap: 'clamp(32px,5vw,80px)',
      alignItems: 'center'
    },
    className: "story-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(360px, 100%)'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: "assets/sirko-story.jpg",
    alt: "Sirko the corgi napping",
    ratio: "4 / 5",
    radius: 22,
    pos: "42% 50%",
    zoom: 1.55
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 18,
      right: 'min(8%, 30px)',
      background: 'var(--accent)',
      color: '#fff',
      transform: 'rotate(4deg)',
      padding: '8px 14px',
      borderRadius: 12,
      fontFamily: 'var(--font-head)',
      fontWeight: 600,
      fontSize: 15,
      boxShadow: '0 8px 20px color-mix(in oklab, var(--accent) 45%, transparent)'
    }
  }, "he supervises \uD83D\uDC3E")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Why we do this",
    title: "Kindness is something you practice."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(17px,1.4vw,19px)',
      lineHeight: 1.7,
      color: 'var(--ink)',
      marginTop: 24,
      maxWidth: 600,
      textWrap: 'pretty'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 18px'
    }
  }, "I'm a Ukrainian software developer. By day I build software full-time \u2014 and on the side, I build websites for non-profits who can't afford one."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 18px'
    }
  }, "I grew up believing kindness isn't just something you talk about; it's something you do. Sirko Dev Studio is how I practice it: real, professional websites, given freely, so the organizations doing good can be found, trusted, and supported \u2014 while I keep sharpening my craft."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--muted)'
    }
  }, "And yes \u2014 Sirko is my corgi. He sits in on every project review.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 28,
      paddingTop: 24,
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: 'color-mix(in oklab, var(--accent) 18%, var(--surface))',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-head)',
      fontWeight: 600,
      color: 'var(--accent-deep)'
    }
  }, "S"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontFamily: 'var(--font-head)',
      fontSize: 16
    }
  }, "Sirko Dev Studio"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--muted)'
    }
  }, "One developer \xB7 One corgi \xB7 Many good causes"))))));
}

/* ───────────────────────── Contact ───────────────────────── */
function Field({
  label,
  type = 'text',
  textarea,
  value,
  onChange,
  error
}) {
  const base = {
    width: '100%',
    fontFamily: 'inherit',
    fontSize: 15.5,
    color: 'var(--ink)',
    background: 'var(--surface)',
    border: `1px solid ${error ? 'var(--accent)' : 'var(--line)'}`,
    borderRadius: 12,
    padding: '13px 15px',
    outline: 'none',
    transition: 'border-color .2s, box-shadow .2s'
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--muted)'
    }
  }, label), textarea ? /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    value: value,
    onChange: onChange,
    style: {
      ...base,
      resize: 'vertical'
    },
    onFocus: e => e.target.style.boxShadow = '0 0 0 3px color-mix(in oklab, var(--accent) 22%, transparent)',
    onBlur: e => e.target.style.boxShadow = 'none'
  }) : /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    onChange: onChange,
    style: base,
    onFocus: e => e.target.style.boxShadow = '0 0 0 3px color-mix(in oklab, var(--accent) 22%, transparent)',
    onBlur: e => e.target.style.boxShadow = 'none'
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--accent-deep)'
    }
  }, error));
}
function Contact() {
  const [f, setF] = useState({
    name: '',
    email: '',
    org: '',
    msg: ''
  });
  const [errs, setErrs] = useState({});
  const [sent, setSent] = useState(false);
  const upd = k => e => setF(s => ({
    ...s,
    [k]: e.target.value
  }));
  const submit = e => {
    e.preventDefault();
    const er = {};
    if (!f.name.trim()) er.name = 'Please add your name.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) er.email = 'Enter a valid email.';
    if (!f.msg.trim()) er.msg = 'Tell us a little about your project.';
    setErrs(er);
    if (Object.keys(er).length === 0) setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      maxWidth: 'var(--maxw)',
      margin: '0 auto',
      padding: 'clamp(56px,7vw,100px) 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.9fr 1.1fr',
      gap: 'clamp(32px,5vw,72px)'
    },
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Contact",
    title: "Run a non-profit or small business? Let's build.",
    intro: "Tell us what you do and what you need. If we're a fit, your website costs nothing."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      marginTop: 36
    }
  }, [{
    l: 'Email',
    v: 'hello@sirko.dev',
    h: 'mailto:hello@sirko.dev'
  }, {
    l: 'Based in',
    v: 'Remote · working with non-profits anywhere',
    h: null
  }, {
    l: 'Response time',
    v: 'Usually within a few days (it\u2019s a side project — with heart)',
    h: null
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'var(--accent-deep)'
    }
  }, r.l), r.h ? /*#__PURE__*/React.createElement("a", {
    href: r.h,
    style: {
      fontSize: 17,
      fontWeight: 600,
      textDecoration: 'none',
      fontFamily: 'var(--font-head)'
    }
  }, r.v) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--ink)'
    }
  }, r.v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--line)',
      borderRadius: 22,
      padding: 'clamp(24px,3vw,38px)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 300,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--accent)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: 26,
      marginBottom: 18,
      boxShadow: '0 8px 22px color-mix(in oklab, var(--accent) 45%, transparent)'
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-head)',
      fontSize: 24,
      margin: '0 0 8px'
    }
  }, "Message sent \u2014 thank you!"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted)',
      margin: 0,
      maxWidth: 340,
      lineHeight: 1.55
    }
  }, "We'll be in touch soon. Sirko sends his regards. \uD83D\uDC3E")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    },
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    },
    className: "form-row"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    value: f.name,
    onChange: upd('name'),
    error: errs.name
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    type: "email",
    value: f.email,
    onChange: upd('email'),
    error: errs.email
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Organization (optional)",
    value: f.org,
    onChange: upd('org')
  }), /*#__PURE__*/React.createElement(Field, {
    label: "What do you need?",
    textarea: true,
    value: f.msg,
    onChange: upd('msg'),
    error: errs.msg
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      marginTop: 4,
      appearance: 'none',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--accent)',
      color: '#fff',
      fontFamily: 'inherit',
      fontWeight: 700,
      fontSize: 16,
      padding: '15px',
      borderRadius: 12,
      boxShadow: '0 4px 16px color-mix(in oklab, var(--accent) 40%, transparent)',
      transition: 'filter .2s'
    },
    onMouseEnter: e => e.target.style.filter = 'brightness(1.05)',
    onMouseLeave: e => e.target.style.filter = 'none'
  }, "Send message")))));
}

/* ───────────────────────── Footer ───────────────────────── */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--line)',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--maxw)',
      margin: '0 auto',
      padding: '34px 28px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 7,
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-head)',
      fontWeight: 600,
      fontSize: 16
    }
  }, "Sirko Dev Studio")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: 'var(--muted)'
    }
  }, "\xA9 2026 \xB7 Made with kindness (and a corgi) in mind.")));
}

/* ───────────────────────── App + Tweaks ───────────────────────── */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "Ginger",
  "font": "Editorial",
  "hero": "split",
  "dark": false
} /*EDITMODE-END*/;
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useEffect(() => {
    const pal = PALETTES[t.palette] || PALETTES.Ginger;
    const mode = t.dark ? pal.dark : pal.light;
    const f = FONTS[t.font] || FONTS.Editorial;
    const r = document.documentElement.style;
    r.setProperty('--accent', pal.accent);
    r.setProperty('--accent-deep', pal.accentDeep);
    r.setProperty('--paper', mode.paper);
    r.setProperty('--surface', mode.surface);
    r.setProperty('--ink', mode.ink);
    r.setProperty('--muted', mode.muted);
    r.setProperty('--line', mode.line);
    r.setProperty('--font-head', f.head);
    r.setProperty('--font-body', f.body);
  }, [t.palette, t.font, t.dark]);
  return /*#__PURE__*/React.createElement("div", {
    id: "top"
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, {
    variant: t.hero,
    tagline: "Free & straightforward websites for the non\u2011profits and small businesses who can't afford one \u2014 just like us."
  }), /*#__PURE__*/React.createElement(WhoWeHelp, null), /*#__PURE__*/React.createElement(Portfolio, null), /*#__PURE__*/React.createElement(Story, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Hero layout"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Layout",
    value: t.hero,
    options: ['centered', 'split', 'spotlight'],
    onChange: v => setTweak('hero', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Palette"
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Warm tones",
    value: (PALETTES[t.palette] || PALETTES.Ginger).accent,
    options: [PALETTES.Ginger.accent, PALETTES.Toffee.accent, PALETTES.Clay.accent],
    onChange: hex => {
      const name = Object.keys(PALETTES).find(k => PALETTES[k].accent === hex) || 'Ginger';
      setTweak('palette', name);
    }
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Dark mode",
    value: t.dark,
    onChange: v => setTweak('dark', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Typography"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Font pairing",
    value: t.font,
    options: ['Editorial', 'Modern', 'Classic'],
    onChange: v => setTweak('font', v)
  })));
}

/* responsive: collapse two-column grids on small screens */
const __resp = document.createElement('style');
__resp.textContent = `
  @media (max-width: 860px){
    .hero-split, .story-grid, .contact-grid { grid-template-columns: 1fr !important; }
    .story-grid > div:first-child { max-width: 380px; }
  }
  @media (max-width: 520px){
    .form-row { grid-template-columns: 1fr !important; }
    nav .navlink { display:none; }
  }
  .navlink:hover { opacity: 1 !important; color: var(--accent-deep) !important; }
`;
document.head.appendChild(__resp);
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));