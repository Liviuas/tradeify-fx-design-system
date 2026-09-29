/* Tradeify FX UI kit — minimal behaviour for Tabs, Accordion, Dropdown, Plan selector.
   Markup contract is documented in ui_kits/tradeify-fx/README.md. No dependencies. */
(function () {
  function on(root, sel, type, fn) { root.addEventListener(type, function (e) { var t = e.target.closest(sel); if (t && root.contains(t)) fn(e, t); }); }
  function init(root) {
    root = root || document;
    on(root, '.tfx-tab', 'click', function (e, tab) {
      var list = tab.closest('.tfx-tabs'); if (!list) return;
      list.querySelectorAll('.tfx-tab').forEach(function (t) { t.setAttribute('aria-selected', t === tab ? 'true' : 'false'); });
    });
    on(root, '.tfx-acc__head', 'click', function (e, head) {
      var acc = head.closest('.tfx-acc'); var open = acc.getAttribute('data-open') === 'true';
      acc.setAttribute('data-open', open ? 'false' : 'true'); head.setAttribute('aria-expanded', open ? 'false' : 'true');
      var g = acc.querySelector('.tfx-acc__glyph'); if (g) g.textContent = open ? '[+]' : '[-]';
    });
    on(root, '.tfx-dropdown__trigger', 'click', function (e, trg) {
      var dd = trg.closest('.tfx-dropdown'); var open = dd.getAttribute('data-open') === 'true';
      dd.setAttribute('data-open', open ? 'false' : 'true'); trg.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
    on(root, '.tfx-dropdown__menu [role="option"]', 'click', function (e, opt) {
      var dd = opt.closest('.tfx-dropdown');
      dd.querySelectorAll('[role="option"]').forEach(function (o) { o.setAttribute('aria-selected', o === opt ? 'true' : 'false'); });
      var label = dd.querySelector('.tfx-dropdown__label'); if (label) label.textContent = opt.textContent.trim();
      dd.setAttribute('data-open', 'false');
    });
    on(root, '.tfx-plan', 'click', function (e, plan) {
      var group = plan.parentElement;
      group.querySelectorAll('.tfx-plan').forEach(function (p) { p.setAttribute('aria-pressed', p === plan ? 'true' : 'false'); });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { init(); }); else init();
  window.TFX = { init: init };
})();
