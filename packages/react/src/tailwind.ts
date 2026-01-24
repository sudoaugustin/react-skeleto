import type { PluginAPI } from "tailwindcss/types/config";

export default function skelPlugin({ addVariant }: PluginAPI) {
  const variants = [
    { name: "loaded", value: false },
    { name: "loading", value: true },
  ] as const;

  variants.forEach(({ name, value }) => {
    addVariant(name, `&[data-loading='${value}']`);
    addVariant(`peer-${name}`, `:merge(.peer)[data-loading='${value}'] ~ &`);
    addVariant(`group-${name}`, `:merge(.group)[data-loading='${value}'] &`);
  });
}
