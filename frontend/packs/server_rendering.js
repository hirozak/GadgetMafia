var componentRequireContext = require.context("app", true)
var ReactRailsUJS = require("react_ujs")

ReactRailsUJS.useContext(componentRequireContext)
