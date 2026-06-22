document$.subscribe(() => {
  document.querySelectorAll(".mermaid svg").forEach(svg => {

    // Initialize svg-pan-zoom on the rendered SVG
    svgPanZoom(svg, {
      zoomEnabled: true,
      controlIconsEnabled: true,
      fit: true,
      center: true,
      minZoom: 0.5,
      maxZoom: 10
    });

  });
});
