export default (config, env, helpers) => {
  const isDev = process.env.NODE_ENV === 'development';
  //config.output.publicPath = isDev ? '' : '/noted/';
  config.output.publicPath = '/noted/';
  //console.log("CONFIG", isDev);

  // use the public path in your app as 'process.env.PUBLIC_PATH'
  config.plugins.push(
    new helpers.webpack.DefinePlugin({
      'process.env.PUBLIC_PATH': JSON.stringify(config.output.publicPath || '/')
    })
  );
};
