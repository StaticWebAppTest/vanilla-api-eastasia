module.exports = async function (context, req) {
  context.res = {
    // status: 200, /* Defaultsss to 200 */
    body: { text: "Hello from the API" },
  };
};
