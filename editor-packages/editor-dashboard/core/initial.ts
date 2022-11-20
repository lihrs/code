import type { FigmaReflectRepository } from "editor/core/states";
import type {
  ComponentItem,
  DashboardFolderItem,
  DashboardHierarchy,
  DashboardState,
} from "./state";
import { group } from "../q";

export function initialDashboardState(
  design: FigmaReflectRepository
): DashboardState {
  return {
    selection: [],
    filter: {
      query: "",
    },
    hierarchy: initialHierarchy(design),
  };
}

export function initialHierarchy(
  design: FigmaReflectRepository
): DashboardHierarchy {
  //

  const grouped = group(design, { filter: null });

  const sections: Array<DashboardFolderItem> = Array.from(grouped.keys()).map(
    (k): DashboardFolderItem => {
      const items = grouped.get(k);
      return {
        id: k,
        type: "folder",
        name: k,
        path: k,
        contents: items.map((i) => ({
          $type: "frame-scene",
          id: i.id,
          name: i.name,
          path: k + "/" + i.name,
          type: "FRAME",
          width: i.width,
          height: i.height,
        })),
      };
    }
  );

  const components: Array<ComponentItem> = Object.values(design.components)
    .filter(Boolean)
    .map((c) => ({
      ...c,
      type: "COMPONENT",
      path: "components" + "/" + c.id,
      $type: "component" as const,
    }));

  return {
    sections,
    components: components,
  };
}
