(function(self, ns){
    var GENERIC_BUNDLE_URL = "https://fast.appcues.com/generic/main/4.53.1/appcues.main.a34de36c2b1cabfbe8c60fb8bd83fcb1a49243bd.js";
    var ACCOUNT_DETAILS = {"GENERIC_BUNDLE_DOMAIN":"https://fast.appcues.com","GENERIC_BUNDLE_PATH":"/generic/main/4.53.1/appcues.main.a34de36c2b1cabfbe8c60fb8bd83fcb1a49243bd.js","RELEASE_ID":"a34de36c2b1cabfbe8c60fb8bd83fcb1a49243bd","VERSION":"4.53.1","account":{"buffer":0,"gates":{"enableCTTEventIntegrations":true,"enableClientSideEventIntegrations":false},"isTrial":false,"isTrialExpired":false,"skipAutoProperties":false,"stripQueryParams":null,"stripePlanId":"20533-growth-yearly"},"accountId":"87350","custom_events":[{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Hover - Sign-In and Create Account block","state":"ENABLED","targets":[{"event":"hover","selector":{"selector":".account-menu__show-sign-up"}}],"updatedAt":null,"updatedBy":null,"urls":["*"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Hover on Sign-In","state":"ENABLED","targets":[{"event":"hover","selector":{"selector":".account-menu__sign-in-button .cl-button__label"}}],"updatedAt":null,"updatedBy":null,"urls":["https://www.semanticscholar.org/"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Click View Additional Options","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".login-methods__view-more .cl-button__label"}}],"updatedAt":null,"updatedBy":null,"urls":["https://www.semanticscholar.org/"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Click Sign-In","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".account-menu__sign-in-button"}}],"updatedAt":null,"updatedBy":null,"urls":["https://www.semanticscholar.org/"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Input any text in search bar","state":"ENABLED","targets":[{"event":"input","selector":{"selector":".search-bar__input"}}],"updatedAt":null,"updatedBy":null,"urls":["*"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Search on any page","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".form-submit__icon-text .flex-row-vcenter"}}],"updatedAt":null,"updatedBy":null,"urls":["*"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Toggle Skimming On","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[data-selenium-selector=\"reader-skimming-toggle\"]"}}],"updatedAt":null,"updatedBy":null,"urls":["https://www.semanticscholar.org/reader/*"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Click Claim Author Page on AHP","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[data-heap-id=\"author_claim_button\"]"}}],"updatedAt":null,"updatedBy":null,"urls":["https://www.semanticscholar.org/author/*"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Research Dashboard - Not Relevant","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".cl-paper-annotations__not-relevant-button"}}],"updatedAt":null,"updatedBy":null,"urls":["https://www.semanticscholar.org/me/research"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Research Feed - Not Relevant","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".recommendations__list__day:nth-of-type(1) .cl-paper-annotations__not-relevant-button"}}],"updatedAt":null,"updatedBy":null,"urls":["*"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Research Feed - Save","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".recommendations__list__day:nth-of-type(1) .cl-paper-action__button-container:nth-of-type(2) .cl-paper-action__button--blue-outline"}}],"updatedAt":null,"updatedBy":null,"urls":["*"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Research Dashboard - View Your Research Feed","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[href=\"\\/me\\/recommendations\"] .cl-button__label"}}],"updatedAt":null,"updatedBy":null,"urls":["https://www.semanticscholar.org/me/research"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Research Dashboard - Save to library","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".cl-paper-actions:nth-child(4) .cl-paper-actions .cl-paper-action__button-container:nth-of-type(2) .cl-button--no-arrow-divider"}}],"updatedAt":null,"updatedBy":null,"urls":["https://www.semanticscholar.org/me/research"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:PDP - Semantic Reader","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[data-heap-id=\"semantic_reader_link\"]"}}],"updatedAt":null,"updatedBy":null,"urls":["https://www.semanticscholar.org/paper/*"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:PDP - Research Feed - add","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".flex-item:nth-of-type(4) .flex-row-centered"}}],"updatedAt":null,"updatedBy":null,"urls":["https://www.semanticscholar.org/paper/*"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:PDP - Create Alert","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[data-selenium-selector=\"create-alert-button\"] .flex-row-centered"}}],"updatedAt":null,"updatedBy":null,"urls":["https://www.semanticscholar.org/paper/*"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:PDP - Save To Library","state":"ENABLED","targets":[{"event":"click","selector":{"selector":"[data-selenium-selector=\"paper-action-save\"] .flex-row-centered"}}],"updatedAt":null,"updatedBy":null,"urls":["https://www.semanticscholar.org/paper/*"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Test Event","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".gb_dg .gb_h:nth-of-type(1) [target]"}}],"updatedAt":null,"updatedBy":null,"urls":["https://www.google.com/?gws_rd=ssl"]},{"accountId":null,"buildUrl":null,"createdAt":null,"createdBy":null,"disabledAt":null,"disabledBy":null,"enabled":null,"enabledAt":null,"enabledBy":null,"id":null,"name":"appcues_custom:Clicked on influence graph","state":"ENABLED","targets":[{"event":"click","selector":{"selector":".is-active"}}],"updatedAt":null,"updatedBy":null,"urls":["https://www.semanticscholar.org/author/*"]}],"integrations":{"ga":{"createdAt":null,"createdBy":null,"integrationId":"112095:ga","isEnabled":true,"type":"ga","updatedAt":null,"updatedBy":null},"heap":{"createdAt":null,"createdBy":null,"integrationId":"87350:heap","isEnabled":true,"type":"heap","updatedAt":null,"updatedBy":null}},"styling":{"globalBeaconColor":"#f4d35e","globalBeaconStyle":"hotspot","globalHotspotAnimation":"hotspot-animation-pulse","globalHotspotStyling":"","globalStyling":"\n        @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700');\n        \n\n        @import url('https://fonts.googleapis.com/css2?family=Roboto');\n        \n\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i');\n\n\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i');\n\n\n.appcues-actions-right > .appcues-button.appcues-button-success, .appcues-progress-bar-success {\n    background-color: #1857b6;\n}\n.appcues-actions-right > .appcues-button.appcues-button-success:hover {\n    background-color: #1c66d6;\n}\n\n\n.appcues-actions-right > .appcues-button.appcues-button-success:hover {\n    background-color: #1c66d6 !important;\n}\n\n\n.appcues-actions-right .appcues-button, .appcues-actions-left .appcues-button {\n    font-size: 14px;\n}\n\n\n.appcues-actions-right .appcues-button {\n    color: #ffffff;\n}\n\n\n.appcues-actions-right .appcues-button:hover {\n    color: #f5f6f7 !important;\n}\n\n\n.appcues-actions-left >  .appcues-button {\n    background-color: #ffffff;\n}\n.appcues-actions-left > .appcues-button:hover {\n    background-color: #ffffff;\n}\n\n\n.appcues-actions-left > .appcues-button:hover {\n    background-color: #ffffff !important;\n}\n\n\n.appcues-actions-left .appcues-button {\n    color: #1857b6;\n}\n\n\n.appcues-actions-left .appcues-button:hover {\n    color: #0f3875 !important;\n}\n\n\n.appcues-actions-right .appcues-button, .appcues-actions-left .appcues-button {\n    border-radius: 1000px;\n}\n\n\nbody, appcues cue, .tooltip .content {\n    font-family: Roboto;\n}\n\n\nbody h1, body h2, body h3, body h4, body h5,\nappcues cue h1, appcues cue h2, appcues cue h3, appcues cue h4, appcues cue h5,\n.tooltip .content h1, .tooltip .content h2, .tooltip .content h3, .tooltip .content h4, .tooltip .content h5 {\n    font-family: Roboto Slab;\n}\n\n\n  body, appcues cue, .tooltip .content {\n      color: #11223d;\n  }\n  \n\n.tooltip .content .panel {\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n\n.tooltip .content .panel:before, .tooltip .content .panel:after {\n  height: 13px;\n  width: 13px;\n  background-color: #ffffff;\n  border-radius: 2px;\n  border: none;\n  transform: rotate(45deg);\n}\n\n.tooltip .content .panel:after {\n  position: absolute;\n  content: \"\";\n  z-index: -1;\n}\n\n.tooltip .content.content-top .panel:before, .tooltip .content.content-top .panel:after {\n  margin-left: -7px;\n}\n\n.tooltip .content.content-top .panel:before,\n.tooltip .content.content-top .panel:after,\n.tooltip .content.content-top-left .panel:before,\n.tooltip .content.content-top-left .panel:after,\n.tooltip .content.content-top-right .panel:before,\n.tooltip .content.content-top-right .panel:after {\n  margin-top: -6px;\n}\n\n.tooltip .content.content-bottom .panel:before, .tooltip .content.content-bottom .panel:after {\n  margin-left: -7px;\n}\n\n.tooltip .content.content-bottom .panel:before,\n.tooltip .content.content-bottom .panel:after,\n.tooltip .content.content-bottom-left .panel:before,\n.tooltip .content.content-bottom-left .panel:after,\n.tooltip .content.content-bottom-right .panel:before,\n.tooltip .content.content-bottom-right .panel:after {\n  margin-bottom: -6px;\n}\n\n.tooltip .content.content-right .panel:before, .tooltip .content.content-right .panel:after {\n  margin-top: -7px;\n}\n\n.tooltip .content.content-right .panel:before,\n.tooltip .content.content-right .panel:after,\n.tooltip .content.content-right-top .panel:before,\n.tooltip .content.content-right-top .panel:after,\n.tooltip .content.content-right-bottom .panel:before,\n.tooltip .content.content-right-bottom .panel:after {\n  margin-right: -6px;\n}\n\n.tooltip .content.content-left .panel:before, .tooltip .content.content-left .panel:after {\n  margin-top: -7px;\n}\n\n.tooltip .content.content-left .panel:before,\n.tooltip .content.content-left .panel:after,\n.tooltip .content.content-left-top .panel:before,\n.tooltip .content.content-left-top .panel:after,\n.tooltip .content.content-left-bottom .panel:before,\n.tooltip .content.content-left-bottom .panel:after {\n  margin-left: -6px;\n}\n\n.tooltip .content.content-top-left .panel:before,\n.tooltip .content.content-top-left .panel:after,\n.tooltip .content.content-bottom-left .panel:before,\n.tooltip .content.content-bottom-left .panel:after {\n  right: 10px;\n}\n\n.tooltip .content.content-top-right.panel:before,\n.tooltip .content.content-top-right .panel:after,\n.tooltip .content.content-bottom-right .panel:before,\n.tooltip .content.content-bottom-right .panel:after {\n  left: 10px;\n}\n\n.tooltip .content.content-right-bottom .panel:before,\n.tooltip .content.content-right-bottom .panel:after,\n.tooltip .content.content-left-bottom .panel:before,\n.tooltip .content.content-left-bottom .panel:after {\n  top: 10px;\n}\n\n.tooltip .content.content-right-top.panel:before,\n.tooltip .content.content-right-top .panel:after,\n.tooltip .content.content-left-top .panel:before,\n.tooltip .content.content-left-top .panel:after {\n  bottom: 10px;\n}\n\n.tooltip .content.content-top .panel:after {\n  left: 50%;\n}\n\n.tooltip .content.content-top .panel:after,\n.tooltip .content.content-top-left .panel:after,\n.tooltip .content.content-top-right .panel:after {\n  top: 100%;\n}\n\n.tooltip .content.content-bottom .panel:after {\n  left: 50%;\n}\n\n.tooltip .content.content-bottom .panel:after,\n.tooltip .content.content-bottom-left .panel:after,\n.tooltip .content.content-bottom-right .panel:after {\n  bottom: 100%;\n}\n\n.tooltip .content.content-right .panel:after {\n  top: 50%;\n}\n\n.tooltip .content.content-right .panel:after,\n.tooltip .content.content-right-top .panel:after,\n.tooltip .content.content-right-bottom .panel:after {\n  right: 100%;\n}\n\n.tooltip .content.content-left .panel:after {\n  top: 50%;\n}\n\n.tooltip .content.content-left .panel:after,\n.tooltip .content.content-left-top .panel:after,\n.tooltip .content.content-left-bottom .panel:after {\n  left: 100%;\n}\n\n\n.tooltip .content .panel {\n  color: #11223d;\n}\n\n.tooltip h1, .tooltip h2, .tooltip h3, .tooltip h4, .tooltip h5 {\ncolor: #11223d;\n}\n\n  .panel.panel-default {\n    margin-right: 3px;\n    margin-bottom: 2px;\n    border-radius: 3px;\n  }\n  \n\n  .panel.panel-default, .content .panel:after {\n    box-shadow: 1px 1px 2px hsla(0,0%,13%,.6);\n  }\n  \n\n      .appcues-backdrop[data-pattern-type=left], .appcues-backdrop[data-pattern-type=shorty], .appcues-backdrop[data-pattern-type=modal] {\n        background-color: #11223d;\n      }\n      \n\n      .appcues-backdrop[data-pattern-type=left], .appcues-backdrop[data-pattern-type=shorty], .appcues-backdrop[data-pattern-type=modal] {\n        opacity: 0.75;\n      }\n      \n\nappcues cue {\n    background: #ffffff\n}\n\n\nappcues cue *, appcues cue {\n    color: #264653\n}\n\n/*\n\tIt's dangerous to go alone! Take this.\n\n\t(Not actually dangerous, but hopefully these selectors \n\twill help you make your flows look beautiful!)\n\n        \t   /|\n\t          / |\n\t         /  |\n\t        /   |\n\t       /    |\n\t      /     |\n\t      \\     |\n\t   /|  \\    |\n\t  / |   \\   |\n\t /  |    \\  |\n\t/___|     \\_| \n\n\tAPPCUES CSS SELECTORS\n*/\n\n/************************************/\n/* Appcues Base Presets */\n\nappcues .appcues-actions-left .appcues-button { padding-left: 18px; }\nappcues .appcues-actions-left .appcues-button:before { content: none; }\n\n/*** Adjust style of progress bar */\n\nappcues .appcues-progress { background-color: white; height: 7px; border: 0; }\nappcues .appcues-progress .appcues-progress-bar { transition:width 0.5s ease 0.07s; }\nappcues .appcues-progress .appcues-progress-bar:not([aria-valuenow='100']) { border-top-right-radius: 0; border-bottom-right-radius: 0; }\n\n/*** Adjust margins & padding */\nappcues cue { min-height: 100px !important; padding: 22px 54px 82px; }\nappcues cue .apc-hero { margin: -22px -54px 0; }\n/* Fix up Hero typography */\nappcues cue .apc-hero h2 { font-size: 18px; font-weight: bold; }\nappcues[data-pattern-type=modal] cue {\n    box-shadow: 0 0 18px rgba(0,0,0,0.25);\n}\n.tooltip .panel { padding: 9px 12px 10px; }\n\n/*** Adjust typography */\nappcues cue h1, .tooltip h1 { font-weight: 200; font-size: 32px; margin-top: 0.5em; -webkit-font-smoothing:antialiased; }\nappcues cue h2, .tooltip h2 { font-weight: 400; font-size: 24px; margin-top: 0.5em; -webkit-font-smoothing:antialiased; }\nappcues cue h3, .tooltip h3 { font-weight: 600; letter-spacing: -0.01em; font-size: 20px; -webkit-font-smoothing:antialiased; }\nappcues cue h4,h5 { letter-spacing: -0.01em; margin-top: 0.75em; -webkit-font-smoothing:antialiased; }\np, li {\n    line-height: 1.6em;\n}\n\n/*** Adjust links in content */\nappcues cue section a[data-step], appcues cue section a[href], .tooltip p a[data-step], .tooltip p a[href] {\n    color: #3388ee;\n}\nappcues cue section a[data-step]:hover, appcues cue section a[href]:hover, .tooltip p a[data-step]:hover, .tooltip p a[href]:hover {\n    color: #1166cc;\n    text-decoration: underline; /* a18y */\n}\n\n/*** Adjust skip X */\nappcues .appcues-skip a { background: none; right: 6px; font-size: 28px; }\n.tooltip .panel .appcues-skip { color: #ccc; }\n\n\n.exit-tooltip-container {\n    top: 6px;\n    right: 12px;\n}\n\n.appcues-tooltip-container .exit-tooltip-container .exit-tooltip{\n    font-size: 22px;\n    opacity: 1;\n}\n\n/* End Appcues Base */\n/************************************/\n\n/*___Buttons and Links___*/\n.appcues-actions-right {\n\t/*[The section of the button row which hold the 'Next' or righthand side button.]*/\n}\n\n.tooltip .content .panel .panel-content-actions .appcues-actions-right {\n\t/*[Full selector to edit .appcues-actions-right in hotspots/tooltips]*/\n}\n\nappcues cue .appcues-actions-right {\n\t/*[Full selector to edit .appcues-actions-right in modals/slideouts]*/\n}\n\n\n.appcues-actions-left {\n\t/*[The section of the button row which hold the 'Prev' or lefthand side button.]*/\n}\n\n.tooltip .content .panel .panel-content-actions .appcues-actions-left {\n\t/*[Full selector to edit .appcues-actions-left in hotspots/tooltips]*/\n}\n\nappcues cue .appcues-actions-left {\n\t/*[Full selector to edit .appcues-actions-left in modals/slideouts]*/\n}\n\n\n.appcues-button {\n\t/*[Generic selector for any button.]*/\n}\n\n\n.appcues-button-success {\n\t/*[Selector for the 'Next' buttons (buttons which advance the step of the flow).]*/\n}\n\n.panel .panel-content-actions .appcues-actions-right > .appcues-button.appcues-button-success {\n\t/*[Full selector to edit .appcues-button-success in hotspots/tooltips]*/\n}\n\nappcues cue .appcues-actions-right > .appcues-button.appcues-button-success {\n\n\t/*[Full selector to edit .appcues-button-success in modals/slideouts]*/\n}\n\n.panel .panel-content-actions .appcues-skip {\n\t/*[Full selector to edit .appcues-skip in tooltips/hotspots] (Hide these tips)*/\n}\n\nappcues .appcues-skip a{\n\n}\n\n\nappcues[data-pattern-type=shorty] cue {\n\t/*[Selector for slideouts specifically]*/\n}\n\nappcues[data-pattern-type=modal] cue {\n\t/*[Selector for modals specifically]*/\n}\n\n\n/*___Modals and Slideouts___*/\n\nappcues {\t\n\t/*[This element wraps the entire modal or slideout.]*/\n}\n\nappcues cue {\n\t/*[This is where the main content for modals and slideouts lives.]*/\n}\n\nappcues .appcues-backdrop[data-pattern-type=modal] {\n\t/*[The backdrop (darkened background) for modals.]*/\n}\n\nappcues .appcues-progress {\n\t/*[The progress bar which indicates how far a user is in the flow]*/\n}\n\nappcues cue .apc-hero {\n\t/*[This is the selector for a hero image.]*/\n}\n\n\nappcues cue .appcues-actions {\n\t/*[The row where all the buttons are placed.]*/\n}\n\n\n\n/*___Hotspots and Tooltips___*/\n\n.tooltip .content .panel {\n\t/*[This is selector for the tooltip panel itself. The styles to the arrow can be accessed using the ::before selector (see below)]*/\n}\n\n.tooltip .content .panel .panel-content {\n\t/*[This is the selector for any content within the tooltip. This applies to both body text and the actions row.]*/\n}\n\n.tooltip .content .panel .panel-content-actions {\n\t/*[The specific container selection for the row with buttons/actions.]*/\n}\n\n\n    appcues .appcues-actions-right .appcues-button { padding-right: 18px; }\n    appcues .appcues-actions-right .appcues-button:after { content: none; }\n    appcues .appcues-actions-left .appcues-button { padding-left: 18px; }\n    appcues .appcues-actions-left .appcues-button:before { content: none; }","id":"-MWjgRu8ThbSvI8Vu5qz","theme":{"css":"\n:host {\n --typekit-id: ;\n--general-header-font: Roboto Slab;\n--general-header-font-url: https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700;\n--general-body-font: Roboto;\n--general-body-font-url: https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700;\n--general-body-font-color: #11223d;\n--button-font-size: 14px;\n--button-border-radius: 3px;\n--button-primary-background-color: #1857b6;\n--button-primary-border-color: transparent;\n--button-primary-border-width: 0px;\n--button-primary-color: #ffffff;\n--button-primary-hover-border-color: transparent;\n--button-primary-hover-border-width: 0px;\n--button-primary-hover-background-color: #1c66d6;\n--button-primary-hover-color: #f5f6f7;\n--button-secondary-background-color: #ffffff;\n--button-secondary-border-color: transparent;\n--button-secondary-border-width: 0px;\n--button-secondary-color: #1857b6;\n--button-secondary-hover-border-color: transparent;\n--button-secondary-hover-border-width: 0px;\n--button-secondary-hover-background-color: #ffffff;\n--button-secondary-hover-color: #0f3875;\n--patterns-modal-color: #264653;\n--patterns-modal-background-color: #ffffff;\n--patterns-modal-backdrop-color: #11223d;\n--patterns-modal-backdrop-opacity: 0.75;\n--patterns-tooltip-color: #11223d;\n--patterns-tooltip-background-color: #ffffff;\n--patterns-tooltip-border-radius: 3px;\n--patterns-tooltip-shadow-distance-x: 1px;\n--patterns-tooltip-shadow-distance-y: 1px;\n--patterns-tooltip-shadow-blur: 2px;\n--patterns-tooltip-shadow-color: hsla(0,0%,13%,.6);\n--patterns-tooltip-beacon-color: #f4d35e;\n}","json":{"button":{"borderRadius":"3px","fontSize":"14px","primary":{"backgroundColor":"#1857b6","borderColor":"transparent","borderWidth":"0px","color":"#ffffff","hover":{"backgroundColor":"#1c66d6","borderColor":"transparent","borderWidth":"0px","color":"#f5f6f7"}},"secondary":{"backgroundColor":"#ffffff","borderColor":"transparent","borderWidth":"0px","color":"#1857b6","hover":{"backgroundColor":"#ffffff","borderColor":"transparent","borderWidth":"0px","color":"#0f3875"}}},"general":{"bodyFont":"Roboto","bodyFontColor":"#11223d","bodyFontUrl":"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700","headerFont":"Roboto Slab","headerFontUrl":"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700"},"patterns":{"modal":{"backdropColor":"#11223d","backdropOpacity":0.75,"backgroundColor":"#ffffff","color":"#264653"},"tooltip":{"backgroundColor":"#ffffff","beacon":{"color":"#f4d35e"},"borderRadius":"3px","color":"#11223d","shadow":{"blur":"2px","color":"hsla(0,0%,13%,.6)","distance":{"x":"1px","y":"1px"}}}},"typekitId":""}},"typekitId":""}};
    var VERSION = ACCOUNT_DETAILS.VERSION;
    var RELEASE_ID = ACCOUNT_DETAILS.RELEASE_ID;
    var GENERIC_BUNDLE_DOMAIN = ACCOUNT_DETAILS.GENERIC_BUNDLE_DOMAIN;
    var accountId = ACCOUNT_DETAILS.accountId;
    var isBootstrapped = false;

    self.AppcuesBundleSettings = {
      accountId: accountId,
      VERSION: VERSION,
      RELEASE_ID: RELEASE_ID,
      GENERIC_BUNDLE_DOMAIN: GENERIC_BUNDLE_DOMAIN,
      GENERIC_BUNDLE_PATH: ACCOUNT_DETAILS.GENERIC_BUNDLE_PATH,
      styling:  ACCOUNT_DETAILS.styling,
      integrations: ACCOUNT_DETAILS.integrations,
      account: ACCOUNT_DETAILS.account,
      events: ACCOUNT_DETAILS.custom_events
    };

    var skipAMD = false;
    var windowGlobals = window["AppcuesSettings"];
    if (
      windowGlobals &&
      typeof windowGlobals === "object" &&
      windowGlobals.skipAMD === true
    ) {
      skipAMD = true;
    }

    var doc = self.document;
    self[ns] = self[ns] || [];
    var Appcues = self[ns];
    if (Appcues.invoked) {
        if (self.console && console.error) {
            console.error('Appcues snippet included twice.');
        }
        return;
    }

    if (Appcues.identify) return;
    Appcues.invoked = true;

    var methods = [
        "identify",
        "track",
        "page",
        "anonymous",
        "start",
        "show",
        "clearShow",
        "on",
        "off",
        "once",
        "reset",
        "debug",
        "user",
        "call",
        "settings",
        "content",
        "initMixpanel",
        "initHeap",
        "initIntercom",
        "initCIO",
        "initWoopra",
        "initAmplitude",
        "initKlaviyo",
        "initTD",
        "initLl",
        "initCalq",
        "initKM",
        "initGA",
        "initGTM",
        "initSegment",
        "injectContent",
        "injectStyles",
        "injectEvents",
        "cancelEvents",
        "loadLaunchpad",
        "group"
    ];

    var promises = [
        "user"
    ];

    function factory(method){
        return function(){
            var args = Array.prototype.slice.call(arguments);
            if (isBootstrapped) {
              self.Appcues[method].apply(self.Appcues, args);
            } else {
              args.unshift(method);
              Appcues.push(args);
            }
            return self.Appcues;
        };
    }

    // For each of our methods, generate a queueing stub.
    for (var i = 0; i < methods.length; i++) {
        var key = methods[i];
        Appcues[key] = factory(key);
    }

    for (var i = 0; i < promises.length; i++) {
        var key = promises[i];
        Appcues[key] = function() {
          var args = Array.prototype.slice.call(arguments);
          if (isBootstrapped) {
            return self.Appcues[key].apply(self.Appcues, args);
          } else {
            return new Promise(function(resolve, _reject) {
              args.unshift(resolve);
              args.unshift(key);
              Appcues.push(args);
            });
          }
        };
    }

    if (
      !skipAMD &&
      typeof window.define === "function" &&
      window.define.amd &&
      (window.define.amd.vendor == null ||
        window.define.amd.vendor !== "dojotoolkit.org")
    ) {
      window.define(function() { return Appcues; });
    }

    function load(){
        var bundleScript = doc.createElement("script");

        bundleScript.crossOrigin = "anonymous";
        bundleScript.integrity = "sha256-cbp7/pajbL+Pgxg/65Hm5z6nFEMTvgukbMj+oCDqboA=";

        bundleScript.type = "text/javascript";
        bundleScript.src = GENERIC_BUNDLE_URL;
        bundleScript.async = true;
        bundleScript.onload = function () {
            isBootstrapped = true;
            Appcues.forEach(function(call) {
                var fnName = call[0];
                var args = call.slice(1);
                if (promises.indexOf(fnName) === -1) {
                  self[ns] && self[ns][fnName] &&
                      self[ns][fnName].apply(self[ns], args);
                } else {
                  var resolve = args[0];
                  var promiseArgs = args.slice(1);
                  self[ns] && self[ns][fnName] &&
                    self[ns][fnName].apply(self[ns], promiseArgs).then(
                      function() { resolve(arguments[0]); }
                    );
                }
            });
        };

        var firstScript = doc.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(bundleScript, firstScript);
    }
    Appcues.SNIPPET_VERSION = VERSION;
    load();
})(window, 'Appcues');
