/* @ds-bundle: {"format":4,"namespace":"GaiaDesignSystem_d69b3c","components":[{"name":"Accordion","sourcePath":"components/Accordion.jsx"},{"name":"AccordionItem","sourcePath":"components/Accordion.jsx"},{"name":"Avatar","sourcePath":"components/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/Avatar.jsx"},{"name":"Badge","sourcePath":"components/Badge.jsx"},{"name":"BadgeIndicator","sourcePath":"components/BadgeIndicator.jsx"},{"name":"Breadcrumbs","sourcePath":"components/Breadcrumbs.jsx"},{"name":"Button","sourcePath":"components/Button.jsx"},{"name":"Calendar","sourcePath":"components/Calendar.jsx"},{"name":"Card","sourcePath":"components/Card.jsx"},{"name":"Checkbox","sourcePath":"components/Checkbox.jsx"},{"name":"CheckboxGroup","sourcePath":"components/Checkbox.jsx"},{"name":"ContextSelector","sourcePath":"components/ContextSelector.jsx"},{"name":"ContextSelectorSlot","sourcePath":"components/ContextSelector.jsx"},{"name":"ContextSelectorBranchSlot","sourcePath":"components/ContextSelector.jsx"},{"name":"ContextSelectorSection","sourcePath":"components/ContextSelector.jsx"},{"name":"ContextSelectorList","sourcePath":"components/ContextSelector.jsx"},{"name":"ContextSelectorItem","sourcePath":"components/ContextSelector.jsx"},{"name":"Datepicker","sourcePath":"components/Datepicker.jsx"},{"name":"Drawer","sourcePath":"components/Drawer.jsx"},{"name":"Dropdown","sourcePath":"components/Dropdown.jsx"},{"name":"DropdownItem","sourcePath":"components/Dropdown.jsx"},{"name":"Feedback","sourcePath":"components/Feedback.jsx"},{"name":"FileUploader","sourcePath":"components/FileUploader.jsx"},{"name":"FormField","sourcePath":"components/FormField.jsx"},{"name":"Icon","sourcePath":"components/Icon.jsx"},{"name":"IconButton","sourcePath":"components/IconButton.jsx"},{"name":"InlineLoading","sourcePath":"components/InlineLoading.jsx"},{"name":"Input","sourcePath":"components/Input.jsx"},{"name":"Link","sourcePath":"components/Link.jsx"},{"name":"Loader","sourcePath":"components/Loader.jsx"},{"name":"Menu","sourcePath":"components/Menu.jsx"},{"name":"MenuItem","sourcePath":"components/Menu.jsx"},{"name":"MenuTitle","sourcePath":"components/Menu.jsx"},{"name":"MenuSeparator","sourcePath":"components/Menu.jsx"},{"name":"Modal","sourcePath":"components/Modal.jsx"},{"name":"Notification","sourcePath":"components/Notification.jsx"},{"name":"Toast","sourcePath":"components/Notification.jsx"},{"name":"ToastStack","sourcePath":"components/Notification.jsx"},{"name":"PageHeader","sourcePath":"components/PageHeader.jsx"},{"name":"Pagination","sourcePath":"components/Pagination.jsx"},{"name":"ProgressBar","sourcePath":"components/ProgressBar.jsx"},{"name":"ProgressIndicator","sourcePath":"components/ProgressIndicator.jsx"},{"name":"QuantitySelector","sourcePath":"components/QuantitySelector.jsx"},{"name":"QuickFilterButton","sourcePath":"components/QuickFilterButton.jsx"},{"name":"ChipListbox","sourcePath":"components/QuickFilterButton.jsx"},{"name":"RadioButton","sourcePath":"components/RadioButton.jsx"},{"name":"RadioGroup","sourcePath":"components/RadioButton.jsx"},{"name":"Search","sourcePath":"components/Search.jsx"},{"name":"SegmentedControl","sourcePath":"components/SegmentedControl.jsx"},{"name":"SegmentedControlButton","sourcePath":"components/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/Select.jsx"},{"name":"SideNavigation","sourcePath":"components/SideNavigation.jsx"},{"name":"SideNavigationItem","sourcePath":"components/SideNavigation.jsx"},{"name":"Skeleton","sourcePath":"components/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/Spinner.jsx"},{"name":"Switch","sourcePath":"components/Switch.jsx"},{"name":"Tabs","sourcePath":"components/Tabs.jsx"},{"name":"Tab","sourcePath":"components/Tabs.jsx"},{"name":"Tag","sourcePath":"components/Tag.jsx"},{"name":"TextArea","sourcePath":"components/TextArea.jsx"},{"name":"Tooltip","sourcePath":"components/Tooltip.jsx"},{"name":"Kbd","sourcePath":"components/Tooltip.jsx"}],"sourceHashes":{"components/Accordion.jsx":"f616bbcc8309","components/Avatar.jsx":"03ac5f538749","components/Badge.jsx":"b9c56fce4e25","components/BadgeIndicator.jsx":"6b96cd1107c0","components/Breadcrumbs.jsx":"f70a62ac3009","components/Button.jsx":"3ba0a6ace61a","components/Calendar.jsx":"05fcc513134e","components/Card.jsx":"095442ad1b7b","components/Checkbox.jsx":"8cee6ca0155c","components/ContextSelector.jsx":"e50b302b1563","components/Datepicker.jsx":"84971bdc6783","components/Drawer.jsx":"7b0b5f571a21","components/Dropdown.jsx":"9609c677a5b1","components/Feedback.jsx":"56829eb8376a","components/FileUploader.jsx":"c92eb3359f7f","components/FormField.jsx":"0d0b6d06d35c","components/Icon.jsx":"ea7a9abc56b6","components/IconButton.jsx":"dcf1222854ae","components/InlineLoading.jsx":"d9752966ef38","components/Input.jsx":"118f9a277fc4","components/Link.jsx":"73db67f0852a","components/Loader.jsx":"bfeb097d2184","components/Menu.jsx":"9c5257efc2e0","components/Modal.jsx":"47a9c1a737f1","components/Notification.jsx":"6b32e923ccc4","components/PageHeader.jsx":"98731f392756","components/Pagination.jsx":"a78f6490a2a2","components/ProgressBar.jsx":"24ba1dfdb131","components/ProgressIndicator.jsx":"5e13a9d901f4","components/QuantitySelector.jsx":"7fef68db33b1","components/QuickFilterButton.jsx":"1c22c1324c6b","components/RadioButton.jsx":"57fe97ec403f","components/Search.jsx":"8f046f32d2ed","components/SegmentedControl.jsx":"3579f12185e6","components/Select.jsx":"df57cd9d59bc","components/SideNavigation.jsx":"c3afb215c936","components/Skeleton.jsx":"73d676746f08","components/Spinner.jsx":"d2947c3ecac0","components/Switch.jsx":"9273063e70c0","components/Tabs.jsx":"6713d41e3260","components/Tag.jsx":"6be07c9b4e31","components/TextArea.jsx":"986fbb2c65d1","components/Tooltip.jsx":"902944f247c7","components/cx.js":"38bbfeda4d2e","icons.js":"51c9b67d802b","showcase/motion.js":"2ed378069b38"},"inlinedExternals":[],"unexposedExports":[{"name":"cx","sourcePath":"components/cx.js"}]} */

