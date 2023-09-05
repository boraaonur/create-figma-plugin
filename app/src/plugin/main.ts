figma.showUI(__html__, {
  width: 480,
  height: 640,
});

figma.ui.onmessage = (msg) => {
  if (msg.function === "your-function") {
    //
  }

  figma.closePlugin();
};
