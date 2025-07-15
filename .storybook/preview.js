import '../src/styles/tailwind.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { matchers: { color: /background|color/i, date: /Date$/ } },
  options: {
    storySort: (a, b) => {
      const order = [
        'Design Tokens/Colors',
        'Design Tokens/Typography',
        'Components/Button',
        'Components/ButtonSC',
        'Components/InputText',
      ];
      const aIndex = order.indexOf(a.title);
      const bIndex = order.indexOf(b.title);
      if (aIndex === -1 && bIndex === -1) return a.title.localeCompare(b.title);
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    },
  },
}; 