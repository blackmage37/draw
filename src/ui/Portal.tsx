import { type ReactNode, memo, useEffect, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom';
import htmlTags from 'html-tags';

const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

const htmlTagSet = new Set(htmlTags);

type TagName = keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap;

interface Props {
  children: ReactNode;
  tagName: TagName;
  modalRoot: Element;
}

const Portal = ({ tagName, modalRoot, children }: Props) => {
  const el = useMemo(() => {
    const ns =
      htmlTagSet.has(tagName as (typeof htmlTags)[0]) && tagName !== 'svg'
        ? HTML_NAMESPACE
        : SVG_NAMESPACE;
    return document.createElementNS(ns, tagName) as HTMLElement;
  }, [tagName]);

  const elRef = useRef<Element>(el);

  useEffect(() => {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    modalRoot.append(el);
    return () => {
      el.remove();
    };
  }, [el, modalRoot]);

  return ReactDOM.createPortal(
    children,
    elRef.current, // this.props.modalRoot is possible
  );
};

export default memo(Portal);
