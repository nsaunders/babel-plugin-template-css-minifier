import { transformAsync } from "@babel/core";
import plugin from "../src/index.js";

test("minifies CSS template literal", async () => {
  const { code } = await transformAsync(
    `
    const css = /*css*/\`
      body {
        background: red;
      }
    
      .foo {
        width: 100%;
      }
    \`;
  `,
    {
      plugins: [plugin],
    },
  );
  expect(code).toEqual(
    "const css = /*css*/`body{background:red;}.foo{width:100%;}`;",
  );
});

test("allows whitespace in leading comment", async () => {
  const { code } = await transformAsync(
    `
    const css = /* css */ \`
      body {
        height: 100%;
      }
    \`;
  `,
    {
      plugins: [plugin],
    },
  );
  expect(code).toEqual("const css = /* css */`body{height:100%;}`;");
});

test("allows uppercase comment", async () => {
  const { code } = await transformAsync(
    `
    const css = /*CSS*/ \`
      body {
        height: 100%;
      }
    \`;
  `,
    {
      plugins: [plugin],
    },
  );
  expect(code).toEqual("const css = /*CSS*/`body{height:100%;}`;");
});
