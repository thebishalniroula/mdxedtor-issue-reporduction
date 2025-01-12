import React, { type ForwardedRef } from 'react';
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  MDXEditor,
  toolbarPlugin,
  type MDXEditorMethods,
  type MDXEditorProps,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import CustomToolbar from './toolbar';

// Only import this to the next file
export function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return (
    <MDXEditor
      className="mdx-editor"
      plugins={[
        headingsPlugin({
          allowedHeadingLevels: [1, 2, 3],
        }),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        toolbarPlugin({
          toolbarClassName: 'mdx-editor-toolbar',
          toolbarContents: () => <CustomToolbar />,
        }),
      ]}
      {...props}
      ref={editorRef}
    />
  );
}
