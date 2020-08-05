export const ElementCreator = (element: string, text: string): HTMLElement => {
  const createdElement: HTMLElement = document.createElement(element);
  createdElement.innerText = text;
  return createdElement;
};
