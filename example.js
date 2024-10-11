const NormalSdk = require("@normalframework/applications-sdk");

/**
 * Invoke hook function
 * @param {NormalSdk.InvokeParams} params
 * @returns {NormalSdk.InvokeResult}
 */
module.exports = async ({points, sdk, update, args}) => {
  // this is a comment

  // this is another comment.
  
  return console.log(points.length)
};
