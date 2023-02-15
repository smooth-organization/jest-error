Trying to run "yarn run test-simple" results in the following error:

    TypeError: (0 , _flags.default) is not a function

    > 1 | import '@testing-library/jest-dom/extend-expect'
        | ^
      2 |

      at Object.<anonymous>.module.exports (.yarn/cache/core-js-pure-npm-3.28.0-172396ba34-8bef96a435.zip/node_modules/core-js-pure/internals/regexp-get-flags.js:9:12)
      at flags (.yarn/cache/core-js-pure-npm-3.28.0-172396ba34-8bef96a435.zip/node_modules/core-js-pure/es/instance/flags.js:7:75)
      at getPolyfill (.yarn/cache/regexp.prototype.flags-npm-1.4.3-df1c08b65d-51228bae73.zip/node_modules/regexp.prototype.flags/polyfill.js:9:29)
      at Object.getPolyfill (.yarn/cache/regexp.prototype.flags-npm-1.4.3-df1c08b65d-51228bae73.zip/node_modules/regexp.prototype.flags/index.js:10:27)
      at Object.require (.yarn/cache/deep-equal-npm-2.2.0-d9712e0040-46a34509d2.zip/node_modules/deep-equal/index.js:5:13)
      at Object.require (.yarn/cache/aria-query-npm-5.1.3-9632eccdee-929ff95f02.zip/node_modules/aria-query/lib/elementRoleMap.js:7:41)
      at Object.require (.yarn/cache/aria-query-npm-5.1.3-9632eccdee-929ff95f02.zip/node_modules/aria-query/lib/index.js:10:46)
      at Object.<anonymous> (src/test/setup.js:1:1)

So since @testing-library/dom and @testing-library/jest-dom both require aria-query: ^5.0.0, I added `"resolutions": { "aria-query": "5.0.0" }` in the package.json file (My goal was to use the version which does not require deep-eaual-2.2.0 and so on). That fixes the simple-test, but running "yarn run test-react" still throws the error:

