module.exports = function (api) {
api.cache(true);

let plugins = []

if (process.env["ENV"] === "prod") {
	plugins.push("babel-plugin-transform-remove-console");
	plugins.push("babel-plugin-transform-react-native-style-optimizer");
}
plugins.push("react-native-reanimated/plugin")
return {
	presets: ["babel-preset-expo"],
	plugins
};
};

