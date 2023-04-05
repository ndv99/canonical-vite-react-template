import { useEffect, Children } from "react";

const DocumentTitle = ({ children }: { children: string | string[] }) => {
  useEffect(() => {
    const title = Children.toArray(children).join("");
    document.title = title;
  }, [children]);

  return null;
};

export default DocumentTitle;
