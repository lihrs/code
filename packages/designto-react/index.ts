import { Widget } from "@reflect-ui/core";
import { buildReactWidgetFromReflectWidget } from "./build-widget";
import {
  buildWidgetExportable,
  ReactWidget,
  stringfyReactWidget_STYLED_COMPONENTS,
} from "@coli.codes/react-builder";

export function buildReactApp(
  widget: ReactWidget,
  options: { template: "cra" | "nextjs" }
): string {
  const strigfiedMainWidget = stringfyReactWidget_STYLED_COMPONENTS(widget);

  return strigfiedMainWidget;
}

export function buildReactWidget(widget: Widget) {
  if (!widget) {
    throw "A valid reflect widget manifest should be passed as an input. none was passed.";
  }
  return buildReactWidgetFromReflectWidget(widget);
}
