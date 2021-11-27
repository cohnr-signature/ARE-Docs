export default {
  "title": "Signature AR&E Documentation",
  "tagline": "Doing the work",
  "url": "https://aredocs.sigtheatre.org/",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "cohnr-signature",
  "projectName": "ARE-Docs",
  "trailingSlash": false,
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/robert-local/gitrepos/signature/are-docs/sidebars.js",
          "editUrl": "https://github.com/cohnr-signature/are-docs/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/cohnr-signature/are-docs/"
        },
        "theme": {
          "customCss": "/Users/robert-local/gitrepos/signature/are-docs/src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "style": "dark",
      "logo": {
        "alt": "Signature Logo",
        "src": "img/logo-primary.svg"
      },
      "items": [
        {
          "href": "https://github.com/cohnr-signature/are-docs",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "AR&E Docs",
          "items": [
            {
              "label": "Cultural Competency",
              "to": "/docs/WSYWAT/cultural-competency"
            },
            {
              "label": "Working Conditions & Hiring Practices",
              "to": "/docs/WSYWAT/working-conditions-hiring-practices"
            },
            {
              "label": "Artistic & Curatorial Practices",
              "to": "/docs/WSYWAT/artistic-and-curatorial-practices"
            },
            {
              "label": "Transparency",
              "to": "/docs/WSYWAT/transparency"
            },
            {
              "label": "Compensation",
              "to": "/docs/WSYWAT/compensation"
            },
            {
              "label": "Accountability & Boards",
              "to": "/docs/WSYWAT/accountability-and-boards"
            },
            {
              "label": "Funding & Resources",
              "to": "/docs/WSYWAT/funding-and-resources"
            },
            {
              "label": "Commercial Theatre & Broadway",
              "to": "/docs/WSYWAT/commercial-and-broadway"
            },
            {
              "label": "Unions",
              "to": "/docs/WSYWAT/unions"
            },
            {
              "label": "Press",
              "to": "/docs/WSYWAT/press"
            },
            {
              "label": "Academic & Professional Training Programs",
              "to": "/docs/WSYWAT/academic-and-professional-training-programs"
            }
          ]
        }
      ]
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};