/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
		
	createRedirect({
    fromPath: `/menu`,
    toPath: `/information/name`,
  });
}