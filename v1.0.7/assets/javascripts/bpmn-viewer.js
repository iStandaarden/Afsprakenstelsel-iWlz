// Vervangt elke afbeelding die naar een .bpmn-bestand verwijst door een interactieve viewer,
// met een knop om het diagram schermvullend te openen.
function openBpmnOverlay(xml) {
  const overlay = document.createElement("div");
  overlay.className = "bpmn-overlay";

  const canvasHolder = document.createElement("div");
  canvasHolder.className = "bpmn-overlay-canvas";

  const close = document.createElement("button");
  close.type = "button";
  close.className = "bpmn-overlay-close";
  close.textContent = "✕ Sluiten";

  overlay.append(canvasHolder, close);
  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  const viewer = new BpmnJS({ container: canvasHolder });

  const closeOverlay = () => {
    document.removeEventListener("keydown", onKey);
    viewer.destroy();
    overlay.remove();
    document.body.style.overflow = "";
  };
  const onKey = (e) => { if (e.key === "Escape") closeOverlay(); };

  close.addEventListener("click", closeOverlay);
  document.addEventListener("keydown", onKey);

  viewer.importXML(xml).then(() => {
    viewer.get("canvas").zoom("fit-viewport", "auto");
  });
}

document$.subscribe(() => {
  document.querySelectorAll('img[src*=".bpmn"]').forEach(async (img) => {
    const src = img.getAttribute("src").split("?")[0];
    const holder = document.createElement("div");
    holder.className = "bpmn-viewer";
    (img.closest("a") || img).replaceWith(holder);

    const viewer = new BpmnJS({ container: holder });
    try {
      const xml = await (await fetch(src)).text();
      await viewer.importXML(xml);

      const canvas = viewer.get("canvas");
      const fitHeight = () => {
        const bbox = canvas.viewbox().inner;
        const wanted = Math.round(holder.clientWidth * (bbox.height / bbox.width)) + 40;
        holder.style.height = Math.min(wanted, 800) + "px";
        canvas.resized();
        canvas.zoom("fit-viewport", "auto");
      };
      fitHeight();
      window.addEventListener("resize", fitHeight);

      // Vergrootknop
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "bpmn-expand";
      btn.title = "Diagram vergroten";
      btn.setAttribute("aria-label", "Diagram vergroten");
      btn.textContent = "⛶";
      btn.addEventListener("click", () => openBpmnOverlay(xml));
      holder.appendChild(btn);
    } catch (e) {
      holder.textContent = "Het procesdiagram kon niet worden geladen: " + e.message;
    }
  });
});