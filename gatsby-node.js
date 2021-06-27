const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.onCreateNode = async ({ node, actions, store, cache }) => {
	const { createNode, createNodeField } = actions;

	if (node.internal.type !== null && node.internal.type === "StrapiProject") {
		for (const image of node.Images) {
			const fileNode = await createRemoteFileNode({
				url: image.url,
				store,
				cache,
				createNode,
				createNodeId: (id) => image.id.toString(),
			});

			if (fileNode) {
				image.localFile___NODE = fileNode.id;
			}
		}
	}
};