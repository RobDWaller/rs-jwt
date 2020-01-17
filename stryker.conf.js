module.exports = function(config) {
  config.set({
    mutator: "typescript",
    packageManager: "npm",
    reporters: ["clear-text", "progress", "html", "dashboard"],
    testRunner: "mocha",
    transpilers: [],
    testFramework: "mocha",
    coverageAnalysis: "off",
    tsconfigFile: "tsconfig.json",
    mutate: ["src/**/*.ts"],
    mochaOptions: {
      spec: [ 'tests/**/*.ts' ]
    },
    thresholds: { 
      high: 90, 
      low: 80, 
      break: 70 
    },
    dashboard: {
      reportType: 'full'
    }
  });
};
