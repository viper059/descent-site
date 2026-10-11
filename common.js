(function () {
  var S = window.SHOP;
  var page = (document.querySelector("[data-page]") || document.body).getAttribute("data-page");

  function h(tag, attrs, kids) {
    var el = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (attrs[k] === null || attrs[k] === undefined) return;
      if (k === "text") el.textContent = attrs[k]; else el.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) el.appendChild(c); });
    return el;
  }
  function $(id) { return document.getElementById(id); }
  var mapHref = S.mapUrl || "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(S.nameTh + " Descent " + S.province);

  /* ---------- nav + footer ---------- */
  var pages = [["index.html", "หน้าแรก", "home"], ["gallery.html", "ผลงาน", "gallery"], ["videos.html", "วิดีโอ", "videos"], ["contact.html", "ติดต่อ", "contact"]];
  var root = document.querySelector("[data-page]") || document.body;
  var nav = h("header", { class: "nav" }, [
    h("a", { class: "logo", href: "index.html", "aria-label": S.nameFull }, [h("em", { text: S.brand }), h("span", { class: "logo-more", text: " AYUTTHAYA" })]),
    h("ul", { class: "links" }, pages.map(function (p) {
      var a = h("a", { href: p[0], text: p[1] });
      if (p[2] === page) a.setAttribute("aria-current", "page");
      return h("li", {}, [a]);
    })),
    h("a", { class: "call", href: "tel:" + S.phoneTel, text: "โทร " + S.phone })
  ]);
  root.insertBefore(nav, root.firstChild);
  root.appendChild(h("footer", { class: "foot" }, [
    h("span", { class: "logo" }, [h("em", { text: S.brand }), document.createTextNode(" AYUTTHAYA")]),
    h("nav", { "aria-label": "ลิงก์ท้ายหน้า" }, pages.map(function (p) { return h("a", { href: p[0], text: p[1] }); }).concat([
      h("a", { href: S.facebook, target: "_blank", rel: "noopener", text: "Facebook" })
    ])),
    h("div", { class: "copy", text: "© " + new Date().getFullYear() + " " + S.nameFull })
  ]));

  /* bound text: <span data-bind="phone"> */
  Array.prototype.forEach.call(document.querySelectorAll("[data-bind]"), function (el) { el.textContent = S[el.getAttribute("data-bind")] || ""; });

  /* links bound to data: <a data-href="facebook"> or data-href="tel" */
  Array.prototype.forEach.call(document.querySelectorAll("[data-href]"), function (el) {
    var k = el.getAttribute("data-href");
    var val = k === "tel" ? "tel:" + S.phoneTel : k === "map" ? mapHref : S[k];
    if (!val) el.hidden = true; else el.setAttribute("href", val);
  });

  /* ---------- lightbox ---------- */
  function openLightbox(w) {
    var close = h("button", { class: "btn btn-gold", type: "button", text: "✕ ปิด" });
    var lb = h("div", { class: "lb", role: "dialog", "aria-label": w.title }, [
      h("div", {}, [h("img", { src: w.img, alt: w.alt || w.title }), h("p", { text: w.title + " · " + w.cat })]), close
    ]);
    function done() { lb.remove(); document.removeEventListener("keydown", onKey); }
    function onKey(e) { if (e.key === "Escape") done(); }
    close.addEventListener("click", done);
    lb.addEventListener("click", function (e) { if (e.target === lb) done(); });
    document.addEventListener("keydown", onKey);
    document.body.appendChild(lb);
    close.focus();
  }

  /* ---------- tabs (shared) ---------- */
  function makeTabs(bar, items, onPick, initial) {
    items.forEach(function (it) {
      var b = h("button", { class: "tab", type: "button", text: it[1], "data-key": it[0], "aria-pressed": "false" });
      b.addEventListener("click", function () { pick(it[0]); });
      bar.appendChild(b);
    });
    function pick(key) {
      Array.prototype.forEach.call(bar.children, function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-key") === key ? "true" : "false"); });
      onPick(key);
    }
    pick(initial);
  }

  /* ---------- home: ticker, services ---------- */
  var tk = $("ticker-track");
  if (tk) {
    for (var r = 0; r < 2; r++) S.ticker.forEach(function (t) { tk.appendChild(h("span", { text: t })); tk.appendChild(h("span", { class: "sep", text: "//" })); });
  }
  var sg = $("svc-grid");
  if (sg) {
    makeTabs($("svc-tabs"), S.tabsServices, function (key) {
      sg.innerHTML = "";
      S.services.filter(function (s) { return key === "all" || s.cat === key; }).forEach(function (s) {
        var top = [h("span", { class: "big-label", text: s.label })];
        if (s.tag) top.push(h("span", { class: "tag" + (s.hot ? " hot" : ""), text: s.tag }));
        sg.appendChild(h("a", { class: "card svc", href: s.href }, [
          h("div", { class: "card-top" }, top),
          h("div", { class: "card-body" }, [h("div", { class: "card-cat", text: s.group }), h("div", { class: "card-name", text: s.name }), h("div", { class: "card-desc", text: s.desc }), h("span", { class: "card-cta", text: s.cta })])
        ]));
      });
    }, "all");
  }

  /* ---------- gallery ---------- */
  var wg = $("work-grid");
  if (wg) {
    var hashKey = (location.hash || "").replace("#", "");
    var start = S.hashTabs[hashKey] || "ทั้งหมด";
    makeTabs($("work-tabs"), S.tabsWorks.map(function (t) { return [t, t]; }), function (key) {
      wg.innerHTML = "";
      var list = S.works.filter(function (w) { return key === "ทั้งหมด" || w.tags.indexOf(key) >= 0; });
      if (!list.length) wg.appendChild(h("div", { class: "card-body", text: "ยังไม่มีผลงานในหมวดนี้ ดูผลงานเพิ่มเติมได้ที่เพจ Facebook" }));
      list.forEach(function (w) {
        var top;
        if (w.img) {
          top = h("button", { class: "card-top", type: "button", "aria-label": "ขยายรูป " + w.title }, [h("img", { src: w.img, alt: w.alt || w.title, loading: "lazy" })]);
          top.addEventListener("click", function () { openLightbox(w); });
        } else {
          top = h("div", { class: "card-top" }, [h("span", { class: "big-label", text: "SOON" }), h("span", { class: "ph-note", text: "รอรูปผลงาน" })]);
        }
        wg.appendChild(h("div", { class: "card" + (w.img ? " zoom" : "") }, [top, h("div", { class: "card-body" }, [h("div", { class: "card-cat", text: w.cat }), h("div", { class: "card-name", text: w.title })])]));
      });
    }, start);
  }

  /* ---------- videos ---------- */
  function ytId(u) { var m = u.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/); return m ? m[1] : ""; }
  function vidCard(v) {
    var label = v.platform === "youtube" ? "YouTube" : "Facebook";
    var screen;
    if (S.embedVideos && !v.channel) {
      var src = v.platform === "youtube" ? "https://www.youtube.com/embed/" + ytId(v.url) : "https://www.facebook.com/plugins/video.php?show_text=false&href=" + encodeURIComponent(v.url);
      screen = h("div", { class: "screen" }, [h("iframe", { src: src, title: v.title, allowfullscreen: "", loading: "lazy" })]);
    } else {
      screen = h("a", { class: "screen", href: v.url, target: "_blank", rel: "noopener", "aria-label": "ดูวิดีโอ " + v.title + " บน " + label }, [
        h("img", { src: v.poster || S.poster, alt: "", loading: "lazy" }), h("span", { class: "play" })
      ]);
    }
    return h("article", { class: "vid" }, [screen, h("div", { class: "card-body" }, [
      h("div", { class: "card-cat", text: (v.cat || "วิดีโอ") + " · " + label }),
      h("div", { class: "card-name", text: v.title }),
      h("a", { class: "more", style: "align-self:flex-start;margin-top:8px", href: v.url, target: "_blank", rel: "noopener", text: (v.channel ? "ดูวิดีโอทั้งหมดบน " : "ดูบน ") + label + " →" })
    ])]);
  }
  var vg = $("vid-grid");
  if (vg) {
    var vids = S.videos.filter(function (v) { return v.url; });
    if (!vids.length) {
      vg.hidden = true;
      $("vid-empty").hidden = false;
    } else vids.forEach(function (v) { vg.appendChild(vidCard(v)); });
  }
  var hv = $("home-vids");
  if (hv) {
    var top = S.videos.filter(function (v) { return v.url; }).slice(0, 3);
    if (!top.length && S.youtube) top = [{ title: "ผลงานแต่งรถตู้ VIP ของช่างหนุ่มอยุธยา", platform: "youtube", url: S.youtube, cat: "ช่อง YouTube", channel: true }];
    if (!top.length) $("videos").hidden = true;
    top.forEach(function (v) { hv.appendChild(vidCard(v)); });
  }

  /* ---------- contact ---------- */
  var info = $("info");
  if (info) {
    function copyBtn(text) {
      var b = h("button", { class: "mini", type: "button", text: "คัดลอกเบอร์" });
      b.addEventListener("click", function () {
        function ok() { b.textContent = "คัดลอกแล้ว"; setTimeout(function () { b.textContent = "คัดลอกเบอร์"; }, 1800); }
        try { navigator.clipboard.writeText(text).then(ok, function () { b.textContent = "เลือกเบอร์แล้วกดคัดลอก"; }); } catch (e) { b.textContent = "เลือกเบอร์แล้วกดคัดลอก"; }
      });
      return b;
    }
    function item(label, val, sub, acts) {
      return h("div", { class: "info-item" }, [h("div", { class: "info-label", text: label }), h("div", { class: "info-val", text: val }), sub ? h("div", { class: "info-sub", text: sub }) : null, acts ? h("div", { class: "info-act" }, acts) : null]);
    }
    info.appendChild(item("ที่ตั้ง", S.address || S.province, S.address ? S.province + " ประเทศไทย" : (S.coordsText || "ค้นหาร้านบนแผนที่ได้จากปุ่มด้านล่าง"), [h("a", { class: "mini", href: mapHref, target: "_blank", rel: "noopener", text: "เปิดแผนที่ร้าน ↗" })]));
    info.appendChild(item("โทรศัพท์", S.phone, "รับสายทุกวันตามเวลาทำการ", [h("a", { class: "mini", href: "tel:" + S.phoneTel, text: "โทรเลย" }), copyBtn(S.phone)]));
    info.appendChild(item("เวลาทำการ", S.hours, S.hoursNote));
    info.appendChild(item("Facebook", S.fbHandle, S.followers + " ผู้ติดตาม", [h("a", { class: "mini", href: S.facebook, target: "_blank", rel: "noopener", text: "เปิดเพจ ↗" })]));
  }
})();
