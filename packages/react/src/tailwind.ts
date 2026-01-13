import plugin from "tailwindcss/plugin";

const variants = [
  { name: "loaded", value: false },
  { name: "loading", value: true },
];

export default plugin(({ addVariant }) => {
  variants.forEach(({ name, value }) => {
    addVariant(name, `&[data-loading='${value}']`);
    addVariant(`peer-${name}`, `:merge(.peer)[data-loading='${value}'] ~ &`);
    addVariant(`group-${name}`, `:merge(.group)[data-loading='${value}'] &`);
  });
});
