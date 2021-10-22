declare module '*.less' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.png' {
  const imageUrl: string;
  export = imageUrl;
}

declare module '*.jpeg' {
  const imageUrl: string;
  export = imageUrl;
}