(() => {

const __ds_ns = (window.GaiaDesignSystem_d69b3c = window.GaiaDesignSystem_d69b3c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Icon. Lucide-backed (Gaia's sole icon library: 24×24 grid,
// 1.5 stroke, currentColor). Reuses window.GAIA_ICONS (icons.js) when the
// page loads it; otherwise pulls the Lucide UMD itself. Requires the Gaia
// stylesheets for sizing/color inheritance (.ga-icon).

const toPascal = n => String(n).split(/[-_]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
let lucidePromise = null;
function ensureLucide() {
  if (typeof document === 'undefined') return Promise.resolve();
  if (window.lucide && window.lucide.icons) return Promise.resolve();
  if (!lucidePromise) {
    lucidePromise = new Promise(resolve => {
      let s = document.getElementById('ga-lucide-cdn');
      if (!s) {
        s = document.createElement('script');
        s.id = 'ga-lucide-cdn';
        s.src = 'https://unpkg.com/lucide@latest/dist/umd/lucide.js';
        document.head.appendChild(s);
      }
      s.addEventListener('load', resolve);
      s.addEventListener('error', resolve);
    });
  }
  return lucidePromise;
}
function svgFor(name, size) {
  const G = typeof window !== 'undefined' && window.GAIA_ICONS;
  if (G && typeof G.svgFor === 'function') return G.svgFor(name, size);
  const L = typeof window !== 'undefined' && window.lucide;
  const key = G && G.lucideName ? G.lucideName(name) : name;
  if (L && L.icons) {
    const node = L.icons[toPascal(key)];
    if (node) {
      try {
        const el = L.createElement(node);
        if (el && el.innerHTML) {
          return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${el.innerHTML}</svg>`;
        }
      } catch (e) {/* fall through */}
    }
  }
  return '';
}
function Icon({
  name,
  size = 16,
  className,
  style,
  ...rest
}) {
  const [, bump] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => {
    const G = window.GAIA_ICONS;
    const ready = G && G.svgFor || window.lucide && window.lucide.icons;
    if (!ready) ensureLucide().then(bump);
  }, []);
  const html = svgFor(name, size);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ga-icon', className].filter(Boolean).join(' '),
    "data-icon": name,
    "data-size": size,
    style: {
      width: size,
      height: size,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: html
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cx.js
try { (() => {
// Gaia DS — tiny className joiner shared by the React components.
// Lowercase export: importable by siblings, not exposed on the namespace.
function cx(...parts) {
  return parts.filter(Boolean).join(' ');
}
Object.assign(__ds_scope, { cx });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cx.js", error: String((e && e.message) || e) }); }

// components/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Accordion (+ AccordionItem). Progressive disclosure.

function Accordion({
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-accordion', className)
  }, rest), children);
}
function AccordionItem({
  title,
  expanded,
  defaultExpanded = false,
  onToggle,
  disabled = false,
  chevronStart = false,
  className,
  children,
  ...rest
}) {
  const [own, setOwn] = React.useState(defaultExpanded);
  const isOpen = expanded != null ? expanded : own;
  const toggle = () => {
    if (disabled) return;
    if (expanded == null) setOwn(!isOpen);
    onToggle && onToggle(!isOpen);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-accordion-item', isOpen && 'ga-accordion-item--expanded', disabled && 'ga-accordion-item--disabled', chevronStart && 'ga-accordion-item--chevron-start', className)
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ga-accordion-item__header",
    "aria-expanded": isOpen,
    disabled: disabled,
    onClick: toggle
  }, /*#__PURE__*/React.createElement("span", {
    className: "ga-accordion-item__title"
  }, title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "ga-accordion-item__chevron",
    name: "chevron-up",
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    className: "ga-accordion-item__content",
    hidden: !isOpen
  }, children));
}
Object.assign(__ds_scope, { Accordion, AccordionItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Badge: tiny status/count chip, text or dot.

function Badge({
  type = 'text',
  variant = 'default',
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: __ds_scope.cx('ga-badge', `ga-badge--${type}`, `ga-badge--${variant}`, className)
  }, rest), type === 'text' ? children : null);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Badge.jsx", error: String((e && e.message) || e) }); }

// components/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Avatar (+ AvatarGroup). Types: icon (default) / initials / image.

const ICON_SIZE = {
  xs: 12,
  small: 16,
  medium: 30,
  large: 44
};
function Avatar({
  size = 'medium',
  initials,
  src,
  alt = '',
  icon = 'user',
  interactive = false,
  disabled = false,
  status,
  // 'default' | 'success' | 'error' | 'warning' | 'information'
  className,
  ...rest
}) {
  const isImage = Boolean(src);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: __ds_scope.cx('ga-avatar', size !== 'medium' && `ga-avatar--${size}`, isImage && 'ga-avatar--image', interactive && 'ga-avatar--interactive', disabled && 'ga-avatar--disabled', className),
    tabIndex: interactive && !disabled ? 0 : undefined,
    "aria-disabled": disabled || undefined
  }, rest), isImage ? /*#__PURE__*/React.createElement("img", {
    className: "ga-avatar__image",
    src: src,
    alt: alt
  }) : initials ? initials : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "ga-avatar__icon",
    name: icon,
    size: ICON_SIZE[size] || 30
  }), status && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    type: "dot",
    variant: status
  }));
}
function AvatarGroup({
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: __ds_scope.cx('ga-avatar-group', className)
  }, rest), children);
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/BadgeIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — BadgeIndicator: anchors a count/dot badge to a child's corner
// (nav icons, buttons). Figma family "badge indicator" (Size × With number).

function BadgeIndicator({
  count,
  max = 99,
  variant = 'error',
  hidden = false,
  className,
  style,
  children,
  ...rest
}) {
  const hasNumber = count != null;
  const display = hasNumber && count > max ? `${max}+` : count;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: __ds_scope.cx('ga-badge-indicator', className),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, rest), children, !hidden && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    type: hasNumber ? 'text' : 'dot',
    variant: variant,
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      transform: 'translate(40%, -40%)',
      boxShadow: '0 0 0 var(--ga-size-border-width-md) var(--ga-color-surface-primary)',
      ...(hasNumber ? {
        minWidth: 'var(--ga-size-16)',
        height: 'var(--ga-size-16)',
        padding: '0 var(--ga-size-4)',
        lineHeight: 'var(--ga-size-16)',
        fontSize: 'var(--ga-text-xs-font-size)'
      } : null)
    }
  }, display));
}
Object.assign(__ds_scope, { BadgeIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/BadgeIndicator.jsx", error: String((e && e.message) || e) }); }

// components/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Breadcrumbs. Pass `items`; the last one is the current page.

function Breadcrumbs({
  items = [],
  separator = '/',
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    className: __ds_scope.cx('ga-breadcrumb', className)
  }, rest), items.map((it, i) => {
    const isLast = i === items.length - 1;
    return /*#__PURE__*/React.createElement("span", {
      key: it.key ?? i,
      className: __ds_scope.cx('ga-breadcrumb-item', isLast ? 'ga-breadcrumb-item--current-page' : 'ga-breadcrumb-item--link')
    }, isLast ? /*#__PURE__*/React.createElement("span", {
      className: "ga-breadcrumb-item__trigger",
      "aria-current": "page"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ga-breadcrumb-item__label"
    }, it.label)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
      className: "ga-breadcrumb-item__trigger",
      href: it.href,
      onClick: it.onClick
    }, /*#__PURE__*/React.createElement("span", {
      className: "ga-breadcrumb-item__label"
    }, it.label)), /*#__PURE__*/React.createElement("span", {
      className: "ga-breadcrumb-item__separator",
      "aria-hidden": "true"
    }, separator)));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/Calendar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Calendar (display month grid) — Monday-first, 280px.

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const sameDay = (a, b) => a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
function Calendar({
  month,
  selected,
  onSelect,
  onMonthChange,
  isDisabled,
  className,
  ...rest
}) {
  const base = month || selected || new Date();
  const y = base.getFullYear();
  const m = base.getMonth();
  const first = new Date(y, m, 1);
  const lead = (first.getDay() + 6) % 7; // Monday-first offset
  const start = new Date(y, m, 1 - lead);
  const cells = Array.from({
    length: 42
  }, (_, i) => new Date(start.getFullYear(), start.getMonth(), start.getDate() + i));
  const today = new Date();
  const monthLabel = base.toLocaleDateString(undefined, {
    month: 'long',
    year: 'numeric'
  });
  const nav = d => onMonthChange && onMonthChange(new Date(y, m + d, 1));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-calendar', className)
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ga-calendar__header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ga-calendar__month-year"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ga-calendar__month-year-button"
  }, monthLabel)), /*#__PURE__*/React.createElement("div", {
    className: "ga-calendar__navigation"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ga-calendar__navigation-button",
    "aria-label": "Previous month",
    onClick: () => nav(-1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ga-calendar__navigation-button",
    "aria-label": "Next month",
    onClick: () => nav(1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ga-calendar__weekdays"
  }, WEEKDAYS.map(w => /*#__PURE__*/React.createElement("span", {
    key: w,
    className: "ga-calendar__weekday"
  }, w))), /*#__PURE__*/React.createElement("div", {
    className: "ga-calendar__selection ga-calendar__selection--day"
  }, cells.map(d => {
    const outside = d.getMonth() !== m;
    const disabled = isDisabled ? isDisabled(d) : false;
    const weekend = d.getDay() === 0 || d.getDay() === 6;
    return /*#__PURE__*/React.createElement("button", {
      key: d.toISOString(),
      type: "button",
      className: __ds_scope.cx('ga-calendar__day', outside && 'ga-calendar__day--outside', weekend && 'ga-calendar__day--weekend', sameDay(d, today) && 'ga-calendar__day--current', sameDay(d, selected) && 'ga-calendar__day--selected', disabled && 'ga-calendar__day--disabled'),
      disabled: disabled,
      onClick: () => onSelect && onSelect(d)
    }, d.getDate());
  })));
}
Object.assign(__ds_scope, { Calendar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Calendar.jsx", error: String((e && e.message) || e) }); }

// components/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Card. White surface for grouping content.

function Card({
  selectable = false,
  selected = false,
  disabled = false,
  title,
  description,
  footer,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-card', selectable && 'ga-card--selectable', selected && 'ga-card--selected', disabled && 'ga-card--disabled', className),
    tabIndex: selectable && !disabled ? 0 : undefined,
    "aria-disabled": disabled || undefined
  }, rest), (title || description) && /*#__PURE__*/React.createElement("div", {
    className: "ga-card__header"
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("h3", {
    className: "ga-card__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "ga-card__description"
  }, description))), children && /*#__PURE__*/React.createElement("div", {
    className: "ga-card__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "ga-card__footer"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card.jsx", error: String((e && e.message) || e) }); }

// components/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Checkbox. Native input + marker; supports indeterminate.

function Checkbox({
  label,
  indeterminate = false,
  invalid = false,
  className,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement("label", {
    className: __ds_scope.cx('ga-checkbox', invalid && 'ga-checkbox--invalid', className),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    className: "ga-checkbox__native",
    type: "checkbox",
    "aria-invalid": invalid || undefined
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ga-checkbox__marker"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ga-checkbox__label"
  }, label));
}
function CheckboxGroup({
  vertical = true,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "group",
    className: className,
    style: {
      display: 'inline-flex',
      flexDirection: vertical ? 'column' : 'row',
      gap: 'var(--ga-size-spacing-03)'
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Checkbox, CheckboxGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/Datepicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Datepicker: input trigger + floating .ga-datepicker panel
// hosting a Calendar. Controlled via value/onChange.

function Datepicker({
  value,
  onChange,
  placeholder = 'DD.MM.YYYY',
  invalid = false,
  disabled = false,
  footer,
  className,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const [month, setMonth] = React.useState(value || new Date());
  const rootRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);
  const fmt = d => d ? `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()}` : '';
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: rootRef,
    style: {
      position: 'relative',
      display: 'inline-block',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx('ga-input', invalid && 'ga-input--invalid', disabled && 'ga-input--disabled', className)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "calendar"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    readOnly: true,
    value: fmt(value),
    placeholder: placeholder,
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onClick: () => !disabled && setOpen(o => !o)
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ga-datepicker-toggle",
    style: {
      border: 0,
      background: 'transparent',
      display: 'inline-flex',
      padding: 0,
      color: 'var(--ga-color-icon-action)'
    },
    "aria-label": "Open calendar",
    disabled: disabled,
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down"
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "ga-datepicker",
    style: {
      position: 'absolute',
      top: 'calc(100% + 4px)',
      left: 0,
      zIndex: 'var(--ga-index-popout)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Calendar, {
    month: month,
    selected: value,
    onMonthChange: setMonth,
    onSelect: d => {
      onChange && onChange(d);
      setOpen(false);
    }
  }), footer && /*#__PURE__*/React.createElement("div", {
    className: "ga-datepicker__footer"
  }, footer)));
}
Object.assign(__ds_scope, { Datepicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Datepicker.jsx", error: String((e && e.message) || e) }); }

// components/Dropdown.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Dropdown: floating option panel. Compose DropdownItem children
// or pass `items`. Positioning is up to the caller.

function Dropdown({
  items,
  caption,
  empty,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-dropdown', className),
    role: "listbox"
  }, rest), caption != null && /*#__PURE__*/React.createElement("div", {
    className: "ga-dropdown__caption"
  }, caption), items ? items.map((it, i) => /*#__PURE__*/React.createElement(DropdownItem, {
    key: it.key ?? i,
    selected: it.selected,
    disabled: it.disabled,
    onClick: it.onClick
  }, it.label)) : children, empty != null && /*#__PURE__*/React.createElement("div", {
    className: "ga-dropdown__empty"
  }, empty));
}
function DropdownItem({
  selected = false,
  disabled = false,
  active = false,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "option",
    "aria-selected": selected || undefined,
    className: __ds_scope.cx('ga-dropdown__item', selected && 'ga-dropdown__item--selected', disabled && 'ga-dropdown__item--disabled', active && 'ga-dropdown__item--active', className),
    disabled: disabled
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ga-dropdown__item-label"
  }, children));
}
Object.assign(__ds_scope, { Dropdown, DropdownItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/FileUploader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — FileUploader. Dropzone + file list.

function FileUploader({
  label,
  description,
  dropzoneLabel = 'Drag files here or browse',
  files = [],
  // [{ name, state: 'default'|'success'|'error', error, onRemove }]
  disabled = false,
  onFiles,
  accept,
  multiple = true,
  className,
  ...rest
}) {
  const inputRef = React.useRef(null);
  const [drag, setDrag] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-file-uploader', disabled && 'ga-file-uploader--disabled', className)
  }, rest), (label || description) && /*#__PURE__*/React.createElement("div", {
    className: "ga-file-uploader__heading"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "ga-file-uploader__heading-label"
  }, label), description && /*#__PURE__*/React.createElement("span", {
    className: "ga-file-uploader__heading-description"
  }, description)), /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx('ga-file-uploader__dropzone', drag && 'ga-file-uploader__dropzone--drag-hover'),
    role: "button",
    tabIndex: disabled ? -1 : 0,
    "aria-disabled": disabled || undefined,
    onClick: () => !disabled && inputRef.current && inputRef.current.click(),
    onDragOver: e => {
      e.preventDefault();
      if (!disabled) setDrag(true);
    },
    onDragLeave: () => setDrag(false),
    onDrop: e => {
      e.preventDefault();
      setDrag(false);
      if (!disabled && onFiles) onFiles(Array.from(e.dataTransfer.files));
    }
  }, dropzoneLabel), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    className: "ga-file-uploader__input",
    type: "file",
    accept: accept,
    multiple: multiple,
    disabled: disabled,
    onChange: e => onFiles && onFiles(Array.from(e.target.files))
  }), files.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "ga-file-uploader__file-list"
  }, files.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: f.name ?? i,
    className: __ds_scope.cx('ga-file-uploader__file-item', f.state === 'success' && 'ga-file-uploader__file-item--success', f.state === 'error' && 'ga-file-uploader__file-item--error')
  }, /*#__PURE__*/React.createElement("span", {
    className: f.state === 'error' ? 'ga-file-uploader__error-file' : undefined,
    style: f.state === 'error' ? undefined : {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ga-size-spacing-03)',
      width: '100%',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--ga-size-spacing-03)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "ga-file-uploader__file-icon",
    name: f.state === 'success' ? 'circle-check' : 'file-text'
  }), f.name), f.onRemove && /*#__PURE__*/React.createElement("button", {
    className: "ga-file-uploader__file-action",
    type: "button",
    "aria-label": "Remove file",
    onClick: f.onRemove
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 12
  }))), f.state === 'error' && f.error && /*#__PURE__*/React.createElement("span", {
    className: "ga-file-uploader__error-callout"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "ga-file-uploader__error-callout-icon",
    name: "octagon-alert"
  }), f.error)))));
}
Object.assign(__ds_scope, { FileUploader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/FileUploader.jsx", error: String((e && e.message) || e) }); }

// components/FormField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — FormField (Figma family "field"): label + control + helper/error.

function FormField({
  label,
  labelState,
  error,
  helper,
  htmlFor,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-form-field', className)
  }, rest), label != null && /*#__PURE__*/React.createElement("label", {
    className: "ga-form-field__label",
    htmlFor: htmlFor
  }, /*#__PURE__*/React.createElement("span", {
    className: "ga-form-field__label-text"
  }, label), labelState != null && /*#__PURE__*/React.createElement("span", {
    className: "ga-form-field__label-state"
  }, labelState)), children, error ? /*#__PURE__*/React.createElement("div", {
    className: "ga-form-field__info ga-form-field__info--error",
    role: "alert"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "octagon-alert",
    size: 12
  }), error) : helper ? /*#__PURE__*/React.createElement("div", {
    className: "ga-form-field__info"
  }, helper) : null);
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/FormField.jsx", error: String((e && e.message) || e) }); }

// components/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — IconButton (Figma family "button-icon"): a 40×40 icon-only
// .ga-button with a visually-hidden label for assistive tech.

function IconButton({
  icon,
  label,
  variant = 'secondary',
  size = 16,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: __ds_scope.cx('ga-button', `ga-button--${variant}`, 'ga-button--icon-only', className),
    "aria-label": label
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size
  }), /*#__PURE__*/React.createElement("span", {
    className: "ga-button__icon-label"
  }, label));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/Drawer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Drawer: sliding side panel (flyout in-flow, or modal over a scrim).

function Drawer({
  open = true,
  modal = false,
  side = 'end',
  title,
  description,
  footer,
  onClose,
  width,
  className,
  style,
  children,
  ...rest
}) {
  if (!open) return null;
  const panel = /*#__PURE__*/React.createElement("aside", _extends({
    className: __ds_scope.cx('ga-drawer', modal && 'ga-drawer--modal', side === 'start' && 'ga-drawer--start', className),
    role: modal ? 'dialog' : undefined,
    "aria-modal": modal || undefined,
    style: width ? {
      width,
      ...style
    } : style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ga-drawer__header"
  }, onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    variant: "ghost",
    icon: side === 'start' ? 'arrow-left' : 'arrow-right',
    label: "Close drawer",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "ga-drawer__header-section"
  }, title != null && /*#__PURE__*/React.createElement("div", {
    className: "ga-drawer__title"
  }, title), description != null && /*#__PURE__*/React.createElement("div", {
    className: "ga-drawer__description"
  }, description))), /*#__PURE__*/React.createElement("div", {
    className: "ga-drawer__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "ga-drawer__footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ga-drawer__footer-actions"
  }, footer)));
  if (!modal) return panel;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ga-drawer__backdrop",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx('ga-drawer__container', side === 'start' && 'ga-drawer__container--start')
  }, panel));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/InlineLoading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — InlineLoading: 16px status loader with caption label.

const STATE_ICON = {
  completed: 'circle-check',
  error: 'octagon-alert'
};
function InlineLoading({
  state = 'active',
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-inline-loading', `ga-inline-loading--${state}`, className)
  }, rest), state === 'active' ? /*#__PURE__*/React.createElement("span", {
    className: "ga-inline-loading__icon",
    role: "progressbar",
    "aria-label": "Loading"
  }) : STATE_ICON[state] ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "ga-inline-loading__icon",
    name: STATE_ICON[state]
  }) : null, children);
}
Object.assign(__ds_scope, { InlineLoading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/InlineLoading.jsx", error: String((e && e.message) || e) }); }

// components/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Input: field wrapper around a native <input>, with optional
// prefix/suffix content (icons, clear button, spinner).

const Input = React.forwardRef(function Input({
  invalid = false,
  success = false,
  disabled = false,
  prefix,
  suffix,
  className,
  style,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx('ga-input', invalid && 'ga-input--invalid', success && 'ga-input--success', disabled && 'ga-input--disabled', className),
    style: style
  }, prefix, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    disabled: disabled,
    "aria-invalid": invalid || undefined
  }, rest)), suffix);
});
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Input.jsx", error: String((e && e.message) || e) }); }

// components/Link.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Link. Sizes small/medium/large; inline variant for running text.

function Link({
  size = 'medium',
  inline = false,
  disabled = false,
  icon,
  iconPosition = 'end',
  className,
  children,
  ...rest
}) {
  const iconEl = icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "ga-link__icon",
    name: icon,
    size: size === 'large' ? 24 : 16
  }) : null;
  return /*#__PURE__*/React.createElement("a", _extends({
    className: __ds_scope.cx('ga-link', size !== 'medium' && `ga-link--${size}`, inline && 'ga-link--inline', disabled && 'ga-link--disabled', className),
    "aria-disabled": disabled || undefined,
    tabIndex: disabled ? -1 : undefined
  }, rest), iconPosition === 'start' && iconEl, children, iconPosition === 'end' && iconEl);
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Link.jsx", error: String((e && e.message) || e) }); }

// components/Loader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Loader: labelled spinner, stacked by default (inline optional).

function Loader({
  size = 'medium',
  inline = false,
  inverse = false,
  centered = false,
  label,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-loader', size !== 'medium' && `ga-loader--${size}`, inline && 'ga-loader--inline', inverse && 'ga-loader--inverse', centered && 'ga-loader--centered', className)
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ga-loader__spinner",
    role: "progressbar",
    "aria-label": label || 'Loading'
  }), /*#__PURE__*/React.createElement("span", {
    className: "ga-loader__label"
  }, label || children));
}
Object.assign(__ds_scope, { Loader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Loader.jsx", error: String((e && e.message) || e) }); }

// components/Menu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Menu: floating list of actions with icons, shortcuts,
// descriptions, separators and section titles.

function Menu({
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-menu', className),
    role: "menu"
  }, rest), children);
}
function MenuItem({
  icon,
  shortcut,
  description,
  selected = false,
  disabled = false,
  active = false,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "menuitem",
    className: __ds_scope.cx('ga-menu__item', selected && 'ga-menu__item--selected', disabled && 'ga-menu__item--disabled', active && 'ga-menu__item--active', className),
    disabled: disabled
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "ga-menu__item-icon",
    name: icon
  }), /*#__PURE__*/React.createElement("span", {
    className: "ga-menu__item-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ga-menu__item-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ga-menu__item-label"
  }, children), shortcut && /*#__PURE__*/React.createElement("span", {
    className: "ga-menu__item-shortcut"
  }, shortcut)), description != null && /*#__PURE__*/React.createElement("span", {
    className: "ga-menu__item-description"
  }, description)));
}
function MenuTitle({
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-menu__title', className)
  }, rest), children);
}
function MenuSeparator({
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-menu__separator', className),
    role: "separator"
  }, rest));
}
Object.assign(__ds_scope, { Menu, MenuItem, MenuTitle, MenuSeparator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Menu.jsx", error: String((e && e.message) || e) }); }

// components/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Modal. Renders backdrop + centered dialog when `open`.
// Title should match the trigger; actions are verbs, never Yes/No.

const TYPE_ICON = {
  information: 'info',
  danger: 'octagon-alert',
  warning: 'triangle-alert',
  success: 'circle-check'
};
function Modal({
  open = true,
  size = 'medium',
  type,
  // 'information' | 'danger' | 'warning' | 'success'
  label,
  title,
  actions,
  onClose,
  className,
  children,
  ...rest
}) {
  if (!open) return null;
  const iconName = TYPE_ICON[type];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ga-modal__backdrop",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "ga-modal__container"
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-modal', `ga-modal--${size}`, type && `ga-modal--${type}`, className),
    role: type === 'danger' ? 'alertdialog' : 'dialog',
    "aria-modal": "true"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ga-modal__top-section"
  }, iconName && /*#__PURE__*/React.createElement("span", {
    className: "ga-modal__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconName,
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    className: "ga-modal__heading"
  }, label != null && /*#__PURE__*/React.createElement("div", {
    className: "ga-modal__label"
  }, label), title != null && /*#__PURE__*/React.createElement("div", {
    className: "ga-modal__title"
  }, title)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "ga-modal__close ga-modal__close-icon",
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 24
  }))), children != null && /*#__PURE__*/React.createElement("div", {
    className: "ga-modal__content"
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "ga-modal__actions"
  }, actions))));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Modal.jsx", error: String((e && e.message) || e) }); }

// components/Notification.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Notification (alert) + Toast. Variant "brand" is the default
// primary-border surface (no icon); status variants add a 24px icon.

const VARIANT_ICON = {
  information: 'info',
  success: 'circle-check',
  warning: 'triangle-alert',
  error: 'octagon-alert'
};
function Notification({
  variant = 'brand',
  title,
  actions,
  onClose,
  progress,
  // 0–100, or 'indeterminate'
  className,
  children,
  ...rest
}) {
  const iconName = VARIANT_ICON[variant];
  const indeterminate = progress === 'indeterminate';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-notification', `ga-notification--${variant}`, className),
    role: variant === 'error' || variant === 'warning' ? 'alert' : 'status'
  }, rest), iconName && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "ga-notification__icon",
    name: iconName,
    size: 24
  }), /*#__PURE__*/React.createElement("div", {
    className: "ga-notification__content"
  }, title != null && /*#__PURE__*/React.createElement("div", {
    className: "ga-notification__heading"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ga-notification__title"
  }, title), actions && /*#__PURE__*/React.createElement("span", {
    className: "ga-notification__title-actions"
  }, actions)), children != null && /*#__PURE__*/React.createElement("div", {
    className: "ga-notification__description"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "ga-notification__close",
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close"
  })), progress != null && /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx('ga-notification__progress', indeterminate && 'ga-notification__progress--indeterminate')
  }, /*#__PURE__*/React.createElement("div", {
    className: "ga-notification__progress-bar",
    style: indeterminate ? undefined : {
      width: `${progress}%`
    }
  })));
}
function Toast({
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Notification, _extends({
    variant: "information"
  }, rest, {
    className: __ds_scope.cx('ga-toast', className)
  }));
}
function ToastStack({
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-toast-stack', className)
  }, rest), children);
}
Object.assign(__ds_scope, { Notification, Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Notification.jsx", error: String((e && e.message) || e) }); }

// components/PageHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — PageHeader: global-navigation row + optional page-navigation row.

function PageHeader({
  start,
  actions,
  pageNavStart,
  pageNavEnd,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    className: __ds_scope.cx('ga-page-header', className)
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ga-page-header__global-navigation"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ga-page-header__menu-breadcrumbs"
  }, start), actions && /*#__PURE__*/React.createElement("div", {
    className: "ga-page-header__header-actions"
  }, actions)), (pageNavStart || pageNavEnd) && /*#__PURE__*/React.createElement("div", {
    className: "ga-page-header__page-navigation"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ga-page-header__page-nav-start"
  }, pageNavStart), /*#__PURE__*/React.createElement("div", {
    className: "ga-page-header__page-nav-end"
  }, pageNavEnd)), children);
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Pagination (compact numbered form).

function pageModel(page, count) {
  if (count <= 7) return Array.from({
    length: count
  }, (_, i) => i + 1);
  const pages = [1];
  if (page > 3) pages.push('…');
  for (let p = Math.max(2, page - 1); p <= Math.min(count - 1, page + 1); p++) pages.push(p);
  if (page < count - 2) pages.push('…');
  pages.push(count);
  return pages;
}
function Pagination({
  page = 1,
  count = 1,
  onChange,
  summary,
  className,
  ...rest
}) {
  const go = p => onChange && onChange(Math.min(Math.max(1, p), count));
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Pagination",
    className: __ds_scope.cx('ga-pagination', className)
  }, rest), summary != null && /*#__PURE__*/React.createElement("span", {
    className: "ga-pagination__summary"
  }, summary), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ga-pagination__button",
    "aria-label": "Previous page",
    disabled: page <= 1,
    onClick: () => go(page - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left"
  })), pageModel(page, count).map((p, i) => p === '…' ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    className: "ga-pagination__ellipsis"
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    type: "button",
    className: __ds_scope.cx('ga-pagination__button', p === page && 'ga-pagination__button--selected'),
    "aria-current": p === page ? 'page' : undefined,
    onClick: () => go(p)
  }, p)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ga-pagination__button",
    "aria-label": "Next page",
    disabled: page >= count,
    onClick: () => go(page + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right"
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — ProgressBar. 4px track with optional label/helper.

const STATE_ICON = {
  success: 'circle-check',
  error: 'octagon-alert'
};
function ProgressBar({
  value,
  indeterminate = false,
  variant,
  label,
  helper,
  className,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-progress', variant && `ga-progress--${variant}`, indeterminate && 'ga-progress--indeterminate', className)
  }, rest), label != null && /*#__PURE__*/React.createElement("div", {
    className: "ga-progress__label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "ga-progress__buffer",
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": indeterminate ? undefined : value
  }, /*#__PURE__*/React.createElement("div", {
    className: "ga-progress__bar",
    style: indeterminate ? undefined : {
      width: `${value ?? 0}%`
    }
  })), helper != null && /*#__PURE__*/React.createElement("div", {
    className: "ga-progress__helper"
  }, variant && STATE_ICON[variant] && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: STATE_ICON[variant],
    size: 12
  }), helper));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/ProgressIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — ProgressIndicator (multi-step). Pass `steps`; each carries a
// state that colours its stripe + 24px icon.

const STATE_ICON = {
  completed: 'circle-check',
  current: 'circle-dot',
  incomplete: 'circle-dashed',
  error: 'triangle-alert',
  disabled: 'circle-dashed'
};
function ProgressIndicator({
  steps = [],
  vertical = false,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-progress-indicator', vertical ? 'ga-progress-indicator--vertical' : 'ga-progress-indicator--horizontal', className)
  }, rest), steps.length ? steps.map((s, i) => {
    const state = s.state || 'incomplete';
    return /*#__PURE__*/React.createElement("button", {
      key: s.key ?? i,
      type: "button",
      className: __ds_scope.cx('ga-progress-indicator__item', `ga-progress-indicator__item--${state}`),
      "aria-current": state === 'current' ? 'step' : undefined,
      disabled: state === 'disabled',
      onClick: s.onClick
    }, /*#__PURE__*/React.createElement("span", {
      className: "ga-progress-indicator__indicator"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: s.icon || STATE_ICON[state],
      size: 24
    })), /*#__PURE__*/React.createElement("span", {
      className: "ga-progress-indicator__content"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ga-progress-indicator__label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ga-progress-indicator__label-text"
    }, s.label), s.labelState != null && /*#__PURE__*/React.createElement("span", {
      className: "ga-progress-indicator__label-state"
    }, s.labelState)), s.description != null && /*#__PURE__*/React.createElement("span", {
      className: "ga-progress-indicator__description"
    }, s.description)));
  }) : children);
}
Object.assign(__ds_scope, { ProgressIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ProgressIndicator.jsx", error: String((e && e.message) || e) }); }

// components/QuantitySelector.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — QuantitySelector: numeric stepper on the input chrome.

function QuantitySelector({
  value = 0,
  onChange,
  min = -Infinity,
  max = Infinity,
  step = 1,
  disabled = false,
  invalid = false,
  className,
  ...rest
}) {
  const set = v => {
    const clamped = Math.min(Math.max(v, min), max);
    if (!Number.isNaN(clamped)) onChange && onChange(clamped);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx('ga-input', 'ga-input--quantity-selector', invalid && 'ga-input--invalid', disabled && 'ga-input--disabled', className)
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "number",
    value: value,
    min: Number.isFinite(min) ? min : undefined,
    max: Number.isFinite(max) ? max : undefined,
    step: step,
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onChange: e => set(e.target.valueAsNumber)
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ga-input__quantity-separator"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ga-input__quantity-button",
    "aria-label": "Decrease",
    disabled: disabled || value <= min,
    onClick: () => set(value - step)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus"
  })), /*#__PURE__*/React.createElement("span", {
    className: "ga-input__quantity-separator"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ga-input__quantity-button",
    "aria-label": "Increase",
    disabled: disabled || value >= max,
    onClick: () => set(value + step)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus"
  })));
}
Object.assign(__ds_scope, { QuantitySelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/QuantitySelector.jsx", error: String((e && e.message) || e) }); }

// components/QuickFilterButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — QuickFilterButton (chip) + ChipListbox group.

function QuickFilterButton({
  selected = false,
  disabled = false,
  transparent = false,
  icon,
  count,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-pressed": selected,
    className: __ds_scope.cx('ga-quick-filter-button', selected && 'ga-quick-filter-button--selected', disabled && 'ga-quick-filter-button--disabled', transparent && 'ga-quick-filter-button--transparent', className),
    disabled: disabled
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon
  }), children, count != null && /*#__PURE__*/React.createElement("span", {
    className: "ga-quick-filter__count"
  }, count));
}
function ChipListbox({
  vertical = false,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "listbox",
    "aria-multiselectable": "true",
    className: __ds_scope.cx('ga-chip-listbox', vertical && 'ga-chip-listbox--vertical', className)
  }, rest), children);
}
Object.assign(__ds_scope, { QuickFilterButton, ChipListbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/QuickFilterButton.jsx", error: String((e && e.message) || e) }); }

// components/RadioButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — RadioButton + RadioGroup.

function RadioButton({
  label,
  invalid = false,
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: __ds_scope.cx('ga-radio-button', invalid && 'ga-radio-button--invalid', className),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    className: "ga-radio-button__native",
    type: "radio",
    "aria-invalid": invalid || undefined
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ga-radio-button__marker"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ga-radio-button__label"
  }, label));
}
function RadioGroup({
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    className: __ds_scope.cx('ga-radio-group', className)
  }, rest), children);
}
Object.assign(__ds_scope, { RadioButton, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/RadioButton.jsx", error: String((e && e.message) || e) }); }

// components/Search.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Search: search input with icon, optional clear + shortcut hint.
// Composition of the input chrome (Figma families "nav-search" / search).

const Search = React.forwardRef(function Search({
  value,
  onChange,
  onClear,
  shortcut,
  placeholder = 'Search',
  disabled = false,
  className,
  style,
  ...rest
}, ref) {
  const showClear = onClear && value;
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx('ga-input', disabled && 'ga-input--disabled', className),
    style: style,
    role: "search"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search"
  }), /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    type: "search",
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled
  }, rest)), showClear ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Clear search",
    onClick: onClear,
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--ga-color-icon-action)',
      display: 'inline-flex',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close"
  })) : shortcut ? /*#__PURE__*/React.createElement("span", {
    className: "ga-side-navigation__search-shortcut"
  }, shortcut) : null);
});
Object.assign(__ds_scope, { Search });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Search.jsx", error: String((e && e.message) || e) }); }

// components/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — SegmentedControl. Grouped single-select toolbar.

function SegmentedControl({
  options = [],
  value,
  onChange,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "group",
    className: __ds_scope.cx('ga-segmented-control', className)
  }, rest), options.length ? options.map(o => /*#__PURE__*/React.createElement(SegmentedControlButton, {
    key: o.value,
    selected: o.value === value,
    icon: o.icon,
    iconOnly: o.iconOnly,
    label: o.iconOnly ? String(o.label ?? o.value) : undefined,
    onClick: () => onChange && onChange(o.value)
  }, o.iconOnly ? null : o.label)) : children);
}
function SegmentedControlButton({
  selected = false,
  icon,
  iconOnly = false,
  label,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-pressed": selected,
    className: __ds_scope.cx('ga-segmented-control__button', selected && 'ga-segmented-control__button--selected', iconOnly && 'ga-segmented-control__button--icon-only', className)
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon
  }), children, iconOnly && label && /*#__PURE__*/React.createElement("span", {
    className: "ga-segmented-control__button-sr-label"
  }, label));
}
Object.assign(__ds_scope, { SegmentedControl, SegmentedControlButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/SideNavigation.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — SideNavigation: app-shell rail (320px) with switcher, items,
// and a user footer. Compose with SideNavigationItem or pass `items`.

function SideNavigation({
  switcher,
  items,
  footer,
  user,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: __ds_scope.cx('ga-side-navigation', className)
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ga-side-navigation__header"
  }, switcher && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ga-side-navigation__switcher"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ga-side-navigation__switcher-title"
  }, switcher), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevrons-up-down",
    className: "ga-side-navigation__switcher-action"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ga-side-navigation__body"
  }, items ? items.map((it, i) => /*#__PURE__*/React.createElement(SideNavigationItem, {
    key: it.key ?? i,
    icon: it.icon,
    active: it.active,
    disabled: it.disabled,
    level: it.level,
    description: it.description,
    onClick: it.onClick
  }, it.label)) : children), (user || footer) && /*#__PURE__*/React.createElement("div", {
    className: "ga-side-navigation__footer"
  }, footer, user && /*#__PURE__*/React.createElement("div", {
    className: "ga-side-navigation__user",
    tabIndex: 0
  }, user.avatar, /*#__PURE__*/React.createElement("span", {
    className: "ga-side-navigation__user-name"
  }, user.name), /*#__PURE__*/React.createElement("span", {
    className: "ga-side-navigation__user-action"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-up"
  })))));
}
function SideNavigationItem({
  icon,
  active = false,
  disabled = false,
  level,
  description,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: __ds_scope.cx('ga-side-navigation__item', active && 'ga-side-navigation__item--active', disabled && 'ga-side-navigation__item--disabled', level && level > 1 && `ga-side-navigation__item--level-${level}`, className),
    "aria-current": active ? 'page' : undefined,
    disabled: disabled
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "ga-side-navigation__item-icon",
    name: icon
  }), /*#__PURE__*/React.createElement("span", {
    className: "ga-side-navigation__item-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ga-side-navigation__item-label"
  }, children), description != null && /*#__PURE__*/React.createElement("span", {
    className: "ga-side-navigation__item-description"
  }, description)));
}
Object.assign(__ds_scope, { SideNavigation, SideNavigationItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/SideNavigation.jsx", error: String((e && e.message) || e) }); }

// components/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Skeleton: shimmering placeholder while content loads.

function Skeleton({
  width,
  height,
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: __ds_scope.cx('ga-skeleton', className),
    "aria-hidden": "true",
    style: {
      width,
      height,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Spinner. Orange track ring + rotating cyan quarter-arc.

function Spinner({
  size,
  className,
  style,
  ...rest
}) {
  const s = size ? {
    width: size,
    height: size,
    ...style
  } : style;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: __ds_scope.cx('ga-spinner', className),
    role: "progressbar",
    "aria-label": "Loading",
    style: s
  }, rest));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Button. Variants: primary · secondary (default) · ghost ·
// transparent. Markup contract: .ga-button + modifiers (see button.css).

function Button({
  variant = 'secondary',
  iconOnly = false,
  loading = false,
  loadingLabel = 'Loading…',
  className,
  children,
  disabled,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: __ds_scope.cx('ga-button', variant && `ga-button--${variant}`, iconOnly && 'ga-button--icon-only', loading && 'ga-button--loading', className),
    disabled: disabled || loading,
    "aria-busy": loading || undefined
  }, rest), loading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Spinner, null), /*#__PURE__*/React.createElement("span", {
    className: "ga-button__loading-label"
  }, loadingLabel)) : children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button.jsx", error: String((e && e.message) || e) }); }

// components/ContextSelector.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — ContextSelector: the multi-company/branch switcher organism.
// Kit: Context-selector (organisms). Panel of company/group rows with
// optional search slot, branch selector, section headers, favourites, and
// loading / error / empty / single-company states.

function ContextSelector({
  state = 'ready',
  stateLabel,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-context-selector', className),
    role: "listbox",
    "aria-busy": state === 'loading'
  }, rest), state === 'ready' && children, state === 'loading' && /*#__PURE__*/React.createElement("div", {
    className: "ga-context-selector__state"
  }, /*#__PURE__*/React.createElement(__ds_scope.Spinner, null), /*#__PURE__*/React.createElement("span", null, stateLabel || 'Loading companies…')), state === 'error' && /*#__PURE__*/React.createElement("div", {
    className: "ga-context-selector__state"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "error",
    size: 20,
    className: "ga-icon--error"
  }), /*#__PURE__*/React.createElement("span", null, stateLabel || 'Could not load companies. Try again.')), state === 'empty' && /*#__PURE__*/React.createElement("div", {
    className: "ga-context-selector__state"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, stateLabel || 'No results')));
}
function ContextSelectorSlot({
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-context-selector__slot', className)
  }, rest), children);
}
function ContextSelectorBranchSlot({
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-context-selector__branch-slot', className)
  }, rest), children);
}
function ContextSelectorSection({
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-context-selector__section', className),
    role: "presentation"
  }, rest), children);
}
function ContextSelectorList({
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-context-selector__list', className),
    role: "presentation"
  }, rest), children);
}
function ContextSelectorItem({
  type = 'company',
  name,
  meta,
  initials,
  selected = false,
  favourite,
  onFavourite,
  icon = 'store',
  className,
  ...rest
}) {
  if (type === 'branch') {
    return /*#__PURE__*/React.createElement("button", _extends({
      type: "button",
      role: "option",
      "aria-selected": selected,
      className: __ds_scope.cx('ga-context-selector__item', 'ga-context-selector__item--branch', selected && 'ga-context-selector__item--selected', className)
    }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: icon,
      size: 16
    }), /*#__PURE__*/React.createElement("span", {
      className: "ga-context-selector__name"
    }, name));
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "option",
    "aria-selected": selected,
    className: __ds_scope.cx('ga-context-selector__item', selected && 'ga-context-selector__item--selected', className)
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    initials: initials,
    icon: type === 'group' ? 'users' : 'building-2'
  }), /*#__PURE__*/React.createElement("span", {
    className: "ga-context-selector__details"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ga-context-selector__name"
  }, name), meta != null && /*#__PURE__*/React.createElement("span", {
    className: "ga-context-selector__meta"
  }, meta)), favourite != null && /*#__PURE__*/React.createElement("span", {
    role: "button",
    tabIndex: 0,
    "aria-label": favourite ? 'Remove favourite' : 'Add favourite',
    "aria-pressed": favourite,
    className: __ds_scope.cx('ga-context-selector__favourite', favourite && 'ga-context-selector__favourite--active'),
    onClick: e => {
      e.stopPropagation();
      onFavourite && onFavourite(e);
    },
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        onFavourite && onFavourite(e);
      }
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: 20
  })));
}
Object.assign(__ds_scope, { ContextSelector, ContextSelectorSlot, ContextSelectorBranchSlot, ContextSelectorSection, ContextSelectorList, ContextSelectorItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ContextSelector.jsx", error: String((e && e.message) || e) }); }

// components/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Switch. 48×24 track, 16px thumb, check glyph when on.

function Switch({
  label,
  invalid = false,
  className,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: __ds_scope.cx('ga-switch', invalid && 'ga-switch--invalid', className),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    className: "ga-switch__input",
    type: "checkbox",
    role: "switch",
    "aria-invalid": invalid || undefined
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ga-switch__marker"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ga-switch__slider"
  })), /*#__PURE__*/React.createElement("span", {
    className: "ga-switch__label"
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Switch.jsx", error: String((e && e.message) || e) }); }

// components/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Tabs. Underline tabs, horizontal (default) or vertical.

function Tabs({
  vertical = false,
  keyline = false,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    "aria-orientation": vertical ? 'vertical' : 'horizontal',
    className: __ds_scope.cx('ga-tabs', vertical ? 'ga-tabs--vertical' : 'ga-tabs--horizontal', keyline && 'ga-tabs--keyline', className)
  }, rest), children);
}
function Tab({
  selected = false,
  disabled = false,
  icon,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "tab",
    "aria-selected": selected,
    className: __ds_scope.cx('ga-tabs__tab', selected && 'ga-tabs__tab--selected', disabled && 'ga-tabs__tab--disabled', className),
    disabled: disabled
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "ga-tabs__tab-icon",
    name: icon
  }), children);
}
Object.assign(__ds_scope, { Tabs, Tab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Tag (Figma family "label"): status pill / utility rect / interactive.

function Tag({
  variant,
  // 'information' | 'success' | 'error' | 'warning' | 'disabled'
  utility,
  // 'grey' | 'indigo' | 'teal' | 'lime' | 'purple' | 'pink' | 'rose' | 'blue' | 'green' | 'orange' | 'disabled'
  interactive = false,
  selected = false,
  disabled = false,
  icon,
  onClose,
  className,
  children,
  ...rest
}) {
  const interactiveClass = interactive ? `ga-tag--interactive${selected ? '-selected' : ''}${disabled ? '-disabled' : ''}` : null;
  const Tag_ = interactive ? 'button' : 'span';
  return /*#__PURE__*/React.createElement(Tag_, _extends({
    className: __ds_scope.cx('ga-tag', variant && `ga-tag--${variant}`, utility && `ga-tag--utility-${utility}`, interactiveClass, className),
    disabled: interactive && disabled ? true : undefined
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "ga-tag__icon",
    name: icon
  }), /*#__PURE__*/React.createElement("span", {
    className: "ga-tag__label"
  }, children), onClose && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "ga-tag__separator"
  }), /*#__PURE__*/React.createElement("button", {
    className: "ga-tag__close",
    type: "button",
    "aria-label": "Remove",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 12
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tag.jsx", error: String((e && e.message) || e) }); }

// components/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Select. Controlled trigger + dropdown panel; single or multi
// (multi renders Tag chips). Minimal open/close state built in.

function Select({
  options = [],
  // [{ value, label, disabled }]
  value,
  // value | value[] (multi)
  onChange,
  multi = false,
  placeholder = 'Select an option',
  invalid = false,
  disabled = false,
  className,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);
  const values = multi ? Array.isArray(value) ? value : [] : value;
  const selectedOpts = options.filter(o => multi ? values.includes(o.value) : o.value === values);
  const isEmpty = multi ? selectedOpts.length === 0 : selectedOpts.length === 0;
  const pick = o => {
    if (multi) {
      const next = values.includes(o.value) ? values.filter(v => v !== o.value) : [...values, o.value];
      onChange && onChange(next);
    } else {
      onChange && onChange(o.value);
      setOpen(false);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: rootRef,
    style: {
      position: 'relative',
      display: 'inline-block',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "combobox",
    "aria-expanded": open,
    "aria-invalid": invalid || undefined,
    className: __ds_scope.cx('ga-select', multi && 'ga-select--multi', isEmpty && 'ga-select--empty', invalid && 'ga-select--invalid', disabled && 'ga-select--disabled', open && 'ga-select--expanded', className),
    onClick: () => !disabled && setOpen(o => !o),
    disabled: disabled
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ga-select__main-area"
  }, isEmpty ? /*#__PURE__*/React.createElement("span", {
    className: "ga-select__placeholder"
  }, placeholder) : multi ? /*#__PURE__*/React.createElement("span", {
    className: "ga-select__value"
  }, selectedOpts.map(o => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: o.value,
    onClose: e => {
      e.stopPropagation();
      pick(o);
    }
  }, o.label))) : /*#__PURE__*/React.createElement("span", {
    className: "ga-select__value"
  }, selectedOpts[0].label)), /*#__PURE__*/React.createElement("span", {
    className: "ga-select__suffix"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "ga-select__action-icon",
    name: open ? 'chevron-up' : 'chevron-down'
  }))), open && /*#__PURE__*/React.createElement(__ds_scope.Dropdown, {
    style: {
      position: 'absolute',
      top: 'calc(100% + 4px)',
      left: 0,
      minWidth: '100%',
      zIndex: 'var(--ga-index-popout)'
    }
  }, options.map(o => /*#__PURE__*/React.createElement(__ds_scope.DropdownItem, {
    key: o.value,
    selected: multi ? values.includes(o.value) : o.value === values,
    disabled: o.disabled,
    onClick: () => pick(o)
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Select.jsx", error: String((e && e.message) || e) }); }

// components/TextArea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — TextArea (canonical class ga-text-area).

const TextArea = React.forwardRef(function TextArea({
  invalid = false,
  className,
  ...rest
}, ref) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    ref: ref,
    className: __ds_scope.cx('ga-text-area', invalid && 'ga-text-area--invalid', className),
    "aria-invalid": invalid || undefined
  }, rest));
});
Object.assign(__ds_scope, { TextArea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/TextArea.jsx", error: String((e && e.message) || e) }); }

// components/Feedback.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Feedback: the in-product "How is your experience?" widget.
// Kit: Feedback (organisms). Three steps: prompt (thumbs) → optional
// comment (textarea + Submit/Cancel) → confirmation. Controlled or
// uncontrolled; `mobileFriendly` raises the title to 16px.

function Feedback({
  title = 'How is your experience with this page?',
  confirmationTitle = 'Thank you for taking the time 🙏',
  commentPlaceholder,
  submitLabel = 'Submit',
  cancelLabel = 'Cancel',
  mobileFriendly = false,
  step: controlledStep,
  onStepChange,
  onSubmit,
  onDismiss,
  className,
  ...rest
}) {
  const [uncontrolledStep, setUncontrolledStep] = React.useState('prompt');
  const [rating, setRating] = React.useState(null);
  const [comment, setComment] = React.useState('');
  const step = controlledStep ?? uncontrolledStep;
  const go = next => {
    if (controlledStep == null) setUncontrolledStep(next);
    onStepChange && onStepChange(next);
  };
  const rate = value => {
    setRating(value);
    go('comment');
  };
  const submit = () => {
    onSubmit && onSubmit({
      rating,
      comment
    });
    go('confirmation');
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: __ds_scope.cx('ga-feedback', step === 'comment' && 'ga-feedback--comment', mobileFriendly && 'ga-feedback--mobile', className),
    role: "group",
    "aria-label": typeof title === 'string' ? title : 'Feedback'
  }, rest), step === 'confirmation' ? /*#__PURE__*/React.createElement("div", {
    className: "ga-feedback__content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ga-feedback__title ga-feedback__title--confirmation"
  }, confirmationTitle)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ga-feedback__content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ga-feedback__title"
  }, title), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ga-feedback__close",
    "aria-label": "Dismiss",
    onClick: onDismiss
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ga-feedback__actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: rating === 'good' ? 'primary' : 'transparent',
    iconOnly: true,
    "aria-label": "Good experience",
    "aria-pressed": rating === 'good',
    onClick: () => rate('good')
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "thumbs-up",
    size: 16
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: rating === 'bad' ? 'primary' : 'transparent',
    iconOnly: true,
    "aria-label": "Bad experience",
    "aria-pressed": rating === 'bad',
    onClick: () => rate('bad')
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "thumbs-down",
    size: 16
  }))), step === 'comment' && /*#__PURE__*/React.createElement("div", {
    className: "ga-feedback__comment"
  }, /*#__PURE__*/React.createElement(__ds_scope.TextArea, {
    rows: 4,
    placeholder: commentPlaceholder,
    "aria-label": "Tell us more",
    value: comment,
    onChange: e => setComment(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    className: "ga-feedback__button-row"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: submit
  }, submitLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    onClick: () => go('prompt')
  }, cancelLabel)))));
}
Object.assign(__ds_scope, { Feedback });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Feedback.jsx", error: String((e && e.message) || e) }); }

// components/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gaia DS — Tooltip. Dark contextual surface with placement arrow; not a
// positioner — place it yourself (or with your own floating logic).

function Tooltip({
  placement,
  title,
  shortcut = false,
  onClose,
  actions,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tooltip",
    className: __ds_scope.cx('ga-tooltip', placement && `ga-tooltip--${placement}`, shortcut && 'ga-tooltip--shortcut', className)
  }, rest), title != null || onClose ? /*#__PURE__*/React.createElement("div", {
    className: "ga-tooltip__row"
  }, /*#__PURE__*/React.createElement("div", null, title != null && /*#__PURE__*/React.createElement("div", {
    className: "ga-tooltip__title"
  }, title), children), onClose && /*#__PURE__*/React.createElement("button", {
    className: "ga-tooltip__close",
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 12
  }))) : children, actions && /*#__PURE__*/React.createElement("div", {
    className: "ga-tooltip__actions"
  }, actions));
}
function Kbd({
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("kbd", _extends({
    className: __ds_scope.cx('ga-kbd', className)
  }, rest), children);
}
Object.assign(__ds_scope, { Tooltip, Kbd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tooltip.jsx", error: String((e && e.message) || e) }); }

// icons.js
try { (() => {
// Gaia Design System — Lucide-backed icon set.
// Gaia uses Lucide (lucide.dev) as its sole icon library: 24×24 grid, 1.5 stroke,
// rounded caps/joins, no fills, inheriting currentColor.
//
// Usage (unchanged):  <span class="ga-icon" data-icon="search" data-size="20"></span>
//
// How it works: icons render INSTANTLY from a small embedded fallback set so the
// system works offline and never flashes empty. As soon as the official Lucide
// UMD build loads from the CDN, every .ga-icon is re-rendered with the authentic
// Lucide glyph. data-icon keys map to canonical Lucide names below; any key not in
// the map is used as-is (so real Lucide names like "globe"/"heart" just work).
window.GAIA_ICONS = (() => {
  const S = 'fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';

  /* ---- Gaia data-icon key → canonical Lucide name (only where they differ) ---- */
  const MAP = {
    arrowL: 'arrow-left',
    arrowR: 'arrow-right',
    chevronL: 'chevron-left',
    chevronR: 'chevron-right',
    chevronU: 'chevron-up',
    chevronD: 'chevron-down',
    chevronFirst: 'chevrons-left',
    chevronLast: 'chevrons-right',
    chevronsUpDown: 'chevrons-up-down',
    close: 'x',
    'x-circle': 'circle-x',
    error: 'circle-x',
    doc: 'file-text',
    invoice: 'receipt-text',
    edit: 'pencil',
    trash: 'trash-2',
    external: 'external-link',
    logout: 'log-out',
    refresh: 'refresh-cw',
    more: 'ellipsis-vertical',
    moreH: 'ellipsis',
    grid: 'layout-grid',
    home: 'house',
    help: 'circle-help',
    'circle-question-mark': 'circle-help',
    success: 'circle-check',
    warning: 'triangle-alert',
    chart: 'line-chart',
    creditcard: 'credit-card'
  };
  const lucideName = key => MAP[key] || key;
  const toPascal = name => name.split(/[-_]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');

  /* ---- embedded fallback paths (Lucide-spec line work, used until/if CDN fails) ---- */
  const P = {
    home: `<path ${S} d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1v-9.5Z"/>`,
    search: `<circle ${S} cx="11" cy="11" r="7"/><path ${S} d="m20 20-4.3-4.3"/>`,
    settings: `<circle ${S} cx="12" cy="12" r="3"/><path ${S} d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>`,
    menu: `<path ${S} d="M4 6h16M4 12h16M4 18h16"/>`,
    close: `<path ${S} d="M18 6 6 18M6 6l12 12"/>`,
    'x-circle': `<circle ${S} cx="12" cy="12" r="9"/><path ${S} d="m15 9-6 6M9 9l6 6"/>`,
    chevronL: `<path ${S} d="m15 18-6-6 6-6"/>`,
    chevronR: `<path ${S} d="m9 18 6-6-6-6"/>`,
    chevronFirst: `<path ${S} d="m18 17-5-5 5-5M11 17l-5-5 5-5"/>`,
    chevronLast: `<path ${S} d="m6 17 5-5-5-5M13 17l5-5-5-5"/>`,
    chevronD: `<path ${S} d="m6 9 6 6 6-6"/>`,
    chevronU: `<path ${S} d="m18 15-6-6-6 6"/>`,
    chevronsUpDown: `<path ${S} d="m7 15 5 5 5-5"/><path ${S} d="m7 9 5-5 5 5"/>`,
    plus: `<path ${S} d="M12 5v14M5 12h14"/>`,
    minus: `<path ${S} d="M5 12h14"/>`,
    external: `<path ${S} d="M15 3h6v6M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>`,
    filter: `<path ${S} d="M3 4h18l-7 9v6l-4-2v-4L3 4Z"/>`,
    check: `<path ${S} d="m5 12 4 4L19 7"/>`,
    info: `<circle ${S} cx="12" cy="12" r="9"/><path ${S} d="M12 16v-4M12 8h.01"/>`,
    warning: `<path ${S} d="M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path ${S} d="M12 9v4M12 17h.01"/>`,
    error: `<circle ${S} cx="12" cy="12" r="9"/><path ${S} d="m15 9-6 6M9 9l6 6"/>`,
    success: `<circle ${S} cx="12" cy="12" r="9"/><path ${S} d="m8 12 3 3 5-6"/>`,
    help: `<circle ${S} cx="12" cy="12" r="9"/><path ${S} d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>`,
    user: `<circle ${S} cx="12" cy="8" r="4"/><path ${S} d="M4 21a8 8 0 0 1 16 0"/>`,
    logout: `<path ${S} d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>`,
    calendar: `<rect ${S} x="3" y="4" width="18" height="17" rx="2"/><path ${S} d="M16 2v4M8 2v4M3 10h18"/>`,
    mail: `<rect ${S} x="3" y="5" width="18" height="14" rx="2"/><path ${S} d="m3 7 9 6 9-6"/>`,
    doc: `<path ${S} d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path ${S} d="M14 3v6h6M9 13h6M9 17h6"/>`,
    folder: `<path ${S} d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/>`,
    trash: `<path ${S} d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>`,
    edit: `<path ${S} d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z"/>`,
    download: `<path ${S} d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>`,
    bell: `<path ${S} d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0"/>`,
    'bell-off': `<path ${S} d="M8.7 4a6 6 0 0 1 9.3 4c0 3 .7 5.2 1.5 6.7M18 17H3s3-2 3-9M2 2l20 20M10.3 21a1.94 1.94 0 0 0 3.4 0"/>`,
    star: `<path ${S} d="m12 2 3.1 6.3 7 1-5 4.9 1.2 6.8L12 18l-6.2 3 1.1-6.8-5-4.9 7-1L12 2Z"/>`,
    eye: `<path ${S} d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"/><circle ${S} cx="12" cy="12" r="3"/>`,
    'eye-off': `<path ${S} d="M3 3l18 18M10.6 5.1A11.7 11.7 0 0 1 23 12s-1.5 3-4.5 5.4M6 6.4C2.5 8.5 1 12 1 12s4 8 11 8a11 11 0 0 0 4.7-1M9.9 9.9a3 3 0 0 0 4.2 4.2"/>`,
    lock: `<rect ${S} x="3" y="11" width="18" height="11" rx="2"/><path ${S} d="M7 11V7a5 5 0 0 1 10 0v4"/>`,
    refresh: `<path ${S} d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/>`,
    arrowR: `<path ${S} d="M5 12h14M13 5l7 7-7 7"/>`,
    arrowL: `<path ${S} d="M19 12H5M11 5l-7 7 7 7"/>`,
    more: `<circle ${S} cx="12" cy="5" r="1"/><circle ${S} cx="12" cy="12" r="1"/><circle ${S} cx="12" cy="19" r="1"/>`,
    moreH: `<circle ${S} cx="5" cy="12" r="1"/><circle ${S} cx="12" cy="12" r="1"/><circle ${S} cx="19" cy="12" r="1"/>`,
    grid: `<rect ${S} x="3" y="3" width="7" height="7"/><rect ${S} x="14" y="3" width="7" height="7"/><rect ${S} x="14" y="14" width="7" height="7"/><rect ${S} x="3" y="14" width="7" height="7"/>`,
    list: `<path ${S} d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>`,
    chart: `<path ${S} d="M3 3v18h18"/><path ${S} d="m7 16 4-4 4 4 5-6"/>`,
    invoice: `<path ${S} d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path ${S} d="M14 3v6h6M9 15h6M9 11h3"/>`,
    building: `<path ${S} d="M3 21V7l9-4 9 4v14"/><path ${S} d="M3 21h18M9 9h.01M12 9h.01M15 9h.01M9 13h.01M12 13h.01M15 13h.01M9 17h.01M12 17h.01M15 17h.01"/>`,
    clock: `<circle ${S} cx="12" cy="12" r="9"/><path ${S} d="M12 7v5l3 2"/>`,
    users: `<path ${S} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle ${S} cx="9" cy="7" r="4"/><path ${S} d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>`,
    creditcard: `<rect ${S} x="2" y="5" width="20" height="14" rx="2"/><path ${S} d="M2 10h20"/>`,
    upload: `<path ${S} d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>`,
    'circle-dashed': `<path ${S} d="M10.1 2.18a10 10 0 0 1 3.8 0M17 3.34a10 10 0 0 1 2.83 2.83M21 9.36a10 10 0 0 1 .65 4.18M19.97 17a10 10 0 0 1-2.83 2.83M13.85 21.83a10 10 0 0 1-3.7 0M6.97 19.97A10 10 0 0 1 4.14 17M2.18 13.85a10 10 0 0 1 0-3.7M3.34 7A10 10 0 0 1 6.17 4.17"/>`,
    'circle-dot': `<circle ${S} cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3" fill="currentColor"/>`,
    'circle-check': `<circle ${S} cx="12" cy="12" r="9"/><path ${S} d="m9 12 2 2 4-4"/>`,
    'circle-question-mark': `<circle ${S} cx="12" cy="12" r="9"/><path ${S} d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path ${S} d="M12 17h.01"/>`,
    'triangle-alert': `<path ${S} d="M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path ${S} d="M12 9v4M12 17h.01"/>`,
    'octagon-alert': `<path ${S} d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"/><path ${S} d="M12 8v4M12 16h.01"/>`,
    globe: `<circle ${S} cx="12" cy="12" r="9"/><path ${S} d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"/>`,
    heart: `<path ${S} d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 5 4.5 4.5 0 0 0 2 8.5c0 2.2 1.5 4 3 5.5l7 7Z"/>`,
    'x': `<path ${S} d="M18 6 6 18M6 6l12 12"/>`
  };

  /* ---- build an <svg> string for a key, preferring authentic Lucide ---- */
  function innerFor(key) {
    const L = typeof window !== 'undefined' && window.lucide;
    if (L && L.icons && typeof L.createElement === 'function') {
      const node = L.icons[toPascal(lucideName(key))];
      if (node) {
        try {
          const el = L.createElement(node);
          if (el && el.innerHTML) return el.innerHTML;
        } catch (_) {/* fall through to embedded */}
      }
    }
    return P[key] || P[lucideName(key)] || '';
  }
  function svgFor(name, size = 16) {
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${innerFor(name)}</svg>`;
  }
  function paint(root) {
    (root || document).querySelectorAll('.ga-icon[data-icon]').forEach(el => {
      const name = el.getAttribute('data-icon');
      const size = el.getAttribute('data-size') || 16;
      el.innerHTML = svgFor(name, size);
    });
  }

  /* ---- ensure the official Lucide UMD is loaded, then re-paint with real glyphs ---- */
  let loading = false;
  function ensureLucide(done) {
    if (typeof document === 'undefined') return;
    if (window.lucide && window.lucide.icons) return done && done();
    let s = document.getElementById('ga-lucide-cdn');
    if (!s) {
      s = document.createElement('script');
      s.id = 'ga-lucide-cdn';
      s.src = 'https://unpkg.com/lucide@latest/dist/umd/lucide.js';
      document.head.appendChild(s);
    }
    s.addEventListener('load', () => done && done());
    s.addEventListener('error', () => done && done()); // keep embedded fallback
  }
  function hydrate(root = document) {
    paint(root); // instant: embedded fallback
    ensureLucide(() => paint(document)); // upgrade everything to real Lucide
  }
  return {
    paths: P,
    map: MAP,
    svgFor,
    hydrate,
    lucideName
  };
})();
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.GAIA_ICONS.hydrate());
  } else {
    window.GAIA_ICONS.hydrate();
  }
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "icons.js", error: String((e && e.message) || e) }); }

// showcase/motion.js
try { (() => {
/* ============================================================
   Gaia Showcase — motion primitives
   Single source of truth: every duration and easing is read at
   runtime from the Gaia design tokens (tokens.css). No literal
   timing values may appear in showcase animation code.

   Load order (all pages):
     gsap.min.js, ScrollTrigger, ScrollSmoother, SplitText,
     Flip, CustomEase  →  this file  →  page script.

   Page scripts use:
     GaMotion.dur.fast / .moderate / .slow / .slower  (seconds, pre-scaled)
     GaMotion.ease.standard / .entrance / .exit       (GSAP ease names)
     GaMotion.reduced                                 (boolean)
     GaMotion.page(fn)         — gsap.context wrapper w/ cleanup
     GaMotion.smooth()         — ScrollSmoother provider (no-op if reduced)
     GaMotion.reveal(targets, opts) — token-timed scroll entrance
     GaMotion.heading(el)      — SplitText line reveal (skips if reduced)
   ============================================================ */
(function () {
  "use strict";

  var rootStyle = getComputedStyle(document.documentElement);
  function cssVar(name) {
    return rootStyle.getPropertyValue(name).trim();
  }
  function ms(name) {
    // "150ms" | "0.15s" → seconds
    var v = cssVar(name);
    if (!v) return 0;
    var n = parseFloat(v);
    return /ms\s*$/.test(v) ? n / 1000 : n;
  }
  function bezier(name, fallbackLinear) {
    // "cubic-bezier(0.2, 0, 0.38, 0.9)" → "0.2,0,0.38,0.9"
    var v = cssVar(name);
    var m = v.match(/cubic-bezier\(([^)]+)\)/);
    if (m) return m[1].replace(/\s+/g, "");
    return fallbackLinear ? "0,0,1,1" : null;
  }

  // --- Reduced motion: the token itself is the switch. -------------
  var scalar = parseFloat(cssVar("--ga-duration-scalar"));
  if (isNaN(scalar)) scalar = 1;
  var reduced = scalar === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // --- Durations (seconds, pre-multiplied by the scalar). ----------
  // Cinematic sequences CHAIN these steps; never invent longer values.
  var dur = {
    zero: 0,
    instant: ms("--ga-duration-instant") * scalar,
    fast: ms("--ga-duration-fast") * scalar,
    moderate: ms("--ga-duration-moderate") * scalar,
    slow: ms("--ga-duration-slow") * scalar,
    slower: ms("--ga-duration-slower") * scalar
  };

  // --- Easings → CustomEase registered under stable names. ---------
  var ease = {
    standard: "power1.inOut",
    entrance: "power2.out",
    exit: "power2.in",
    linear: "none"
  };
  if (window.CustomEase) {
    var defs = {
      standard: bezier("--ga-easing-standard"),
      entrance: bezier("--ga-easing-entrance"),
      exit: bezier("--ga-easing-exit")
    };
    Object.keys(defs).forEach(function (k) {
      if (defs[k]) {
        CustomEase.create("ga-" + k, defs[k]);
        ease[k] = "ga-" + k;
      }
    });
    ease.linear = "none";
  }
  if (window.gsap) {
    gsap.registerPlugin.apply(gsap, [window.ScrollTrigger, window.ScrollSmoother, window.SplitText, window.Flip, window.CustomEase].filter(Boolean));
    gsap.defaults({
      ease: ease.standard,
      duration: dur.moderate
    });
  }

  // --- Primitives ---------------------------------------------------
  var GaMotion = {
    dur: dur,
    ease: ease,
    reduced: reduced,
    cssVar: cssVar,
    /* Wrap a page's animation setup in gsap.context for clean revert. */
    page: function (fn, scope) {
      var ctx = gsap.context(fn, scope || document.body);
      window.addEventListener("pagehide", function () {
        ctx.revert();
      }, {
        once: true
      });
      return ctx;
    },
    /* Smooth scroll provider. Markup: #smooth-wrapper > #smooth-content. */
    smooth: function () {
      if (reduced || !window.ScrollSmoother) return null;
      if (!document.getElementById("smooth-wrapper")) return null;
      return ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        normalizeScroll: false
      });
    },
    /* Scroll-gated entrance: transform+opacity only, token-timed.
       opts: { y, stagger:boolean|number, trigger, start, scrub, delaySteps } */
    reveal: function (targets, opts) {
      opts = opts || {};
      var els = gsap.utils.toArray(targets);
      if (!els.length) return null;
      if (reduced || !window.gsap || !window.ScrollTrigger) return null;
      var y = opts.y != null ? opts.y : parseFloat(cssVar("--ga-size-24")) || 24;
      return gsap.from(els, {
        y: y,
        autoAlpha: 0,
        duration: dur.slow,
        ease: ease.entrance,
        stagger: opts.stagger === true ? dur.instant : opts.stagger || 0,
        delay: opts.delaySteps ? opts.delaySteps * dur.fast : 0,
        scrollTrigger: {
          trigger: opts.trigger || els[0],
          start: opts.start || "top 85%",
          scrub: opts.scrub || false,
          once: !opts.scrub
        },
        clearProps: "transform"
      });
    },
    /* SplitText heading reveal by line. Runs only once web fonts have
       finished loading — SplitText measures real glyph metrics, and
       splitting against fallback-font metrics before swap can miscompute
       line breaks and leave the heading blank or malformed. Fires
       asynchronously (after document.fonts.ready); the plain heading stays
       visible in the meantime, so there is no flash of missing text. */
    heading: function (el, opts) {
      var node = typeof el === "string" ? document.querySelector(el) : el;
      if (!node) return null;
      if (reduced || !window.gsap || !window.SplitText) return null;
      opts = opts || {};
      function run() {
        if (!node.isConnected) return;
        var split = new SplitText(node, {
          type: "lines",
          linesClass: "ga-sc-line"
        });
        if (!split.lines || !split.lines.length) return; // nothing measurable — leave plain text visible
        // Mask each line for a clean rise.
        split.lines.forEach(function (l) {
          var wrap = document.createElement("span");
          wrap.style.display = "block";
          wrap.style.overflow = "hidden";
          l.parentNode.insertBefore(wrap, l);
          wrap.appendChild(l);
        });
        gsap.from(split.lines, {
          yPercent: 110,
          duration: dur.slower,
          ease: ease.entrance,
          stagger: dur.fast,
          delay: opts.delaySteps ? opts.delaySteps * dur.fast : 0,
          scrollTrigger: opts.scroll === false ? null : {
            trigger: node,
            start: "top 90%",
            once: true
          }
        });
      }
      if (document.fonts && document.fonts.status !== "loaded") {
        document.fonts.ready.then(run);
      } else {
        run();
      }
      return null;
    }
  };
  window.GaMotion = GaMotion;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "showcase/motion.js", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.AccordionItem = __ds_scope.AccordionItem;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BadgeIndicator = __ds_scope.BadgeIndicator;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Calendar = __ds_scope.Calendar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.CheckboxGroup = __ds_scope.CheckboxGroup;

__ds_ns.ContextSelector = __ds_scope.ContextSelector;

__ds_ns.ContextSelectorSlot = __ds_scope.ContextSelectorSlot;

__ds_ns.ContextSelectorBranchSlot = __ds_scope.ContextSelectorBranchSlot;

__ds_ns.ContextSelectorSection = __ds_scope.ContextSelectorSection;

__ds_ns.ContextSelectorList = __ds_scope.ContextSelectorList;

__ds_ns.ContextSelectorItem = __ds_scope.ContextSelectorItem;

__ds_ns.Datepicker = __ds_scope.Datepicker;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.DropdownItem = __ds_scope.DropdownItem;

__ds_ns.Feedback = __ds_scope.Feedback;

__ds_ns.FileUploader = __ds_scope.FileUploader;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.InlineLoading = __ds_scope.InlineLoading;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.Loader = __ds_scope.Loader;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.MenuItem = __ds_scope.MenuItem;

__ds_ns.MenuTitle = __ds_scope.MenuTitle;

__ds_ns.MenuSeparator = __ds_scope.MenuSeparator;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Notification = __ds_scope.Notification;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.ProgressIndicator = __ds_scope.ProgressIndicator;

__ds_ns.QuantitySelector = __ds_scope.QuantitySelector;

__ds_ns.QuickFilterButton = __ds_scope.QuickFilterButton;

__ds_ns.ChipListbox = __ds_scope.ChipListbox;

__ds_ns.RadioButton = __ds_scope.RadioButton;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Search = __ds_scope.Search;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.SegmentedControlButton = __ds_scope.SegmentedControlButton;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SideNavigation = __ds_scope.SideNavigation;

__ds_ns.SideNavigationItem = __ds_scope.SideNavigationItem;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tab = __ds_scope.Tab;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TextArea = __ds_scope.TextArea;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Kbd = __ds_scope.Kbd;

})();
