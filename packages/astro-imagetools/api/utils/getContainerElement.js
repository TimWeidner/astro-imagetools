// @ts-check
import getAttributesString from "./getAttributesString.js";

export default function getContainerElement({
  tag,
  content,
  className = "",
  containerAttributes,
  isBackgroundPicture = false,
}) {
  const {
    class: customClasses = "",
    style: customInlineStyles = "",
    ...restContainerAttributes
  } = containerAttributes;

  const attributesString = getAttributesString({
    attributes: restContainerAttributes,
  });

  const classAttribute = [
    isBackgroundPicture
      ? "astro-imagetools-background-picture"
      : "astro-imagetools-background-image",
    isBackgroundPicture ? "" : className,
    customClasses,
  ]
    .join(" ")
    .trim();

  const styleAttribute = [
    isBackgroundPicture ? "position: relative;" : "",
    customInlineStyles,
  ]
    .join(" ")
    .trim();

  const containerElement = `<${tag}
    ${attributesString}
    class="${classAttribute}"
    style="${styleAttribute}"
  >
    ${content}
  </${tag}>`;

  return containerElement;
}
