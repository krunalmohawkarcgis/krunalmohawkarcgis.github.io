 require([
      "esri/config",
      "esri/widgets/Sketch",
      "esri/Map",
      "esri/layers/GraphicsLayer",
      "esri/views/MapView",
      "esri/widgets/Home"
    ], (esriConfig, Sketch, Map, GraphicsLayer, MapView, Home) => {
      "AAPKd8ddb8048ab5454ba4493491245e6f5dwGrXLkBH3qTvZrG_KSSYoIaaeRqhXEEFckbl9JZBR55aVA2mJq8yPhcn2c6ZoapA";
      const graphicsLayer = new GraphicsLayer();
      const map = new Map({
        basemap: "topo-vector",
        layers: [graphicsLayer]
      });
      const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-118.805, 34.027],
        zoom: 13, // scale: 72223.819286
        
      });
      view.when(() => {
        const sketch = new Sketch({
          layer: graphicsLayer,
          view: view,
          
          creationMode: "update"
        });
        view.ui.add(sketch, "top-right");
      });
      const homeBtn = new Home({
        view: view
      });
      
      view.ui.add(homeBtn, "top-left");
    });