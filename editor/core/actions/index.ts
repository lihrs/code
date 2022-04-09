import type { FrameworkConfig } from "@designto/config";
import type { EditorState } from "core/states";

export type WorkspaceAction =
  //
  | HistoryAction
  //
  | HighlightLayerAction;

export type HistoryAction =
  //
  | { type: "undo" }
  //
  | { type: "redo" }
  | Action;

export type Action =
  | PageAction
  | SelectNodeAction
  | HighlightLayerAction
  | CanvasModeAction
  | CodeEditorAction;

export type ActionType = Action["type"];

export type HierarchyAction = SelectNodeAction;
export interface SelectNodeAction {
  type: "select-node";
  node: string;
}

export type PageAction = SelectPageAction;

export interface SelectPageAction {
  type: "select-page";
  page: string;
}

export interface HighlightLayerAction {
  type: "highlight-layer";
  id: string;
}

type CanvasModeAction = CanvasModeSwitchAction | CanvasModeGobackAction;
export interface CanvasModeSwitchAction {
  type: "canvas-mode-switch";
  mode: EditorState["canvasMode"];
}

export interface CanvasModeGobackAction {
  type: "canvas-mode-goback";
  fallback?: EditorState["canvasMode"];
}

export type CodeEditorAction = CodeEditorEditComponentCodeAction;

export interface CodeEditorEditComponentCodeAction {
  type: "code-editor-edit-component-code";
  id: string;
  framework: FrameworkConfig["framework"];
  componentName: string;
  raw: string;
}
