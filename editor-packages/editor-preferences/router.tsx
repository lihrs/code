import { useDispatch, usePreferences } from "./editor-preference";
import React from "react";
import EditorPreferenceFigmaPage from "./pages/figma";
import EditorPreferenceFigmaPersonalAccessTokenPage from "./pages/figma/personal-access-token";
import EditorPreferenceFrameworkProfilePage from "./pages/framework-profile";
import { EditorPreferencePage } from "./pages/editor";

export function Router() {
  const state = usePreferences();
  const dispatch = useDispatch();
  const { route } = state;

  switch (route) {
    case "/editor": {
      return <EditorPreferencePage />;
    }
    case "/figma": {
      return <EditorPreferenceFigmaPage />;
    }
    case "/figma/personal-access-token": {
      return (
        <EditorPreferenceFigmaPersonalAccessTokenPage
          state={state}
          dispatch={dispatch}
        />
      );
    }
    case "/framework": {
      return <EditorPreferenceFrameworkProfilePage />;
    }
  }
  return <></>;
}
