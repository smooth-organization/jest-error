module.exports = function (api) {
	const mode = api.env();
	const isEnvTest = mode === "test";

	const presets = [
		[
			"@babel/preset-env",
			{
				modules: isEnvTest ? "commonjs" : false,
				corejs: 3,
				useBuiltIns: "usage",
				shippedProposals: true,
			},
		],
		["@babel/preset-react", { runtime: "automatic" }],
	];
	const plugins = [
		[
			"@babel/plugin-transform-runtime",
			{ corejs: 3, useESModules: !isEnvTest },
		],
		["@babel/plugin-syntax-dynamic-import"],
		["@babel/plugin-proposal-private-methods"],
		["@babel/plugin-proposal-class-properties"],
		["@babel/plugin-proposal-optional-chaining"],
		["@babel/plugin-proposal-object-rest-spread", { loose: true }],
		["@babel/plugin-proposal-export-default-from"],
		["@babel/plugin-proposal-nullish-coalescing-operator"],
		["babel-plugin-optimize-clsx", { libraries: ["classnames"] }],
		["babel-plugin-transform-react-remove-prop-types", { mode: "unsafe-wrap" }],
		!isEnvTest && [
			"babel-plugin-react-remove-properties",
			{ properties: ["data-testid"] },
		],
	].filter(Boolean);

	return { presets, plugins };
};
