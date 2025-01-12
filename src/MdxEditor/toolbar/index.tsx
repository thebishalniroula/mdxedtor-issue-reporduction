import {
  BoldItalicUnderlineToggles,
  InsertThematicBreak,
  ListsToggle,
  UndoRedo,
} from "@mdxeditor/editor";

const CustomToolbar = () => {
  return (
    <>
      <BoldItalicUnderlineToggles />
      <ListsToggle />
      <InsertThematicBreak />
      <UndoRedo />
    </>
  );
};

export default CustomToolbar;