TypeError: (0 , _flags.default) is not a function

      4 | describe("react test", () => {
      5 |       it("should work", () => {
    > 6 |               const { getByText } = render(<App />)
        |                                           ^
      7 |               expect(getByText('this is my app')).toBeTruthy()
      8 |       });
      9 | });

      at Object.<anonymous>.module.exports (.yarn/cache/core-js-pure-npm-3.28.0-172396ba34-8bef96a435.zip/node_modules/core-js-pure/es/instance/flags.js:7:84)
      at getNearestMountedFiber (.yarn/__virtual__/react-dom-virtual-97896247fb/0/cache/react-dom-npm-18.2.0-dd675bca1c-7d323310be.zip/node_modules/react-dom/cjs/react-dom.development.js:4463:12)
      at getNearestMountedFiber (.yarn/__virtual__/react-dom-virtual-97896247fb/0/cache/react-dom-npm-18.2.0-dd675bca1c-7d323310be.zip/node_modules/react-dom/cjs/react-dom.development.js:4549:26)
      at findCurrentFiberUsingSlowPath (.yarn/__virtual__/react-dom-virtual-97896247fb/0/cache/react-dom-npm-18.2.0-dd675bca1c-7d323310be.zip/node_modules/react-dom/cjs/react-dom.development.js:4729:23)
      at findCurrentHostFiberWithNoPortals (.yarn/__virtual__/react-dom-virtual-97896247fb/0/cache/react-dom-npm-18.2.0-dd675bca1c-7d323310be.zip/node_modules/react-dom/cjs/react-dom.development.js:28968:19)
      at ReactDOMRoot.findHostInstanceWithNoPortals [as render] (.yarn/__virtual__/react-dom-virtual-97896247fb/0/cache/react-dom-npm-18.2.0-dd675bca1c-7d323310be.zip/node_modules/react-dom/cjs/react-dom.development.js:29304:26)
      at Object.render (.yarn/__virtual__/@testing-library-react-virtual-e9e4b497e1/0/cache/@testing-library-react-npm-13.4.0-eaa652c0f5-51ec548c1f.zip/node_modules/@testing-library/react/dist/pure.js:122:12)
      at render (.yarn/__virtual__/@testing-library-react-virtual-e9e4b497e1/0/cache/@testing-library-react-npm-13.4.0-eaa652c0f5-51ec548c1f.zip/node_modules/@testing-library/react/dist/pure.js:163:12)
      at callback (.yarn/__virtual__/@testing-library-react-virtual-e9e4b497e1/0/cache/@testing-library-react-npm-13.4.0-eaa652c0f5-51ec548c1f.zip/node_modules/@testing-library/react/dist/act-compat.js:64:24)
      at callback (.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/cjs/react.development.js:2512:16)
      at actImplementation (.yarn/__virtual__/@testing-library-react-virtual-e9e4b497e1/0/cache/@testing-library-react-npm-13.4.0-eaa652c0f5-51ec548c1f.zip/node_modules/@testing-library/react/dist/act-compat.js:63:25) 
      at renderRoot (.yarn/__virtual__/@testing-library-react-virtual-e9e4b497e1/0/cache/@testing-library-react-npm-13.4.0-eaa652c0f5-51ec548c1f.zip/node_modules/@testing-library/react/dist/pure.js:159:25)
      at renderRoot (.yarn/__virtual__/@testing-library-react-virtual-e9e4b497e1/0/cache/@testing-library-react-npm-13.4.0-eaa652c0f5-51ec548c1f.zip/node_modules/@testing-library/react/dist/pure.js:246:10)
      at Object.<anonymous> (src/react-test.spec.js:6:31)

      at Object.<anonymous>.module.exports (.yarn/cache/core-js-pure-npm-3.28.0-172396ba34-8bef96a435.zip/node_modules/core-js-pure/es/instance/flags.js:7:84)
      at markUpdateLaneFromFiberToRoot (.yarn/__virtual__/react-dom-virtual-97896247fb/0/cache/react-dom-npm-18.2.0-dd675bca1c-7d323310be.zip/node_modules/react-dom/cjs/react-dom.development.js:13395:32)
      at markUpdateLaneFromFiberToRoot (.yarn/__virtual__/react-dom-virtual-97896247fb/0/cache/react-dom-npm-18.2.0-dd675bca1c-7d323310be.zip/node_modules/react-dom/cjs/react-dom.development.js:13376:10)
      at enqueueConcurrentClassUpdate (.yarn/__virtual__/react-dom-virtual-97896247fb/0/cache/react-dom-npm-18.2.0-dd675bca1c-7d323310be.zip/node_modules/react-dom/cjs/react-dom.development.js:13525:12)
      at enqueueUpdate (.yarn/__virtual__/react-dom-virtual-97896247fb/0/cache/react-dom-npm-18.2.0-dd675bca1c-7d323310be.zip/node_modules/react-dom/cjs/react-dom.development.js:28855:14)
      at updateContainer (.yarn/__virtual__/react-dom-virtual-97896247fb/0/cache/react-dom-npm-18.2.0-dd675bca1c-7d323310be.zip/node_modules/react-dom/cjs/react-dom.development.js:29337:7)
      at fn (.yarn/__virtual__/react-dom-virtual-97896247fb/0/cache/react-dom-npm-18.2.0-dd675bca1c-7d323310be.zip/node_modules/react-dom/cjs/react-dom.development.js:26189:14)
      at ReactDOMRoot.flushSync [as unmount] (.yarn/__virtual__/react-dom-virtual-97896247fb/0/cache/react-dom-npm-18.2.0-dd675bca1c-7d323310be.zip/node_modules/react-dom/cjs/react-dom.development.js:29336:5)
      at Object.unmount (.yarn/__virtual__/@testing-library-react-virtual-e9e4b497e1/0/cache/@testing-library-react-npm-13.4.0-eaa652c0f5-51ec548c1f.zip/node_modules/@testing-library/react/dist/pure.js:126:12)
      at unmount (.yarn/__virtual__/@testing-library-react-virtual-e9e4b497e1/0/cache/@testing-library-react-npm-13.4.0-eaa652c0f5-51ec548c1f.zip/node_modules/@testing-library/react/dist/pure.js:262:12)
      at callback (.yarn/__virtual__/@testing-library-react-virtual-e9e4b497e1/0/cache/@testing-library-react-npm-13.4.0-eaa652c0f5-51ec548c1f.zip/node_modules/@testing-library/react/dist/act-compat.js:64:24)
      at callback (.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/cjs/react.development.js:2512:16)
      at actImplementation (.yarn/__virtual__/@testing-library-react-virtual-e9e4b497e1/0/cache/@testing-library-react-npm-13.4.0-eaa652c0f5-51ec548c1f.zip/node_modules/@testing-library/react/dist/act-compat.js:63:25) 
      at .yarn/__virtual__/@testing-library-react-virtual-e9e4b497e1/0/cache/@testing-library-react-npm-13.4.0-eaa652c0f5-51ec548c1f.zip/node_modules/@testing-library/react/dist/pure.js:261:27
          at Array.forEach (<anonymous>)
      at forEach (.yarn/__virtual__/@testing-library-react-virtual-e9e4b497e1/0/cache/@testing-library-react-npm-13.4.0-eaa652c0f5-51ec548c1f.zip/node_modules/@testing-library/react/dist/pure.js:257:22)
      at Object.<anonymous> (.yarn/__virtual__/@testing-library-react-virtual-e9e4b497e1/0/cache/@testing-library-react-npm-13.4.0-eaa652c0f5-51ec548c1f.zip/node_modules/@testing-library/react/dist/index.js:35:24)