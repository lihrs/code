import React, { useState } from "react";
import { MonacoEditor, MonacoEditorProps as MonacoEditorProps } from "./monaco";
import { Tabs, Tab } from "@material-ui/core";

export interface CodeEditorProps
  extends Omit<MonacoEditorProps, "defaultValue" | "defaultLanguage"> {}
export interface IFile {
  name: string;
  language: string;
  raw: string;
}

export type Files = { [name: string]: IFile };

export function CodeEditor({
  files,
  ...editor_props
}: {
  files: Files;
} & CodeEditorProps) {
  const keys = Object.keys(files);
  const [filekey, setFilekey] = useState<string>(keys[0]);
  const getfile = (key: string) => files[key];
  const handleChange = (event, newValue) => {
    setFilekey(newValue);
  };

  const file = getfile(filekey);

  return (
    <>
      {keys.length >= 2 && (
        <Tabs
          value={filekey}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          {Object.keys(files).map((name) => {
            return <Tab key={name} label={name} value={name} />;
          })}
        </Tabs>
      )}
      <MonacoEditor
        key={filekey}
        {...editor_props}
        defaultLanguage={file.language}
        defaultValue={file.raw}
      />
    </>
  );
}
